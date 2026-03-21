/* eslint-disable no-unused-vars, no-new-func */
import { useState } from "react";
import "../styles/learn.css";
import Nav from "../components/Nav";

const topics = [
  {
    title: "C Introduction",
    content: `
      <p>C is a powerful programming language used for system programming.</p>
      <ul>
        <li>Fast ⚡</li>
        <li>Low-level access</li>
        <li>Used in OS & embedded systems</li>
      </ul>
    `,
    code: `
#include <stdio.h>

int main() {
  printf("Hello C");
  return 0;
}
    `
  },

  {
    title: "Variables",
    content: `
      <p>Variables store values.</p>
      <ul>
        <li>int → numbers</li>
        <li>float → decimals</li>
        <li>char → characters</li>
      </ul>
    `,
    code: `
#include <stdio.h>

int main() {
  int a = 10;
  float b = 5.5;
  char c = 'A';

  printf("%d %f %c", a, b, c);
  return 0;
}
    `
  },

  {
    title: "Data Types",
    content: `
      <p>C supports multiple data types.</p>
      <ul>
        <li>int</li>
        <li>float</li>
        <li>double</li>
        <li>char</li>
      </ul>
    `,
    code: `
#include <stdio.h>

int main() {
  int x = 5;
  double y = 10.5;

  printf("%d %f", x, y);
  return 0;
}
    `
  },

  {
    title: "Operators",
    content: `
      <p>Operators perform operations.</p>
      <ul>
        <li>+ - * /</li>
        <li>% (modulus)</li>
      </ul>
    `,
    code: `
#include <stdio.h>

int main() {
  int a = 10, b = 3;
  printf("%d", a % b);
  return 0;
}
    `
  },

  {
    title: "If Else",
    content: `<p>Used for decision making.</p>`,
    code: `
#include <stdio.h>

int main() {
  int a = 5;

  if(a > 3)
    printf("Greater");
  else
    printf("Smaller");

  return 0;
}
    `
  },

  {
    title: "Switch Case",
    content: `<p>Multiple conditions using switch.</p>`,
    code: `
#include <stdio.h>

int main() {
  int day = 2;

  switch(day) {
    case 1: printf("Mon"); break;
    case 2: printf("Tue"); break;
  }

  return 0;
}
    `
  },

  {
    title: "Loops",
    content: `<p>Loops repeat code.</p>`,
    code: `
#include <stdio.h>

int main() {
  for(int i=1;i<=3;i++) {
    printf("%d\\n", i);
  }
  return 0;
}
    `
  },

  {
    title: "While Loop",
    content: `<p>Runs until condition is false.</p>`,
    code: `
#include <stdio.h>

int main() {
  int i = 1;

  while(i <= 3) {
    printf("%d ", i);
    i++;
  }
  return 0;
}
    `
  },

  {
    title: "Arrays",
    content: `<p>Stores multiple values.</p>`,
    code: `
#include <stdio.h>

int main() {
  int arr[3] = {1,2,3};

  for(int i=0;i<3;i++) {
    printf("%d ", arr[i]);
  }
  return 0;
}
    `
  },

  {
    title: "Strings",
    content: `<p>Strings are char arrays.</p>`,
    code: `
#include <stdio.h>

int main() {
  char name[] = "Nikhil";
  printf("%s", name);
  return 0;
}
    `
  },

  {
    title: "Functions",
    content: `<p>Reusable blocks of code.</p>`,
    code: `
#include <stdio.h>

void greet() {
  printf("Hello!");
}

int main() {
  greet();
  return 0;
}
    `
  },

  {
    title: "Pointers",
    content: `<p>Pointers store memory address.</p>`,
    code: `
#include <stdio.h>

int main() {
  int a = 10;
  int *p = &a;

  printf("%d", *p);
  return 0;
}
    `
  },

  {
    title: "Structures",
    content: `<p>Group different data types.</p>`,
    code: `
#include <stdio.h>

struct Student {
  int age;
};

int main() {
  struct Student s;
  s.age = 20;

  printf("%d", s.age);
  return 0;
}
    `
  },

  {
    title: "User Input (scanf)",
    content: `<p>Take input using scanf.</p>`,
    code: `
#include <stdio.h>

int main() {
  int num;
  scanf("%d", &num);

  printf("You entered: %d", num);
  return 0;
}
    `
  }
];

