# `just-maybe`

A lightweight implementation of the Maybe (Optional) monad, with rigorous TypeScript definitions provided.

Written as an exercise to learn best practices for maintaining JS/TS compatibility when publishing NPM modules.

## Installation

```sh
npm i @calamitizer/just-maybe
# or
yarn add @calamitizer/just-maybe
```

## Usage

```javascript
import Maybe from '@calamitizer/just-maybe';

Maybe.just('An example string').ifPresent(console.log);


```

## To-Do

* Documentation, maybe
* Unit testing (Ava is already set up)
