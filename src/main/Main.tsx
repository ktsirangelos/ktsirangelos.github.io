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
      LANGUAGES: {
        HTML: null,
        Sass: {
          CSS: null,
        },
        Typescript: { Javascript: null },
        Ruby: null,
        Bash: null,
      },
      FRAMEWORKS: {
        React: {
          Router: null,
        },
        Redux: null,
        "Node.js": {
          Express: null,
        },
        Rails: null,
        Playwright: null,
        Vitest: null,
        Jest: null,
      },
    },
  },

  {
    "Stack 2/3": {
      "DATA STORES": {
        MongoDB: {
          Mongoose: null,
        },
      },
      PROCESSES: {
        Agile: {
          Scrum: null,
        },
        "Code Reviews": null,
        Refactoring: null,
        Testing: null,
        "CI/CD": null,
        Git: null,
      },
    },
  },

  {
    "Stack 3/3": {
      TOOLS: {
        "Yarn/Npm": null,
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
