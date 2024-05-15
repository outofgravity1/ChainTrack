// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract GasTest {
    uint public counter;

    event CounterUpdated(uint newCounterValue);

    // Function with a single state change
    function simulatedTransaction() public {
        counter += 1;  // Increment the counter by 1
        emit CounterUpdated(counter);  // Emit an event with the new counter value
    }


}
