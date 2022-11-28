# Strid

Get a unique string identifier for any input value.

## Details

- All values that are the same according to `Object.is` will have the same string identifier.
- All values that are different according to `Object.is` will have different string identifiers.
- Symbols are supported only if the engine you are using supports using symbols as keys in WeakMaps.
- Records and Tuples are not currently supported yet, the function will throw for unknown types like that.

## Install

```sh
npm install --save strid
```

## Usage

```ts
import strid from 'strid';

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
```

## License

MIT © Fabio Spampinato
