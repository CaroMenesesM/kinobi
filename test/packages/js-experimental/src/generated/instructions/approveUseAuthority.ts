/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Address } from '@solana/addresses';
import {
  Codec,
  Decoder,
  Encoder,
  combineCodec,
  mapEncoder,
} from '@solana/codecs-core';
import {
  getStructDecoder,
  getStructEncoder,
} from '@solana/codecs-data-structures';
import {
  getU64Decoder,
  getU64Encoder,
  getU8Decoder,
  getU8Encoder,
} from '@solana/codecs-numbers';
import {
  AccountRole,
  IAccountMeta,
  IInstruction,
  IInstructionWithAccounts,
  IInstructionWithData,
  ReadonlyAccount,
  WritableAccount,
  WritableSignerAccount,
} from '@solana/instructions';
import { IAccountSignerMeta, TransactionSigner } from '@solana/signers';
import {
  ResolvedAccount,
  accountMetaWithDefault,
  getAccountMetasWithSigners,
} from '../shared';

export type ApproveUseAuthorityInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountUseAuthorityRecord extends string | IAccountMeta<string> = string,
  TAccountOwner extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountUser extends string | IAccountMeta<string> = string,
  TAccountOwnerTokenAccount extends string | IAccountMeta<string> = string,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountBurner extends string | IAccountMeta<string> = string,
  TAccountTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountRent extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountUseAuthorityRecord extends string
        ? WritableAccount<TAccountUseAuthorityRecord>
        : TAccountUseAuthorityRecord,
      TAccountOwner extends string
        ? WritableSignerAccount<TAccountOwner>
        : TAccountOwner,
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer>
        : TAccountPayer,
      TAccountUser extends string
        ? ReadonlyAccount<TAccountUser>
        : TAccountUser,
      TAccountOwnerTokenAccount extends string
        ? WritableAccount<TAccountOwnerTokenAccount>
        : TAccountOwnerTokenAccount,
      TAccountMetadata extends string
        ? ReadonlyAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountMint extends string
        ? ReadonlyAccount<TAccountMint>
        : TAccountMint,
      TAccountBurner extends string
        ? ReadonlyAccount<TAccountBurner>
        : TAccountBurner,
      TAccountTokenProgram extends string
        ? ReadonlyAccount<TAccountTokenProgram>
        : TAccountTokenProgram,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountRent extends string
        ? ReadonlyAccount<TAccountRent>
        : TAccountRent,
      ...TRemainingAccounts
    ]
  >;

export type ApproveUseAuthorityInstructionWithSigners<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountUseAuthorityRecord extends string | IAccountMeta<string> = string,
  TAccountOwner extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountUser extends string | IAccountMeta<string> = string,
  TAccountOwnerTokenAccount extends string | IAccountMeta<string> = string,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountBurner extends string | IAccountMeta<string> = string,
  TAccountTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountRent extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountUseAuthorityRecord extends string
        ? WritableAccount<TAccountUseAuthorityRecord>
        : TAccountUseAuthorityRecord,
      TAccountOwner extends string
        ? WritableSignerAccount<TAccountOwner> &
            IAccountSignerMeta<TAccountOwner>
        : TAccountOwner,
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer> &
            IAccountSignerMeta<TAccountPayer>
        : TAccountPayer,
      TAccountUser extends string
        ? ReadonlyAccount<TAccountUser>
        : TAccountUser,
      TAccountOwnerTokenAccount extends string
        ? WritableAccount<TAccountOwnerTokenAccount>
        : TAccountOwnerTokenAccount,
      TAccountMetadata extends string
        ? ReadonlyAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountMint extends string
        ? ReadonlyAccount<TAccountMint>
        : TAccountMint,
      TAccountBurner extends string
        ? ReadonlyAccount<TAccountBurner>
        : TAccountBurner,
      TAccountTokenProgram extends string
        ? ReadonlyAccount<TAccountTokenProgram>
        : TAccountTokenProgram,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountRent extends string
        ? ReadonlyAccount<TAccountRent>
        : TAccountRent,
      ...TRemainingAccounts
    ]
  >;

export type ApproveUseAuthorityInstructionData = {
  discriminator: number;
  numberOfUses: bigint;
};

export type ApproveUseAuthorityInstructionDataArgs = {
  numberOfUses: number | bigint;
};

