/* eslint-disable no-new-func */
import { useState } from "react";
import "../styles/learn.css";
import Navbar from "../components/Nav";

const cppTopics = [
  {
    title: "C++ Introduction",
    content: `
      <p>C++ is a general-purpose, case-sensitive, free-form programming language that supports <b>Object-Oriented</b>, generic, and procedural programming.</p>
      <h3>Why Learn C++?</h3>
      <ul>
        <li><b>Speed:</b> It is one of the fastest languages available.</li>
        <li><b>Standard Template Library (STL):</b> A huge library of tools.</li>
        <li><b>Memory Control:</b> Direct management of system resources.</li>
      </ul>
    `,
    code: `#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << "Welcome to C++ Programming!" << endl;\n  return 0;\n}`
  },
  {
    title: "Variables & Constants",
    content: `
      <p>Variables are containers for storing data values. In C++, we use <code>const</code> when we don't want others to change existing variable values.</p>
      <ul>
        <li><b>int:</b> Whole numbers (5)</li>
        <li><b>double:</b> Floating point numbers (5.99)</li>
        <li><b>char:</b> Single characters ('D')</li>
        <li><b>string:</b> Text ("Hello World")</li>
      </ul>
    `,
    code: `#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n  const int minutesPerHour = 60;\n  string greeting = "Hello";\n  cout << greeting << ". There are " << minutesPerHour << " minutes in an hour.";\n  return 0;\n}`
  },
  {
    title: "User Input (cin)",
    content: `
      <p>While <code>cout</code> uses the insertion operator (<code>&lt;&lt;</code>), <code>cin</code> uses the extraction operator (<code>&gt;&gt;</code>).</p>
      <blockquote>Note: <code>cin</code> considers spaces as terminating characters. To read a full line of text, we use <code>getline()</code>.</blockquote>
    `,
    code: `#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n  string name;\n  cout << "Enter your name: ";\n  cin >> name;\n  cout << "Hello " << name << "!";\n  return 0;\n}`
  },
  {
    title: "Math & Operators",
    content: `
      <p>C++ supports basic arithmetic operators (+, -, *, /, %) as well as logical and comparison operators.</p>
    `,
    code: `#include <iostream>\nusing namespace std;\n\nint main() {\n  int x = 100 + 50;\n  int sum1 = x + 250;\n  cout << "Total Sum: " << sum1 << endl;\n  cout << "Is 10 > 9? " << (10 > 9);\n  return 0;\n}`
  },
  {
    title: "Strings & Length",
    content: `
      <p>C++ strings are objects that have functions like <code>length()</code> and <code>size()</code>.</p>
    `,
    code: `#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n  string txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";\n  cout << "The length of the string is: " << txt.length();\n  return 0;\n}`
  },
  {
    title: "Switch Statements",
    content: `
      <p>Use the <code>switch</code> statement to select one of many code blocks to be executed.</p>
    `,
    code: `#include <iostream>\nusing namespace std;\n\nint main() {\n  int day = 4;\n  switch (day) {\n    case 1: cout << "Monday"; break;\n    case 4: cout << "Thursday"; break;\n    default: cout << "Weekend";\n  }\n  return 0;\n}`
  },
  {
    title: "Arrays & Loops",
    content: `
      <p>Arrays are used to store multiple values in a single variable. We often use <b>For Loops</b> to iterate through them.</p>
    `,
    code: `#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n  string cars[4] = {"Volvo", "BMW", "Ford", "Mazda"};\n  for(int i = 0; i < 4; i++) {\n    cout << cars[i] << "\\n";\n  }\n  return 0;\n}`
  },
  {
    title: "References & Addresses",
    content: `
      <p>A reference variable is a "nickname" for an existing variable. We use the <code>&</code> operator.</p>
    `,
    code: `#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n  string food = "Pizza";\n  string &meal = food;\n  cout << food << endl; // Prints Pizza\n  cout << meal << endl; // Prints Pizza\n  return 0;\n}`
  },
  {
    title: "Functions & Parameters",
    content: `
      <p>Functions allow you to reuse code. You can pass data, known as parameters, into a function.</p>
    `,
    code: `#include <iostream>\nusing namespace std;\n\nvoid myFunction(string name) {\n  cout << "Hello " << name << endl;\n}\n\nint main() {\n  myFunction("Liam");\n  myFunction("Jenny");\n  return 0;\n}`
  },
  {
    title: "Classes & Objects",
    content: `
      <p>C++ is an object-oriented programming language. Everything in C++ is associated with classes and objects.</p>
      <ul>
        <li><b>Class:</b> A template for objects.</li>
        <li><b>Object:</b> An instance of a class.</li>
      </ul>
    `,
    code: `#include <iostream>\nusing namespace std;\n\nclass MyClass {\n  public:\n    int myNum;\n    void myMethod() {\n      cout << "Inside Method!";\n    }\n};\n\nint main() {\n  MyClass myObj;\n  myObj.myNum = 15;\n  cout << myObj.myNum << endl;\n  myObj.myMethod();\n  return 0;\n}`
  },
  {
    title: "Inheritance",
    content: `
      <p>In C++, it is possible to inherit attributes and methods from one class to another.</p>
      <ul>
        <li><b>Derived Class (child):</b> the class that inherits from another class.</li>
        <li><b>Base Class (parent):</b> the class being inherited from.</li>
      </ul>
    `,
    code: `#include <iostream>\nusing namespace std;\n\nclass Vehicle {\n  public:\n    string brand = "Ford";\n};\n\nclass Car: public Vehicle {\n  public:\n    string model = "Mustang";\n};\n\nint main() {\n  Car myCar;\n  cout << myCar.brand + " " + myCar.model;\n  return 0;\n}`
  }
];

