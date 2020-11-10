(function() {var implementors = {};
implementors["bitvec"] = [{"text":"impl&lt;O, T, I&gt; BitOr&lt;I&gt; for BitBox&lt;O, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: BitOrder,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: BitStore,<br>&nbsp;&nbsp;&nbsp;&nbsp;I: IntoIterator&lt;Item = bool&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;O, T, I&gt; BitOr&lt;I&gt; for BitVec&lt;O, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: BitOrder,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: BitStore,<br>&nbsp;&nbsp;&nbsp;&nbsp;I: IntoIterator&lt;Item = bool&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["fake_simd"] = [{"text":"impl BitOr&lt;u32x4&gt; for u32x4","synthetic":false,"types":[]}];
implementors["frame_support"] = [{"text":"impl BitOr&lt;WithdrawReasons&gt; for WithdrawReasons","synthetic":false,"types":[]},{"text":"impl BitOr&lt;WithdrawReason&gt; for WithdrawReasons","synthetic":false,"types":[]},{"text":"impl BitOr&lt;WithdrawReasons&gt; for WithdrawReason","synthetic":false,"types":[]},{"text":"impl BitOr&lt;WithdrawReason&gt; for WithdrawReason","synthetic":false,"types":[]}];
implementors["hashbrown"] = [{"text":"impl&lt;T, S, '_, '_&gt; BitOr&lt;&amp;'_ HashSet&lt;T, S&gt;&gt; for &amp;'_ HashSet&lt;T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Eq + Hash + Clone,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher + Default,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["indexmap"] = [{"text":"impl&lt;T, S1, S2, '_, '_&gt; BitOr&lt;&amp;'_ IndexSet&lt;T, S2&gt;&gt; for &amp;'_ IndexSet&lt;T, S1&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Eq + Hash + Clone,<br>&nbsp;&nbsp;&nbsp;&nbsp;S1: BuildHasher + Default,<br>&nbsp;&nbsp;&nbsp;&nbsp;S2: BuildHasher,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["linked_hash_set"] = [{"text":"impl&lt;'a, 'b, T, S&gt; BitOr&lt;&amp;'b LinkedHashSet&lt;T, S&gt;&gt; for &amp;'a LinkedHashSet&lt;T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Eq + Hash + Clone,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher + Default,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["mio"] = [{"text":"impl BitOr&lt;PollOpt&gt; for PollOpt","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Into&lt;Ready&gt;&gt; BitOr&lt;T&gt; for Ready","synthetic":false,"types":[]},{"text":"impl BitOr&lt;UnixReady&gt; for UnixReady","synthetic":false,"types":[]}];
implementors["nix"] = [{"text":"impl BitOr&lt;AtFlags&gt; for AtFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;OFlag&gt; for OFlag","synthetic":false,"types":[]},{"text":"impl BitOr&lt;SealFlag&gt; for SealFlag","synthetic":false,"types":[]},{"text":"impl BitOr&lt;FdFlag&gt; for FdFlag","synthetic":false,"types":[]},{"text":"impl BitOr&lt;SpliceFFlags&gt; for SpliceFFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;FallocateFlags&gt; for FallocateFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;ModuleInitFlags&gt; for ModuleInitFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;DeleteModuleFlags&gt; for DeleteModuleFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;MsFlags&gt; for MsFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;MntFlags&gt; for MntFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;MQ_OFlag&gt; for MQ_OFlag","synthetic":false,"types":[]},{"text":"impl BitOr&lt;FdFlag&gt; for FdFlag","synthetic":false,"types":[]},{"text":"impl BitOr&lt;InterfaceFlags&gt; for InterfaceFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;PollFlags&gt; for PollFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;CloneFlags&gt; for CloneFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;EpollFlags&gt; for EpollFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;EpollCreateFlags&gt; for EpollCreateFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;EfdFlags&gt; for EfdFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;MemFdCreateFlag&gt; for MemFdCreateFlag","synthetic":false,"types":[]},{"text":"impl BitOr&lt;ProtFlags&gt; for ProtFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;MapFlags&gt; for MapFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;MsFlags&gt; for MsFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;MlockAllFlags&gt; for MlockAllFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;Options&gt; for Options","synthetic":false,"types":[]},{"text":"impl BitOr&lt;QuotaValidFlags&gt; for QuotaValidFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;SaFlags&gt; for SaFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;SfdFlags&gt; for SfdFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;SockFlag&gt; for SockFlag","synthetic":false,"types":[]},{"text":"impl BitOr&lt;MsgFlags&gt; for MsgFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;SFlag&gt; for SFlag","synthetic":false,"types":[]},{"text":"impl BitOr&lt;Mode&gt; for Mode","synthetic":false,"types":[]},{"text":"impl BitOr&lt;FsFlags&gt; for FsFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;InputFlags&gt; for InputFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;OutputFlags&gt; for OutputFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;ControlFlags&gt; for ControlFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;LocalFlags&gt; for LocalFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;WaitPidFlag&gt; for WaitPidFlag","synthetic":false,"types":[]},{"text":"impl BitOr&lt;AddWatchFlags&gt; for AddWatchFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;InitFlags&gt; for InitFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;AccessFlags&gt; for AccessFlags","synthetic":false,"types":[]}];
implementors["num_bigint"] = [{"text":"impl BitOr&lt;BigInt&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; BitOr&lt;BigInt&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; BitOr&lt;&amp;'b BigInt&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; BitOr&lt;&amp;'a BigInt&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl BitOr&lt;BigUint&gt; for BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; BitOr&lt;BigUint&gt; for &amp;'a BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; BitOr&lt;&amp;'b BigUint&gt; for &amp;'a BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; BitOr&lt;&amp;'a BigUint&gt; for BigUint","synthetic":false,"types":[]}];
implementors["primitive_types"] = [{"text":"impl BitOr&lt;U128&gt; for U128","synthetic":false,"types":[]},{"text":"impl BitOr&lt;U256&gt; for U256","synthetic":false,"types":[]},{"text":"impl BitOr&lt;U512&gt; for U512","synthetic":false,"types":[]},{"text":"impl&lt;'l, 'r&gt; BitOr&lt;&amp;'r H160&gt; for &amp;'l H160","synthetic":false,"types":[]},{"text":"impl BitOr&lt;H160&gt; for H160","synthetic":false,"types":[]},{"text":"impl&lt;'l, 'r&gt; BitOr&lt;&amp;'r H256&gt; for &amp;'l H256","synthetic":false,"types":[]},{"text":"impl BitOr&lt;H256&gt; for H256","synthetic":false,"types":[]},{"text":"impl&lt;'l, 'r&gt; BitOr&lt;&amp;'r H512&gt; for &amp;'l H512","synthetic":false,"types":[]},{"text":"impl BitOr&lt;H512&gt; for H512","synthetic":false,"types":[]}];
implementors["region"] = [{"text":"impl BitOr&lt;Protection&gt; for Protection","synthetic":false,"types":[]}];
implementors["subtle"] = [{"text":"impl BitOr&lt;Choice&gt; for Choice","synthetic":false,"types":[]}];
implementors["typenum"] = [{"text":"impl BitOr&lt;B0&gt; for B0","synthetic":false,"types":[]},{"text":"impl BitOr&lt;B1&gt; for B0","synthetic":false,"types":[]},{"text":"impl&lt;Rhs:&nbsp;Bit&gt; BitOr&lt;Rhs&gt; for B1","synthetic":false,"types":[]},{"text":"impl&lt;U:&nbsp;Unsigned&gt; BitOr&lt;U&gt; for UTerm","synthetic":false,"types":[]},{"text":"impl&lt;B:&nbsp;Bit, U:&nbsp;Unsigned&gt; BitOr&lt;UTerm&gt; for UInt&lt;U, B&gt;","synthetic":false,"types":[]},{"text":"impl&lt;Ul:&nbsp;Unsigned, Ur:&nbsp;Unsigned&gt; BitOr&lt;UInt&lt;Ur, B0&gt;&gt; for UInt&lt;Ul, B0&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ul: BitOr&lt;Ur&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Ul:&nbsp;Unsigned, Ur:&nbsp;Unsigned&gt; BitOr&lt;UInt&lt;Ur, B1&gt;&gt; for UInt&lt;Ul, B0&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ul: BitOr&lt;Ur&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Ul:&nbsp;Unsigned, Ur:&nbsp;Unsigned&gt; BitOr&lt;UInt&lt;Ur, B0&gt;&gt; for UInt&lt;Ul, B1&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ul: BitOr&lt;Ur&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Ul:&nbsp;Unsigned, Ur:&nbsp;Unsigned&gt; BitOr&lt;UInt&lt;Ur, B1&gt;&gt; for UInt&lt;Ul, B1&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ul: BitOr&lt;Ur&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()