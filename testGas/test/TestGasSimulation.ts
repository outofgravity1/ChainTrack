import { ethers } from "hardhat";
import { expect } from "chai";
import { GasTest } from "../typechain-types";

describe("GasTest Contract", function () {
  let gasTest: GasTest;
  const init_gas = 0;
  const batch_gas = 0;

  beforeEach(async function () {
    const GasTestFactory = await ethers.getContractFactory("GasTest");
    gasTest = await GasTestFactory.deploy() as GasTest;
  });

  describe("simulatedTransaction", function () {
    it("Non-batch transaction.", async function () {
      let totalGasUsed = 0n;
      const incrementTimes = 20;
      for (let i = 0; i < incrementTimes; i++) {
        const tx = await gasTest.simulatedTransaction();
        const receipt = await tx.wait();
        totalGasUsed = totalGasUsed + receipt!.gasUsed;
        }
      console.log(`Total Gas Used for ${incrementTimes} separate increments: ${totalGasUsed.toString()}`);
      //expect(await gasTest.counter()).to.equal(1);
    });

    it("Batch transaction.", async function () {
      const tx = await gasTest.simulatedTransaction();
      const receipt = await tx.wait();
      console.log(`Gas Used for batch transaction: ${receipt!.gasUsed.toString()}`);
    });
  });


});