function LearnCPP() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [code, setCode] = useState(cppTopics[0].code);
  const [consoleOutput, setConsoleOutput] = useState("");
  const [input, setInput] = useState("");

  const handleTopicChange = (index) => {
    setActiveIndex(index);
    setCode(cppTopics[index].code);
    setConsoleOutput("");
  };

  const runSimulatedCPP = (rawCode, userInput) => {
  let output = "";
  const _print = (...args) => {
    args.forEach(arg => {
      if (arg === "\n" || arg === "endl") output += "\n";
      else output += arg;
    });
  };

  try {
    let js = rawCode;

    // 1. Cleanup Headers & Namespaces
    js = js.replace(/#include\s*<[^>]+>/g, "")
           .replace(/using\s+namespace\s+std\s*;/g, "")
           .replace(/return\s+0\s*;/g, "");

    // 2. Handle Arrays
    js = js.replace(/(int|float|double|string|char)\s+(\w+)\[\d*\]\s*=\s*{([^}]+)};/g, "let $2 = [$3];");

    // 3. Handle Classes & Inheritance
    js = js.replace(/class\s+(\w+)(?:\s*:\s*public\s+(\w+))?\s*{([\s\S]*?)};/g, (match, className, baseClass, body) => {
      let inheritance = baseClass ? `extends ${baseClass}` : "";
      let cleanBody = body
        .replace(/public:|private:|protected:/g, "")
        .replace(/\b(void|int|float|string|double|char)\s+(\w+)\s*\(([^)]*)\)\s*{/g, "$2($3) {")
        .replace(/\b(int|float|double|string|char)\s+(\w+)(\s*=\s*[^;]+)?;/g, "$2 $3;");
      return `class ${className} ${inheritance} {\n  constructor() { ${baseClass ? 'super();' : ''} }\n${cleanBody}\n}`;
    });

    // 4. FIX: Handle References BEFORE general type replacement
    // Converts: string &meal = food; -> let meal = food;
    js = js.replace(/\b(int|float|double|char|string)\s*&\s*(\w+)\s*=/g, "let $2 =");

    // 5. FIX: Handle Functions & Parameters
    // Specifically targets types inside ( ) and removes them
    js = js.replace(/\b(void|int|float|string|double)\s+(\w+)\s*\((.*?)\)\s*{/g, (match, type, name, params) => {
      if (name === "main") return "function main() {";
      let cleanParams = params.split(',').map(p => {
        // Removes type and potential & from parameters
        return p.trim().replace(/^(int|float|double|string|char|long)\s*&?\s*/, "").trim();
      }).join(', ');
      return `function ${name}(${cleanParams}) {`;
    });

    // 6. Handle Object Instantiation
    js = js.replace(/(?<!new\s+|class\s+)\b([A-Z]\w+)\s+(\w+)\s*;/g, "let $2 = new $1();");

    // 7. FIX: Variables & Constants
    // Handle 'const int x' -> 'const x'
    js = js.replace(/\bconst\s+(int|float|double|char|string|long)\s+/g, "const ");
    // Handle 'int x = 10' -> 'let x = 10'
    js = js.replace(/(?<!\.|let\s+|const\s+)\b(int|float|double|char|string|long)\b(?!\s*main)(?!\s*\()(\s+)(\w+)/g, "let $3");

    // 8. String Methods & I/O
    js = js.replace(/\.(length|size)\(\)/g, ".length");
    js = js.replace(/cout\s*<<\s*([\s\S]*?);/g, (match, content) => {
      const parts = content.split("<<").map(p => p.trim() === "endl" ? '"\\n"' : p.trim());
      return `_print(${parts.join(", ")});`;
    });
    js = js.replace(/cin\s*>>\s*(\w+)\s*;/g, "$1 = _input;");

    // 9. Final Execution
    if (js.includes("function main")) js += "\nmain();";
    
    const processedInput = (userInput === "" || isNaN(userInput)) ? userInput : Number(userInput);
    const execute = new Function("_print", "_input", "endl", js);
    execute(_print, processedInput, "\n");

    return output;
  } catch (err) {
    return `❌ Terminal Error: ${err.message}`;
  }
};

  const runCode = () => {
    const result = runSimulatedCPP(code, input);
    setConsoleOutput(result || "⚠️ No output generated.");
  };

  return (
    <>
      <Navbar />
      <div className="learn-page">
        <div className="learn-sidebar">
          {cppTopics.map((t, i) => (
            <div
              key={i}
              className={`topic ${i === activeIndex ? "active" : ""}`}
              onClick={() => handleTopicChange(i)}
            >
              {t.title}
            </div>
          ))}
        </div>

        <div className="content">
          <h2>{cppTopics[activeIndex].title}</h2>
          <div className="lesson-content" dangerouslySetInnerHTML={{ __html: cppTopics[activeIndex].content }} />
          <textarea className="editor" value={code} onChange={(e) => setCode(e.target.value)} spellCheck="false" />
          <input className="input-box" placeholder="Enter input for cin >>" value={input} onChange={(e) => setInput(e.target.value)} />
          <button className="run-btn" onClick={runCode}>Run C++ Code ▶</button>
          <div className="console">
            <div className="console-header">Terminal Output</div>
            <pre>{consoleOutput}</pre>
          </div>
        </div>
      </div>
    </>
  );
}

export default LearnCPP;