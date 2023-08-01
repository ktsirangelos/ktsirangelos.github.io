This repository contains a recursive function that receives an object and creates a visual tree-like representation of it

For example this object

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

There are 6 + 1 cases to cover, all other permutations can be derived from these recursively

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

The initial object needs to be in a particular format:

- every `key` should be unique
- every `value` should be either an `object` or `null`

## [See the code](js/scripts.js#L7)

