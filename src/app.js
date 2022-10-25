import algosdk from "algosdk";
import { algodClient } from "./connection";
import { txAlgo } from "./algo";
import { createAsset } from "./asset";

import dotenv from "dotenv";
dotenv.config()

// txAlgo(algodClient, 2000000, process.env.MNEM_1,  )
createAsset(algodClient, process.env.MNEM_1)
