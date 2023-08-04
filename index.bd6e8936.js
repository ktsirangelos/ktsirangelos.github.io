const e=`
  <div class="title">
    <p>Konstantinos Tsirangelos – Web Developer</p>
  </div>
  <div class="link">
    <a href="mailto:ktsirangelos@proton.me">Email</a>
  </div>
  <div class="link">
    <a href="https://github.com/ktsirangelos" target="_blank" rel="noopener noreferrer">GitHub</a>
  </div>
`,s=`
Hey, I am a web developer based in Rotterdam, NL. I enjoy creating robust, minimal interfaces that get the job done effectively and
efficiently while providing optimal user experience. I deeply care about making things green, sustainable, educational and fair to all
groups and individuals.
<span style="color: var(--color-green)"> For any questions or work you would like to discuss, feel free to write me an email.</span>
`,n=`
&copy;
└── ${new Date().getFullYear()}
`,r=function(e,s="",n=!0){let a="",t=Object.keys(e);return t.forEach((l,o)=>{let i=o===t.length-1;if(a+=`${s}${n?"":i?"└── ":"├── "}${l}
`,null!==e[l]){let t=n?s:s+(i?"    ":"│   ");a+=r(e[l],t,!1)}}),a};document.querySelector("header").innerHTML=`${e}`,document.querySelector(".about").innerHTML=`<p>${s}</p>`,document.querySelector(".projects").innerHTML=`<pre>${r({"<span class='tree-title'>Projects</span>":{Static:{"<a id='this' style='cursor: pointer;'>this website</a>":{"<a href='https://github.com/ktsirangelos/ktsirangelos.github.io' target='_blank' rel='noopener noreferrer'>see code</a>":null},"<a href='https://fivequarters.studio' target='_blank' rel='noopener noreferrer'>fivequarters.studio</a>":{"<a href='https://github.com/ktsirangelos/fivequarters.studio' target='_blank' rel='noopener noreferrer'>see code</a>":null},"<a href='https://ktsirangelos.github.io/dida.studio/' target='_blank' rel='noopener noreferrer'>christinatsirangelou</a>":{"<a href='https://github.com/ktsirangelos/dida.studio' target='_blank' rel='noopener noreferrer'>see code</a>":null},"<span class='in-progress'>in progress</span>":{"<span class='in-progress'>...</span>":null}},"Web Apps":{"<a href='https://fragrant-mountain-6653.fly.dev/' target='_blank' rel='noopener noreferrer'>phonebook fullstack</a>":{"<a href='https://github.com/ktsirangelos/fso-part3' target='_blank' rel='noopener noreferrer'>see code</a>":null},"<span class='in-progress'>in progress</span>":{"<span class='in-progress'>...</span>":null}}}})}</pre>`,document.querySelector(".stack-1").innerHTML=`<pre>${r({"<span class='tree-title'>Stack 1/2</span>":{Languages:{HTML5:null,CSS3:{Sass:null},Javascript:{lodash:null},"<span class='in-progress'>Typescript</span>":null,"<span class='in-progress'>GraphQL</span>":null},Frameworks:{React:{"<span class='in-progress'>Redux</span>":null},"<span class='in-progress'>React Native</span>":null,"Node.js":{Express:null,EJS:null}},"Data Stores":{"<span class='in-progress'>Postgres</span>":{"<span class='in-progress'>Sequelize</span>":null},MongoDB:{Mongoose:null},"<span class='in-progress'>Redis</span>":null}}})}</pre>`,document.querySelector(".stack-2").innerHTML=`<pre>${r({"<span class='tree-title'>Stack 2/2</span>":{Processes:{"<span class='in-progress'>CI/CD</span>":null,Testing:null,"<span class='in-progress'>TDD</span>":null,Git:{GitHub:null}},Tools:{CLI:{"Linux Commands":null},Neovim:null,ESLint:null,"<span class='in-progress'>Webpack</span>":null,Parcel:null,"<span class='in-progress'>Cypress</span>":null,Jest:null,"<span class='in-progress'>Docker</span>":{"<span class='in-progress'>Composer</span>":null},ChatGPT:null,Copilot:null,curl:null,npm:null}}})}</pre>`,document.querySelector("footer").innerHTML=`<pre>${n}</pre>`,document.querySelector("#this").addEventListener("click",function(){document.getElementById("this").textContent="this website"===document.getElementById("this").textContent?"already here":"this website"});