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
  TransferArgs,
  TransferArgsArgs,
  getTransferArgsSerializer,
} from '../types';

// Accounts.
export type TransferInstructionAccounts = {
  /** Transfer authority (token or delegate owner) */
  authority: Signer;
  /** Delegate record PDA */
  delegateRecord?: PublicKey;
  /** Token account */
  token: PublicKey;
  /** Token account owner */
  tokenOwner: PublicKey;
  /** Destination token account */
  destination: PublicKey;
  /** Destination token account owner */
  destinationOwner: PublicKey;
  /** Mint of token asset */
  mint: PublicKey;
  /** Metadata (pda of ['metadata', program id, mint id]) */
  metadata: PublicKey;
  /** Master Edition of token asset */
  masterEdition?: PublicKey;
  /** SPL Token Program */
  splTokenProgram?: PublicKey;
  /** SPL Associated Token Account program */
  splAtaProgram?: PublicKey;
  /** System Program */
  systemProgram?: PublicKey;
  /** Instructions sysvar account */
  sysvarInstructions?: PublicKey;
  /** Token Authorization Rules Program */
  authorizationRulesProgram?: PublicKey;
  /** Token Authorization Rules account */
  authorizationRules?: PublicKey;
};

// Arguments.
export type TransferInstructionData = {
  discriminator: number;
  transferArgs: TransferArgs;
};
export type TransferInstructionArgs = { transferArgs: TransferArgsArgs };

export function getTransferInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<TransferInstructionArgs, TransferInstructionData> {
  const s = context.serializer;
  return mapSerializer<
    TransferInstructionArgs,
    TransferInstructionData,
    TransferInstructionData
  >(
    s.struct<TransferInstructionData>(
      [
        ['discriminator', s.u8],
        ['transferArgs', getTransferArgsSerializer(context)],
      ],
      'TransferInstructionArgs'
    ),
    (value) => ({ discriminator: 46, ...value } as TransferInstructionData)
  ) as Serializer<TransferInstructionArgs, TransferInstructionData>;
}

// Instruction.
export function transfer(
  context: {
    serializer: Context['serializer'];
    eddsa: Context['eddsa'];
    programs?: Context['programs'];
  },
  input: TransferInstructionAccounts & TransferInstructionArgs
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey = getProgramAddressWithFallback(
    context,
    'mplTokenMetadata',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
  );

  // Authority.
  signers.push(input.authority);
  keys.push({
    pubkey: input.authority.publicKey,
    isSigner: true,
    isWritable: false,
  });

  // Delegate Record (optional).
  if (input.delegateRecord) {
    keys.push({
      pubkey: input.delegateRecord,
      isSigner: false,
      isWritable: false,
    });
  }

  // Token.
  keys.push({ pubkey: input.token, isSigner: false, isWritable: false });

  // Token Owner.
  keys.push({ pubkey: input.tokenOwner, isSigner: false, isWritable: false });

  // Destination.
  keys.push({ pubkey: input.destination, isSigner: false, isWritable: false });

  // Destination Owner.
  keys.push({
    pubkey: input.destinationOwner,
    isSigner: false,
    isWritable: false,
  });

  // Mint.
  keys.push({ pubkey: input.mint, isSigner: false, isWritable: false });

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

  // Spl Ata Program.
  keys.push({
    pubkey:
      input.splAtaProgram ??
      getProgramAddressWithFallback(
        context,
        'splAssociatedToken',
        'TokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL'
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

  // Authorization Rules Program (optional).
  if (input.authorizationRulesProgram) {
    keys.push({
      pubkey: input.authorizationRulesProgram,
      isSigner: false,
      isWritable: false,
    });
  }

  // Authorization Rules (optional).
  if (input.authorizationRules) {
    keys.push({
      pubkey: input.authorizationRules,
      isSigner: false,
      isWritable: false,
    });
  }

  // Data.
  const data = getTransferInstructionDataSerializer(context).serialize(input);

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain: 0,
  };
}
