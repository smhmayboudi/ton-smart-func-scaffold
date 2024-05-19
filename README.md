# ton-smart-func-scaffold

## Project structure

-   `contracts` - source code of all the smart contracts of the project and their dependencies.
-   `wrappers` - wrapper classes (implementing `Contract` from ton-core) for the contracts, including any [de]serialization primitives and compilation functions.
-   `tests` - tests for the contracts.
-   `scripts` - scripts used by the project, mainly the deployment scripts.

## How to use

### Build

`npx blueprint build` or `yarn blueprint build`

### Test

`npx blueprint test` or `yarn blueprint test`

### Deploy or run another script

`npx blueprint run` or `yarn blueprint run`

### Add a new contract

`npx blueprint create ContractName` or `yarn blueprint create ContractName`

# ton-smart-func-scaffold

Add to package.json by running:

```shell
npm install --save-dev blueprint-scaffold
```

And add to the blueprint.config.ts:

```shell
import { ScaffoldPlugin } from 'blueprint-scaffold';

export const config = {
  plugins: [
    new ScaffoldPlugin(),
  ]
};
```

Then you may run it:

``shell
npm exec blueprint scaffold
```
