
import algosdk from "algosdk";
export const createAsset = async (algodClient, account) => {
    let params = await algodClient.getTransactionParams().do();
    // params.fee = 1000;
    // params.flatFee = true;
    let note = undefined;
    let addr = recoveredAccount1.addr;  
    let defaultFrozen = false;
    let decimals = 0; // integer number of decimals for asset unit calculation
    let totalIssuance = 1000; // total number of this asset available for circulation     
    let unitName = "LATINUM";   
    let assetName = "latinum";
    let assetURL = "http://someurl";
    let assetMetadataHash = "16efaa3924a6fd9d3a4824799a4ac65d"; // Optional hash commitment of some sort relating to the asset. 32 character length.
   
    let manager = recoveredAccount2.addr; // the only account that can authorize transactions to re-configure or destroy an asset
    let reserve = recoveredAccount2.addr;
    let freeze = recoveredAccount2.addr;  
    let clawback = recoveredAccount2.addr;


    // signing and sending "txn" allows "addr" to create an asset
    let txn = algosdk.makeAssetCreateTxnWithSuggestedParams(
        addr, 
        note,
        totalIssuance, 
        decimals, 
        defaultFrozen, 
        manager, 
        reserve, 
        freeze,
        clawback, 
        unitName, 
        assetName, 
        assetURL, 
        assetMetadataHash, 
        params);

    let rawSignedTxn = txn.signTxn(recoveredAccount1.sk)
    let tx = (await algodclient.sendRawTransaction(rawSignedTxn).do());

    let assetID = null;
    // wait for transaction to be confirmed
    const ptx = await algosdk.waitForConfirmation(algodclient, tx.txId, 4);
    // Get the new asset's information from the creator account
    assetID = ptx["asset-index"];
    //Get the completed Transaction
    console.log("Transaction " + tx.txId + " confirmed in round " + ptx["confirmed-round"]);

}
