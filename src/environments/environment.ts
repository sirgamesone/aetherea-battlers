// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  collectionSlug: 'aetherea-battlers',
  moralis: {
    serverUrl: 'https://laaw5n5js8xl.usemoralis.com:2053/server',
    appId: 'lxBCFSjR55vRgz83pqFOjXZEHyu4FuuiOPZjIERu',
  },
  opensea: {
    baseHost: 'https://api.opensea.io/api/v1',
    collections: '/collections',
    singleCollection: '/collection/{collection_slug}',
    assets: '/assets'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
