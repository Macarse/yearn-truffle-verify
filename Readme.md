# Yearn Starter Project

Truffle configured project to work in yearn contracts

## Installation

`npm install`

## Building

`npm run compile`

## Copying a Contract from another repo

If you are using this repo to verify your contract deployed from another framework like brownie, you
need to make sure the dependencies used for deployment match the ones you use here, adjust your `package.json` accordingly
and modify the .sol file to the correct dependency imports on this repository.

Check the compiler settings for truffle so they match the correct version of your deployed contract (you may need to update versions on all solidity contracts if deployed with a different version)

Make sure your contract compiles using:
`truffle compile`

## Verifying Contracts

Once you have modified the contract locally and it compiles you can verify your deployed contract by running in this project the following command:

`truffle run verify contract_file_name@deployed_address --network infuraMainnet --license <Licence type>`
