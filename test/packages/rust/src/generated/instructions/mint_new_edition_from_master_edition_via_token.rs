//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use crate::generated::types::MintNewEditionFromMasterEditionViaTokenArgs;
use borsh::BorshDeserialize;
use borsh::BorshSerialize;

/// Accounts.
pub struct MintNewEditionFromMasterEditionViaToken {
    /// New Metadata key (pda of ['metadata', program id, mint id])
    pub new_metadata: solana_program::pubkey::Pubkey,
    /// New Edition (pda of ['metadata', program id, mint id, 'edition'])
    pub new_edition: solana_program::pubkey::Pubkey,
    /// Master Record Edition V2 (pda of ['metadata', program id, master metadata mint id, 'edition'])
    pub master_edition: solana_program::pubkey::Pubkey,
    /// Mint of new token - THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY
    pub new_mint: solana_program::pubkey::Pubkey,
    /// Edition pda to mark creation - will be checked for pre-existence. (pda of ['metadata', program id, master metadata mint id, 'edition', edition_number]) where edition_number is NOT the edition number you pass in args but actually edition_number = floor(edition/EDITION_MARKER_BIT_SIZE).
    pub edition_mark_pda: solana_program::pubkey::Pubkey,
    /// Mint authority of new mint
    pub new_mint_authority: solana_program::pubkey::Pubkey,
    /// payer
    pub payer: solana_program::pubkey::Pubkey,
    /// owner of token account containing master token (#8)
    pub token_account_owner: solana_program::pubkey::Pubkey,
    /// token account containing token from master metadata mint
    pub token_account: solana_program::pubkey::Pubkey,
    /// Update authority info for new metadata
    pub new_metadata_update_authority: solana_program::pubkey::Pubkey,
    /// Master record metadata account
    pub metadata: solana_program::pubkey::Pubkey,
    /// Token program
    pub token_program: solana_program::pubkey::Pubkey,
    /// System program
    pub system_program: solana_program::pubkey::Pubkey,
    /// Rent info
    pub rent: Option<solana_program::pubkey::Pubkey>,
}

impl MintNewEditionFromMasterEditionViaToken {
    pub fn instruction(
        &self,
        args: MintNewEditionFromMasterEditionViaTokenInstructionArgs,
    ) -> solana_program::instruction::Instruction {
        self.instruction_with_remaining_accounts(args, &[])
    }
    #[allow(clippy::vec_init_then_push)]
    pub fn instruction_with_remaining_accounts(
        &self,
        args: MintNewEditionFromMasterEditionViaTokenInstructionArgs,
        remaining_accounts: &[solana_program::instruction::AccountMeta],
    ) -> solana_program::instruction::Instruction {
        let mut accounts = Vec::with_capacity(14 + remaining_accounts.len());
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.new_metadata,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.new_edition,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.master_edition,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.new_mint,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.edition_mark_pda,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.new_mint_authority,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.payer, true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.token_account_owner,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.token_account,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.new_metadata_update_authority,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.metadata,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.token_program,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.system_program,
            false,
        ));
        if let Some(rent) = self.rent {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                rent, false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }
        accounts.extend_from_slice(remaining_accounts);
        let mut data = MintNewEditionFromMasterEditionViaTokenInstructionData::new()
            .try_to_vec()
            .unwrap();
        let mut args = args.try_to_vec().unwrap();
        data.append(&mut args);

        solana_program::instruction::Instruction {
            program_id: crate::MPL_TOKEN_METADATA_ID,
            accounts,
            data,
        }
    }
}

#[derive(BorshDeserialize, BorshSerialize)]
pub struct MintNewEditionFromMasterEditionViaTokenInstructionData {
    discriminator: u8,
}

impl MintNewEditionFromMasterEditionViaTokenInstructionData {
    pub fn new() -> Self {
        Self { discriminator: 11 }
    }
}

#[derive(BorshSerialize, BorshDeserialize, Clone, Debug, Eq, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub struct MintNewEditionFromMasterEditionViaTokenInstructionArgs {
    pub mint_new_edition_from_master_edition_via_token_args:
        MintNewEditionFromMasterEditionViaTokenArgs,
}

