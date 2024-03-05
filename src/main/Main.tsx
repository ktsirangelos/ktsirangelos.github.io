type TreeNode = {
  [key: string]: null | TreeNode;
} | null;

/**
 * Converts a JavaScript object into a visual tree-like representation.
 * @param inputObject - The JavaScript object to convert into a tree.
 * @param linePrefix - The prefix to use for each line in the tree.
 * @param isRootNode - Whether the current object is the root node.
 * @returns The visual representation of the object as a tree.
 * @throws If the input object is not a non-null object,
 *         if keys in the input object are not unique,
 *         or if the value for any key is neither an object nor null.
 */
const objectToTree = function (
  inputObject: TreeNode,
  linePrefix = "",
  isRootNode = true,
): string {
  if (Array.isArray(inputObject)) {
    throw new Error("Arrays are not allowed as input");
  }

  if (typeof inputObject !== "object" || inputObject === null) {
    throw new Error("Input object must be a non-null object");
  }

  let tree = "";
  const currentKeys = Object.keys(inputObject);

  currentKeys.forEach((key, index) => {
    const isLast = index === currentKeys.length - 1;

    tree += `${linePrefix}${isRootNode ? "" : isLast ? "└── " : "├── "}${key}\n`;

    if (inputObject[key] !== null && typeof inputObject[key] === "object") {
      const childPrefix = isRootNode
        ? linePrefix
        : linePrefix + (isLast ? "    " : "│   ");

      try {
        tree += objectToTree(inputObject[key], childPrefix, false);
      } catch (error) {
        throw new Error(
          `Error processing key '${key}': ${(error as Error).message}`,
        );
      }
    } else if (inputObject[key] !== null) {
      throw new Error(
        `Value for key '${key}' must be either an object or null`,
      );
    }
  });

  return tree;
};

const About = () => {
  return (
    <>
      hey! I enjoy creating robust, minimal interfaces that get the job done
      efficiently while providing optimal user experience. I dig software
      architecture and the designs behind particular language idioms. I strive
      to make things greener, sustainable, educational and fair to all groups
      and individuals.
      <br />
      <br />
      Konst
    </>
  );
};

const treeObjects: TreeNode[] = [
  {
    "Stack 1/3": {
      Languages: {
        HTML: null,
        CSS: {
          Sass: null,
        },
        Javascript: null,
        Typescript: null,
        GraphQl: null,
        Bash: null,
        PHP: null,
      },
      Frameworks: {
        React: {
          "React Router": null,
          Redux: null,
        },
        "React Native": null,
        "Next.js": null,
        "Node.js": {
          Express: null,
          EJS: null,
        },
        Playwright: null,
        Cypress: null,
        Vitest: null,
        Jest: null,
      },
    },
  },

  {
    "Stack 2/3": {
      "Data Stores": {
        Postgres: {
          Sequelize: null,
        },
        MongoDB: {
          Mongoose: null,
        },
        Redis: null,
      },
      Processes: {
        Agile: {
          Scrum: null,
        },
        Scripting: null,
        Engineering: null,
        Design: null,
        "Code Reviews": null,
        Testing: null,
        "CI/CD": null,
        TDD: null,
        Git: {
          Gitflow: null,
          GitHub: null,
          GitLab: null,
        },
      },
    },
  },

  {
    "Stack 3/3": {
      Tools: {
        "Command Line": null,
        "Tmux/Neovim": null,
        "Yarn/Npm": null,
        Composer: null,
        Prettier: null,
        ESLint: null,
        Vite: null,
        Docker: null,
        Kubernetes: null,
        Nginx: null,
        AI: {
          ChatGPT: null,
          Gemini: null,
          Copilot: null,
        },
      },
    },
  },
];

const Tree = ({ object }: { object: TreeNode }) => {
  const treeString = objectToTree(object);
  return <pre>{treeString}</pre>;
};

export const Main = () => {
  return (
    <>
      <About />
      {treeObjects.map((stack, index) => (
        <Tree key={index} object={stack} />
      ))}
    </>
  );
};
