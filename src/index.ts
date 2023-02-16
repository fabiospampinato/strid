
/* IMPORT */

import MildMap from 'mild-map';

/* HELPERS */

let cache = new MildMap<unknown, number> ();
let counter = 1;
let {is} = Object;

/* MAIN */

const identifier = ( value: unknown ): string => {

  if ( value === null ) return 'n';

  if ( value === undefined ) return 'u';

  const type = ( typeof value );

  if ( type === 'boolean' ) return value ? 't' : 'f';

  if ( type === 'number' ) return is ( value, -0 ) ? '-0' : `${value}`;

  if ( type === 'bigint' ) return `${value}n`;

  if ( type === 'string' ) return `s${value}`;

  if ( type === 'object' || type === 'function' || type === 'symbol' ) {

    const cachedId = cache.get ( value );
    const id = cachedId || counter++;

    if ( !cachedId ) {

      cache.set ( value, id );

    }

    return `c${id}`;

  }

  throw new Error ( `Unsupported type "${type}"` );

};

/* EXPORT */

export default identifier;
