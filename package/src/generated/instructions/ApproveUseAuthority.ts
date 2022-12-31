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
export type ApproveUseAuthorityInstructionAccounts = {
  /** Use Authority Record PDA */
  useAuthorityRecord: PublicKey;
  /** Owner */
  owner: Signer;
  /** Payer */
  payer: Signer;
  /** A Use Authority */
  user: PublicKey;
  /** Owned Token Account Of Mint */
  ownerTokenAccount: PublicKey;
  /** Metadata account */
  metadata: PublicKey;
  /** Mint of Metadata */
  mint: PublicKey;
  /** Program As Signer (Burner) */
  burner: PublicKey;
  /** Token program */
  tokenProgram?: PublicKey;
  /** System program */
  systemProgram?: PublicKey;
  /** Rent info */
  rent?: PublicKey;
};

// Arguments.
export type ApproveUseAuthorityInstructionData = {
  discriminator: number;
  numberOfUses: bigint;
};
export type ApproveUseAuthorityInstructionArgs = {
  numberOfUses: number | bigint;
};

export function getApproveUseAuthorityInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  ApproveUseAuthorityInstructionArgs,
  ApproveUseAuthorityInstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    ApproveUseAuthorityInstructionArgs,
    ApproveUseAuthorityInstructionData,
    ApproveUseAuthorityInstructionData
  >(
    s.struct<ApproveUseAuthorityInstructionData>(
      [
        ['discriminator', s.u8],
        ['numberOfUses', s.u64],
      ],
      'ApproveUseAuthorityInstructionArgs'
    ),
    (value) => ({ discriminator: 20, ...value })
  ) as Serializer<
    ApproveUseAuthorityInstructionArgs,
    ApproveUseAuthorityInstructionData
  >;
}

// Instruction.
export function approveUseAuthority(
  context: {
    serializer: Context['serializer'];
    eddsa: Context['eddsa'];
    programs?: Context['programs'];
  },
  input: ApproveUseAuthorityInstructionAccounts &
    ApproveUseAuthorityInstructionArgs
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey = getProgramAddressWithFallback(
    context,
    'mplDigitalAsset',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
  );

  // Use Authority Record.
  keys.push({
    pubkey: input.useAuthorityRecord,
    isSigner: false,
    isWritable: false,
  });

  // Owner.
  signers.push(input.owner);
  keys.push({
    pubkey: input.owner.publicKey,
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

  // User.
  keys.push({ pubkey: input.user, isSigner: false, isWritable: false });

  // Owner Token Account.
  keys.push({
    pubkey: input.ownerTokenAccount,
    isSigner: false,
    isWritable: false,
  });

  // Metadata.
  keys.push({ pubkey: input.metadata, isSigner: false, isWritable: false });

  // Mint.
  keys.push({ pubkey: input.mint, isSigner: false, isWritable: false });

  // Burner.
  keys.push({ pubkey: input.burner, isSigner: false, isWritable: false });

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
    getApproveUseAuthorityInstructionDataSerializer(context).serialize(input);

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain: 0,
  };
}
