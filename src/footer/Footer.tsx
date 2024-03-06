import { Tree } from "../utils/Tree";
import { TreeNode } from "js-object-to-tree";
import "./Footer.scss";

const footer: TreeNode = {
  Copyright: {
    "© 2024": null,
  },
};

export const Footer = () => {
  return <Tree object={footer} />;
};
