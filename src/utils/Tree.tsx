import { objectToTree, TreeNode } from "../utils/objectToTree";

export const Tree = ({ object }: { object: TreeNode }) => {
  const treeString = objectToTree(object);
  return <pre>{treeString}</pre>;
};
