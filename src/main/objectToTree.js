export const objectToTree = (object, prefix = "", isRoot = true) => {
  let tree = "";
  const currentKeys = Object.keys(object);

  currentKeys.forEach((key, index) => {
    const isLast = index === currentKeys.length - 1;

    tree += `${prefix}${isRoot ? "" : isLast ? "└── " : "├── "}${key}\n`;

    if (object[key] !== null) {
      let childPrefix = isRoot ? prefix : prefix + (isLast ? "    " : "│   ");

      tree += objectToTree(object[key], childPrefix, false);
    }
  });

  return tree;
};
