
/* IMPORT */

import {describe} from 'fava';
import strid from '../dist/index.js';

/* MAIN */

describe ( 'Strid', it => {

  it ( 'supports null', t => {

    t.is ( strid ( null ), 'n' );

  });

  it ( 'supports undefined', t => {

    t.is ( strid ( undefined ), 'u' );

  });

  it ( 'supports booleans', t => {

    t.is ( strid ( true ), 't' );
    t.is ( strid ( false ), 'f' );

  });

  it ( 'supports numbers', t => {

    t.is ( strid ( 0 ), '0' );
    t.is ( strid ( -0 ), '-0' );
    t.is ( strid ( 123 ), '123' );
    t.is ( strid ( -123 ), '-123' );
    t.is ( strid ( Infinity ), 'Infinity' );
    t.is ( strid ( -Infinity ), '-Infinity' );
    t.is ( strid ( NaN ), 'NaN' );

  });

  it ( 'supports bigint', t => {

    t.is ( strid ( 0n ), '0n' );
    t.is ( strid ( -0n ), '0n' );
    t.is ( strid ( 123n ), '123n' );
    t.is ( strid ( -123n ), '-123n' );

  });

  it ( 'supports strings', t => {

    t.is ( strid ( '' ), 's' );
    t.is ( strid ( 'asd' ), 'sasd' );

  });

  it ( 'supports symbols', t => {

    const symbol1 = Symbol ();
    const symbol2 = Symbol ();

    t.is ( strid ( symbol1 ), 'c1' );
    t.is ( strid ( symbol1 ), 'c1' );
    t.is ( strid ( symbol2 ), 'c2' );
    t.is ( strid ( symbol2 ), 'c2' );

  });

  it ( 'supports functions', t => {

    const fn1 = () => {};
    const fn2 = () => {};

    t.is ( strid ( fn1 ), 'c3' );
    t.is ( strid ( fn1 ), 'c3' );
    t.is ( strid ( fn2 ), 'c4' );
    t.is ( strid ( fn2 ), 'c4' );

  });

  it ( 'supports objects', t => {

    const obj1 = {};
    const obj2 = {};

    t.is ( strid ( obj1 ), 'c5' );
    t.is ( strid ( obj1 ), 'c5' );
    t.is ( strid ( obj2 ), 'c6' );
    t.is ( strid ( obj2 ), 'c6' );

  });

});
