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
  Option,
  PublicKey,
  Serializer,
  Signer,
  WrappedInstruction,
  getProgramAddressWithFallback,
  mapSerializer,
} from '@lorisleiva/js-core';
import { Data, DataArgs, getDataSerializer } from '../types';

// Accounts.
export type UpdateMetadataAccountInstructionAccounts = {
  /** Metadata account */
  metadata: PublicKey;
  /** Update authority key */
  updateAuthority: Signer;
};

// Arguments.
export type UpdateMetadataAccountInstructionData = {
  data: Option<Data>;
  updateAuthority: Option<PublicKey>;
  primarySaleHappened: Option<boolean>;
};
export type UpdateMetadataAccountInstructionArgs = {
  data: Option<DataArgs>;
  updateAuthority: Option<PublicKey>;
  primarySaleHappened: Option<boolean>;
};

// Discriminator.
export type UpdateMetadataAccountInstructionDiscriminator = number;
export function getUpdateMetadataAccountInstructionDiscriminator(): UpdateMetadataAccountInstructionDiscriminator {
  return 1;
}

// Data.
type UpdateMetadataAccountInstructionData =
  UpdateMetadataAccountInstructionArgs & {
    discriminator: UpdateMetadataAccountInstructionDiscriminator;
  };
export function getUpdateMetadataAccountInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<UpdateMetadataAccountInstructionArgs> {
  const s = context.serializer;
  const discriminator = getUpdateMetadataAccountInstructionDiscriminator();
  const serializer: Serializer<UpdateMetadataAccountInstructionData> =
    s.struct<UpdateMetadataAccountInstructionData>(
      [
        ['discriminator', s.u8],
        ['data', s.option(getDataSerializer(context))],
        ['updateAuthority', s.option(s.publicKey)],
        ['primarySaleHappened', s.option(s.bool)],
      ],
      'UpdateMetadataAccountInstructionData'
    );
  return mapSerializer(
    serializer,
    (value: UpdateMetadataAccountInstructionArgs) => ({
      ...value,
      discriminator,
    })
  );
}

// Instruction.
export function updateMetadataAccount(
  context: {
    serializer: Context['serializer'];
    eddsa: Context['eddsa'];
    programs?: Context['programs'];
  },
  accounts: UpdateMetadataAccountInstructionAccounts,
  args: UpdateMetadataAccountInstructionArgs
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey = getProgramAddressWithFallback(
    context,
    'mplDigitalAsset',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
  );

  // Metadata.
  keys.push({ pubkey: accounts.metadata, isSigner: false, isWritable: false });

  // Update Authority.
  signers.push(accounts.updateAuthority);
  keys.push({
    pubkey: accounts.updateAuthority.publicKey,
    isSigner: true,
    isWritable: false,
  });

  // Data.
  const data =
    getUpdateMetadataAccountInstructionDataSerializer(context).serialize(args);

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain: 0,
  };
}
