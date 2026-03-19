import { useState } from "react";
import "../styles/learn.css";
import Navbar from "../components/Navbar";

const topics = [
  {
    title: "Python Introduction",
    content: `
      <p>Python is a high-level, interpreted language known for its <b>readability</b> and <b>versatility</b>.</p>
      <ul>
        <li><b>Interpreted:</b> Code is executed line by line.</li>
        <li><b>Batteries Included:</b> Comes with a vast standard library.</li>
        <li><b>Indentation Matters:</b> Python uses whitespace to define code blocks instead of curly braces.</li>
      </ul>
    `,
    code: `print("Welcome to the Python World!")\nprint(2 + 2)`
  },
  {
    title: "Variables & Data Types",
    content: `
      <p>In Python, you don't need to declare types. The interpreter infers them.</p>
      <ul>
        <li><b>int:</b> 1, 2, 100</li>
        <li><b>float:</b> 3.14, 2.0</li>
        <li><b>str:</b> "Hello"</li>
        <li><b>bool:</b> True, False</li>
      </ul>
    `,
    code: `name = "Gemini"\nage = 1\nheight = 5.8\nis_ai = True\n\nprint(f"{name} is {age} year old. AI status: {is_ai}")`
  },
  {
    title: "User Input",
    content: `
      <p>The <code>input()</code> function always returns a <b>string</b>. Use <code>int()</code> or <code>float()</code> to convert it for math.</p>
    `,
    code: `city = input("Where do you live? ")\nprint("I hear " + city + " is lovely this time of year!")`
  },
  {
    title: "Logical Operators",
    content: `
      <p>Use <code>and</code>, <code>or</code>, and <code>not</code> to combine conditional statements.</p>
    `,
    code: `x = 10\ny = 20\n\nif x > 5 and y > 15:\n    print("Both conditions are met")\n\nif x == 10 or y == 0:\n    print("At least one is True")`
  },
  {
    title: "Lists & Slicing",
    content: `
      <p>Lists are ordered collections. You can access parts of them using <b>Slicing</b>.</p>
      <code>list[start:stop:step]</code>
    `,
    code: `fruits = ["apple", "banana", "cherry", "date"]\n\nprint(fruits[0])      # First item\nprint(fruits[1:3])    # Slicing (index 1 to 2)\nprint(fruits[::-1])   # Reverse the list`
  },
  {
    title: "List Comprehension",
    content: `
      <p>A concise way to create lists. It consists of brackets containing an expression followed by a <code>for</code> clause.</p>
    `,
    code: `numbers = [1, 2, 3, 4, 5]\nsquares = [x**2 for x in numbers]\n\nprint("Original:", numbers)\nprint("Squares:", squares)`
  },
  {
    title: "Functions & Arguments",
    content: `
      <p>Functions can take <b>parameters</b> and <b>return</b> values. Use <code>def</code> to define them.</p>
    `,
    code: `def add_numbers(a, b):\n    return a + b\n\nresult = add_numbers(5, 7)\nprint("The sum is:", result)`
  },
  {
    title: "Dictionaries (JSON style)",
    content: `
      <p>Dictionaries store data in <b>key:value</b> pairs. They are highly optimized for retrieving data.</p>
    `,
    code: `car = {\n  "brand": "Tesla",\n  "model": "Model 3",\n  "year": 2023\n}\n\nprint(car.get("brand"))\ncar["color"] = "Red"\nprint(car)`
  },
  {
    title: "Classes & Objects (OOP)",
    content: `
      <p>Python is Object-Oriented. A <b>Class</b> is a blueprint; an <b>Object</b> is an instance of that blueprint.</p>
    `,
    code: `class Robot:\n    def __init__(self, name):\n        self.name = name\n\n    def say_hi(self):\n        print(f"Hello, my name is {self.name}")\n\nbot1 = Robot("R2-D2")\nbot1.say_hi()`
  },
  {
    title: "Error Handling",
    content: `
      <p>Use <code>try</code> and <code>except</code> blocks to prevent your program from crashing when an error occurs.</p>
    `,
    code: `try:\n    number = int(input("Enter a number: "))\n    print(10 / number)\nexcept ZeroDivisionError:\n    print("You cannot divide by zero!")\nexcept ValueError:\n    print("Invalid input! Please enter a number.")`
  }
];

function LearnPython() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [code, setCode] = useState(topics[0].code);
  const [consoleOutput, setConsoleOutput] = useState("");
  const [input, setInput] = useState("");

  const handleTopicChange = (index) => {
    setActiveIndex(index);
    setCode(topics[index].code);
    setConsoleOutput("");
  };

  // 🔥 RUN PYTHON CODE FROM BACKEND
  const runCode = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL || "http://localhost:5000"}/run-python`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          code,
          input // (future use if you expand backend)
        })
      });

      const data = await res.json();
      setConsoleOutput(data.output);

    } catch (err) {
      setConsoleOutput("❌ Server error");
    }
  };

  return (
    <>
      <Navbar />

      <div className="learn-page">

        {/* SIDEBAR */}
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

        {/* CONTENT */}
        <div className="content">
          <h2>{topics[activeIndex].title}</h2>

          <div
            className="lesson-content"
            dangerouslySetInnerHTML={{ __html: topics[activeIndex].content }}
          />

          {/* CODE EDITOR */}
          <textarea
            className="editor"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />

          {/* INPUT BOX */}
          <input
            className="input-box"
            placeholder="Enter input (for input())"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          {/* RUN BUTTON */}
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

export default LearnPython;