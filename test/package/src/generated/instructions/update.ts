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
  publicKey,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import { UpdateArgs, UpdateArgsArgs, getUpdateArgsSerializer } from '../types';

// Accounts.
export type UpdateInstructionAccounts = {
  /** Update authority or delegate */
  authority?: Signer;
  /** Metadata account */
  metadata: PublicKey;
  /** Master Edition account */
  masterEdition?: PublicKey;
  /** Mint account */
  mint: PublicKey;
  /** System program */
  systemProgram?: PublicKey;
  /** System program */
  sysvarInstructions?: PublicKey;
  /** Token account */
  token?: PublicKey;
  /** Delegate record PDA */
  delegateRecord?: PublicKey;
  /** Token Authorization Rules Program */
  authorizationRulesProgram?: PublicKey;
  /** Token Authorization Rules account */
  authorizationRules?: PublicKey;
};

// Arguments.
export type UpdateInstructionData = {
  discriminator: number;
  updateArgs: UpdateArgs;
};

export type UpdateInstructionDataArgs = { updateArgs: UpdateArgsArgs };

export function getUpdateInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<UpdateInstructionDataArgs, UpdateInstructionData> {
  const s = context.serializer;
  return mapSerializer<
    UpdateInstructionDataArgs,
    UpdateInstructionData,
    UpdateInstructionData
  >(
    s.struct<UpdateInstructionData>(
      [
        ['discriminator', s.u8()],
        ['updateArgs', getUpdateArgsSerializer(context)],
      ],
      { description: 'UpdateInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 43 } as UpdateInstructionData)
  ) as Serializer<UpdateInstructionDataArgs, UpdateInstructionData>;
}

// Instruction.
export function update(
  context: Pick<Context, 'serializer' | 'programs' | 'identity'>,
  input: UpdateInstructionAccounts & UpdateInstructionDataArgs
): TransactionBuilder {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId = context.programs.getPublicKey(
    'mplTokenMetadata',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
  );

  // Resolved accounts.
  const authorityAccount = input.authority ?? context.identity;
  const metadataAccount = input.metadata;
  const masterEditionAccount = input.masterEdition ?? {
    ...programId,
    isWritable: false,
  };
  const mintAccount = input.mint;
  const systemProgramAccount = input.systemProgram ?? {
    ...context.programs.getPublicKey(
      'splSystem',
      '11111111111111111111111111111111'
    ),
    isWritable: false,
  };
  const sysvarInstructionsAccount =
    input.sysvarInstructions ??
    publicKey('Sysvar1nstructions1111111111111111111111111');
  const tokenAccount = input.token ?? { ...programId, isWritable: false };
  const delegateRecordAccount = input.delegateRecord ?? {
    ...programId,
    isWritable: false,
  };
  const authorizationRulesProgramAccount = input.authorizationRulesProgram ?? {
    ...programId,
    isWritable: false,
  };
  const authorizationRulesAccount = input.authorizationRules ?? {
    ...programId,
    isWritable: false,
  };

  // Authority.
  signers.push(authorityAccount);
  keys.push({
    pubkey: authorityAccount.publicKey,
    isSigner: true,
    isWritable: isWritable(authorityAccount, false),
  });

  // Metadata.
  keys.push({
    pubkey: metadataAccount,
    isSigner: false,
    isWritable: isWritable(metadataAccount, true),
  });

  // Master Edition.
  keys.push({
    pubkey: masterEditionAccount,
    isSigner: false,
    isWritable: isWritable(masterEditionAccount, true),
  });

  // Mint.
  keys.push({
    pubkey: mintAccount,
    isSigner: false,
    isWritable: isWritable(mintAccount, false),
  });

  // System Program.
  keys.push({
    pubkey: systemProgramAccount,
    isSigner: false,
    isWritable: isWritable(systemProgramAccount, false),
  });

  // Sysvar Instructions.
  keys.push({
    pubkey: sysvarInstructionsAccount,
    isSigner: false,
    isWritable: isWritable(sysvarInstructionsAccount, false),
  });

  // Token.
  keys.push({
    pubkey: tokenAccount,
    isSigner: false,
    isWritable: isWritable(tokenAccount, false),
  });

  // Delegate Record.
  keys.push({
    pubkey: delegateRecordAccount,
    isSigner: false,
    isWritable: isWritable(delegateRecordAccount, false),
  });

  // Authorization Rules Program.
  keys.push({
    pubkey: authorizationRulesProgramAccount,
    isSigner: false,
    isWritable: isWritable(authorizationRulesProgramAccount, false),
  });

  // Authorization Rules.
  keys.push({
    pubkey: authorizationRulesAccount,
    isSigner: false,
    isWritable: isWritable(authorizationRulesAccount, false),
  });

  // Data.
  const data = getUpdateInstructionDataSerializer(context).serialize(input);

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
