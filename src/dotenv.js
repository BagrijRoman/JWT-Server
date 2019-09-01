import dotenv from 'dotenv';
import 'dotenv/config';

dotenv.config({ path: `.env.${process.env.ENV_TYPE}` });