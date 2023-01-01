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
  isSigner,
  mapSerializer,
} from '@lorisleiva/js-core';
import {
  Operation,
  Payload,
  PayloadArgs,
  getOperationSerializer,
  getPayloadSerializer,
} from '../types';

// Accounts.
export type ValidateInstructionAccounts = {
  /** Payer and creator of the RuleSet */
  payer: Signer;
  /** The PDA account where the RuleSet is stored */
  ruleSet: PublicKey;
  /** System program */
  systemProgram?: PublicKey;
  optRuleSigner1?: PublicKey | Signer;
  /** Optional rule validation signer 2 */
  optRuleSigner2?: Signer;
  /** Optional rule validation signer 3 */
  optRuleSigner3?: Signer;
  /** Optional rule validation signer 4 */
  optRuleSigner4?: Signer;
  /** Optional rule validation signer 5 */
  optRuleSigner5?: Signer;
  /** Optional rule validation non-signer 1 */
  optRuleNonsigner1?: PublicKey;
  /** Optional rule validation non-signer 2 */
  optRuleNonsigner2?: PublicKey;
  /** Optional rule validation non-signer 3 */
  optRuleNonsigner3?: PublicKey;
  /** Optional rule validation non-signer 4 */
  optRuleNonsigner4?: PublicKey;
  /** Optional rule validation non-signer 5 */
  optRuleNonsigner5?: PublicKey;
};

// Arguments.
export type ValidateInstructionData = {
  discriminator: number;
  ruleSetName: string;
  operation: Operation;
  payload: Payload;
};
export type ValidateInstructionArgs = {
  ruleSetName: string;
  operation: Operation;
  payload: PayloadArgs;
};

export function getValidateInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<ValidateInstructionArgs, ValidateInstructionData> {
  const s = context.serializer;
  return mapSerializer<
    ValidateInstructionArgs,
    ValidateInstructionData,
    ValidateInstructionData
  >(
    s.struct<ValidateInstructionData>(
      [
        ['discriminator', s.u8],
        ['ruleSetName', s.string],
        ['operation', getOperationSerializer(context)],
        ['payload', getPayloadSerializer(context)],
      ],
      'ValidateInstructionArgs'
    ),
    (value) => ({ discriminator: 1, ...value } as ValidateInstructionData)
  ) as Serializer<ValidateInstructionArgs, ValidateInstructionData>;
}

// Instruction.
export function validate(
  context: {
    serializer: Context['serializer'];
    eddsa: Context['eddsa'];
    programs?: Context['programs'];
  },
  input: ValidateInstructionAccounts & ValidateInstructionArgs
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey = getProgramAddressWithFallback(
    context,
    'mplTokenAuthRules',
    'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg'
  );

  // Payer.
  signers.push(input.payer);
  keys.push({
    pubkey: input.payer.publicKey,
    isSigner: true,
    isWritable: false,
  });

  // Rule Set.
  keys.push({ pubkey: input.ruleSet, isSigner: false, isWritable: false });

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

  // Opt Rule Signer1 (optional).
  if (input.optRuleSigner1) {
    if (isSigner(input.optRuleSigner1)) {
      signers.push(input.optRuleSigner1);
      keys.push({
        pubkey: input.optRuleSigner1.publicKey,
        isSigner: true,
        isWritable: false,
      });
    } else {
      keys.push({
        pubkey: input.optRuleSigner1,
        isSigner: false,
        isWritable: false,
      });
    }
  }

  // Opt Rule Signer2 (optional).
  if (input.optRuleSigner2) {
    signers.push(input.optRuleSigner2);
    keys.push({
      pubkey: input.optRuleSigner2.publicKey,
      isSigner: true,
      isWritable: false,
    });
  }

  // Opt Rule Signer3 (optional).
  if (input.optRuleSigner3) {
    signers.push(input.optRuleSigner3);
    keys.push({
      pubkey: input.optRuleSigner3.publicKey,
      isSigner: true,
      isWritable: false,
    });
  }

  // Opt Rule Signer4 (optional).
  if (input.optRuleSigner4) {
    signers.push(input.optRuleSigner4);
    keys.push({
      pubkey: input.optRuleSigner4.publicKey,
      isSigner: true,
      isWritable: false,
    });
  }

  // Opt Rule Signer5 (optional).
  if (input.optRuleSigner5) {
    signers.push(input.optRuleSigner5);
    keys.push({
      pubkey: input.optRuleSigner5.publicKey,
      isSigner: true,
      isWritable: false,
    });
  }

  // Opt Rule Nonsigner1 (optional).
  if (input.optRuleNonsigner1) {
    keys.push({
      pubkey: input.optRuleNonsigner1,
      isSigner: false,
      isWritable: false,
    });
  }

  // Opt Rule Nonsigner2 (optional).
  if (input.optRuleNonsigner2) {
    keys.push({
      pubkey: input.optRuleNonsigner2,
      isSigner: false,
      isWritable: false,
    });
  }

  // Opt Rule Nonsigner3 (optional).
  if (input.optRuleNonsigner3) {
    keys.push({
      pubkey: input.optRuleNonsigner3,
      isSigner: false,
      isWritable: false,
    });
  }

  // Opt Rule Nonsigner4 (optional).
  if (input.optRuleNonsigner4) {
    keys.push({
      pubkey: input.optRuleNonsigner4,
      isSigner: false,
      isWritable: false,
    });
  }

  // Opt Rule Nonsigner5 (optional).
  if (input.optRuleNonsigner5) {
    keys.push({
      pubkey: input.optRuleNonsigner5,
      isSigner: false,
      isWritable: false,
    });
  }

  // Data.
  const data = getValidateInstructionDataSerializer(context).serialize(input);

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain: 0,
  };
}
