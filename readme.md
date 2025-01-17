# Strid

Get a unique string identifier for any input value.

## Details

- All values that are the same according to `Object.is` will have the same string identifier.
- All values that are different according to `Object.is` will have different string identifiers.
- If your engine hasn't implemented [this](https://github.com/tc39/proposal-symbols-as-weakmap-keys) proposal then input symbols will be kept in memory indefinitely.

## Install

```sh
npm install strid
```

## Usage

```ts
import strid from 'strid';

// Let's get a unique string identifier for some values

strid ( null ); // => 'n';
strid ( undefined ); // => 'u';
strid ( true ); // => 't';
strid ( false ); // => 'f';
strid ( 0 ); // => '0';
strid ( -0 ); // => '-0';
strid ( 0n ); // => '0n';
strid ( 'foo' ); // => 'sfoo';
strid ( () => {} ); // => 'c1';
strid ( () => {} ); // => 'c2';
strid ( {} ); // => 'c3';
strid ( [] ); // => 'c4';
strid ( Symbol () ); // -> 'c5'
```

## License

MIT © Fabio Spampinato
