import algosdk from "algosdk";

import dotenv from "dotenv";
dotenv.config()


const algodToken = process.env.ALGOD_TOKEN
const algodServer = process.env.ALGOD_SERVER
const algodPort = process.env.ALGOD_PORT
const indexerToken = process.env.INDEXER_TOKEN
const indexerServer = process.env.INDEXER_SERVER
const indexerPort = process.env.INDEXER_PORT

export const algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort)
export const indexerClient = new algosdk.Indexer(indexerToken, indexerServer, indexerPort)



console.log(algodToken);