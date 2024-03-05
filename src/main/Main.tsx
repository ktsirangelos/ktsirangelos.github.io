import { Tree } from "../utils/Tree";
import { TreeNode } from "../utils/objectToTree";
import "./Main.scss";

const About = () => {
  return (
    <div className="about">
      <p>
        hey! I enjoy creating robust, minimal interfaces that get the job done
        efficiently while providing optimal user experience. I dig software
        architecture and the designs behind particular language idioms. I strive
        to make things greener, sustainable, educational and fair to all groups
        and individuals.
        <br />
        <br />
        Konst
      </p>
    </div>
  );
};

const treeObjects: TreeNode[] = [
  {
    ".": {
      Languages: {
        HTML: null,
        CSS: {
          Sass: null,
        },
        Javascript: null,
        Typescript: null,
        Bash: null,
        PHP: null,
      },
      Frameworks: {
        React: {
          "React Router": null,
        },
        "Node.js": {
          Express: null,
          EJS: null,
        },
        Playwright: null,
        Vitest: null,
        Jest: null,
      },
    },
  },

  {
    ".": {
      "Data Stores": {
        MongoDB: {
          Mongoose: null,
        },
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
        Git: {
          Gitflow: null,
          GitHub: null,
          GitLab: null,
        },
      },
    },
  },

  {
    ".": {
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

export const Main = () => {
  return (
    <>
      <About />
      {treeObjects.map((stack, index) => (
        <div className="stack">
          <Tree key={index} object={stack} />
        </div>
      ))}
    </>
  );
};
