# Yearn Starter Project

Truffle configured project to work in yearn contracts

## Installation

`yarn`

## Building

`yarn compile`

## Copying a Contract from another repo

If you are using this repo to verify your contract deployed from another framework like brownie, you
need to make sure the dependencies used for deployment match the ones you use here, adjust your `package.json` accordingly
and modify the .sol file to the correct dependency imports on this repository.

Check the compiler settings for truffle so they match the correct version of your deployed contract (you may need to update versions on all solidity contracts if deployed with a different version)

Make sure your contract compiles using:
`yarn compile`

## Verifying Contracts

Once you have modified the contract locally and it compiles you can verify your deployed contract by running in this project the following command:

`truffle run verify contract_file_name@deployed_address --network infuraMainnet --license <Licence type>`


## Troubleshooting
If you have issues try deleting `node_modules` and following the steps again, there have been issues reported that have been fixed with this.

Double check your contracts match the one deployed in your previous repo and all the dependencies and compiler versions settings are the same.

Finally you can search for an issue or open a new one if its specific to the truffle plugin here:
https://github.com/rkalis/truffle-plugin-verify/issues

