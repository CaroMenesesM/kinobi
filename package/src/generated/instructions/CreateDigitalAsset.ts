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
  WrappedInstruction,
  getProgramAddressWithFallback,
  mapSerializer,
} from '@lorisleiva/js-core';
import { CreateArgs, CreateArgsArgs, getCreateArgsSerializer } from '../types';

// Accounts.
export type CreateDigitalAssetInstructionAccounts = {
  /** Metadata account key (pda of ['metadata', program id, mint id]) */
  metadata: PublicKey;
  /** Unallocated edition account with address as pda of ['metadata', program id, mint, 'edition'] */
  masterEdition?: PublicKey;
  /** Mint of token asset */
  mint: PublicKey;
  /** Mint authority */
  mintAuthority: Signer;
  /** Payer */
  payer: Signer;
  /** update authority info */
  updateAuthority: PublicKey;
  /** System program */
  systemProgram?: PublicKey;
  /** Instructions sysvar account */
  sysvarInstructions?: PublicKey;
  /** SPL Token program */
  splTokenProgram?: PublicKey;
};

// Arguments.
export type CreateDigitalAssetInstructionData = {
  discriminator: number;
  createArgs: CreateArgs;
};
export type CreateDigitalAssetInstructionArgs = { createArgs: CreateArgsArgs };

export function getCreateDigitalAssetInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  CreateDigitalAssetInstructionArgs,
  CreateDigitalAssetInstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    CreateDigitalAssetInstructionArgs,
    CreateDigitalAssetInstructionData,
    CreateDigitalAssetInstructionData
  >(
    s.struct<CreateDigitalAssetInstructionData>(
      [
        ['discriminator', s.u8],
        ['createArgs', getCreateArgsSerializer(context)],
      ],
      'CreateInstructionArgs'
    ),
    (value) =>
      ({ discriminator: 41, ...value } as CreateDigitalAssetInstructionData)
  ) as Serializer<
    CreateDigitalAssetInstructionArgs,
    CreateDigitalAssetInstructionData
  >;
}

// Instruction.
export function createDigitalAsset(
  context: {
    serializer: Context['serializer'];
    eddsa: Context['eddsa'];
    programs?: Context['programs'];
  },
  input: CreateDigitalAssetInstructionAccounts &
    CreateDigitalAssetInstructionArgs
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey = getProgramAddressWithFallback(
    context,
    'mplTokenMetadata',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
  );

  // Metadata.
  keys.push({ pubkey: input.metadata, isSigner: false, isWritable: false });

  // Master Edition (optional).
  if (input.masterEdition) {
    keys.push({
      pubkey: input.masterEdition,
      isSigner: false,
      isWritable: false,
    });
  }

  // Mint.
  keys.push({ pubkey: input.mint, isSigner: false, isWritable: false });

  // Mint Authority.
  signers.push(input.mintAuthority);
  keys.push({
    pubkey: input.mintAuthority.publicKey,
    isSigner: true,
    isWritable: false,
  });

  // Payer.
  signers.push(input.payer);
  keys.push({
    pubkey: input.payer.publicKey,
    isSigner: true,
    isWritable: false,
  });

  // Update Authority.
  keys.push({
    pubkey: input.updateAuthority,
    isSigner: false,
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

  // Spl Token Program.
  keys.push({
    pubkey:
      input.splTokenProgram ??
      getProgramAddressWithFallback(
        context,
        'splToken',
        'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
      ),
    isSigner: false,
    isWritable: false,
  });

  // Data.
  const data =
    getCreateDigitalAssetInstructionDataSerializer(context).serialize(input);

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain: 0,
  };
}
