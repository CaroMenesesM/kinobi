/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Program, publicKey } from '@lorisleiva/js-core';
import {
  getMplTokenMetadataErrorFromCode,
  getMplTokenMetadataErrorFromName,
} from '../errors';

export function getMplTokenMetadataProgram(): Program {
  return {
    name: 'mplTokenMetadata',
    address: publicKey('metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'),
    getErrorFromCode(code: number, cause?: Error) {
      return getMplTokenMetadataErrorFromCode(code, this, cause);
    },
    getErrorFromName(name: string, cause?: Error) {
      return getMplTokenMetadataErrorFromName(name, this, cause);
    },
    isOnCluster() {
      return true;
    },
  };
}
