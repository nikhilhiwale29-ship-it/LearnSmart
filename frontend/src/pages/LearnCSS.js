import { useState, useEffect } from "react";
import "../styles/learn.css";
import Navbar from "../components/Navbar";

const topics = [
  {
    title: "CSS Introduction",
    content: `
      <p>CSS (Cascading Style Sheets) is used to style HTML elements.</p>

      <ul>
        <li>Change colors 🎨</li>
        <li>Add spacing 📏</li>
        <li>Control layout 📐</li>
        <li>Make responsive designs 📱</li>
      </ul>

      <p><b>Types of CSS:</b></p>
      <ul>
        <li>Inline CSS → inside HTML tag</li>
        <li>Internal CSS → inside &lt;style&gt; tag</li>
        <li>External CSS → separate .css file</li>
      </ul>

      <p><b>Example:</b></p>
    `,
    code: `
      <style>
        h1 {
          color: blue;
          text-align: center;
        }
      </style>

      <h1>Hello Styled World</h1>
    `
  },

  {
    title: "CSS Syntax",
    content: `
      <p>CSS consists of selector and declaration block.</p>

      <pre>
selector {
  property: value;
}
      </pre>

      <p><b>Parts of CSS:</b></p>
      <ul>
        <li><b>Selector</b> → target element</li>
        <li><b>Property</b> → what to change</li>
        <li><b>Value</b> → how to change</li>
      </ul>

      <p><b>Multiple properties:</b></p>
      <pre>
p {
  color: red;
  font-size: 20px;
  text-align: center;
}
      </pre>

      <p><b>Example:</b></p>
    `,
    code: `
      <style>
        p {
          color: red;
          font-size: 20px;
          text-align: center;
        }
      </style>

      <p>This is styled text</p>
    `
  },

  {
    title: "CSS Selectors",
    content: `
      <p>Selectors target HTML elements.</p>

      <ul>
        <li><b>Element</b> → p, h1</li>
        <li><b>Class</b> → .box</li>
        <li><b>ID</b> → #main</li>
        <li><b>Universal</b> → * (all elements)</li>
        <li><b>Group</b> → h1, p</li>
      </ul>

      <p><b>Hierarchy:</b> ID > Class > Element</p>

      <p><b>Example:</b></p>
    `,
    code: `
      <style>
        * {
          font-family: Arial;
        }

        .box {
          background: yellow;
          padding: 10px;
        }

        #main {
          color: green;
          font-weight: bold;
        }
      </style>

      <p class="box">Box Text</p>
      <p id="main">Main Text</p>
    `
  },

  {
    title: "Colors & Background",
    content: `
      <p>CSS allows colors and backgrounds.</p>

      <ul>
        <li>Named colors → red, blue</li>
        <li>HEX → #ff0000</li>
        <li>RGB → rgb(255,0,0)</li>
        <li>Gradient → smooth color transition</li>
      </ul>

      <p><b>Background Properties:</b></p>
      <ul>
        <li>background-color</li>
        <li>background-image</li>
        <li>background-size</li>
      </ul>
    `,
    code: `
      <style>
        body {
          background: linear-gradient(to right, blue, purple);
          color: white;
          text-align: center;
        }
      </style>

      <h2>Gradient Background</h2>
    `
  },

  {
    title: "Box Model",
    content: `
      <p>Every element is a box with:</p>

      <ul>
        <li><b>Content</b> → actual text</li>
        <li><b>Padding</b> → space inside border</li>
        <li><b>Border</b> → edge of box</li>
        <li><b>Margin</b> → outer space</li>
      </ul>

      <p><b>Box-sizing:</b></p>
      <ul>
        <li>content-box (default)</li>
        <li>border-box (recommended)</li>
      </ul>
    `,
    code: `
      <style>
        div {
          margin: 20px;
          padding: 20px;
          border: 3px solid red;
          box-sizing: border-box;
        }
      </style>

      <div>Box Model Example</div>
    `
  },

  {
    title: "Flexbox",
    content: `
      <p>Flexbox is used for layout alignment.</p>

      <ul>
        <li>display: flex</li>
        <li>justify-content → horizontal</li>
        <li>align-items → vertical</li>
        <li>flex-direction → row / column</li>
      </ul>

      <p><b>Advantages:</b></p>
      <ul>
        <li>Easy alignment</li>
        <li>Responsive layout</li>
      </ul>
    `,
    code: `
      <style>
        .container {
          display: flex;
          justify-content: space-around;
          align-items: center;
        }

        .box {
          width: 100px;
          height: 100px;
          background: coral;
        }
      </style>

      <div class="container">
        <div class="box"></div>
        <div class="box"></div>
      </div>
    `
  },

  {
    title: "CSS Animations",
    content: `
      <p>CSS can animate elements.</p>

      <ul>
        <li>@keyframes → define animation</li>
        <li>animation → apply animation</li>
        <li>duration → time</li>
        <li>iteration → repeat</li>
      </ul>

      <p><b>Use Cases:</b></p>
      <ul>
        <li>Loading effects</li>
        <li>Hover animations</li>
        <li>Transitions</li>
      </ul>
    `,
    code: `
      <style>
        @keyframes move {
          from { transform: translateX(0); }
          to { transform: translateX(100px); }
        }

        div {
          width: 100px;
          height: 100px;
          background: red;
          animation: move 2s infinite alternate;
        }
      </style>

      <div></div>
    `
  },
    {
    title: "CSS Text Styling",
    content: `
      <p>CSS helps style text beautifully.</p>

      <ul>
        <li>color → text color</li>
        <li>text-align → left, center, right</li>
        <li>text-decoration → underline, none</li>
        <li>text-transform → uppercase, lowercase</li>
      </ul>
    `,
    code: `
      <style>
        p {
          color: purple;
          text-align: center;
          text-transform: uppercase;
        }
      </style>

      <p>Styled Text Example</p>
    `
  },

  {
    title: "CSS Fonts",
    content: `
      <p>Fonts improve readability and design.</p>

      <ul>
        <li>font-family</li>
        <li>font-size</li>
        <li>font-weight</li>
        <li>font-style</li>
      </ul>
    `,
    code: `
      <style>
        h2 {
          font-family: Arial;
          font-size: 30px;
          font-weight: bold;
        }
      </style>

      <h2>Font Example</h2>
    `
  },

  {
    title: "CSS Borders",
    content: `
      <p>Borders define element edges.</p>

      <ul>
        <li>border-width</li>
        <li>border-style</li>
        <li>border-color</li>
      </ul>
    `,
    code: `
      <style>
        div {
          border: 2px solid black;
          padding: 10px;
        }
      </style>

      <div>Border Example</div>
    `
  },

  {
    title: "CSS Display Property",
    content: `
      <p>Controls how elements are displayed.</p>

      <ul>
        <li>block</li>
        <li>inline</li>
        <li>inline-block</li>
        <li>none</li>
      </ul>
    `,
    code: `
      <style>
        span {
          display: block;
          background: lightblue;
        }
      </style>

      <span>Display Example</span>
    `
  },

  {
    title: "CSS Position",
    content: `
      <p>Position controls element placement.</p>

      <ul>
        <li>static</li>
        <li>relative</li>
        <li>absolute</li>
        <li>fixed</li>
      </ul>
    `,
    code: `
      <style>
        div {
          position: relative;
          left: 50px;
        }
      </style>

      <div>Position Example</div>
    `
  },

  {
    title: "CSS Overflow",
    content: `
      <p>Controls content overflow.</p>

      <ul>
        <li>hidden</li>
        <li>scroll</li>
        <li>auto</li>
      </ul>
    `,
    code: `
      <style>
        div {
          width: 100px;
          height: 100px;
          overflow: scroll;
          border: 1px solid black;
        }
      </style>

      <div>Overflow content example text goes here</div>
    `
  },

  {
    title: "CSS Opacity",
    content: `
      <p>Controls transparency of elements.</p>

      <ul>
        <li>0 → fully transparent</li>
        <li>1 → fully visible</li>
      </ul>
    `,
    code: `
      <style>
        img {
          opacity: 0.5;
        }
      </style>

      <img src="https://via.placeholder.com/100" />
    `
  },

  {
    title: "CSS Shadows",
    content: `
      <p>Add shadows to elements.</p>

      <ul>
        <li>box-shadow</li>
        <li>text-shadow</li>
      </ul>
    `,
    code: `
      <style>
        div {
          box-shadow: 2px 2px 10px gray;
          padding: 20px;
        }
      </style>

      <div>Shadow Example</div>
    `
  },

  {
    title: "CSS Transitions",
    content: `
      <p>Transitions create smooth changes.</p>

      <ul>
        <li>transition-property</li>
        <li>transition-duration</li>
      </ul>
    `,
    code: `
      <style>
        div {
          width: 100px;
          height: 100px;
          background: blue;
          transition: 0.5s;
        }

        div:hover {
          background: red;
        }
      </style>

      <div></div>
    `
  },

  {
    title: "CSS Z-Index",
    content: `
      <p>Controls stacking order of elements.</p>

      <ul>
        <li>Higher value → on top</li>
        <li>Works with positioned elements</li>
      </ul>
    `,
    code: `
      <style>
        .box1 {
          position: absolute;
          z-index: 2;
          background: red;
          width: 100px;
          height: 100px;
        }

        .box2 {
          position: absolute;
          z-index: 1;
          background: blue;
          width: 100px;
          height: 100px;
          left: 30px;
        }
      </style>

      <div class="box1"></div>
      <div class="box2"></div>
    `
  }
];

