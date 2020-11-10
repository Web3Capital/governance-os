(function() {var implementors = {};
implementors["bitvec"] = [{"text":"impl&lt;O, T&gt; SubAssign&lt;BitVec&lt;O, T&gt;&gt; for BitVec&lt;O, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: BitOrder,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: BitStore,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["chrono"] = [{"text":"impl SubAssign&lt;Duration&gt; for NaiveDate","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;Duration&gt; for NaiveDateTime","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;Duration&gt; for NaiveTime","synthetic":false,"types":[]}];
implementors["curve25519_dalek"] = [{"text":"impl&lt;'b&gt; SubAssign&lt;&amp;'b Scalar&gt; for Scalar","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;Scalar&gt; for Scalar","synthetic":false,"types":[]},{"text":"impl&lt;'b&gt; SubAssign&lt;&amp;'b EdwardsPoint&gt; for EdwardsPoint","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;EdwardsPoint&gt; for EdwardsPoint","synthetic":false,"types":[]},{"text":"impl&lt;'b&gt; SubAssign&lt;&amp;'b RistrettoPoint&gt; for RistrettoPoint","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;RistrettoPoint&gt; for RistrettoPoint","synthetic":false,"types":[]}];
implementors["mio"] = [{"text":"impl&lt;T:&nbsp;Into&lt;Ready&gt;&gt; SubAssign&lt;T&gt; for Ready","synthetic":false,"types":[]}];
implementors["nalgebra"] = [{"text":"impl&lt;'b, N, R1, C1, R2, C2, SA, SB&gt; SubAssign&lt;&amp;'b Matrix&lt;N, R2, C2, SB&gt;&gt; for Matrix&lt;N, R1, C1, SA&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R1: Dim,<br>&nbsp;&nbsp;&nbsp;&nbsp;C1: Dim,<br>&nbsp;&nbsp;&nbsp;&nbsp;R2: Dim,<br>&nbsp;&nbsp;&nbsp;&nbsp;C2: Dim,<br>&nbsp;&nbsp;&nbsp;&nbsp;N: Scalar + ClosedSub,<br>&nbsp;&nbsp;&nbsp;&nbsp;SA: StorageMut&lt;N, R1, C1&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;SB: Storage&lt;N, R2, C2&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;ShapeConstraint: SameNumberOfRows&lt;R1, R2&gt; + SameNumberOfColumns&lt;C1, C2&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;N, R1, C1, R2, C2, SA, SB&gt; SubAssign&lt;Matrix&lt;N, R2, C2, SB&gt;&gt; for Matrix&lt;N, R1, C1, SA&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R1: Dim,<br>&nbsp;&nbsp;&nbsp;&nbsp;C1: Dim,<br>&nbsp;&nbsp;&nbsp;&nbsp;R2: Dim,<br>&nbsp;&nbsp;&nbsp;&nbsp;C2: Dim,<br>&nbsp;&nbsp;&nbsp;&nbsp;N: Scalar + ClosedSub,<br>&nbsp;&nbsp;&nbsp;&nbsp;SA: StorageMut&lt;N, R1, C1&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;SB: Storage&lt;N, R2, C2&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;ShapeConstraint: SameNumberOfRows&lt;R1, R2&gt; + SameNumberOfColumns&lt;C1, C2&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'b, N, D1:&nbsp;DimName, D2:&nbsp;Dim, SB&gt; SubAssign&lt;&amp;'b Matrix&lt;N, D2, U1, SB&gt;&gt; for Point&lt;N, D1&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: Scalar + ClosedSub,<br>&nbsp;&nbsp;&nbsp;&nbsp;SB: Storage&lt;N, D2&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DefaultAllocator: Allocator&lt;N, D1&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;ShapeConstraint: SameNumberOfRows&lt;D1, D2&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;N, D1:&nbsp;DimName, D2:&nbsp;Dim, SB&gt; SubAssign&lt;Matrix&lt;N, D2, U1, SB&gt;&gt; for Point&lt;N, D1&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: Scalar + ClosedSub,<br>&nbsp;&nbsp;&nbsp;&nbsp;SB: Storage&lt;N, D2&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DefaultAllocator: Allocator&lt;N, D1&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;ShapeConstraint: SameNumberOfRows&lt;D1, D2&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'b, N:&nbsp;RealField&gt; SubAssign&lt;&amp;'b Quaternion&lt;N&gt;&gt; for Quaternion&lt;N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DefaultAllocator: Allocator&lt;N, U4, U1&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;N:&nbsp;RealField&gt; SubAssign&lt;Quaternion&lt;N&gt;&gt; for Quaternion&lt;N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DefaultAllocator: Allocator&lt;N, U4, U1&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["nix"] = [{"text":"impl SubAssign&lt;AtFlags&gt; for AtFlags","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;OFlag&gt; for OFlag","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;SealFlag&gt; for SealFlag","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;FdFlag&gt; for FdFlag","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;SpliceFFlags&gt; for SpliceFFlags","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;FallocateFlags&gt; for FallocateFlags","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;ModuleInitFlags&gt; for ModuleInitFlags","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;DeleteModuleFlags&gt; for DeleteModuleFlags","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;MsFlags&gt; for MsFlags","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;MntFlags&gt; for MntFlags","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;MQ_OFlag&gt; for MQ_OFlag","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;FdFlag&gt; for FdFlag","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;InterfaceFlags&gt; for InterfaceFlags","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;PollFlags&gt; for PollFlags","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;CloneFlags&gt; for CloneFlags","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;EpollFlags&gt; for EpollFlags","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;EpollCreateFlags&gt; for EpollCreateFlags","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;EfdFlags&gt; for EfdFlags","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;MemFdCreateFlag&gt; for MemFdCreateFlag","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;ProtFlags&gt; for ProtFlags","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;MapFlags&gt; for MapFlags","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;MsFlags&gt; for MsFlags","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;MlockAllFlags&gt; for MlockAllFlags","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;Options&gt; for Options","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;QuotaValidFlags&gt; for QuotaValidFlags","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;SaFlags&gt; for SaFlags","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;SfdFlags&gt; for SfdFlags","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;SockFlag&gt; for SockFlag","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;MsgFlags&gt; for MsgFlags","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;SFlag&gt; for SFlag","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;Mode&gt; for Mode","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;FsFlags&gt; for FsFlags","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;InputFlags&gt; for InputFlags","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;OutputFlags&gt; for OutputFlags","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;ControlFlags&gt; for ControlFlags","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;LocalFlags&gt; for LocalFlags","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;WaitPidFlag&gt; for WaitPidFlag","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;AddWatchFlags&gt; for AddWatchFlags","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;InitFlags&gt; for InitFlags","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;AccessFlags&gt; for AccessFlags","synthetic":false,"types":[]}];
implementors["num_bigint"] = [{"text":"impl&lt;'a&gt; SubAssign&lt;&amp;'a BigInt&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;BigInt&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;u8&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;u16&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;usize&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;i8&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;i16&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;isize&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;u32&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;u64&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;u128&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;i32&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;i64&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;i128&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;BigUint&gt; for BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; SubAssign&lt;&amp;'a BigUint&gt; for BigUint","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;u8&gt; for BigUint","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;u16&gt; for BigUint","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;usize&gt; for BigUint","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;u32&gt; for BigUint","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;u64&gt; for BigUint","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;u128&gt; for BigUint","synthetic":false,"types":[]}];
implementors["num_complex"] = [{"text":"impl&lt;T:&nbsp;Clone + NumAssign&gt; SubAssign&lt;Complex&lt;T&gt;&gt; for Complex&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone + NumAssign&gt; SubAssign&lt;T&gt; for Complex&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;Clone + NumAssign&gt; SubAssign&lt;&amp;'a Complex&lt;T&gt;&gt; for Complex&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;Clone + NumAssign&gt; SubAssign&lt;&amp;'a T&gt; for Complex&lt;T&gt;","synthetic":false,"types":[]}];
implementors["num_rational"] = [{"text":"impl&lt;T:&nbsp;Clone + Integer + NumAssign&gt; SubAssign&lt;Ratio&lt;T&gt;&gt; for Ratio&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone + Integer + NumAssign&gt; SubAssign&lt;T&gt; for Ratio&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;Clone + Integer + NumAssign&gt; SubAssign&lt;&amp;'a Ratio&lt;T&gt;&gt; for Ratio&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;Clone + Integer + NumAssign&gt; SubAssign&lt;&amp;'a T&gt; for Ratio&lt;T&gt;","synthetic":false,"types":[]}];
implementors["primitive_types"] = [{"text":"impl SubAssign&lt;U128&gt; for U128","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;U256&gt; for U256","synthetic":false,"types":[]},{"text":"impl SubAssign&lt;U512&gt; for U512","synthetic":false,"types":[]}];
implementors["region"] = [{"text":"impl SubAssign&lt;Protection&gt; for Protection","synthetic":false,"types":[]}];
implementors["tokio"] = [{"text":"impl SubAssign&lt;Duration&gt; for Instant","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()