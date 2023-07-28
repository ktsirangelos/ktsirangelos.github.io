// Trees
const stackOne = {
  "Stack 1/2": {
    "Languages": {
      "HTML5": null,
      "CSS3": {
        "Sass": null
      },
      "Javascript": null,
      "Typescript": null,
      "GraphQL": null
    },
    "Frameworks": {
      "React": {
        "Redux": null
      },
      "React Native": null,
      "Node.js": {
        "Express": null,
        "EJS": null
      }
    },
    "Data Stores": {
      "Postgres": {
        "Sequelize": null
      },
      "MongoDB": {
        "Mongoose": null
      },
      "Redis": null
    }
  }
};

const stackTwo = {
  "Stack 2/2": {
    "Processes": {
      "CI/CD": null,
      "Testing": null,
      "TDD": null,
      "Git": {
        "GitHub": null
      }
    },
    "Tools": {
      "CLI": {
        "Linux Commands": null
      },
      "Neovim": null,
      "ESLint": null,
      "Webpack": null,
      "Cypress": null,
      "Jest": null,
      "Docker": {
        "Composer": null
      },
      "ChatGPT": null,
      "Copilot": null,
      "npm": null
    }
  }
};

const projects = {
  "Projects": {
    "Static": {
      "this website →": {
        "see code →": null
      },
      "fivequarters.studio →": {
        "see code →": null
      },
      "christinatsirangelou →": {
        "see code →": null
      },
      "...": {
        "...": null
      }
    },
    "Web Apps": {
      "fullstackopen part3 →": {
        "see code →": null
      },
      "...": {
        "...": null
      },
      "...": {
        "...": null
      }
    }
  }
};

function makeTree(obj, indent = '', isRoot = true) {
  let result = '';
  const keys = Object.keys(obj);
  keys.forEach((key, index) => {
    const isLast = index === keys.length - 1;
    result += `${indent}${isRoot ? '' : (isLast ? '└── ' : '├── ')}${key}\n`;
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      let childPrefix = isLast ? '    ' : '│   ';
      let newIndent = isRoot ? indent : indent + childPrefix;
      result += makeTree(obj[key], newIndent, false);
    }
  });
  return result;
}

document.querySelector('.projects').innerHTML = `<pre>${makeTree(projects)}</pre>`;
document.querySelector('.stack-1').innerHTML = `<pre>${makeTree(stackOne)}</pre>`;
document.querySelector('.stack-2').innerHTML = `<pre>${makeTree(stackTwo)}</pre>`;
