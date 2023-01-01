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
import {
  CreateMasterEditionArgs,
  CreateMasterEditionArgsArgs,
  getCreateMasterEditionArgsSerializer,
} from '../types';

// Accounts.
export type CreateMasterEditionV3InstructionAccounts = {
  /** Unallocated edition V2 account with address as pda of ['metadata', program id, mint, 'edition'] */
  edition: PublicKey;
  /** Metadata mint */
  mint: PublicKey;
  /** Update authority */
  updateAuthority: Signer;
  /** Mint authority on the metadata's mint - THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY */
  mintAuthority: Signer;
  /** payer */
  payer: Signer;
  /** Metadata account */
  metadata: PublicKey;
  /** Token program */
  tokenProgram?: PublicKey;
  /** System program */
  systemProgram?: PublicKey;
  /** Rent info */
  rent?: PublicKey;
};

// Arguments.
export type CreateMasterEditionV3InstructionData = {
  discriminator: number;
  createMasterEditionArgs: CreateMasterEditionArgs;
};
export type CreateMasterEditionV3InstructionArgs = {
  createMasterEditionArgs: CreateMasterEditionArgsArgs;
};

export function getCreateMasterEditionV3InstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  CreateMasterEditionV3InstructionArgs,
  CreateMasterEditionV3InstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    CreateMasterEditionV3InstructionArgs,
    CreateMasterEditionV3InstructionData,
    CreateMasterEditionV3InstructionData
  >(
    s.struct<CreateMasterEditionV3InstructionData>(
      [
        ['discriminator', s.u8],
        [
          'createMasterEditionArgs',
          getCreateMasterEditionArgsSerializer(context),
        ],
      ],
      'CreateMasterEditionV3InstructionArgs'
    ),
    (value) =>
      ({ discriminator: 17, ...value } as CreateMasterEditionV3InstructionData)
  ) as Serializer<
    CreateMasterEditionV3InstructionArgs,
    CreateMasterEditionV3InstructionData
  >;
}

// Instruction.
export function createMasterEditionV3(
  context: {
    serializer: Context['serializer'];
    eddsa: Context['eddsa'];
    programs?: Context['programs'];
  },
  input: CreateMasterEditionV3InstructionAccounts &
    CreateMasterEditionV3InstructionArgs
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey = getProgramAddressWithFallback(
    context,
    'mplTokenMetadata',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
  );

  // Edition.
  keys.push({ pubkey: input.edition, isSigner: false, isWritable: false });

  // Mint.
  keys.push({ pubkey: input.mint, isSigner: false, isWritable: false });

  // Update Authority.
  signers.push(input.updateAuthority);
  keys.push({
    pubkey: input.updateAuthority.publicKey,
    isSigner: true,
    isWritable: false,
  });

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

  // Metadata.
  keys.push({ pubkey: input.metadata, isSigner: false, isWritable: false });

  // Token Program.
  keys.push({
    pubkey:
      input.tokenProgram ??
      getProgramAddressWithFallback(
        context,
        'splToken',
        'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
      ),
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

  // Rent (optional).
  if (input.rent) {
    keys.push({ pubkey: input.rent, isSigner: false, isWritable: false });
  }

  // Data.
  const data =
    getCreateMasterEditionV3InstructionDataSerializer(context).serialize(input);

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain: 0,
  };
}
