This repository contains a function which converts JavaScript objects to tree-like strings.

For example, this object

```javascript
example = {
  "a": {
    "b": {
      "c": null
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

The initial object needs to be in a particular format: every value (of a key-value pair) should be either an `object` or `null`. That's because, in order to make the tree, the function is called recursively and `nul` is the base case (that stops the recursion).

[See how it works](https://github.com/ktsirangelos/ktsirangelos.github.io/blob/9bf076b163f5370e6e022814a1df5efb9a3f0327/js/scripts.js#L7)

