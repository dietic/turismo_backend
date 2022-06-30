import express from 'express';

import compression from 'compression';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

import api from './api/routes';

const app = express();

app.set('json spaces', 2);
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST']
}));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({
  limit: '10mb',
  extended: true
}));
app.use(morgan('[:method ":url"] ' +
    ':status ' +
    ':res[content-length] - [:response-time ms]'));
app.use(compression());

app.use('/api', api);
/* {
    "defaultSeverity": "error",
    "extends": [
    "tslint:recommended"
],
    "jsRules": {},
    "rules": {
    "trailing-comma": [ false ],
        "no-console": false
},
    "rulesDirectory": []
} */

/* "prebuild": "tslint -c tslint.json -p tsconfig.json --fix", */
export default app;
