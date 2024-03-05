import { objectToTree, TreeNode } from "./objectToTree";

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