/// Instruction builder for `MintNewEditionFromMasterEditionViaToken`.
///
/// ### Accounts:
///
///   0. `[writable]` new_metadata
///   1. `[writable]` new_edition
///   2. `[writable]` master_edition
///   3. `[writable]` new_mint
///   4. `[writable]` edition_mark_pda
///   5. `[signer]` new_mint_authority
///   6. `[writable, signer]` payer
///   7. `[signer]` token_account_owner
///   8. `[]` token_account
///   9. `[]` new_metadata_update_authority
///   10. `[]` metadata
///   11. `[optional]` token_program (default to `TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA`)
///   12. `[optional]` system_program (default to `11111111111111111111111111111111`)
///   13. `[optional]` rent
#[derive(Clone, Debug, Default)]
pub struct MintNewEditionFromMasterEditionViaTokenBuilder {
    new_metadata: Option<solana_program::pubkey::Pubkey>,
    new_edition: Option<solana_program::pubkey::Pubkey>,
    master_edition: Option<solana_program::pubkey::Pubkey>,
    new_mint: Option<solana_program::pubkey::Pubkey>,
    edition_mark_pda: Option<solana_program::pubkey::Pubkey>,
    new_mint_authority: Option<solana_program::pubkey::Pubkey>,
    payer: Option<solana_program::pubkey::Pubkey>,
    token_account_owner: Option<solana_program::pubkey::Pubkey>,
    token_account: Option<solana_program::pubkey::Pubkey>,
    new_metadata_update_authority: Option<solana_program::pubkey::Pubkey>,
    metadata: Option<solana_program::pubkey::Pubkey>,
    token_program: Option<solana_program::pubkey::Pubkey>,
    system_program: Option<solana_program::pubkey::Pubkey>,
    rent: Option<solana_program::pubkey::Pubkey>,
    mint_new_edition_from_master_edition_via_token_args:
        Option<MintNewEditionFromMasterEditionViaTokenArgs>,
    __remaining_accounts: Vec<solana_program::instruction::AccountMeta>,
}

