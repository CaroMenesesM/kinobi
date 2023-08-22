//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use borsh::BorshDeserialize;
use borsh::BorshSerialize;
use solana_program::pubkey::Pubkey;

/// This is a union of all the possible payload types.
#[derive(BorshSerialize, BorshDeserialize, Clone, Debug, Eq, PartialEq)]
pub enum PayloadType {
    Pubkey(Pubkey),
    Seeds {
        seeds: Vec<Vec<u8>>,
    },
    MerkleProof {
        leaf: [u8; 32],
        proof: Vec<[u8; 32]>,
    },
    Number(u64),
}