export function getApproveUseAuthorityInstructionDataEncoder() {
  return mapEncoder(
    getStructEncoder<{ discriminator: number; numberOfUses: number | bigint }>([
      ['discriminator', getU8Encoder()],
      ['numberOfUses', getU64Encoder()],
    ]),
    (value) => ({ ...value, discriminator: 20 })
  ) satisfies Encoder<ApproveUseAuthorityInstructionDataArgs>;
}

export function getApproveUseAuthorityInstructionDataDecoder() {
  return getStructDecoder<ApproveUseAuthorityInstructionData>([
    ['discriminator', getU8Decoder()],
    ['numberOfUses', getU64Decoder()],
  ]) satisfies Decoder<ApproveUseAuthorityInstructionData>;
}

export function getApproveUseAuthorityInstructionDataCodec(): Codec<
  ApproveUseAuthorityInstructionDataArgs,
  ApproveUseAuthorityInstructionData
> {
  return combineCodec(
    getApproveUseAuthorityInstructionDataEncoder(),
    getApproveUseAuthorityInstructionDataDecoder()
  );
}

export type ApproveUseAuthorityInput<
  TAccountUseAuthorityRecord extends string,
  TAccountOwner extends string,
  TAccountPayer extends string,
  TAccountUser extends string,
  TAccountOwnerTokenAccount extends string,
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountBurner extends string,
  TAccountTokenProgram extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string
> = {
  /** Use Authority Record PDA */
  useAuthorityRecord: Address<TAccountUseAuthorityRecord>;
  /** Owner */
  owner: Address<TAccountOwner>;
  /** Payer */
  payer: Address<TAccountPayer>;
  /** A Use Authority */
  user: Address<TAccountUser>;
  /** Owned Token Account Of Mint */
  ownerTokenAccount: Address<TAccountOwnerTokenAccount>;
  /** Metadata account */
  metadata: Address<TAccountMetadata>;
  /** Mint of Metadata */
  mint: Address<TAccountMint>;
  /** Program As Signer (Burner) */
  burner: Address<TAccountBurner>;
  /** Token program */
  tokenProgram?: Address<TAccountTokenProgram>;
  /** System program */
  systemProgram?: Address<TAccountSystemProgram>;
  /** Rent info */
  rent?: Address<TAccountRent>;
  numberOfUses: ApproveUseAuthorityInstructionDataArgs['numberOfUses'];
};

export type ApproveUseAuthorityInputWithSigners<
  TAccountUseAuthorityRecord extends string,
  TAccountOwner extends string,
  TAccountPayer extends string,
  TAccountUser extends string,
  TAccountOwnerTokenAccount extends string,
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountBurner extends string,
  TAccountTokenProgram extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string
> = {
  /** Use Authority Record PDA */
  useAuthorityRecord: Address<TAccountUseAuthorityRecord>;
  /** Owner */
  owner: TransactionSigner<TAccountOwner>;
  /** Payer */
  payer: TransactionSigner<TAccountPayer>;
  /** A Use Authority */
  user: Address<TAccountUser>;
  /** Owned Token Account Of Mint */
  ownerTokenAccount: Address<TAccountOwnerTokenAccount>;
  /** Metadata account */
  metadata: Address<TAccountMetadata>;
  /** Mint of Metadata */
  mint: Address<TAccountMint>;
  /** Program As Signer (Burner) */
  burner: Address<TAccountBurner>;
  /** Token program */
  tokenProgram?: Address<TAccountTokenProgram>;
  /** System program */
  systemProgram?: Address<TAccountSystemProgram>;
  /** Rent info */
  rent?: Address<TAccountRent>;
  numberOfUses: ApproveUseAuthorityInstructionDataArgs['numberOfUses'];
};

export function getApproveUseAuthorityInstruction<
  TAccountUseAuthorityRecord extends string,
  TAccountOwner extends string,
  TAccountPayer extends string,
  TAccountUser extends string,
  TAccountOwnerTokenAccount extends string,
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountBurner extends string,
  TAccountTokenProgram extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: ApproveUseAuthorityInputWithSigners<
    TAccountUseAuthorityRecord,
    TAccountOwner,
    TAccountPayer,
    TAccountUser,
    TAccountOwnerTokenAccount,
    TAccountMetadata,
    TAccountMint,
    TAccountBurner,
    TAccountTokenProgram,
    TAccountSystemProgram,
    TAccountRent
  >
): ApproveUseAuthorityInstructionWithSigners<
  TProgram,
  TAccountUseAuthorityRecord,
  TAccountOwner,
  TAccountPayer,
  TAccountUser,
  TAccountOwnerTokenAccount,
  TAccountMetadata,
  TAccountMint,
  TAccountBurner,
  TAccountTokenProgram,
  TAccountSystemProgram,
  TAccountRent
