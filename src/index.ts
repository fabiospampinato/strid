
/* HELPERS */

let cache = new WeakMap<object, number> ();
let counter = 1;
let {is} = Object;

/* MAIN */

const identifier = ( value: any ): string => {

  const type = ( typeof value );

  if ( value === null ) return 'n';

  if ( type === 'undefined' ) return 'u';

  if ( type === 'boolean' ) return value ? 't' : 'f';

  if ( type === 'number' ) return `${is ( value, -0 ) ? '-0' : value}`;

  if ( type === 'bigint' ) return `${value}n`;

  if ( type === 'string' ) return `s${value}`;

  if ( type === 'symbol' || type === 'function' || type === 'object' ) {

    const id = cache.get ( value ) || counter++;

    cache.set ( value, id );

    return `c${id}`;

  }

  throw new Error ( `Unsupported type "${type}"` );

};

/* EXPORT */

export default identifier;
