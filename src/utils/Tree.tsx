import { objectToTree, TreeNode } from "../main/objectToTree";

export const Tree = ({ object }: { object: TreeNode }) => {
  const treeString = objectToTree(object);
  return <pre>{treeString}</pre>;
};
