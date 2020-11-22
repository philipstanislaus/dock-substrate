(function() {var implementors = {};
implementors["dock_node"] = [{"text":"impl&lt;B&gt; Sync for GrandpaDeps&lt;B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;C, P, B&gt; Sync for FullDeps&lt;C, P, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for Executor","synthetic":true,"types":[]}];
implementors["dock_runtime"] = [{"text":"impl Sync for BlockHashCount","synthetic":true,"types":[]},{"text":"impl Sync for MaximumBlockWeight","synthetic":true,"types":[]},{"text":"impl Sync for AvailableBlockRatio","synthetic":true,"types":[]},{"text":"impl Sync for MaximumExtrinsicWeight","synthetic":true,"types":[]},{"text":"impl Sync for BlockExecutionWeight","synthetic":true,"types":[]},{"text":"impl Sync for MaximumBlockLength","synthetic":true,"types":[]},{"text":"impl Sync for Version","synthetic":true,"types":[]},{"text":"impl Sync for MinimumPeriod","synthetic":true,"types":[]},{"text":"impl Sync for ExistentialDeposit","synthetic":true,"types":[]},{"text":"impl Sync for MaxLocks","synthetic":true,"types":[]},{"text":"impl Sync for TransactionByteFee","synthetic":true,"types":[]},{"text":"impl Sync for MaxBlobSize","synthetic":true,"types":[]},{"text":"impl Sync for VestingMilestones","synthetic":true,"types":[]},{"text":"impl Sync for VestingDuration","synthetic":true,"types":[]},{"text":"impl Sync for UncleGenerations","synthetic":true,"types":[]},{"text":"impl Sync for Runtime","synthetic":true,"types":[]},{"text":"impl !Sync for Origin","synthetic":true,"types":[]},{"text":"impl Sync for PalletInfo","synthetic":true,"types":[]},{"text":"impl Sync for GenesisConfig","synthetic":true,"types":[]},{"text":"impl Sync for RuntimeApi","synthetic":true,"types":[]},{"text":"impl Sync for StateChange","synthetic":true,"types":[]},{"text":"impl Sync for Event","synthetic":true,"types":[]},{"text":"impl Sync for OriginCaller","synthetic":true,"types":[]},{"text":"impl Sync for Call","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Error&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, BlockNumber, Hash&gt; Sync for RawEvent&lt;AccountId, BlockNumber, Hash&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;BlockNumber: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Hash: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for Blob","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for BlobError&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for Bytes32","synthetic":true,"types":[]},{"text":"impl Sync for Bytes33","synthetic":true,"types":[]},{"text":"impl Sync for Bytes64","synthetic":true,"types":[]},{"text":"impl Sync for Bytes65","synthetic":true,"types":[]},{"text":"impl Sync for KeyDetail","synthetic":true,"types":[]},{"text":"impl Sync for KeyUpdate","synthetic":true,"types":[]},{"text":"impl Sync for DidRemoval","synthetic":true,"types":[]},{"text":"impl Sync for GenesisConfig","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Dids&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Error&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for PublicKey","synthetic":true,"types":[]},{"text":"impl Sync for DidSignature","synthetic":true,"types":[]},{"text":"impl Sync for Event","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for Payload","synthetic":true,"types":[]},{"text":"impl Sync for Membership","synthetic":true,"types":[]},{"text":"impl Sync for GenesisConfig","synthetic":true,"types":[]},{"text":"impl Sync for Members","synthetic":true,"types":[]},{"text":"impl Sync for Round","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for MasterError&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Call&gt; Sync for RawEvent&lt;Call&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Call: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::Call: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for Registry","synthetic":true,"types":[]},{"text":"impl Sync for Revoke","synthetic":true,"types":[]},{"text":"impl Sync for UnRevoke","synthetic":true,"types":[]},{"text":"impl Sync for RemoveRegistry","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for Policy","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for RevErr&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for SessionKeys","synthetic":true,"types":[]},{"text":"impl&lt;Block:&nbsp;BlockT, C:&nbsp;CallApiAt&lt;Block&gt;&gt; Sync for RuntimeApiImpl&lt;Block, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C::StateBackend: StateBackend&lt;HashFor&lt;Block&gt;&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["poa"] = [{"text":"impl Sync for EpochDetail","synthetic":true,"types":[]},{"text":"impl Sync for ValidatorStatsPerEpoch","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for GenesisConfig&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Trait&gt;::Currency as Currency&lt;&lt;T as Trait&gt;::AccountId&gt;&gt;::Balance: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::Currency: Currency&lt;&lt;T as Trait&gt;::AccountId&gt;,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, BlockNumber&gt; Sync for RawEvent&lt;AccountId, BlockNumber&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;BlockNumber: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Error&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Trait&gt;::Currency as Currency&lt;&lt;T as Trait&gt;::AccountId&gt;&gt;::Balance: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::Keys: Sync,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["poa_rpc"] = [{"text":"impl&lt;BlockHash, AccountId, Balance&gt; Sync for Client&lt;BlockHash, AccountId, Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;BlockHash: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;C, P&gt; Sync for PoA&lt;C, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Sync,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["token_migration"] = [{"text":"impl&lt;Balance, BlockNumber&gt; Sync for Bonus&lt;Balance, BlockNumber&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;BlockNumber: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Bonuses&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for OnlyMigrator&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Balance, BlockNumber&gt; Sync for RawEvent&lt;AccountId, Balance, BlockNumber&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;BlockNumber: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Error&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Trait&gt;::Currency as Currency&lt;&lt;T as Trait&gt;::AccountId&gt;&gt;::Balance: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::Currency: Currency&lt;&lt;T as Trait&gt;::AccountId&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::Lookup: StaticLookup,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Trait&gt;::Lookup as StaticLookup&gt;::Source: Sync,&nbsp;</span>","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()