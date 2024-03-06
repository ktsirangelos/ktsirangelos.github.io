import { objectToTree, TreeNode } from "js-object-to-tree";

export const Tree = ({ object }: { object: TreeNode }) => {
  const treeString = objectToTree(object);
  return <pre>{treeString}</pre>;
};
