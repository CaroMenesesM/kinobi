//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use crate::generated::types::ConfigLine;
use borsh::BorshDeserialize;
use borsh::BorshSerialize;
use kaigan::types::RemainderVec;

/// Dummy lines.
#[derive(BorshSerialize, BorshDeserialize, Clone, Debug, Eq, PartialEq)]
pub struct DummyLines {
    /// The dummy lines.
    pub lines: RemainderVec<ConfigLine>,
}