>;
export function getApproveUseAuthorityInstruction<
  TAccountUseAuthorityRecord extends string,
  TAccountOwner extends string,
  TAccountPayer extends string,
  TAccountUser extends string,
  TAccountOwnerTokenAccount extends string,
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountBurner extends string,
  TAccountTokenProgram extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: ApproveUseAuthorityInput<
    TAccountUseAuthorityRecord,
    TAccountOwner,
    TAccountPayer,
    TAccountUser,
    TAccountOwnerTokenAccount,
    TAccountMetadata,
    TAccountMint,
    TAccountBurner,
    TAccountTokenProgram,
    TAccountSystemProgram,
    TAccountRent
  >
): ApproveUseAuthorityInstruction<
  TProgram,
  TAccountUseAuthorityRecord,
  TAccountOwner,
  TAccountPayer,
  TAccountUser,
  TAccountOwnerTokenAccount,
  TAccountMetadata,
  TAccountMint,
  TAccountBurner,
  TAccountTokenProgram,
  TAccountSystemProgram,
  TAccountRent
>;
export function getApproveUseAuthorityInstruction<
  TAccountUseAuthorityRecord extends string,
  TAccountOwner extends string,
  TAccountPayer extends string,
  TAccountUser extends string,
  TAccountOwnerTokenAccount extends string,
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountBurner extends string,
  TAccountTokenProgram extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: ApproveUseAuthorityInput<
    TAccountUseAuthorityRecord,
    TAccountOwner,
    TAccountPayer,
    TAccountUser,
    TAccountOwnerTokenAccount,
    TAccountMetadata,
    TAccountMint,
    TAccountBurner,
    TAccountTokenProgram,
    TAccountSystemProgram,
    TAccountRent
  >
): IInstruction {
  // Program address.
  const programAddress =
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof getApproveUseAuthorityInstructionRaw<
      TProgram,
      TAccountUseAuthorityRecord,
      TAccountOwner,
      TAccountPayer,
      TAccountUser,
      TAccountOwnerTokenAccount,
      TAccountMetadata,
      TAccountMint,
      TAccountBurner,
      TAccountTokenProgram,
      TAccountSystemProgram,
      TAccountRent
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    useAuthorityRecord: {
      value: input.useAuthorityRecord ?? null,
      isWritable: true,
    },
    owner: { value: input.owner ?? null, isWritable: true },
    payer: { value: input.payer ?? null, isWritable: true },
    user: { value: input.user ?? null, isWritable: false },
    ownerTokenAccount: {
      value: input.ownerTokenAccount ?? null,
      isWritable: true,
    },
    metadata: { value: input.metadata ?? null, isWritable: false },
    mint: { value: input.mint ?? null, isWritable: false },
    burner: { value: input.burner ?? null, isWritable: false },
    tokenProgram: { value: input.tokenProgram ?? null, isWritable: false },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    rent: { value: input.rent ?? null, isWritable: false },
  };

  // Original args.
  const args = { ...input };

  // Resolve default values.
  if (!accounts.tokenProgram.value) {
    accounts.tokenProgram.value =
      'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Address<'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'>;
  }
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value =
      '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;
  }

  // Get account metas and signers.
  const accountMetas = getAccountMetasWithSigners(
    accounts,
    'programId',
    programAddress
  );

  const instruction = getApproveUseAuthorityInstructionRaw(
    accountMetas as Record<keyof AccountMetas, IAccountMeta>,
    args as ApproveUseAuthorityInstructionDataArgs,
    programAddress
  );

  return instruction;
}

