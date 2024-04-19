import { Tree } from "../utils/Tree";
import { TreeNode } from "js-object-to-tree";
import "./Main.scss";

const Projects = () => {
  const projects = [
    {
      name: "CTarchitects",
      url: "https://christinatsirangelou.com",
    },
    {
      name: "fivequarters.studio",
      url: "https://ktsirangelos.github.io/fivequarters.studio/",
    },
    {
      name: "js-object-to-tree",
      url: "https://www.npmjs.com/package/js-object-to-tree",
    },
    {
      name: "math-functions",
      url: "https://packagist.org/packages/ktsirangelos/math-functions",
    },
  ];

  return (
    <div className="projects-container">
      <div className="projects">
        <p>Projects 1/1</p>
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {index === projects.length - 1 ? "└──" : "├──"} {project.name} →
          </a>
        ))}
      </div>
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
      <Projects />
      {stacks.map((stack, index) => (
        <div key={index} className="stack">
          <Tree object={stack} />
        </div>
      ))}
    </>
  );
};
