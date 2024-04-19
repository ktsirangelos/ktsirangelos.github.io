import { Tree } from "../utils/Tree";
import { TreeNode } from "js-object-to-tree";
import "./Main.scss";

const About = () => {
  return (
    <div className="about">
      <p>
        Hey! I enjoy creating robust, minimal interfaces that get the job done
        efficiently while providing optimal user experience. I dig software
        architecture and the designs behind particular language idioms. I strive
        to make things greener, sustainable, educational and fair to all groups
        and individuals.
      </p>
    </div>
  );
};

const stacks: TreeNode[] = [
  {
    "Stack 1/3": {
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
    "Stack 2/3": {
      "Data Stores": {
        MongoDB: {
          Mongoose: null,
        },
      },
      Processes: {
        Agile: {
          Scrum: null,
        },
        "Code Reviews": null,
        Testing: null,
        "CI/CD": null,
        Git: {
          Gitflow: null,
        },
      },
    },
  },

  {
    "Stack 3/3": {
      Tools: {
        "Yarn/Npm": null,
        Composer: null,
        Vite: null,
        Docker: null,
        Kubernetes: null,
        Nginx: null,
        GitHub: { Actions: null },
        GitLab: { "CI/CD": null },
      },
    },
  },
];

export const Main = () => {
  return (
    <>
      <About />
      {stacks.map((stack, index) => (
        <div key={index} className="stack">
          <Tree object={stack} />
        </div>
      ))}
    </>
  );
};
