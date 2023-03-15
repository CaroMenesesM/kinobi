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
  checkForIsWritableOverride as isWritable,
  mapSerializer,
  transactionBuilder,
} from '@metaplex-foundation/umi';

// Accounts.
export type SetAndVerifyCollectionInstructionAccounts = {
  /** Metadata account */
  metadata: PublicKey;
  /** Collection Update authority */
  collectionAuthority: Signer;
  /** Payer */
  payer?: Signer;
  /** Update Authority of Collection NFT and NFT */
  updateAuthority: PublicKey;
  /** Mint of the Collection */
  collectionMint: PublicKey;
  /** Metadata Account of the Collection */
  collection: PublicKey;
  /** MasterEdition2 Account of the Collection Token */
  collectionMasterEditionAccount: PublicKey;
  /** Collection Authority Record PDA */
  collectionAuthorityRecord?: PublicKey;
};

// Arguments.
export type SetAndVerifyCollectionInstructionData = { discriminator: number };

export type SetAndVerifyCollectionInstructionDataArgs = {};

export function getSetAndVerifyCollectionInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  SetAndVerifyCollectionInstructionDataArgs,
  SetAndVerifyCollectionInstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    SetAndVerifyCollectionInstructionDataArgs,
    SetAndVerifyCollectionInstructionData,
    SetAndVerifyCollectionInstructionData
  >(
    s.struct<SetAndVerifyCollectionInstructionData>(
      [['discriminator', s.u8()]],
      { description: 'SetAndVerifyCollectionInstructionData' }
    ),
    (value) =>
      ({ ...value, discriminator: 25 } as SetAndVerifyCollectionInstructionData)
  ) as Serializer<
    SetAndVerifyCollectionInstructionDataArgs,
    SetAndVerifyCollectionInstructionData
  >;
}

// Instruction.
export function setAndVerifyCollection(
  context: Pick<Context, 'serializer' | 'programs' | 'payer'>,
  input: SetAndVerifyCollectionInstructionAccounts
): TransactionBuilder {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId = context.programs.getPublicKey(
    'mplTokenMetadata',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
  );

  // Resolved accounts.
  const metadataAccount = input.metadata;
  const collectionAuthorityAccount = input.collectionAuthority;
  const payerAccount = input.payer ?? context.payer;
  const updateAuthorityAccount = input.updateAuthority;
  const collectionMintAccount = input.collectionMint;
  const collectionAccount = input.collection;
  const collectionMasterEditionAccountAccount =
    input.collectionMasterEditionAccount;
  const collectionAuthorityRecordAccount = input.collectionAuthorityRecord;

  // Metadata.
  keys.push({
    pubkey: metadataAccount,
    isSigner: false,
    isWritable: isWritable(metadataAccount, true),
  });

  // Collection Authority.
  signers.push(collectionAuthorityAccount);
  keys.push({
    pubkey: collectionAuthorityAccount.publicKey,
    isSigner: true,
    isWritable: isWritable(collectionAuthorityAccount, true),
  });

  // Payer.
  signers.push(payerAccount);
  keys.push({
    pubkey: payerAccount.publicKey,
    isSigner: true,
    isWritable: isWritable(payerAccount, true),
  });

  // Update Authority.
  keys.push({
    pubkey: updateAuthorityAccount,
    isSigner: false,
    isWritable: isWritable(updateAuthorityAccount, false),
  });

  // Collection Mint.
  keys.push({
    pubkey: collectionMintAccount,
    isSigner: false,
    isWritable: isWritable(collectionMintAccount, false),
  });

  // Collection.
  keys.push({
    pubkey: collectionAccount,
    isSigner: false,
    isWritable: isWritable(collectionAccount, false),
  });

  // Collection Master Edition Account.
  keys.push({
    pubkey: collectionMasterEditionAccountAccount,
    isSigner: false,
    isWritable: isWritable(collectionMasterEditionAccountAccount, false),
  });

  // Collection Authority Record (optional).
  if (collectionAuthorityRecordAccount) {
    keys.push({
      pubkey: collectionAuthorityRecordAccount,
      isSigner: false,
      isWritable: isWritable(collectionAuthorityRecordAccount, false),
    });
  }

  // Data.
  const data = getSetAndVerifyCollectionInstructionDataSerializer(
    context
  ).serialize({});

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
