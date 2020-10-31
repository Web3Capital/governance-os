/*
 * Copyright 2020 Nuclei Studio OÜ
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//! A set of common traits to define Access Control lists between pallets and
//! runtime users.

use frame_support::Parameter;
use sp_runtime::traits::{DispatchInfoOf, Dispatchable, MaybeSerializeDeserialize, Member};
use sp_std::prelude::Vec;

/// This defines a role. Roles can be granted to any number of addresses, frozen
/// (denied for anybody) and granted to everybody at once.
pub trait Role: Parameter + Member + Copy + MaybeSerializeDeserialize {}

/// This trait links a `call` to a suite of roles. If multiple roles are attached to a call
/// the runtime should perform the equivalent of a boolean `or` operation on those; aka
/// at least one of the roles need to be granted to the caller for it to perform the call.
pub trait CallFilter<AccountId, Call, Role>
where
    Call: Dispatchable,
{
    /// Shall return at least one role that `who` must have been granted before being able
    /// to send the call. Additionally, if `who` as a role for which `is_root` returns `true`
    /// we would let them perform the call as well.
    ///
    /// **NOTE**: the function return an empty vector we will assume that anybody can perform
    /// the given call.
    fn roles_for(
        who: &AccountId,
        call: &Call,
        info: &DispatchInfoOf<Call>,
        len: usize,
    ) -> Vec<Role>;
}