impl MintNewEditionFromMasterEditionViaTokenBuilder {
    pub fn new() -> Self {
        Self::default()
    }
    /// New Metadata key (pda of ['metadata', program id, mint id])
    #[inline(always)]
    pub fn new_metadata(&mut self, new_metadata: solana_program::pubkey::Pubkey) -> &mut Self {
        self.new_metadata = Some(new_metadata);
        self
    }
    /// New Edition (pda of ['metadata', program id, mint id, 'edition'])
    #[inline(always)]
    pub fn new_edition(&mut self, new_edition: solana_program::pubkey::Pubkey) -> &mut Self {
        self.new_edition = Some(new_edition);
        self
    }
    /// Master Record Edition V2 (pda of ['metadata', program id, master metadata mint id, 'edition'])
    #[inline(always)]
    pub fn master_edition(&mut self, master_edition: solana_program::pubkey::Pubkey) -> &mut Self {
        self.master_edition = Some(master_edition);
        self
    }
    /// Mint of new token - THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY
    #[inline(always)]
    pub fn new_mint(&mut self, new_mint: solana_program::pubkey::Pubkey) -> &mut Self {
        self.new_mint = Some(new_mint);
        self
    }
    /// Edition pda to mark creation - will be checked for pre-existence. (pda of ['metadata', program id, master metadata mint id, 'edition', edition_number]) where edition_number is NOT the edition number you pass in args but actually edition_number = floor(edition/EDITION_MARKER_BIT_SIZE).
    #[inline(always)]
    pub fn edition_mark_pda(
        &mut self,
        edition_mark_pda: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.edition_mark_pda = Some(edition_mark_pda);
        self
    }
    /// Mint authority of new mint
    #[inline(always)]
    pub fn new_mint_authority(
        &mut self,
        new_mint_authority: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.new_mint_authority = Some(new_mint_authority);
        self
    }
    /// payer
    #[inline(always)]
    pub fn payer(&mut self, payer: solana_program::pubkey::Pubkey) -> &mut Self {
        self.payer = Some(payer);
        self
    }
    /// owner of token account containing master token (#8)
    #[inline(always)]
    pub fn token_account_owner(
        &mut self,
        token_account_owner: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.token_account_owner = Some(token_account_owner);
        self
    }
    /// token account containing token from master metadata mint
    #[inline(always)]
    pub fn token_account(&mut self, token_account: solana_program::pubkey::Pubkey) -> &mut Self {
        self.token_account = Some(token_account);
        self
    }
    /// Update authority info for new metadata
    #[inline(always)]
    pub fn new_metadata_update_authority(
        &mut self,
        new_metadata_update_authority: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.new_metadata_update_authority = Some(new_metadata_update_authority);
        self
    }
    /// Master record metadata account
    #[inline(always)]
    pub fn metadata(&mut self, metadata: solana_program::pubkey::Pubkey) -> &mut Self {
        self.metadata = Some(metadata);
        self
    }
    /// `[optional account, default to 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA']`
    /// Token program
    #[inline(always)]
    pub fn token_program(&mut self, token_program: solana_program::pubkey::Pubkey) -> &mut Self {
        self.token_program = Some(token_program);
        self
    }
    /// `[optional account, default to '11111111111111111111111111111111']`
    /// System program
    #[inline(always)]
    pub fn system_program(&mut self, system_program: solana_program::pubkey::Pubkey) -> &mut Self {
        self.system_program = Some(system_program);
        self
    }
    /// `[optional account]`
    /// Rent info
    #[inline(always)]
    pub fn rent(&mut self, rent: Option<solana_program::pubkey::Pubkey>) -> &mut Self {
        self.rent = rent;
        self
    }
    #[inline(always)]
    pub fn mint_new_edition_from_master_edition_via_token_args(
        &mut self,
        mint_new_edition_from_master_edition_via_token_args: MintNewEditionFromMasterEditionViaTokenArgs,
    ) -> &mut Self {
        self.mint_new_edition_from_master_edition_via_token_args =
            Some(mint_new_edition_from_master_edition_via_token_args);
        self
    }
    /// Add an aditional account to the instruction.
    #[inline(always)]
    pub fn add_remaining_account(
        &mut self,
        account: solana_program::instruction::AccountMeta,
    ) -> &mut Self {
        self.__remaining_accounts.push(account);
        self
    }
    /// Add additional accounts to the instruction.
    #[inline(always)]
    pub fn add_remaining_accounts(
        &mut self,
        accounts: &[solana_program::instruction::AccountMeta],
    ) -> &mut Self {
        self.__remaining_accounts.extend_from_slice(accounts);
        self
    }
    #[allow(clippy::clone_on_copy)]
    pub fn instruction(&self) -> solana_program::instruction::Instruction {
        let accounts = MintNewEditionFromMasterEditionViaToken {
            new_metadata: self.new_metadata.expect("new_metadata is not set"),
            new_edition: self.new_edition.expect("new_edition is not set"),
            master_edition: self.master_edition.expect("master_edition is not set"),
            new_mint: self.new_mint.expect("new_mint is not set"),
            edition_mark_pda: self.edition_mark_pda.expect("edition_mark_pda is not set"),
            new_mint_authority: self
                .new_mint_authority
                .expect("new_mint_authority is not set"),
            payer: self.payer.expect("payer is not set"),
            token_account_owner: self
                .token_account_owner
                .expect("token_account_owner is not set"),
            token_account: self.token_account.expect("token_account is not set"),
            new_metadata_update_authority: self
                .new_metadata_update_authority
                .expect("new_metadata_update_authority is not set"),
            metadata: self.metadata.expect("metadata is not set"),
            token_program: self.token_program.unwrap_or(solana_program::pubkey!(
                "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
            )),
            system_program: self
                .system_program
                .unwrap_or(solana_program::pubkey!("11111111111111111111111111111111")),
            rent: self.rent,
        };
        let args = MintNewEditionFromMasterEditionViaTokenInstructionArgs {
            mint_new_edition_from_master_edition_via_token_args: self
                .mint_new_edition_from_master_edition_via_token_args
                .clone()
                .expect("mint_new_edition_from_master_edition_via_token_args is not set"),
        };

        accounts.instruction_with_remaining_accounts(args, &self.__remaining_accounts)
    }
}

