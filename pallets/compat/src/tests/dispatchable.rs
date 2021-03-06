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

use super::mock::*;
use frame_support::{assert_noop, assert_ok};
use governance_os_support::{
    acl::AclError,
    testing::{ALICE, BOB},
};

fn mock_call() -> Box<Call> {
    Box::new(Call::System(frame_system::Call::remark(vec![])))
}

#[test]
fn test_sudo_root() {
    ExtBuilder::default()
        .with_root(ALICE)
        .build()
        .execute_with(|| {
            assert_ok!(Compat::sudo(Origin::signed(ALICE), mock_call()));
        })
}

#[test]
fn test_sudo_not_root() {
    ExtBuilder::default().build().execute_with(|| {
        assert_noop!(
            Compat::sudo(Origin::signed(ALICE), mock_call()),
            AclError::MissingRole
        );
    })
}

#[test]
fn test_doas_root() {
    ExtBuilder::default()
        .with_root(ALICE)
        .build()
        .execute_with(|| {
            assert_ok!(Compat::doas(Origin::signed(ALICE), BOB, mock_call()));
        })
}

#[test]
fn test_doas_not_root() {
    ExtBuilder::default().build().execute_with(|| {
        assert_noop!(
            Compat::doas(Origin::signed(ALICE), BOB, mock_call()),
            AclError::MissingRole
        );
    })
}
