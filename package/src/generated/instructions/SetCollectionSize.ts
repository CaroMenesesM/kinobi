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
  SetCollectionSizeArgs,
  SetCollectionSizeArgsArgs,
  getSetCollectionSizeArgsSerializer,
} from '../types';

// Accounts.
export type SetCollectionSizeInstructionAccounts = {
  /** Collection Metadata account */
  collectionMetadata: PublicKey;
  /** Collection Update authority */
  collectionAuthority: Signer;
  /** Mint of the Collection */
  collectionMint: PublicKey;
  /** Collection Authority Record PDA */
  collectionAuthorityRecord?: PublicKey;
};

// Arguments.
export type SetCollectionSizeInstructionData = {
  discriminator: number;
  setCollectionSizeArgs: SetCollectionSizeArgs;
};
export type SetCollectionSizeInstructionArgs = {
  setCollectionSizeArgs: SetCollectionSizeArgsArgs;
};

export function getSetCollectionSizeInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  SetCollectionSizeInstructionArgs,
  SetCollectionSizeInstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    SetCollectionSizeInstructionArgs,
    SetCollectionSizeInstructionData,
    SetCollectionSizeInstructionData
  >(
    s.struct<SetCollectionSizeInstructionData>(
      [
        ['discriminator', s.u8],
        ['setCollectionSizeArgs', getSetCollectionSizeArgsSerializer(context)],
      ],
      'SetCollectionSizeInstructionArgs'
    ),
    (value) =>
      ({ discriminator: 34, ...value } as SetCollectionSizeInstructionData)
  ) as Serializer<
    SetCollectionSizeInstructionArgs,
    SetCollectionSizeInstructionData
  >;
}

// Instruction.
export function setCollectionSize(
  context: {
    serializer: Context['serializer'];
    eddsa: Context['eddsa'];
    programs?: Context['programs'];
  },
  input: SetCollectionSizeInstructionAccounts & SetCollectionSizeInstructionArgs
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey = getProgramAddressWithFallback(
    context,
    'mplTokenMetadata',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
  );

  // Collection Metadata.
  keys.push({
    pubkey: input.collectionMetadata,
    isSigner: false,
    isWritable: false,
  });

  // Collection Authority.
  signers.push(input.collectionAuthority);
  keys.push({
    pubkey: input.collectionAuthority.publicKey,
    isSigner: true,
    isWritable: false,
  });

  // Collection Mint.
  keys.push({
    pubkey: input.collectionMint,
    isSigner: false,
    isWritable: false,
  });

  // Collection Authority Record (optional).
  if (input.collectionAuthorityRecord) {
    keys.push({
      pubkey: input.collectionAuthorityRecord,
      isSigner: false,
      isWritable: false,
    });
  }

  // Data.
  const data =
    getSetCollectionSizeInstructionDataSerializer(context).serialize(input);

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain: 0,
  };
}
