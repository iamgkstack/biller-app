import dotenv from 'dotenv';

/* Load config from .env file at very begning of app */
if(process.env.NODE_ENV !== 'production') dotenv.config();

import app from './index';

app.start();