/// `mint_new_edition_from_master_edition_via_token` CPI accounts.
pub struct MintNewEditionFromMasterEditionViaTokenCpiAccounts<'a, 'b> {
    /// New Metadata key (pda of ['metadata', program id, mint id])
    pub new_metadata: &'b solana_program::account_info::AccountInfo<'a>,
    /// New Edition (pda of ['metadata', program id, mint id, 'edition'])
    pub new_edition: &'b solana_program::account_info::AccountInfo<'a>,
    /// Master Record Edition V2 (pda of ['metadata', program id, master metadata mint id, 'edition'])
    pub master_edition: &'b solana_program::account_info::AccountInfo<'a>,
    /// Mint of new token - THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY
    pub new_mint: &'b solana_program::account_info::AccountInfo<'a>,
    /// Edition pda to mark creation - will be checked for pre-existence. (pda of ['metadata', program id, master metadata mint id, 'edition', edition_number]) where edition_number is NOT the edition number you pass in args but actually edition_number = floor(edition/EDITION_MARKER_BIT_SIZE).
    pub edition_mark_pda: &'b solana_program::account_info::AccountInfo<'a>,
    /// Mint authority of new mint
    pub new_mint_authority: &'b solana_program::account_info::AccountInfo<'a>,
    /// payer
    pub payer: &'b solana_program::account_info::AccountInfo<'a>,
    /// owner of token account containing master token (#8)
    pub token_account_owner: &'b solana_program::account_info::AccountInfo<'a>,
    /// token account containing token from master metadata mint
    pub token_account: &'b solana_program::account_info::AccountInfo<'a>,
    /// Update authority info for new metadata
    pub new_metadata_update_authority: &'b solana_program::account_info::AccountInfo<'a>,
    /// Master record metadata account
    pub metadata: &'b solana_program::account_info::AccountInfo<'a>,
    /// Token program
    pub token_program: &'b solana_program::account_info::AccountInfo<'a>,
    /// System program
    pub system_program: &'b solana_program::account_info::AccountInfo<'a>,
    /// Rent info
    pub rent: Option<&'b solana_program::account_info::AccountInfo<'a>>,
}

/// `mint_new_edition_from_master_edition_via_token` CPI instruction.
pub struct MintNewEditionFromMasterEditionViaTokenCpi<'a, 'b> {
    /// The program to invoke.
    pub __program: &'b solana_program::account_info::AccountInfo<'a>,
    /// New Metadata key (pda of ['metadata', program id, mint id])
    pub new_metadata: &'b solana_program::account_info::AccountInfo<'a>,
    /// New Edition (pda of ['metadata', program id, mint id, 'edition'])
    pub new_edition: &'b solana_program::account_info::AccountInfo<'a>,
    /// Master Record Edition V2 (pda of ['metadata', program id, master metadata mint id, 'edition'])
    pub master_edition: &'b solana_program::account_info::AccountInfo<'a>,
    /// Mint of new token - THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY
    pub new_mint: &'b solana_program::account_info::AccountInfo<'a>,
    /// Edition pda to mark creation - will be checked for pre-existence. (pda of ['metadata', program id, master metadata mint id, 'edition', edition_number]) where edition_number is NOT the edition number you pass in args but actually edition_number = floor(edition/EDITION_MARKER_BIT_SIZE).
    pub edition_mark_pda: &'b solana_program::account_info::AccountInfo<'a>,
    /// Mint authority of new mint
    pub new_mint_authority: &'b solana_program::account_info::AccountInfo<'a>,
    /// payer
    pub payer: &'b solana_program::account_info::AccountInfo<'a>,
    /// owner of token account containing master token (#8)
    pub token_account_owner: &'b solana_program::account_info::AccountInfo<'a>,
    /// token account containing token from master metadata mint
    pub token_account: &'b solana_program::account_info::AccountInfo<'a>,
    /// Update authority info for new metadata
    pub new_metadata_update_authority: &'b solana_program::account_info::AccountInfo<'a>,
    /// Master record metadata account
    pub metadata: &'b solana_program::account_info::AccountInfo<'a>,
    /// Token program
    pub token_program: &'b solana_program::account_info::AccountInfo<'a>,
    /// System program
    pub system_program: &'b solana_program::account_info::AccountInfo<'a>,
    /// Rent info
    pub rent: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    /// The arguments for the instruction.
    pub __args: MintNewEditionFromMasterEditionViaTokenInstructionArgs,
}

