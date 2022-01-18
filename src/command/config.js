import { config as dotenv } from 'dotenv';
dotenv();

const config =
{
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root", //
    //password: process.env.DB_PASSWORD || "",
    //database: process.env.DB_DATABASE || "",
    port: process.env.port || 3306,
    multipleStatements: true,
}