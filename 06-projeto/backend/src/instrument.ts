// Import with `const Sentry = require("@sentry/nestjs");` if you are using CJS
import * as Sentry from '@sentry/nestjs';

Sentry.init({
    dsn: 'https://501714282ac0662f30af504aacd80fd0@o4511620456972288.ingest.us.sentry.io/4511620486725632',
    dataCollection: {
        // To disable sending user data and HTTP bodies, uncomment the lines below. For more info visit:
        // https://docs.sentry.io/platforms/javascript/guides/node/configuration/options/#dataCollection
        // userInfo: false,
        // httpBodies: [],
    },
});
