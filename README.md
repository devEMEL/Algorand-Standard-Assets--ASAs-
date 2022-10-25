
## Algorand Standard Assets (ASAs)

The Algorand protocol supports the creation of on-chain assets that benefit from the same security, compatibility, speed and ease of use as the Algo. The official name for assets on Algorand is Algorand Standard Assets (ASA).

With Algorand Standard Assets you can represent stablecoins, loyalty points, system credits, and in-game points, just to name a few examples. You can also represent single, unique assets like a deed for a house, collectable items, unique parts on a supply chain, etc. There is also optional functionality to place transfer restrictions on an asset that help support securities, compliance, and certification use cases.


### Asset parameters

he type of asset that is created will depend on the parameters that are passed during asset creation and sometimes during asset re-configuration. View the full list of asset parameters in the Asset Parameters Reference.

Immutable asset parameters¶
These eight parameters can only be specified when an asset is created.

1. Creator (required)
2. AssetName (optional, but recommended)
3. UnitName (optional, but recommended)
4. Total (required)
5. Decimals (required)
6. DefaultFrozen (required)
7. URL (optional)
8. MetaDataHash (optional)
9. Mutable asset parameters¶

There are four parameters that correspond to addresses that can authorize specific functionality for an asset. These addresses must be specified on creation but they can also be modified after creation. Alternatively, these addresses can be set as empty strings, which will irrevocably lock the function that they would have had authority over.

Here are the four address types.

##### Manager Address

The manager account is the only account that can authorize transactions to re-configure or destroy an asset.

##### Reserve Address

Specifying a reserve account signifies that non-minted assets will reside in that account instead of the default creator account. Assets transferred from this account are "minted" units of the asset. If you specify a new reserve address, you must make sure the new account has opted into the asset and then issue a transaction to transfer all assets to the new reserve.

Specified address is considered the asset reserve.
It has no special privileges, this is only informational.

##### Freeze Address

The freeze account is allowed to freeze or unfreeze the asset holdings for a specific account. When an account is frozen it cannot send or receive the frozen asset. In traditional finance, freezing assets may be performed to restrict liquidation of company stock, to investigate suspected criminal activity or to deny-list certain accounts. If the DefaultFrozen state is set to True, you can use the unfreeze action to authorize certain accounts to trade the asset (such as after passing KYC/AML checks).

##### Clawback Address

The clawback address represents an account that is allowed to transfer assets from and to any asset holder (assuming they have opted-in). Use this if you need the option to revoke assets from an account (like if they breach certain contractual obligations tied to holding the asset). In traditional finance, this sort of transaction is referred to as a clawback.

Set this address to "" if you want to ensure to asset holders that assets can never be revoked.

If any of these four addresses is set to "" that address will be cleared and can never be reset for the life of the asset. This will also effectively disable the feature of that address. For example setting the freeze address to "" will prevent the asset from ever being frozen.