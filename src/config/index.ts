import dotenv from "dotenv";
import * as joi from 'joi';


dotenv.config();

const envVarsSchema = joi
    .object({
        PORT: joi.number().default('3000'),
        TOKEN_KEY: joi.string().required(),

        // database config
        // PGHOST: joi.string().required(),
        // PGUSER: joi.string().required(),
        // PGPASSWORD: joi.string().required(),
        // PGDATABASE: joi.string().required(),
        // PGPORT: joi.number().port().required().default(5432),
    })
    .unknown()
    .required();

const { error, value: envVars } = envVarsSchema.validate(process.env);
if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

const config = {
    secret: process.env.TOKEN_KEY,
}

export default config;
