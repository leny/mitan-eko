/* leny/mitan-eko
 *
 * /src/main.js - (really) simple log middleware for express
 *
 * coded by leny@flatLand!
 * started at 03/03/2016
 */

import zouti from "zouti";

export default function( sLogPrefix ) { // eslint-disable-line func-style
    return function( oRequest, oResponse, fNext ) {
        zouti.log( `(${ oRequest.method }) ${ oRequest.url }`, sLogPrefix );
        fNext();
    }
}
