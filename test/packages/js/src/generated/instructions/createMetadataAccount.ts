/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  ACCOUNT_HEADER_SIZE,
  AccountMeta,
  Context,
  Option,
  OptionOrNullable,
  Pda,
  PublicKey,
  Signer,
  TransactionBuilder,
  publicKey,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import {
  Serializer,
  array,
  bool,
  mapSerializer,
  option,
  string,
  struct,
  u16,
  u8,
} from '@metaplex-foundation/umi/serializers';
import { findMetadataPda, getMetadataSize } from '../accounts';
import {
  PickPartial,
  ResolvedAccount,
  ResolvedAccountsWithIndices,
  expectPda,
  expectPublicKey,
  getAccountMetasAndSigners,
} from '../shared';
import { Creator, CreatorArgs, getCreatorSerializer } from '../types';

// Accounts.
export type CreateMetadataAccountInstructionAccounts = {
  /** Metadata key (pda of ['metadata', program id, mint id]) */
  metadata?: Pda;
  /** Mint of token asset */
  mint: PublicKey | Pda;
  /** Mint authority */
  mintAuthority: Signer;
  /** payer */
  payer?: Signer;
  /** update authority info */
  updateAuthority: PublicKey | Pda;
  /** System program */
  systemProgram?: PublicKey | Pda;
  /** Rent info */
  rent?: PublicKey | Pda;
};

// Data.
export type CreateMetadataAccountInstructionData = {
  discriminator: number;
  data: {
    name: string;
    symbol: string;
    uri: string;
    sellerFeeBasisPoints: number;
    creators: Option<Array<Creator>>;
  };
  isMutable: boolean;
  metadataBump: number;
};

export type CreateMetadataAccountInstructionDataArgs = {
  data: {
    name: string;
    symbol: string;
    uri: string;
    sellerFeeBasisPoints: number;
    creators: OptionOrNullable<Array<CreatorArgs>>;
  };
  isMutable: boolean;
  metadataBump: number;
};

export function getCreateMetadataAccountInstructionDataSerializer(): Serializer<
  CreateMetadataAccountInstructionDataArgs,
  CreateMetadataAccountInstructionData
> {
  return mapSerializer<
    CreateMetadataAccountInstructionDataArgs,
    any,
    CreateMetadataAccountInstructionData
  >(
    struct<CreateMetadataAccountInstructionData>(
      [
        ['discriminator', u8()],
        [
          'data',
          struct<any>([
            ['name', string()],
            ['symbol', string()],
            ['uri', string()],
            ['sellerFeeBasisPoints', u16()],
            ['creators', option(array(getCreatorSerializer()))],
          ]),
        ],
        ['isMutable', bool()],
        ['metadataBump', u8()],
      ],
      { description: 'CreateMetadataAccountInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 0 })
  ) as Serializer<
    CreateMetadataAccountInstructionDataArgs,
    CreateMetadataAccountInstructionData
  >;
}

// Args.
export type CreateMetadataAccountInstructionArgs = PickPartial<
  CreateMetadataAccountInstructionDataArgs,
  'metadataBump'
>;

// Instruction.
export function createMetadataAccount(
  context: Pick<Context, 'programs' | 'eddsa' | 'payer'>,
  input: CreateMetadataAccountInstructionAccounts &
    CreateMetadataAccountInstructionArgs
): TransactionBuilder {
  // Program ID.
  const programId = context.programs.getPublicKey(
    'mplTokenMetadata',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
  );

  // Accounts.
  const resolvedAccounts: ResolvedAccountsWithIndices = {
    metadata: { index: 0, isWritable: true, value: input.metadata ?? null },
    mint: { index: 1, isWritable: false, value: input.mint ?? null },
    mintAuthority: {
      index: 2,
      isWritable: false,
      value: input.mintAuthority ?? null,
    },
    payer: { index: 3, isWritable: true, value: input.payer ?? null },
    updateAuthority: {
      index: 4,
      isWritable: false,
      value: input.updateAuthority ?? null,
    },
    systemProgram: {
      index: 5,
      isWritable: false,
      value: input.systemProgram ?? null,
    },
    rent: { index: 6, isWritable: false, value: input.rent ?? null },
  };

  // Arguments.
  const resolvedArgs: CreateMetadataAccountInstructionArgs = { ...input };

  // Default values.
  if (!resolvedAccounts.metadata.value) {
    resolvedAccounts.metadata.value = findMetadataPda(context, {
      mint: expectPublicKey(resolvedAccounts.mint.value),
    });
  }
  if (!resolvedAccounts.payer.value) {
    resolvedAccounts.payer.value = context.payer;
  }
  if (!resolvedAccounts.systemProgram.value) {
    resolvedAccounts.systemProgram.value = context.programs.getPublicKey(
      'splSystem',
      '11111111111111111111111111111111'
    );
    resolvedAccounts.systemProgram.isWritable = false;
  }
  if (!resolvedAccounts.rent.value) {
    resolvedAccounts.rent.value = publicKey(
      'SysvarRent111111111111111111111111111111111'
    );
  }
  if (!resolvedArgs.metadataBump) {
    resolvedArgs.metadataBump = expectPda(resolvedAccounts.metadata.value)[1];
  }

  // Accounts in order.
  const orderedAccounts: ResolvedAccount[] = Object.values(
    resolvedAccounts
  ).sort((a, b) => a.index - b.index);

  // Keys and Signers.
  const [keys, signers] = getAccountMetasAndSigners(
    orderedAccounts,
    'programId',
    programId
  );

  // Data.
  const data = getCreateMetadataAccountInstructionDataSerializer().serialize(
    resolvedArgs as CreateMetadataAccountInstructionDataArgs
  );

  // Bytes Created On Chain.
  const bytesCreatedOnChain = getMetadataSize() + ACCOUNT_HEADER_SIZE;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
