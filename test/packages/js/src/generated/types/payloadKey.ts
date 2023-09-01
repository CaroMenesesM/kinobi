/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Serializer, scalarEnum } from '@metaplex-foundation/umi/serializers';

export enum PayloadKey {
  Target,
  Holder,
  Authority,
  Amount,
}

export type PayloadKeyArgs = PayloadKey;

export function getPayloadKeySerializer(): Serializer<
  PayloadKeyArgs,
  PayloadKey
> {
  return scalarEnum<PayloadKey>(PayloadKey, {
    description: 'PayloadKey',
  }) as Serializer<PayloadKeyArgs, PayloadKey>;
}
