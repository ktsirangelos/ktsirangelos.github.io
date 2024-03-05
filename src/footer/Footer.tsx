import { Tree } from "../utils/Tree";
import { TreeNode } from "../utils/objectToTree";

const footer: TreeNode = {
  Copyright: {
    "2023 - 2024": null,
  },
};

export const Footer = () => {
  return <Tree object={footer} />;
};