impl<'a, 'b> MintNewEditionFromMasterEditionViaTokenCpi<'a, 'b> {
    pub fn new(
        program: &'b solana_program::account_info::AccountInfo<'a>,
        accounts: MintNewEditionFromMasterEditionViaTokenCpiAccounts<'a, 'b>,
        args: MintNewEditionFromMasterEditionViaTokenInstructionArgs,
    ) -> Self {
        Self {
            __program: program,
            new_metadata: accounts.new_metadata,
            new_edition: accounts.new_edition,
            master_edition: accounts.master_edition,
            new_mint: accounts.new_mint,
            edition_mark_pda: accounts.edition_mark_pda,
            new_mint_authority: accounts.new_mint_authority,
            payer: accounts.payer,
            token_account_owner: accounts.token_account_owner,
            token_account: accounts.token_account,
            new_metadata_update_authority: accounts.new_metadata_update_authority,
            metadata: accounts.metadata,
            token_program: accounts.token_program,
            system_program: accounts.system_program,
            rent: accounts.rent,
            __args: args,
        }
    }
    #[inline(always)]
    pub fn invoke(&self) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed_with_remaining_accounts(&[], &[])
    }
    #[inline(always)]
    pub fn invoke_with_remaining_accounts(
        &self,
        remaining_accounts: &[(
            &'b solana_program::account_info::AccountInfo<'a>,
            bool,
            bool,
        )],
    ) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed_with_remaining_accounts(&[], remaining_accounts)
    }
    #[inline(always)]
    pub fn invoke_signed(
        &self,
        signers_seeds: &[&[&[u8]]],
    ) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed_with_remaining_accounts(signers_seeds, &[])
    }
    #[allow(clippy::clone_on_copy)]
    #[allow(clippy::vec_init_then_push)]
    pub fn invoke_signed_with_remaining_accounts(
        &self,
        signers_seeds: &[&[&[u8]]],
        remaining_accounts: &[(
            &'b solana_program::account_info::AccountInfo<'a>,
            bool,
            bool,
        )],
    ) -> solana_program::entrypoint::ProgramResult {
        let mut accounts = Vec::with_capacity(14 + remaining_accounts.len());
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.new_metadata.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.new_edition.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.master_edition.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.new_mint.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.edition_mark_pda.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.new_mint_authority.key,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.payer.key,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.token_account_owner.key,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.token_account.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.new_metadata_update_authority.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.metadata.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.token_program.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.system_program.key,
            false,
        ));
        if let Some(rent) = self.rent {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                *rent.key, false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }
        remaining_accounts.iter().for_each(|remaining_account| {
            accounts.push(solana_program::instruction::AccountMeta {
                pubkey: *remaining_account.0.key,
                is_signer: remaining_account.1,
                is_writable: remaining_account.2,
            })
        });
        let mut data = MintNewEditionFromMasterEditionViaTokenInstructionData::new()
            .try_to_vec()
            .unwrap();
        let mut args = self.__args.try_to_vec().unwrap();
        data.append(&mut args);

        let instruction = solana_program::instruction::Instruction {
            program_id: crate::MPL_TOKEN_METADATA_ID,
            accounts,
            data,
        };
        let mut account_infos = Vec::with_capacity(14 + 1 + remaining_accounts.len());
        account_infos.push(self.__program.clone());
        account_infos.push(self.new_metadata.clone());
        account_infos.push(self.new_edition.clone());
        account_infos.push(self.master_edition.clone());
        account_infos.push(self.new_mint.clone());
        account_infos.push(self.edition_mark_pda.clone());
        account_infos.push(self.new_mint_authority.clone());
        account_infos.push(self.payer.clone());
        account_infos.push(self.token_account_owner.clone());
        account_infos.push(self.token_account.clone());
        account_infos.push(self.new_metadata_update_authority.clone());
        account_infos.push(self.metadata.clone());
        account_infos.push(self.token_program.clone());
        account_infos.push(self.system_program.clone());
        if let Some(rent) = self.rent {
            account_infos.push(rent.clone());
        }
        remaining_accounts
            .iter()
            .for_each(|remaining_account| account_infos.push(remaining_account.0.clone()));

        if signers_seeds.is_empty() {
            solana_program::program::invoke(&instruction, &account_infos)
        } else {
            solana_program::program::invoke_signed(&instruction, &account_infos, signers_seeds)
        }
    }
}

