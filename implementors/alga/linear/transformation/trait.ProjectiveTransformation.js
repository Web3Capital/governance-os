(function() {var implementors = {};
implementors["nalgebra"] = [{"text":"impl&lt;N:&nbsp;RealField, D:&nbsp;DimName&gt; ProjectiveTransformation&lt;Point&lt;N, D&gt;&gt; for Rotation&lt;N, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DefaultAllocator: Allocator&lt;N, D, D&gt; + Allocator&lt;N, D&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;N:&nbsp;RealField&gt; ProjectiveTransformation&lt;Point&lt;N, U3&gt;&gt; for UnitQuaternion&lt;N&gt;","synthetic":false,"types":[]},{"text":"impl&lt;N:&nbsp;RealField&gt; ProjectiveTransformation&lt;Point&lt;N, U2&gt;&gt; for UnitComplex&lt;N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DefaultAllocator: Allocator&lt;N, U2&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;N:&nbsp;RealField, D:&nbsp;DimName&gt; ProjectiveTransformation&lt;Point&lt;N, D&gt;&gt; for Translation&lt;N, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DefaultAllocator: Allocator&lt;N, D&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;N:&nbsp;RealField, D:&nbsp;DimName, R&gt; ProjectiveTransformation&lt;Point&lt;N, D&gt;&gt; for Isometry&lt;N, D, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Rotation&lt;Point&lt;N, D&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DefaultAllocator: Allocator&lt;N, D&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;N:&nbsp;RealField, D:&nbsp;DimName, R&gt; ProjectiveTransformation&lt;Point&lt;N, D&gt;&gt; for Similarity&lt;N, D, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Rotation&lt;Point&lt;N, D&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DefaultAllocator: Allocator&lt;N, D&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;N, D:&nbsp;DimNameAdd&lt;U1&gt;, C&gt; ProjectiveTransformation&lt;Point&lt;N, D&gt;&gt; for Transform&lt;N, D, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: RealField,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: SubTCategoryOf&lt;TProjective&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DefaultAllocator: Allocator&lt;N, DimNameSum&lt;D, U1&gt;, DimNameSum&lt;D, U1&gt;&gt; + Allocator&lt;N, DimNameSum&lt;D, U1&gt;&gt; + Allocator&lt;N, D, D&gt; + Allocator&lt;N, D&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()