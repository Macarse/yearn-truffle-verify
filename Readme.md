# Yearn Starter Project

Truffle configured project to work in yearn contracts

## Installation

`npm install`

## Building

`npm run compile`

## Verifying Contracts

After deploying a contract you can run in this project the following command:

`truffle run verify contract_file_name@deployed_address --network infuraMainnet --license MIT`

truffle run verify StrategyCreamCRV@0x120d0a11DfBFfFA2b187D199149Afbde59d1BDD9 --network infuraRinkeby --license GPL-3.0

truffle run verify StrategyCreamCRV@0xF477479a6bf71F41b8935EFDd347D1794F18e6C1 --network infuraRinkeby --license GPL-3.0