/// Instruction builder for `MintNewEditionFromMasterEditionViaToken` via CPI.
///
/// ### Accounts:
///
///   0. `[writable]` new_metadata
///   1. `[writable]` new_edition
///   2. `[writable]` master_edition
///   3. `[writable]` new_mint
///   4. `[writable]` edition_mark_pda
///   5. `[signer]` new_mint_authority
///   6. `[writable, signer]` payer
///   7. `[signer]` token_account_owner
///   8. `[]` token_account
///   9. `[]` new_metadata_update_authority
///   10. `[]` metadata
///   11. `[]` token_program
///   12. `[]` system_program
///   13. `[optional]` rent
#[derive(Clone, Debug)]
pub struct MintNewEditionFromMasterEditionViaTokenCpiBuilder<'a, 'b> {
    instruction: Box<MintNewEditionFromMasterEditionViaTokenCpiBuilderInstruction<'a, 'b>>,
}

impl<'a, 'b> MintNewEditionFromMasterEditionViaTokenCpiBuilder<'a, 'b> {
    pub fn new(program: &'b solana_program::account_info::AccountInfo<'a>) -> Self {
        let instruction = Box::new(
            MintNewEditionFromMasterEditionViaTokenCpiBuilderInstruction {
                __program: program,
                new_metadata: None,
                new_edition: None,
                master_edition: None,
                new_mint: None,
                edition_mark_pda: None,
                new_mint_authority: None,
                payer: None,
                token_account_owner: None,
                token_account: None,
                new_metadata_update_authority: None,
                metadata: None,
                token_program: None,
                system_program: None,
                rent: None,
                mint_new_edition_from_master_edition_via_token_args: None,
                __remaining_accounts: Vec::new(),
            },
        );
        Self { instruction }
    }
    /// New Metadata key (pda of ['metadata', program id, mint id])
    #[inline(always)]
    pub fn new_metadata(
        &mut self,
        new_metadata: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.new_metadata = Some(new_metadata);
        self
    }
    /// New Edition (pda of ['metadata', program id, mint id, 'edition'])
    #[inline(always)]
    pub fn new_edition(
        &mut self,
        new_edition: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.new_edition = Some(new_edition);
        self
    }
    /// Master Record Edition V2 (pda of ['metadata', program id, master metadata mint id, 'edition'])
    #[inline(always)]
    pub fn master_edition(
        &mut self,
        master_edition: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.master_edition = Some(master_edition);
        self
    }
    /// Mint of new token - THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY
    #[inline(always)]
    pub fn new_mint(
        &mut self,
        new_mint: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.new_mint = Some(new_mint);
        self
    }
    /// Edition pda to mark creation - will be checked for pre-existence. (pda of ['metadata', program id, master metadata mint id, 'edition', edition_number]) where edition_number is NOT the edition number you pass in args but actually edition_number = floor(edition/EDITION_MARKER_BIT_SIZE).
    #[inline(always)]
    pub fn edition_mark_pda(
        &mut self,
        edition_mark_pda: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.edition_mark_pda = Some(edition_mark_pda);
        self
    }
    /// Mint authority of new mint
    #[inline(always)]
    pub fn new_mint_authority(
        &mut self,
        new_mint_authority: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.new_mint_authority = Some(new_mint_authority);
        self
    }
    /// payer
    #[inline(always)]
    pub fn payer(&mut self, payer: &'b solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.payer = Some(payer);
        self
    }
    /// owner of token account containing master token (#8)
    #[inline(always)]
    pub fn token_account_owner(
        &mut self,
        token_account_owner: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.token_account_owner = Some(token_account_owner);
        self
    }
    /// token account containing token from master metadata mint
    #[inline(always)]
    pub fn token_account(
        &mut self,
        token_account: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.token_account = Some(token_account);
        self
    }
    /// Update authority info for new metadata
    #[inline(always)]
    pub fn new_metadata_update_authority(
        &mut self,
        new_metadata_update_authority: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.new_metadata_update_authority = Some(new_metadata_update_authority);
        self
    }
    /// Master record metadata account
    #[inline(always)]
    pub fn metadata(
        &mut self,
        metadata: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.metadata = Some(metadata);
        self
    }
    /// Token program
    #[inline(always)]
    pub fn token_program(
        &mut self,
        token_program: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.token_program = Some(token_program);
        self
    }
    /// System program
    #[inline(always)]
    pub fn system_program(
        &mut self,
        system_program: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.system_program = Some(system_program);
        self
    }
    /// `[optional account]`
    /// Rent info
    #[inline(always)]
    pub fn rent(
        &mut self,
        rent: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    ) -> &mut Self {
        self.instruction.rent = rent;
        self
    }
    #[inline(always)]
    pub fn mint_new_edition_from_master_edition_via_token_args(
        &mut self,
        mint_new_edition_from_master_edition_via_token_args: MintNewEditionFromMasterEditionViaTokenArgs,
    ) -> &mut Self {
        self.instruction
            .mint_new_edition_from_master_edition_via_token_args =
            Some(mint_new_edition_from_master_edition_via_token_args);
        self
    }
    /// Add an additional account to the instruction.
    #[inline(always)]
    pub fn add_remaining_account(
        &mut self,
        account: &'b solana_program::account_info::AccountInfo<'a>,
        is_writable: bool,
        is_signer: bool,
    ) -> &mut Self {
        self.instruction
            .__remaining_accounts
            .push((account, is_writable, is_signer));
        self
    }
    /// Add additional accounts to the instruction.
    ///
    /// Each account is represented by a tuple of the `AccountInfo`, a `bool` indicating whether the account is writable or not,
    /// and a `bool` indicating whether the account is a signer or not.
    #[inline(always)]
    pub fn add_remaining_accounts(
        &mut self,
        accounts: &[(
            &'b solana_program::account_info::AccountInfo<'a>,
            bool,
            bool,
        )],
    ) -> &mut Self {
        self.instruction
            .__remaining_accounts
            .extend_from_slice(accounts);
        self
    }
    #[inline(always)]
    pub fn invoke(&self) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed(&[])
    }
    #[allow(clippy::clone_on_copy)]
    #[allow(clippy::vec_init_then_push)]
    pub fn invoke_signed(
        &self,
        signers_seeds: &[&[&[u8]]],
    ) -> solana_program::entrypoint::ProgramResult {
        let args = MintNewEditionFromMasterEditionViaTokenInstructionArgs {
            mint_new_edition_from_master_edition_via_token_args: self
                .instruction
                .mint_new_edition_from_master_edition_via_token_args
                .clone()
                .expect("mint_new_edition_from_master_edition_via_token_args is not set"),
        };
        let instruction = MintNewEditionFromMasterEditionViaTokenCpi {
            __program: self.instruction.__program,

            new_metadata: self
                .instruction
                .new_metadata
                .expect("new_metadata is not set"),

            new_edition: self
                .instruction
                .new_edition
                .expect("new_edition is not set"),

            master_edition: self
                .instruction
                .master_edition
                .expect("master_edition is not set"),

            new_mint: self.instruction.new_mint.expect("new_mint is not set"),

            edition_mark_pda: self
                .instruction
                .edition_mark_pda
                .expect("edition_mark_pda is not set"),

            new_mint_authority: self
                .instruction
                .new_mint_authority
                .expect("new_mint_authority is not set"),

            payer: self.instruction.payer.expect("payer is not set"),

            token_account_owner: self
                .instruction
                .token_account_owner
                .expect("token_account_owner is not set"),

            token_account: self
                .instruction
                .token_account
                .expect("token_account is not set"),

            new_metadata_update_authority: self
                .instruction
                .new_metadata_update_authority
                .expect("new_metadata_update_authority is not set"),

            metadata: self.instruction.metadata.expect("metadata is not set"),

            token_program: self
                .instruction
                .token_program
                .expect("token_program is not set"),

            system_program: self
                .instruction
                .system_program
                .expect("system_program is not set"),

            rent: self.instruction.rent,
            __args: args,
        };
        instruction.invoke_signed_with_remaining_accounts(
            signers_seeds,
            &self.instruction.__remaining_accounts,
        )
    }
}

#[derive(Clone, Debug)]
struct MintNewEditionFromMasterEditionViaTokenCpiBuilderInstruction<'a, 'b> {
    __program: &'b solana_program::account_info::AccountInfo<'a>,
    new_metadata: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    new_edition: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    master_edition: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    new_mint: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    edition_mark_pda: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    new_mint_authority: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    payer: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    token_account_owner: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    token_account: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    new_metadata_update_authority: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    metadata: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    token_program: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    system_program: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    rent: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    mint_new_edition_from_master_edition_via_token_args:
        Option<MintNewEditionFromMasterEditionViaTokenArgs>,
    /// Additional instruction accounts `(AccountInfo, is_writable, is_signer)`.
    __remaining_accounts: Vec<(
        &'b solana_program::account_info::AccountInfo<'a>,
        bool,
        bool,
    )>,
}
