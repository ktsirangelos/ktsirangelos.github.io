This repository contains a function which converts JavaScript objects to tree-like strings.

For example, this object

```javascript
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
```

is converted to this tree

```
a
├── b
│   ├── c
│   └── d
│       └── e
└── f
```

There are 1 + 6 cases to cover, all other permutations can be derived from these

```
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
```

The initial object needs to be in a particular format: every value (of a key-value pair) should be either an `object` or `null`. That's because, in order to make the tree, the function is called recursively and `nul` is the base case (the condition to stop the recursion).

[See how it works](js/scripts.js#L6)

