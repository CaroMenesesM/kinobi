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

// Accounts.
export type BurnNftInstructionAccounts = {
  /** Metadata (pda of ['metadata', program id, mint id]) */
  metadata: PublicKey;
  /** NFT owner */
  owner: Signer;
  /** Mint of the NFT */
  mint: PublicKey;
  /** Token account to close */
  tokenAccount: PublicKey;
  /** MasterEdition2 of the NFT */
  masterEditionAccount: PublicKey;
  /** SPL Token Program */
  splTokenProgram?: PublicKey;
  /** Metadata of the Collection */
  collectionMetadata?: PublicKey;
};

// Arguments.
export type BurnNftInstructionData = { discriminator: number };
export type BurnNftInstructionArgs = {};

export function getBurnNftInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<BurnNftInstructionArgs, BurnNftInstructionData> {
  const s = context.serializer;
  return mapSerializer<
    BurnNftInstructionArgs,
    BurnNftInstructionData,
    BurnNftInstructionData
  >(
    s.struct<BurnNftInstructionData>(
      [['discriminator', s.u8]],
      'BurnNftInstructionArgs'
    ),
    (value) => ({ discriminator: 29, ...value } as BurnNftInstructionData)
  ) as Serializer<BurnNftInstructionArgs, BurnNftInstructionData>;
}

// Instruction.
export function burnNft(
  context: {
    serializer: Context['serializer'];
    eddsa: Context['eddsa'];
    programs?: Context['programs'];
  },
  input: BurnNftInstructionAccounts & BurnNftInstructionArgs
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

  // Owner.
  signers.push(input.owner);
  keys.push({
    pubkey: input.owner.publicKey,
    isSigner: true,
    isWritable: false,
  });

  // Mint.
  keys.push({ pubkey: input.mint, isSigner: false, isWritable: false });

  // Token Account.
  keys.push({ pubkey: input.tokenAccount, isSigner: false, isWritable: false });

  // Master Edition Account.
  keys.push({
    pubkey: input.masterEditionAccount,
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

  // Collection Metadata (optional).
  if (input.collectionMetadata) {
    keys.push({
      pubkey: input.collectionMetadata,
      isSigner: false,
      isWritable: false,
    });
  }

  // Data.
  const data = getBurnNftInstructionDataSerializer(context).serialize(input);

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain: 0,
  };
}
