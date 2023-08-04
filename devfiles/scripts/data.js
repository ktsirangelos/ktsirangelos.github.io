export const header = `
  <div class="title">
    <p>Konstantinos Tsirangelos – Web Developer</p>
  </div>
  <div class="link">
    <a href="mailto:ktsirangelos@proton.me">Email</a>
  </div>
  <div class="link">
    <a href="https://github.com/ktsirangelos" target="_blank" rel="noopener noreferrer">GitHub</a>
  </div>
`

export const about = `
Hey, I am a web developer based in Rotterdam, NL. I enjoy creating robust, minimal interfaces that get the job done effectively and
efficiently while providing optimal user experience. I deeply care about making things green, sustainable, educational and fair to all
groups and individuals.
<span style="color: var(--color-green)"> For any questions or work you would like to discuss, feel free to write me an email.</span>
`
export const projects = {
  "<span class='tree-title'>Projects</span>": {
    "Static": {
      "<a id='this' style='cursor: pointer;'>this website</a>": {
        "<a href='https://github.com/ktsirangelos/ktsirangelos.github.io' target='_blank' rel='noopener noreferrer'>see code</a>": null
      },
      "<a href='https://fivequarters.studio' target='_blank' rel='noopener noreferrer'>fivequarters.studio</a>": {
        "<a href='https://github.com/ktsirangelos/fivequarters.studio' target='_blank' rel='noopener noreferrer'>see code</a>": null
      },
      "<a href='https://ktsirangelos.github.io/dida.studio/' target='_blank' rel='noopener noreferrer'>christinatsirangelou</a>": {
        "<a href='https://github.com/ktsirangelos/dida.studio' target='_blank' rel='noopener noreferrer'>see code</a>": null
      },
      "<span class='in-progress'>in progress</span>": {
        "<span class='in-progress'>...</span>": null
      }
    },
    "Web Apps": {
      "<a href='https://fragrant-mountain-6653.fly.dev/' target='_blank' rel='noopener noreferrer'>phonebook fullstack</a>": {
        "<a href='https://github.com/ktsirangelos/fso-part3' target='_blank' rel='noopener noreferrer'>see code</a>": null
      },
      "<span class='in-progress'>in progress</span>": {
        "<span class='in-progress'>...</span>": null
      }
    }
  }
};

export const stackOne = {
  "<span class='tree-title'>Stack 1/2</span>": {
    "Languages": {
      "HTML5": null,
      "CSS3": {
        "Sass": null
      },
      "Javascript": null,
      "<span class='in-progress'>Typescript</span>": null,
      "<span class='in-progress'>GraphQL</span>": null
    },
    "Frameworks": {
      "React": {
        "<span class='in-progress'>Redux</span>": null
      },
      "<span class='in-progress'>React Native</span>": null,
      "Node.js": {
        "Express": null,
        "EJS": null
      }
    },
    "Data Stores": {
      "<span class='in-progress'>Postgres</span>": {
        "<span class='in-progress'>Sequelize</span>": null
      },
      "MongoDB": {
        "Mongoose": null
      },
      "<span class='in-progress'>Redis</span>": null
    }
  }
};

export const stackTwo = {
  "<span class='tree-title'>Stack 2/2</span>": {
    "Processes": {
      "<span class='in-progress'>CI/CD</span>": null,
      "Testing": null,
      "<span class='in-progress'>TDD</span>": null,
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
      "<span class='in-progress'>Webpack</span>": null,
      "<span class='in-progress'>Cypress</span>": null,
      "Jest": null,
      "<span class='in-progress'>Docker</span>": {
        "<span class='in-progress'>Composer</span>": null
      },
      "ChatGPT": null,
      "Copilot": null,
      "npm": null
    }
  }
};

export const misc = {
  "curl": null,
  "lodash": null
}

export const footer = `
&copy;
└── ${new Date().getFullYear()}
`
