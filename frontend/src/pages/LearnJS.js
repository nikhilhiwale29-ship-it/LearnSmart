/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import "../styles/learn.css";
import Navbar from "../components/Nav";

const topics = [
  {
    title: "JavaScript Introduction",
    content: `
      <p>JavaScript is a programming language used to make web pages interactive.</p>
      <ul>
        <li>Add dynamic behavior ⚡</li>
        <li>Handle user actions 🖱️</li>
        <li>Update content without reload 🔄</li>
      </ul>
      <p><b>More Info:</b> JavaScript is a "client-side" language, meaning it runs directly in the user's browser (Chrome, Safari, etc.) rather than on a distant server.</p>
      <p><b>Example:</b> Show a message when page loads.</p>
    `,
    code: `
      <script>
        // This runs as soon as the browser reads the script tag
        alert("Welcome to JavaScript!");
        console.log("JS is working!");
      </script>
    `
  },
  {
    title: "Variables",
    content: `
      <p>Variables are used to store data.</p>
      <ul>
        <li>let → changeable value</li>
        <li>const → fixed value</li>
        <li>var → old method (avoid)</li>
      </ul>
      <p><b>Best Practice:</b> Always use <code>const</code> by default. Only use <code>let</code> if you know the value will change later (like a score in a game).</p>
    `,
    code: `
      <script>
        let score = 10; // Can be updated
        const playerName = "Nikhil"; // Cannot be changed
        
        score = score + 5; 
        console.log(playerName + " has a score of: " + score);
      </script>
    `
  },
  {
    title: "Data Types",
    content: `
      <p>JavaScript has different data types:</p>
      <ul>
        <li>String → "Hello"</li>
        <li>Number → 10</li>
        <li>Boolean → true/false</li>
        <li>Array → [1,2,3]</li>
        <li>Object → {}</li>
      </ul>
      <p><b>Note:</b> JavaScript is "dynamically typed," which means one variable can hold a number and then be changed to hold a string later.</p>
    `,
    code: `
      <script>
        let text = "Hello";
        let num = 10.5; // Numbers can be integers or decimals
        let isTrue = true;
        let emptyValue = null; // Represents 'nothing'

        console.log(typeof text); // Returns "string"
        console.log(typeof num);  // Returns "number"
      </script>
    `
  },
  {
    title: "Operators",
    content: `
      <p>Operators perform operations on values.</p>
      <ul>
        <li>+ → addition</li>
        <li>- → subtraction</li>
        <li>* → multiplication</li>
        <li>/ → division</li>
      </ul>
      <p><b>Other Operators:</b> Use <code>%</code> (Modulus) to find the remainder of a division, and <code>**</code> for exponents (powers).</p>
    `,
    code: `
      <script>
        let a = 5;
        let b = 2;

        console.log("Addition: ", a + b);
        console.log("Remainder: ", a % b); // Result: 1
        console.log("Power: ", a ** b);    // Result: 25
      </script>
    `
  },
  {
    title: "Conditions (if-else)",
    content: `
      <p>Conditions are used to make decisions.</p>
      <ul>
        <li>if</li>
        <li>else</li>
        <li>else if</li>
      </ul>
      <p><b>Logic:</b> You can use <code>&&</code> (AND) to check if two things are true, or <code>||</code> (OR) to check if at least one is true.</p>
    `,
    code: `
      <script>
        let age = 18;
        let hasLicense = true;

        if(age >= 18 && hasLicense){
          console.log("You can drive!");
        } else if (age >= 18) {
          console.log("You need a license first.");
        } else {
          console.log("Too young to drive.");
        }
      </script>
    `
  },
  {
    title: "Loops",
    content: `
      <p>Loops repeat code multiple times.</p>
      <ul>
        <li>for loop</li>
        <li>while loop</li>
      </ul>
      <p><b>Use Case:</b> Loops are perfect for going through a list of items or repeating a task until a specific goal is reached.</p>
    `,
    code: `
      <script>
        // Count from 1 to 5
        for(let i = 1; i <= 5; i++){
          console.log("Iteration number: " + i);
        }
        
        let count = 0;
        while(count < 3) {
           console.log("While loop running...");
           count++;
        }
      </script>
    `
  },
  {
    title: "Functions",
    content: `
      <p>Functions are reusable blocks of code.</p>
      <ul>
        <li>Write once, use many times</li>
      </ul>
      <p><b>Parameters:</b> You can pass information into functions (called arguments) to make them perform different tasks with different data.</p>
    `,
    code: `
      <script>
        function calculateArea(width, height){
          return width * height;
        }

        let area = calculateArea(10, 5);
        console.log("Total Area: " + area);
      </script>
    `
  },
  {
    title: "Arrays",
    content: `
      <p>Arrays store multiple values.</p>
      <ul>
        <li>Index starts from 0</li>
      </ul>
      <p><b>Pro Tip:</b> Use <code>.length</code> to find out how many items are in an array, and <code>.push()</code> to add a new item to the end.</p>
    `,
    code: `
      <script>
        let fruits = ["Apple", "Banana", "Mango"];
        fruits.push("Orange"); // Adds Orange

        console.log("Second fruit: " + fruits[1]); // Banana
        console.log("Total fruits: " + fruits.length);
      </script>
    `
  },
  {
    title: "Objects",
    content: `
      <p>Objects store data in key-value pairs.</p>
      <p><b>Concept:</b> If an Array is a list, an Object is a description. It's used to represent real-world things like a user, a product, or a car.</p>
    `,
    code: `
      <script>
        let person = {
          name: "Nikhil",
          age: 20,
          city: "Mumbai"
        };

        // Access using dot notation
        console.log(person.name + " lives in " + person.city);
      </script>
    `
  },
  {
    title: "DOM Manipulation",
    content: `
      <p>JavaScript can change HTML content.</p>
      <ul>
        <li>getElementById()</li>
        <li>querySelector()</li>
      </ul>
      <p><b>Effect:</b> This is how websites change text, hide images, or swap colors without the user having to refresh the page.</p>
    `,
    code: `
      <h2 id="text">Original Text</h2>
      <button onclick="change()">Change Now</button>

      <script>
        function change(){
          let el = document.getElementById("text");
          el.innerHTML = "Content Updated!";
          el.style.color = "blue";
        }
      </script>
    `
  },
  {
    title: "Events",
    content: `
      <p>Events respond to user actions.</p>
      <ul>
        <li>click</li>
        <li>mouseover</li>
      </ul>
      <p><b>Listener:</b> Instead of putting code in HTML, you can use <code>addEventListener</code> in JS to keep your code clean and organized.</p>
    `,
    code: `
      <button id="myBtn">Click Me</button>

      <script>
        document.getElementById("myBtn").addEventListener("click", () => {
          alert("Modern Event Listener triggered!");
        });
      </script>
    `
  },
  {
    title: "Form Handling",
    content: `
      <p>JavaScript can handle form inputs.</p>
      <p><b>Validation:</b> You can check if an email is valid or if a password is long enough before sending the data to a server.</p>
    `,
    code: `
      <input id="userEmail" placeholder="Enter email">
      <button onclick="validate()">Submit</button>

      <script>
        function validate(){
          let val = document.getElementById("userEmail").value;
          if(val === "") {
            alert("Please enter something!");
          } else {
            alert("Sending: " + val);
          }
        }
      </script>
    `
  },
  {
    title: "Timers",
    content: `
      <p>JavaScript can run code after time.</p>
      <ul>
        <li>setTimeout (Once after delay)</li>
        <li>setInterval (Repeats every X ms)</li>
      </ul>
    `,
    code: `
      <script>
        // Runs once
        setTimeout(() => {
          console.log("Delayed 2 seconds");
        }, 2000);

        // Runs every 3 seconds
        let count = 0;
        let timer = setInterval(() => {
          count++;
          console.log("Repeat: " + count);
          if(count === 3) clearInterval(timer); // Stops the timer
        }, 3000);
      </script>
    `
  },
  {
    title: "ES6 Arrow Functions",
    content: `
      <p>Short way to write functions.</p>
      <p><b>Difference:</b> Arrow functions are more compact and handle the <code>this</code> keyword differently, making them very popular in modern frameworks like React.</p>
    `,
    code: `
      <script>
        // Modern arrow function
        const multiply = (x, y) => x * y;

        // One-liner if there's only one parameter
        const square = n => n * n;

        console.log(multiply(4, 5));
        console.log(square(10));
      </script>
    `
  },
  {
    title: "Promises (Basics)",
    content: `
      <p>Used for asynchronous operations.</p>
      <ul>
        <li>resolve (Success)</li>
        <li>reject (Failure)</li>
      </ul>
      <p><b>Why?</b> Promises are used when waiting for data from an API or a database so the rest of the website doesn't "freeze" while waiting.</p>
    `,
    code: `
      <script>
        let promise = new Promise((res, rej) => {
          let success = true;
          if(success) res("Success: Data fetched!");
          else rej("Error: Data lost!");
        });

        promise
          .then(data => console.log(data))
          .catch(err => console.error(err));
      </script>
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

          <button
            className="run-btn"
            onClick={() => {
                setRunCode(code);   // 🔥 THIS triggers iframe reload
            }}
            >
            Run Code ▶
          </button>
        </div>

        {/* Preview */}
        <div className="preview">
        <iframe
        title="preview"
        key={runCode}
        sandbox="allow-scripts allow-same-origin allow-popups allow-modals"
        srcDoc={`
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                body {
                    font-family: Arial;
                    padding: 10px;
                    margin: 0;
                }

                #console {
                    margin-top: 10px;
                    background: #000;
                    color: #0f0;
                    padding: 10px;
                    height: 120px;
                    overflow-y: auto;
                    font-size: 14px;
                    border-radius: 8px;
                }
                </style>
            </head>

            <body>

                <div id="console">Console Output:</div>

                <script>
                const consoleBox = document.getElementById("console");

                function writeToConsole(message, color = "lime") {
                    const line = document.createElement("div");
                    line.style.color = color;
                    line.textContent = message;
                    consoleBox.appendChild(line);
                }

                // OVERRIDE BEFORE USER CODE
                console.log = (...args) => writeToConsole(args.join(" "));
                console.error = (...args) => writeToConsole(args.join(" "), "red");
                console.warn = (...args) => writeToConsole(args.join(" "), "orange");

                window.onerror = (msg) => writeToConsole(msg, "red");
                window.onunhandledrejection = (e) => writeToConsole(e.reason, "red");
                </script>

                ${runCode}

            </body>
            </html>
        `}
        />
        </div>

      </div>
    </>
  );
}

export default LearnHTML;
