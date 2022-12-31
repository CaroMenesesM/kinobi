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
  Signer,
  WrappedInstruction,
  getProgramAddressWithFallback,
  mapSerializer,
} from '@lorisleiva/js-core';

// Accounts.
export type CreateEscrowAccountInstructionAccounts = {
  /** Escrow account */
  escrow: PublicKey;
  /** Metadata account */
  metadata: PublicKey;
  /** Mint account */
  mint: PublicKey;
  /** Token account of the token */
  tokenAccount: PublicKey;
  /** Edition account */
  edition: PublicKey;
  /** Wallet paying for the transaction and new account */
  payer: Signer;
  /** System program */
  systemProgram?: PublicKey;
  /** Instructions sysvar account */
  sysvarInstructions?: PublicKey;
  /** Authority/creator of the escrow account */
  authority?: Signer;
};

// Arguments.
export type CreateEscrowAccountInstructionData = { discriminator: number };
export type CreateEscrowAccountInstructionArgs = {};

export function getCreateEscrowAccountInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  CreateEscrowAccountInstructionArgs,
  CreateEscrowAccountInstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    CreateEscrowAccountInstructionArgs,
    CreateEscrowAccountInstructionData,
    CreateEscrowAccountInstructionData
  >(
    s.struct<CreateEscrowAccountInstructionData>(
      [['discriminator', s.u8]],
      'CreateEscrowAccountInstructionArgs'
    ),
    (value) => ({ discriminator: 38, ...value })
  ) as Serializer<
    CreateEscrowAccountInstructionArgs,
    CreateEscrowAccountInstructionData
  >;
}

// Instruction.
export function createEscrowAccount(
  context: {
    serializer: Context['serializer'];
    eddsa: Context['eddsa'];
    programs?: Context['programs'];
  },
  input: CreateEscrowAccountInstructionAccounts &
    CreateEscrowAccountInstructionArgs
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey = getProgramAddressWithFallback(
    context,
    'mplDigitalAsset',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
  );

  // Escrow.
  keys.push({ pubkey: input.escrow, isSigner: false, isWritable: false });

  // Metadata.
  keys.push({ pubkey: input.metadata, isSigner: false, isWritable: false });

  // Mint.
  keys.push({ pubkey: input.mint, isSigner: false, isWritable: false });

  // Token Account.
  keys.push({ pubkey: input.tokenAccount, isSigner: false, isWritable: false });

  // Edition.
  keys.push({ pubkey: input.edition, isSigner: false, isWritable: false });

  // Payer.
  signers.push(input.payer);
  keys.push({
    pubkey: input.payer.publicKey,
    isSigner: true,
    isWritable: false,
  });

  // System Program.
  keys.push({
    pubkey:
      input.systemProgram ??
      getProgramAddressWithFallback(
        context,
        'splSystem',
        '11111111111111111111111111111111'
      ),
    isSigner: false,
    isWritable: false,
  });

  // Sysvar Instructions.
  keys.push({
    pubkey:
      input.sysvarInstructions ??
      context.eddsa.createPublicKey(
        'Sysvar1nstructions1111111111111111111111111'
      ),
    isSigner: false,
    isWritable: false,
  });

  // Authority (optional).
  if (input.authority) {
    signers.push(input.authority);
    keys.push({
      pubkey: input.authority.publicKey,
      isSigner: true,
      isWritable: false,
    });
  }

  // Data.
  const data =
    getCreateEscrowAccountInstructionDataSerializer(context).serialize(input);

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain: 0,
  };
}
