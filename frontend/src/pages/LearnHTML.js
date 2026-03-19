import { useState, useEffect } from "react";
import "../styles/learn.css";
import Navbar from "../components/Navbar";

const topics = [
  {
    title: "HTML Introduction",
    content: `
      <h3>What is HTML?</h3>
      <p><b>HTML (HyperText Markup Language)</b> is the standard language used to create web pages.</p>

      <h4>Key Points:</h4>
      <ul>
        <li>HTML is not a programming language</li>
        <li>Uses tags like &lt;h1&gt;, &lt;p&gt;, &lt;a&gt;</li>
        <li>Browser reads HTML and displays content</li>
      </ul>

      <h4>Example:</h4>
      <p>This code creates a heading and paragraph.</p>
    `,
    
    code: `<!DOCTYPE html>
<html>
<head>
  <title>My First Page</title>
</head>
<body>

  <h1>Hello World</h1>
  <p>This is my first HTML page.</p>

</body>
</html>`
  },

  {
    title: "HTML Structure",
    content: `
      <h3>Basic Structure</h3>
      <p>Every HTML page follows a standard structure.</p>

      <h4>Main Tags:</h4>
      <ul>
        <li><b>&lt;!DOCTYPE html&gt;</b> → Defines HTML5</li>
        <li><b>&lt;html&gt;</b> → Root element</li>
        <li><b>&lt;head&gt;</b> → Metadata</li>
        <li><b>&lt;body&gt;</b> → Visible content</li>
      </ul>

      <h4>Tip:</h4>
      <p>Everything you see on a webpage is inside the <b>body</b> tag.</p>
    `,
    
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Structure</title>
</head>
<body>

  <h1>Welcome</h1>
  <p>This is a structured page.</p>

</body>
</html>`
  },

  {
    title: "HTML Text Formatting",
    content: `
      <h3>Formatting Text</h3>
      <p>HTML provides several tags to change how text appears on a webpage, helping to emphasize important information.</p>

      <h4>Common Formatting Tags:</h4>
      <ul>
        <li><b>&lt;b&gt;</b> or <b>&lt;strong&gt;</b> → Important/Bold text</li>
        <li><i>&lt;i&gt;</i> or <em>&lt;em&gt;</em> → Emphasized/Italic text</li>
        <li><u>&lt;u&gt;</u> → Underlined text</li>
        <li><mark>&lt;mark&gt;</mark> → Highlighted text</li>
      </ul>

      <h4>Why use &lt;strong&gt; instead of &lt;b&gt;?</h4>
      <p>While they look the same, <b>&lt;strong&gt;</b> tells search engines and screen readers that the text is actually important, not just visually bold.</p>
    `,
    code: `<p>This is <b>bold</b> text.</p>\n<p>This is <strong>important</strong> text.</p>\n<p>This is <i>italic</i> text.</p>\n<p>This is <mark>highlighted</mark> text.</p>`
  },

  {
    title: "HTML Links (Hyperlinks)",
    content: `
      <h3>Creating Links</h3>
      <p>Links allow users to click their way from one page to another. We use the <b>&lt;a&gt;</b> (anchor) tag for this.</p>

      <h4>The href Attribute:</h4>
      <p>The <b>href</b> attribute is the most important part of a link; it specifies the destination address.</p>

      <ul>
        <li><b>External Links:</b> Link to other websites (e.g., Google).</li>
        <li><b>Internal Links:</b> Link to other pages on your own website.</li>
        <li><b>Target Attribute:</b> Use <code>target="_blank"</code> to open the link in a new tab.</li>
      </ul>
    `,
    code: `\n<a href="https://www.wikipedia.org" target="_blank">Open Wikipedia</a>`
  },

  {
    title: "HTML Images",
    content: `
      <h3>Adding Images</h3>
      <p>Images make web pages engaging. We use the <b>&lt;img&gt;</b> tag to embed photos or graphics.</p>

      <h4>Essential Attributes:</h4>
      <ul>
        <li><b>src</b> (source) → The path or URL to the image file.</li>
        <li><b>alt</b> (alternative text) → A description of the image for screen readers or if the image fails to load.</li>
        <li><b>width/height</b> → Defines the size of the image in pixels.</li>
      </ul>

      <h4>Pro Tip:</h4>
      <p>The <b>&lt;img&gt;</b> tag is an <i>empty element</i>, meaning it does not have a closing &lt;/img&gt; tag.</p>
    `,
    code: `\n<img src="/images/logo.png" alt="Company Logo">`
  },

  {
    title: "HTML Lists",
    content: `
      <h3>Organizing Content with Lists</h3>
      <p>Lists are used to group related items together in a structured way.</p>
      <h4>Types of Lists:</h4>
      <ul>
        <li><b>Unordered List (&lt;ul&gt;):</b> Bulleted points.</li>
        <li><b>Ordered List (&lt;ol&gt;):</b> Numbered points.</li>
        <li><b>List Item (&lt;li&gt;):</b> The actual content inside either list type.</li>
      </ul>
    `,
    code: `<ul>\n  <li>Apples</li>\n  <li>Bananas</li>\n</ul>\n\n<ol>\n  <li>First step</li>\n  <li>Second step</li>\n</ol>`
  },
  {
    title: "HTML Tables",
    content: `
      <h3>Data in Rows and Columns</h3>
      <p>Tables allow you to arrange data into a grid format.</p>
      <h4>Table Elements:</h4>
      <ul>
        <li><b>&lt;table&gt;</b>: The wrapper for the entire table.</li>
        <li><b>&lt;tr&gt;</b>: A table row.</li>
        <li><b>&lt;th&gt;</b>: A header cell (bold and centered by default).</li>
        <li><b>&lt;td&gt;</b>: A standard data cell.</li>
      </ul>
    `,
    code: `<table>\n  <tr>\n    <th>Name</th>\n    <th>Age</th>\n  </tr>\n  <tr>\n    <td>John</td>\n    <td>25</td>\n  </tr>\n</table>`
  },
  {
    title: "HTML Forms",
    content: `
      <h3>Collecting User Input</h3>
      <p>Forms are essential for interaction, allowing users to enter data like names and emails.</p>
      <h4>Common Elements:</h4>
      <ul>
        <li><b>&lt;form&gt;</b>: The container for input elements.</li>
        <li><b>&lt;input&gt;</b>: Can be text, password, checkbox, etc.</li>
        <li><b>&lt;label&gt;</b>: Describes what the input is for (important for accessibility).</li>
      </ul>
    `,
    code: `<form>\n  <label for="name">Name:</label>\n  <input type="text" id="name" name="name">\n  <button type="submit">Submit</button>\n</form>`
  },
  {
    title: "HTML Buttons",
    content: `
      <h3>Clickable Elements</h3>
      <p>The <b>&lt;button&gt;</b> tag defines a clickable button, often used to trigger actions or submit forms.</p>
      <p><b>Tip:</b> Always specify a <code>type</code> attribute (button, submit, or reset) to define its behavior.</p>
    `,
    code: `<button type="button" onclick="alert('Hello!')">Click Me!</button>`
  },
  {
    title: "HTML Comments",
    content: `
      <h3>Hidden Notes for Developers</h3>
      <p>Comments are not displayed in the browser. They are used to explain code or leave reminders.</p>
      <p><b>Syntax:</b> Use <code>&lt;!--</code> to start and <code>--&gt;</code> to end.</p>
    `,
    code: `\n<p>This paragraph is visible.</p>`
  },
  {
    title: "HTML Block vs Inline",
    content: `
      <h3>Layout Behavior</h3>
      <p>HTML elements have a default display value depending on their type.</p>
      <ul>
        <li><b>Block Elements:</b> Always start on a new line and take up the full width (e.g., &lt;div&gt;, &lt;p&gt;, &lt;h1&gt;).</li>
        <li><b>Inline Elements:</b> Do not start on a new line and only take up as much width as necessary (e.g., &lt;span&gt;, &lt;a&gt;, &lt;img&gt;).</li>
      </ul>
    `,
    code: `<div>I am a block element.</div>\n<span>I am inline</span>\n<span>Me too!</span>`
  },
  {
    title: "HTML Id and Class",
    content: `
      <h3>Identifying Elements</h3>
      <p>Attributes used to target specific elements for styling (CSS) or functionality (JavaScript).</p>
      <ul>
        <li><b>id:</b> Must be unique to only <b>one</b> element on the page.</li>
        <li><b>class:</b> Can be used on <b>multiple</b> elements to group them.</li>
      </ul>
    `,
    code: `<div id="header">Unique Header</div>\n<p class="error-text">First error</p>\n<p class="error-text">Second error</p>`
  },
  {
    title: "HTML Div and Span",
    content: `
      <h3>The Generic Containers</h3>
      <p>These tags don't mean anything by themselves; they are used to group other elements.</p>
      <ul>
        <li><b>&lt;div&gt;:</b> A block-level container for large sections.</li>
        <li><b>&lt;span&gt;:</b> An inline container for small bits of text.</li>
      </ul>
    `,
    code: `<div style="background-color: #f0f0f0;">\n  <p>Inside a div <span style="color: red;">red text</span></p>\n</div>`
  },
  {
    title: "HTML Semantic Elements",
    content: `
      <h3>Meaningful Tags</h3>
      <p>Semantic elements clearly describe their meaning to both the browser and the developer.</p>
      <p>Instead of using generic <b>&lt;div&gt;</b> tags for everything, use tags like:</p>
      <ul>
        <li><b>&lt;header&gt;</b> and <b>&lt;footer&gt;</b></li>
        <li><b>&lt;nav&gt;</b> (Navigation links)</li>
        <li><b>&lt;article&gt;</b> and <b>&lt;section&gt;</b></li>
      </ul>
    `,
    code: `<header>\n  <h1>My Website</h1>\n</header>\n<nav>\n  <a href="#home">Home</a>\n</nav>`
  },
  {
    title: "HTML Iframes",
    content: `
      <h3>Displaying Other Pages</h3>
      <p>An <b>&lt;iframe&gt;</b> is used to display a web page within a web page (like an embedded YouTube video).</p>
      <p><b>Important:</b> Always include a <code>title</code> for accessibility.</p>
    `,
    code: `<iframe src="https://www.wikipedia.org" title="Wiki Frame" width="300" height="200"></iframe>`
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
