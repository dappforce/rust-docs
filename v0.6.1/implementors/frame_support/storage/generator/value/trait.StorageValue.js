(function() {var implementors = {};
implementors["frame_system"] = [{"text":"impl StorageValue&lt;<a class=\"struct\" href=\"frame_system/struct.LastRuntimeUpgradeInfo.html\" title=\"struct frame_system::LastRuntimeUpgradeInfo\">LastRuntimeUpgradeInfo</a>&gt; for <a class=\"struct\" href=\"frame_system/struct.LastRuntimeUpgrade.html\" title=\"struct frame_system::LastRuntimeUpgrade\">LastRuntimeUpgrade</a>","synthetic":false,"types":["frame_system::LastRuntimeUpgrade"]}];
implementors["pallet_aura"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_aura/trait.Trait.html\" title=\"trait pallet_aura::Trait\">Trait</a>&gt; StorageValue&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;&lt;T as <a class=\"trait\" href=\"pallet_aura/trait.Trait.html\" title=\"trait pallet_aura::Trait\">Trait</a>&gt;::<a class=\"type\" href=\"pallet_aura/trait.Trait.html#associatedtype.AuthorityId\" title=\"type pallet_aura::Trait::AuthorityId\">AuthorityId</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"pallet_aura/struct.Authorities.html\" title=\"struct pallet_aura::Authorities\">Authorities</a>&lt;T&gt;","synthetic":false,"types":["pallet_aura::Authorities"]}];
implementors["pallet_balances"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_balances/trait.Trait.html\" title=\"trait pallet_balances::Trait\">Trait</a>&lt;I&gt;, I:&nbsp;<a class=\"trait\" href=\"frame_support/traits/trait.Instance.html\" title=\"trait frame_support::traits::Instance\">Instance</a>&gt; StorageValue&lt;&lt;T as <a class=\"trait\" href=\"pallet_balances/trait.Trait.html\" title=\"trait pallet_balances::Trait\">Trait</a>&lt;I&gt;&gt;::<a class=\"type\" href=\"pallet_balances/trait.Trait.html#associatedtype.Balance\" title=\"type pallet_balances::Trait::Balance\">Balance</a>&gt; for <a class=\"struct\" href=\"pallet_balances/struct.TotalIssuance.html\" title=\"struct pallet_balances::TotalIssuance\">TotalIssuance</a>&lt;T, I&gt;","synthetic":false,"types":["pallet_balances::TotalIssuance"]}];
implementors["pallet_posts"] = [{"text":"impl StorageValue&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>&gt; for <a class=\"struct\" href=\"pallet_posts/struct.NextPostId.html\" title=\"struct pallet_posts::NextPostId\">NextPostId</a>","synthetic":false,"types":["pallet_posts::NextPostId"]}];
implementors["pallet_reactions"] = [{"text":"impl StorageValue&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>&gt; for <a class=\"struct\" href=\"pallet_reactions/struct.NextReactionId.html\" title=\"struct pallet_reactions::NextReactionId\">NextReactionId</a>","synthetic":false,"types":["pallet_reactions::NextReactionId"]}];
implementors["pallet_roles"] = [{"text":"impl StorageValue&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>&gt; for <a class=\"struct\" href=\"pallet_roles/struct.NextRoleId.html\" title=\"struct pallet_roles::NextRoleId\">NextRoleId</a>","synthetic":false,"types":["pallet_roles::NextRoleId"]}];
implementors["pallet_spaces"] = [{"text":"impl StorageValue&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>&gt; for <a class=\"struct\" href=\"pallet_spaces/struct.NextSpaceId.html\" title=\"struct pallet_spaces::NextSpaceId\">NextSpaceId</a>","synthetic":false,"types":["pallet_spaces::NextSpaceId"]}];
implementors["pallet_timestamp"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_timestamp/trait.Trait.html\" title=\"trait pallet_timestamp::Trait\">Trait</a>&gt; StorageValue&lt;&lt;T as <a class=\"trait\" href=\"pallet_timestamp/trait.Trait.html\" title=\"trait pallet_timestamp::Trait\">Trait</a>&gt;::<a class=\"type\" href=\"pallet_timestamp/trait.Trait.html#associatedtype.Moment\" title=\"type pallet_timestamp::Trait::Moment\">Moment</a>&gt; for <a class=\"struct\" href=\"pallet_timestamp/struct.Now.html\" title=\"struct pallet_timestamp::Now\">Now</a>&lt;T&gt;","synthetic":false,"types":["pallet_timestamp::Now"]}];
implementors["pallet_transaction_payment"] = [{"text":"impl StorageValue&lt;<a class=\"struct\" href=\"sp_arithmetic/fixed_point/struct.FixedU128.html\" title=\"struct sp_arithmetic::fixed_point::FixedU128\">FixedU128</a>&gt; for <a class=\"struct\" href=\"pallet_transaction_payment/struct.NextFeeMultiplier.html\" title=\"struct pallet_transaction_payment::NextFeeMultiplier\">NextFeeMultiplier</a>","synthetic":false,"types":["pallet_transaction_payment::NextFeeMultiplier"]}];
implementors["pallet_utils"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_utils/trait.Trait.html\" title=\"trait pallet_utils::Trait\">Trait</a>&gt; StorageValue&lt;&lt;T as <a class=\"trait\" href=\"frame_system/trait.Trait.html\" title=\"trait frame_system::Trait\">Trait</a>&gt;::<a class=\"type\" href=\"frame_system/trait.Trait.html#associatedtype.AccountId\" title=\"type frame_system::Trait::AccountId\">AccountId</a>&gt; for <a class=\"struct\" href=\"pallet_utils/struct.TreasuryAccount.html\" title=\"struct pallet_utils::TreasuryAccount\">TreasuryAccount</a>&lt;T&gt;","synthetic":false,"types":["pallet_utils::TreasuryAccount"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()