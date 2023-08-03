/*

The function objToTree receives a JavaScript object and creates a visual tree-like representation of it.

For example, this object:

example = {
  "a": {
    "b": {
      "c": null,
      "d": {
        "e": null
      },
    },
    "f": null
  }
}

Is converted to this tree:

a
├── b
│   ├── c
│   └── d
│       └── e
└── f

There are 6 + 1 cases to cover, all other variations of smaller or larger trees can be derived from these recursively:

0. root

root
├── 1. branch
└── 2. leaf

root
├── branch
│   ├── 3. branch of branch
│   └── 4. leaf of branch
└── leaf

root
└── leaf
    ├── 5. branch of leaf
    └── 6. leaf of leaf

The initial object needs to be in a particular format:

 every 'key' should be unique
 every 'value' should be either an 'object' or 'null'

*/

export const objectToTree = function(object, prefix = '', isRoot = true) {
  let tree = '';
  const currentKeys = Object.keys(object);
  currentKeys.forEach((key, index) => {
    // Check if the current key is the last element
    const isLast = index === currentKeys.length - 1;
    // Append the current key to the treeString, adding leaf or branch symbols as needed
    tree += `${prefix}${isRoot ? '' : (isLast ? '└── ' : '├── ')}${key}\n`;
    // If the value associated with the key is not null (and therefore a nested object), process it recursively 
    if (object[key] !== null) {
      // Determine the prefix for child elements, depending on the parent element being the last at its depth or not
      let childPrefix = isRoot ? prefix : prefix + (isLast ? '    ' : '│   ');
      // Call objectToTree to represent nested objects, and append the result to the tree
      tree += objectToTree(object[key], childPrefix, false);
    }
  });

  return tree;
}
