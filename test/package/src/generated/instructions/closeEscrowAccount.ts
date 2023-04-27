/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  AccountMeta,
  Context,
  PublicKey,
  Serializer,
  Signer,
  TransactionBuilder,
  mapSerializer,
  publicKey,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import { addObjectProperty, isWritable } from '../shared';

// Accounts.
export type CloseEscrowAccountInstructionAccounts = {
  /** Escrow account */
  escrow: PublicKey;
  /** Metadata account */
  metadata: PublicKey;
  /** Mint account */
  mint: PublicKey;
  /** Token account */
  tokenAccount: PublicKey;
  /** Edition account */
  edition: PublicKey;
  /** Wallet paying for the transaction and new account */
  payer?: Signer;
  /** System program */
  systemProgram?: PublicKey;
  /** Instructions sysvar account */
  sysvarInstructions?: PublicKey;
};

// Data.
export type CloseEscrowAccountInstructionData = { discriminator: number };

export type CloseEscrowAccountInstructionDataArgs = {};

export function getCloseEscrowAccountInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  CloseEscrowAccountInstructionDataArgs,
  CloseEscrowAccountInstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    CloseEscrowAccountInstructionDataArgs,
    any,
    CloseEscrowAccountInstructionData
  >(
    s.struct<CloseEscrowAccountInstructionData>([['discriminator', s.u8()]], {
      description: 'CloseEscrowAccountInstructionData',
    }),
    (value) => ({ ...value, discriminator: 39 })
  ) as Serializer<
    CloseEscrowAccountInstructionDataArgs,
    CloseEscrowAccountInstructionData
  >;
}

// Instruction.
export function closeEscrowAccount(
  context: Pick<Context, 'serializer' | 'programs' | 'payer'>,
  input: CloseEscrowAccountInstructionAccounts
): TransactionBuilder {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId = {
    ...context.programs.getPublicKey(
      'mplTokenMetadata',
      'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
    ),
    isWritable: false,
  };

  // Resolved inputs.
  const resolvingAccounts = {};
  addObjectProperty(resolvingAccounts, 'payer', input.payer ?? context.payer);
  addObjectProperty(
    resolvingAccounts,
    'systemProgram',
    input.systemProgram ?? {
      ...context.programs.getPublicKey(
        'splSystem',
        '11111111111111111111111111111111'
      ),
      isWritable: false,
    }
  );
  addObjectProperty(
    resolvingAccounts,
    'sysvarInstructions',
    input.sysvarInstructions ??
      publicKey('Sysvar1nstructions1111111111111111111111111')
  );
  const resolvedAccounts = { ...input, ...resolvingAccounts };

  // Escrow.
  keys.push({
    pubkey: resolvedAccounts.escrow,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.escrow, true),
  });

  // Metadata.
  keys.push({
    pubkey: resolvedAccounts.metadata,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.metadata, true),
  });

  // Mint.
  keys.push({
    pubkey: resolvedAccounts.mint,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.mint, false),
  });

  // Token Account.
  keys.push({
    pubkey: resolvedAccounts.tokenAccount,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.tokenAccount, false),
  });

  // Edition.
  keys.push({
    pubkey: resolvedAccounts.edition,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.edition, false),
  });

  // Payer.
  signers.push(resolvedAccounts.payer);
  keys.push({
    pubkey: resolvedAccounts.payer.publicKey,
    isSigner: true,
    isWritable: isWritable(resolvedAccounts.payer, true),
  });

  // System Program.
  keys.push({
    pubkey: resolvedAccounts.systemProgram,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.systemProgram, false),
  });

  // Sysvar Instructions.
  keys.push({
    pubkey: resolvedAccounts.sysvarInstructions,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.sysvarInstructions, false),
  });

  // Data.
  const data = getCloseEscrowAccountInstructionDataSerializer(
    context
  ).serialize({});

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