function LearnC() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [code, setCode] = useState(topics[0].code);
  const [consoleOutput, setConsoleOutput] = useState("");
  const [input, setInput] = useState("");

  const handleTopicChange = (index) => {
    setActiveIndex(index);
    setCode(topics[index].code);
    setConsoleOutput("");
  };

  // ERROR CHECK
  const detectErrors = (code) => {
    if (!code.includes("#include <stdio.h>"))
      return "❌ Missing stdio.h";

    if (!code.includes("main("))
      return "❌ main() missing";

    if (!code.includes(";"))
      return "❌ Missing semicolon";

    return null;
  };

const runSimulatedC = (code, userInput) => {
  let output = "";

  // Helper for printf
  const _print = (format, ...args) => {
    let i = 0;
    const result = format.replace(/%d|%i|%f|%c|%s/g, (specifier) => {
      let val = args[i++];
      if (specifier === "%f") return parseFloat(val).toFixed(6);
      return val !== undefined ? val : "";
    });
    output += result.replace(/\\n/g, "\n");
  };

  try {
    // 1. Prepare the JS code
    let jsCode = code
      .replace(/#include\s+<[^>]+>/g, "")
      .replace(/return\s+0\s*;/g, "")
      // Convert 'struct Student s' -> 'let s = {}'
      .replace(/struct\s+(\w+)\s*{[\s\S]*?};/g, "") 
      .replace(/struct\s+(\w+)\s+(\w+);/g, "let $2 = {};")
      // Convert C functions to JS functions
      .replace(/(void|int|float|char)\s+(\w+)\s*\(([^)]*)\)\s*{/g, "function $2($3) {")
      // Handle Pointers
      .replace(/(int|float|char)\s*\*\s*(\w+)\s*=\s*&(\w+);/g, "let $2 = $3;")
      .replace(/\*(\w+)/g, "$1")
      // Convert types (int, float, etc) to 'let'
      .replace(/(int|float|double|char)\s+/g, "let ")
      // Arrays & Strings
      .replace(/let\s+(\w+)\[\d*\]\s*=\s*\{([^}]+)\}/g, "let $1 = [$2]")
      .replace(/let\s+(\w+)\[\]\s*=\s*"([^"]*)"/g, 'let $1 = "$2"')
      // Redirect printf
      .replace(/printf\s*\(/g, "_print(");

    // 2. FIXED SCANF LOGIC
    // We replace the scanf call with an assignment from our hidden _input variable
    jsCode = jsCode.replace(/scanf\s*\(\s*"[^"]*"\s*,\s*&(\w+)\s*\);/g, "$1 = _input;");

    // 3. Ensure main() is called
    if (jsCode.includes("function main")) {
      jsCode += "\nmain();";
    }

    // 4. Pass BOTH _print and _input into the simulator
    // If input is a number, convert it, otherwise keep as string
    const processedInput = isNaN(userInput) || userInput === "" ? userInput : Number(userInput);
    
    const execute = new Function("_print", "_input", jsCode);
    execute(_print, processedInput);

    return output;
  } catch (err) {
    console.error("Transpiler Error:", err);
    return "❌ Simulation Error: Check semicolons or braces.";
  }
};

  // SCANF SIMULATION
  const handleScanf = (code) => {
    if (code.includes("scanf")) {
      return input || "⚠️ Enter input above";
    }
    return null;
  };

  const runCode = () => {
  const error = detectErrors(code);
  if (error) return setConsoleOutput(error);

  // This handles everything: variables, logic, loops, arrays, and strings
  const result = runSimulatedC(code, input);
  
  setConsoleOutput(result || "⚠️ No output (did you forget printf?)");
};

  return (
    <>
      <Nav />

      <div className="learn-page">

        <div className="learn-sidebar">
          {topics.map((t, i) => (
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
          <h2>{topics[activeIndex].title}</h2>

          <div
            className="lesson-content"
            dangerouslySetInnerHTML={{ __html: topics[activeIndex].content }}
          />

          <textarea
            className="editor"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />

          {/* INPUT BOX */}
          <input
            className="input-box"
            placeholder="Enter input (for scanf)"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button className="run-btn" onClick={runCode}>
            Run Code ▶
          </button>

          {/* CONSOLE */}
          <div className="console">
            <pre>{consoleOutput}</pre>
          </div>
        </div>

      </div>
    </>
  );
}

export default LearnC;