export function getApproveUseAuthorityInstructionRaw<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountUseAuthorityRecord extends string | IAccountMeta<string> = string,
  TAccountOwner extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountUser extends string | IAccountMeta<string> = string,
  TAccountOwnerTokenAccount extends string | IAccountMeta<string> = string,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountBurner extends string | IAccountMeta<string> = string,
  TAccountTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountRent extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    useAuthorityRecord: TAccountUseAuthorityRecord extends string
      ? Address<TAccountUseAuthorityRecord>
      : TAccountUseAuthorityRecord;
    owner: TAccountOwner extends string
      ? Address<TAccountOwner>
      : TAccountOwner;
    payer: TAccountPayer extends string
      ? Address<TAccountPayer>
      : TAccountPayer;
    user: TAccountUser extends string ? Address<TAccountUser> : TAccountUser;
    ownerTokenAccount: TAccountOwnerTokenAccount extends string
      ? Address<TAccountOwnerTokenAccount>
      : TAccountOwnerTokenAccount;
    metadata: TAccountMetadata extends string
      ? Address<TAccountMetadata>
      : TAccountMetadata;
    mint: TAccountMint extends string ? Address<TAccountMint> : TAccountMint;
    burner: TAccountBurner extends string
      ? Address<TAccountBurner>
      : TAccountBurner;
    tokenProgram?: TAccountTokenProgram extends string
      ? Address<TAccountTokenProgram>
      : TAccountTokenProgram;
    systemProgram?: TAccountSystemProgram extends string
      ? Address<TAccountSystemProgram>
      : TAccountSystemProgram;
    rent?: TAccountRent extends string ? Address<TAccountRent> : TAccountRent;
  },
  args: ApproveUseAuthorityInstructionDataArgs,
  programAddress: Address<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.useAuthorityRecord, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.owner, AccountRole.WRITABLE_SIGNER),
      accountMetaWithDefault(accounts.payer, AccountRole.WRITABLE_SIGNER),
      accountMetaWithDefault(accounts.user, AccountRole.READONLY),
      accountMetaWithDefault(accounts.ownerTokenAccount, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.metadata, AccountRole.READONLY),
      accountMetaWithDefault(accounts.mint, AccountRole.READONLY),
      accountMetaWithDefault(accounts.burner, AccountRole.READONLY),
      accountMetaWithDefault(
        accounts.tokenProgram ??
          ('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Address<'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'>),
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.systemProgram ??
          ('11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>),
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.rent ?? {
          address:
            'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      ...(remainingAccounts ?? []),
    ],
    data: getApproveUseAuthorityInstructionDataEncoder().encode(args),
    programAddress,
  } as ApproveUseAuthorityInstruction<
    TProgram,
    TAccountUseAuthorityRecord,
    TAccountOwner,
    TAccountPayer,
    TAccountUser,
    TAccountOwnerTokenAccount,
    TAccountMetadata,
    TAccountMint,
    TAccountBurner,
    TAccountTokenProgram,
    TAccountSystemProgram,
    TAccountRent,
    TRemainingAccounts
  >;
}

export type ParsedApproveUseAuthorityInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[]
> = {
  programAddress: Address<TProgram>;
  accounts: {
    /** Use Authority Record PDA */
    useAuthorityRecord: TAccountMetas[0];
    /** Owner */
    owner: TAccountMetas[1];
    /** Payer */
    payer: TAccountMetas[2];
    /** A Use Authority */
    user: TAccountMetas[3];
    /** Owned Token Account Of Mint */
    ownerTokenAccount: TAccountMetas[4];
    /** Metadata account */
    metadata: TAccountMetas[5];
    /** Mint of Metadata */
    mint: TAccountMetas[6];
    /** Program As Signer (Burner) */
    burner: TAccountMetas[7];
    /** Token program */
    tokenProgram: TAccountMetas[8];
    /** System program */
    systemProgram: TAccountMetas[9];
    /** Rent info */
    rent?: TAccountMetas[10] | undefined;
  };
  data: ApproveUseAuthorityInstructionData;
};

export function parseApproveUseAuthorityInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[]
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedApproveUseAuthorityInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 11) {
    // TODO: Coded error.
    throw new Error('Not enough accounts');
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts![accountIndex]!;
    accountIndex += 1;
    return accountMeta;
  };
  const getNextOptionalAccount = () => {
    const accountMeta = getNextAccount();
    return accountMeta.address === 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
      ? undefined
      : accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      useAuthorityRecord: getNextAccount(),
      owner: getNextAccount(),
      payer: getNextAccount(),
      user: getNextAccount(),
      ownerTokenAccount: getNextAccount(),
      metadata: getNextAccount(),
      mint: getNextAccount(),
      burner: getNextAccount(),
      tokenProgram: getNextAccount(),
      systemProgram: getNextAccount(),
      rent: getNextOptionalAccount(),
    },
    data: getApproveUseAuthorityInstructionDataDecoder().decode(
      instruction.data
    ),
  };
}
