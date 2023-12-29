import test from 'ava';
import {
  arrayValueNode,
  getAnchorAccountDiscriminator,
  getAnchorInstructionDiscriminator,
  numberValueNode,
} from '../../src';

test('it can compute the discriminator of an Anchor account', (t) => {
  // Given an account named "StakeEntry" on the IDL.
  const idlName = 'StakeEntry';

  // When we compute its Anchor discriminator.
  const discriminator = getAnchorAccountDiscriminator(idlName);

  // Then we get the expected value.
  t.deepEqual(
    discriminator,
    arrayValueNode(
      [187, 127, 9, 35, 155, 68, 86, 40].map((byte) => numberValueNode(byte))
    )
  );
});

test('it can compute the discriminator of an Anchor instruction', (t) => {
  // Given an instruction named "addConfigLines" on the IDL.
  const idlName = 'addConfigLines';

  // When we compute its Anchor discriminator.
  const discriminator = getAnchorInstructionDiscriminator(idlName);

  // Then we get the expected value.
  t.deepEqual(
    discriminator,
    arrayValueNode(
      [223, 50, 224, 227, 151, 8, 115, 106].map((byte) => numberValueNode(byte))
    )
  );
});
