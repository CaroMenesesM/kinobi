/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Account,
  Context,
  Option,
  Pda,
  PublicKey,
  RpcAccount,
  Serializer,
  assertAccountExists,
  deserializeAccount,
  getProgramAddressWithFallback,
  mapSerializer,
  utf8,
} from '@lorisleiva/js-core';
import {
  Collection,
  CollectionArgs,
  CollectionDetails,
  CollectionDetailsArgs,
  Data,
  DataArgs,
  DelegateState,
  ProgrammableConfig,
  TmKey,
  TokenStandard,
  Uses,
  UsesArgs,
  getCollectionDetailsSerializer,
  getCollectionSerializer,
  getDataSerializer,
  getDelegateStateSerializer,
  getProgrammableConfigSerializer,
  getTmKeySerializer,
  getTokenStandardSerializer,
  getUsesSerializer,
} from '../types';

export type Metadata = Account<MetadataAccountData>;

export type MetadataAccountData = {
  key: TmKey;
  updateAuthority: PublicKey;
  mint: PublicKey;
  data: Data;
  primarySaleHappened: boolean;
  isMutable: boolean;
  editionNonce: Option<number>;
  tokenStandard: Option<TokenStandard>;
  collection: Option<Collection>;
  uses: Option<Uses>;
  collectionDetails: Option<CollectionDetails>;
  programmableConfig: Option<ProgrammableConfig>;
  delegateState: Option<DelegateState>;
};

export type MetadataAccountArgs = {
  updateAuthority: PublicKey;
  mint: PublicKey;
  data: DataArgs;
  primarySaleHappened: boolean;
  isMutable: boolean;
  editionNonce: Option<number>;
  tokenStandard: Option<TokenStandard>;
  collection: Option<CollectionArgs>;
  uses: Option<UsesArgs>;
  collectionDetails: Option<CollectionDetailsArgs>;
  programmableConfig: Option<ProgrammableConfig>;
  delegateState: Option<DelegateState>;
};

export async function fetchMetadata(
  context: Pick<Context, 'rpc' | 'serializer'>,
  address: PublicKey
): Promise<Metadata> {
  const maybeAccount = await context.rpc.getAccount(address);
  assertAccountExists(maybeAccount, 'Metadata');
  return deserializeMetadata(context, maybeAccount);
}

export async function safeFetchMetadata(
  context: Pick<Context, 'rpc' | 'serializer'>,
  address: PublicKey
): Promise<Metadata | null> {
  const maybeAccount = await context.rpc.getAccount(address);
  return maybeAccount.exists
    ? deserializeMetadata(context, maybeAccount)
    : null;
}

export function deserializeMetadata(
  context: Pick<Context, 'serializer'>,
  rawAccount: RpcAccount
): Metadata {
  return deserializeAccount(
    rawAccount,
    getMetadataAccountDataSerializer(context)
  );
}

export function getMetadataAccountDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<MetadataAccountArgs, MetadataAccountData> {
  const s = context.serializer;
  return mapSerializer<
    MetadataAccountArgs,
    MetadataAccountData,
    MetadataAccountData
  >(
    s.struct<MetadataAccountData>(
      [
        ['key', getTmKeySerializer(context)],
        ['updateAuthority', s.publicKey],
        ['mint', s.publicKey],
        ['data', getDataSerializer(context)],
        ['primarySaleHappened', s.bool()],
        ['isMutable', s.bool()],
        ['editionNonce', s.option(s.u8)],
        ['tokenStandard', s.option(getTokenStandardSerializer(context))],
        ['collection', s.option(getCollectionSerializer(context))],
        ['uses', s.option(getUsesSerializer(context))],
        [
          'collectionDetails',
          s.option(getCollectionDetailsSerializer(context)),
        ],
        [
          'programmableConfig',
          s.option(getProgrammableConfigSerializer(context)),
        ],
        ['delegateState', s.option(getDelegateStateSerializer(context))],
      ],
      'Metadata'
    ),
    (value) => ({ key: 4, ...value } as MetadataAccountData)
  ) as Serializer<MetadataAccountArgs, MetadataAccountData>;
}

export function getMetadataSize(
  context: Pick<Context, 'serializer'>
): number | null {
  return getMetadataAccountDataSerializer(context).fixedSize;
}

export function findMetadataPda(
  context: {
    serializer: Context['serializer'];
    eddsa: Context['eddsa'];
    programs?: Context['programs'];
  },
  seeds: {
    /** The address of the mint account */
    mint: PublicKey;
  }
): Pda {
  const s = context.serializer;
  const programId: PublicKey = getProgramAddressWithFallback(
    context,
    'mplTokenMetadata',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
  );
  return context.eddsa.findPda(programId, [
    utf8.serialize('metadata'),
    programId.bytes,
    s.publicKey.serialize(seeds.mint),
  ]);
}