function LearnHTML() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [code, setCode] = useState(topics[0].code);
  const [runCode, setRunCode] = useState(code);

  const finalCode = `
    <base target="_blank">
    ${runCode}
  `;

  // ✅ INITIAL HISTORY STATE
  useEffect(() => {
    window.history.replaceState({ topicIndex: 0 }, "");
  }, []);

  // ✅ HANDLE BACK BUTTON
  useEffect(() => {
    const handleBack = (event) => {
      if (event.state && event.state.topicIndex !== undefined) {
        const index = event.state.topicIndex;

        setActiveIndex(index);
        setCode(topics[index].code);
        setRunCode("");
      } else {
        setActiveIndex(0);
        setCode(topics[0].code);
        setRunCode("");
      }
    };

    window.addEventListener("popstate", handleBack);

    return () => {
      window.removeEventListener("popstate", handleBack);
    };
  }, []);

  // ✅ TOPIC CHANGE
  const handleTopicChange = (index) => {
    setActiveIndex(index);
    setCode(topics[index].code);
    setRunCode("");

    // push into browser history
    window.history.pushState({ topicIndex: index }, "");
  };

  return (
    <>
      <Navbar />

      <div className="learn-page">

        {/* Sidebar */}
        <div className="learn-sidebar">
          {topics.map((topic, index) => (
            <div
              key={index}
              className={`topic ${index === activeIndex ? "active" : ""}`}
              onClick={() => handleTopicChange(index)}
            >
              {topic.title}
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="content">
          <h2>{topics[activeIndex].title}</h2>

          <div
            className="lesson-content"
            dangerouslySetInnerHTML={{ __html: topics[activeIndex].content }}
          />

          {/* Code Editor */}
          <textarea
            className="editor"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />

          <button className="run-btn" onClick={() => setRunCode(code)}>
            Run Code ▶
          </button>
        </div>

        {/* Preview */}
        <div className="preview">
          <iframe
            title="preview"
            srcDoc={`
              <!DOCTYPE html>
              <html>
                <head>
                  <style>
                    body {
                      font-family: Arial, sans-serif;
                      padding: 10px;
                      margin: 0;
                    }
                    img {
                      max-width: 100%;
                    }
                    a {
                      color: blue;
                    }
                  </style>
                </head>
                <body>
                  ${finalCode}
                </body>
              </html>
            `}
            sandbox="allow-scripts allow-popups allow-forms"
          />
        </div>

      </div>
    </>
  );
}

export default LearnHTML;
