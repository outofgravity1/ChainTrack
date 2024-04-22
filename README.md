

# Streamlining Blockchain Transactions: A Cost-Effective Pipeline for Enhanced Security and Integration in Non-Browser Applications

## Introduction
This repository contains the source code and supplementary materials for the paper "Streamlining Blockchain Transactions: A Cost-Effective Pipeline for Enhanced Security and Integration in Non-Browser Applications". This project aims to improve transaction efficiency and security in blockchain applications outside of web browsers.

## Abstract
In the dynamic field of blockchain and Non-Fungible
Tokens (NFTs), our research tackles a notable gap: the integra-
tion challenges of blockchain-NFT transactions in non-browser
applications. In non-browser-based applications, users typically
necessitate additional steps to complete a blockchain transaction.
We introduce a bespoke pipeline, specifically designed for these
environments. Central to our approach is a user-centric multi-
device dashboard, which not only enhances security but also
significantly streamlines the user’s transaction authentication ex-
perience. This is particularly salient in blockchain-based gaming,
our pipeline not only offers multi-application support, flexible
transaction signing, and cross-platform adaptability to enhance
efficiency and user engagement, but it also significantly reduces
blockchain transaction costs by implementing batch synchroniza-
tion, achieving a 90% reduction in gas fees when batching 10
transactions together. Our rigorously tested prototype under-
scores our commitment to fostering a more inclusive, secure,
and user-oriented digital asset ecosystem. This work represents a
stride towards realizing a user-friendly and economically robust
digital environment, enhancing the blockchain quality of service
beyond current limitations.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [License](#license)
- [Question](#questions)

## Installation

The repository has multiple services used for the experimental usecase. 

- 2FA-Dashboard: This folder contains the React-based frontend for the ChainTrack dashboard. It uses JS and React. Please install npm to run this.
- 2FA-Demo-Client: This folder contains the Unity 3D client for the game-marketplace demo usecase.
- game-server: This folder contains the backend code for the game server written in Nodejs andd connected to MongoDb
- web3-backend: This is the backend code for a light implementation for the ChainTrack.

### Technologies Used:
- Frontend: JS, React, Unity
- Game Server: Nodejs
- Backend: Java, Spring boot, MongoDB
- Others: AWS
 
### Setup
```bash
git clone https://github.com/outofgravity1/ChainTrack.git
cd ChainTrack
```

### Running ChainTrack Dashboard
```bash
cd 2FA-Dashboard
npm i
npm run start
```

### Running 2FA Demo Client

- Open and run project in Unity Editor

### Running ChainTrack Backend

```bash
cd 2FA-Dashboard/web3-backend
docker build -t web3-backend .
docker run web3-backend
```




---
## Technologies Used:
- Frontend: JS, React, Unity
- Game Server: Nodejs
- Backend: Java, Spring boot, MongoDB
- Others: AWS
---
# License

See the LICENSE file, as well as our accompanying Acceptable Use Policy
---

# Questions
For common questions, the FAQ can be found here which will be kept up to date over time as new questions arise.
