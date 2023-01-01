import type { Visitor } from './Visitor';
import * as nodes from '../nodes';

export class BaseNodeVisitor implements Visitor<nodes.Node> {
  visitRoot(root: nodes.RootNode): nodes.Node {
    return new nodes.RootNode(
      root.programs
        .map((program) => program.accept(this))
        .filter(nodes.assertNodeFilter(nodes.assertProgramNode))
    );
  }

  visitProgram(program: nodes.ProgramNode): nodes.Node {
    return new nodes.ProgramNode(
      program.metadata,
      program.accounts
        .map((account) => account.accept(this))
        .filter(nodes.assertNodeFilter(nodes.assertAccountNode)),
      program.instructions
        .map((instruction) => instruction.accept(this))
        .filter(nodes.assertNodeFilter(nodes.assertInstructionNode)),
      program.definedTypes
        .map((type) => type.accept(this))
        .filter(nodes.assertNodeFilter(nodes.assertDefinedTypeNode)),
      program.errors
        .map((error) => error.accept(this))
        .filter(nodes.assertNodeFilter(nodes.assertErrorNode))
    );
  }

  visitAccount(account: nodes.AccountNode): nodes.Node {
    const accountType = account.type.accept(this);
    nodes.assertTypeStructNode(accountType);
    return new nodes.AccountNode(account.metadata, accountType);
  }

  visitInstruction(instruction: nodes.InstructionNode): nodes.Node {
    const args = instruction.args.accept(this);
    nodes.assertTypeStructNode(args);
    return new nodes.InstructionNode(
      instruction.metadata,
      instruction.accounts,
      args
    );
  }

  visitDefinedType(definedType: nodes.DefinedTypeNode): nodes.Node {
    const type = definedType.type.accept(this);
    nodes.assertTypeStructOrEnumNode(type);
    return new nodes.DefinedTypeNode(definedType.metadata, type);
  }

  visitError(error: nodes.ErrorNode): nodes.Node {
    return error;
  }

  visitTypeArray(typeArray: nodes.TypeArrayNode): nodes.Node {
    const type = typeArray.itemType.accept(this);
    nodes.assertTypeNode(type);
    return new nodes.TypeArrayNode(type, typeArray.size);
  }

  visitTypeDefinedLink(typeDefinedLink: nodes.TypeDefinedLinkNode): nodes.Node {
    return typeDefinedLink;
  }

  visitTypeEnum(typeEnum: nodes.TypeEnumNode): nodes.Node {
    const variants = typeEnum.variants.map(
      (variant): nodes.TypeEnumNodeVariant => {
        if (variant.kind === 'struct') {
          const newType = variant.type.accept(this);
          nodes.assertTypeStructNode(newType);
          return { ...variant, type: newType };
        }
        if (variant.kind === 'tuple') {
          const newType = variant.type.accept(this);
          nodes.assertTypeTupleNode(newType);
          return { ...variant, type: newType };
        }
        return variant;
      }
    );
    return new nodes.TypeEnumNode(typeEnum.name, variants);
  }

  visitTypeLeaf(typeLeaf: nodes.TypeLeafNode): nodes.Node {
    return typeLeaf;
  }

  visitTypeMap(typeMap: nodes.TypeMapNode): nodes.Node {
    const keyType = typeMap.keyType.accept(this);
    nodes.assertTypeNode(keyType);
    const valueType = typeMap.valueType.accept(this);
    nodes.assertTypeNode(valueType);
    return new nodes.TypeMapNode(typeMap.mapType, keyType, valueType);
  }

  visitTypeOption(typeOption: nodes.TypeOptionNode): nodes.Node {
    const type = typeOption.type.accept(this);
    nodes.assertTypeNode(type);
    return new nodes.TypeOptionNode(typeOption.optionType, type);
  }

  visitTypeSet(typeSet: nodes.TypeSetNode): nodes.Node {
    const type = typeSet.type.accept(this);
    nodes.assertTypeNode(type);
    return new nodes.TypeSetNode(typeSet.setType, type);
  }

  visitTypeStruct(typeStruct: nodes.TypeStructNode): nodes.Node {
    return new nodes.TypeStructNode(
      typeStruct.name,
      typeStruct.fields.map((field): nodes.TypeStructNodeField => {
        const fieldType = field.type.accept(this);
        nodes.assertTypeNode(fieldType);
        return { ...field, type: fieldType };
      })
    );
  }

  visitTypeTuple(typeTuple: nodes.TypeTupleNode): nodes.Node {
    return new nodes.TypeTupleNode(
      typeTuple.itemTypes.map((type) => {
        const newType = type.accept(this);
        nodes.assertTypeNode(newType);
        return newType;
      })
    );
  }

  visitTypeVec(typeVec: nodes.TypeVecNode): nodes.Node {
    const type = typeVec.itemType.accept(this);
    nodes.assertTypeNode(type);
    return new nodes.TypeVecNode(type);
  }
}
