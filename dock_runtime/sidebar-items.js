initSidebarItems({"constant":[["MILLISECS_PER_BLOCK",""],["VERSION","This runtime version."],["WASM_BINARY",""]],"enum":[["Call",""],["Event",""],["OriginCaller",""],["StateChange","Any state change that needs to be signed is first wrapped in this enum and then its serialized. This is done to prevent make it unambiguous which command was intended as the SCALE codec's not self describing. Never change the order of variants in this enum"]],"fn":[["native_version","The version information used to identify this runtime when compiled natively."]],"mod":[["anchor","Minimal proof of existence registry."],["api",""],["blob","Generic immutable single-owner storage."],["did",""],["master","Simulates a multisig root account."],["opaque","Opaque types. These are used by the CLI to instantiate machinery that don't need to know the specifics of the runtime. They can then be made to be agnostic over specific formats of data like extrinsics, allowing for them to continue syncing the network through upgrades to even the core datastructures."],["revoke",""]],"struct":[["AvailableBlockRatio","Since there are no `Operational` transactions as of now, the whole block can be filled with `Normal` transactions."],["BlockExecutionWeight","DefaultBlockExecutionWeight is the weight of any empty block. After each block we"],["BlockHashCount",""],["ExistentialDeposit",""],["GenesisConfig",""],["MaxBlobSize",""],["MaxLocks",""],["MaximumBlockLength",""],["MaximumBlockWeight","We allow for 1 seconds of compute with a 3 second average block time."],["MaximumExtrinsicWeight","Assume 10% of weight for average on_initialize calls."],["MinimumPeriod",""],["Origin",""],["PalletInfo","Provides an implementation of `PalletInfo` to provide information about the pallet setup in the runtime."],["Runtime",""],["RuntimeApi",""],["RuntimeApiImpl","Implements all runtime apis for the client side."],["TransactionByteFee",""],["UncleGenerations",""],["Version",""],["VestingDuration","Vesting duration in number of blocks. Duration is 183 days and block time is 3 sec. (183 * 24 * 3600) / 3 = 5270400"],["VestingMilestones","Number of vesting milestones"]],"type":[["AccountId","Some way of identifying an account on the chain. We intentionally make it equivalent to the public key of our transaction signing scheme."],["Anchor",""],["Aura",""],["AuraConfig",""],["Authorship",""],["Balance","Balance of an account."],["Balances",""],["BalancesConfig",""],["BlobStore",""],["Block","Block type as expected by this runtime."],["BlockNumber","An index to a block."],["DIDModule",""],["DIDModuleConfig",""],["Grandpa",""],["GrandpaConfig",""],["Hash","A hash of some data used by the chain."],["Index","Index of a transaction in the chain."],["Master",""],["MasterConfig",""],["MigrationModule",""],["PoAModule",""],["PoAModuleConfig",""],["RandomnessCollectiveFlip",""],["Revoke",""],["Session",""],["SessionConfig",""],["Sudo",""],["SudoConfig",""],["System",""],["SystemConfig",""],["Timestamp",""],["TransactionPayment",""],["Utility",""]]});