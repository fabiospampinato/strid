
/* MAIN */

const SUPPORTS_SYMBOLS_AS_WEAKMAP_KEYS = ((): boolean => {

  try {

    new WeakMap ().set ( Symbol (), 0 );

    return true;

  } catch {

    return false;

  }

})();

/* EXPORT */

export {SUPPORTS_SYMBOLS_AS_WEAKMAP_KEYS};
