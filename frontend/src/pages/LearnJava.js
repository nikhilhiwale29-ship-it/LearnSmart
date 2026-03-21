import { useState } from "react";
import "../styles/learn.css";
import Navbar from "../components/Nav";

const topics = [

  {
    title: "Java Introduction",
    content: `
      <h3>What is Java? ☕</h3>
      <p>Java is a high-level programming language used to build applications.</p>

      <ul>
        <li>Platform independent (Write Once, Run Anywhere)</li>
        <li>Object-Oriented Programming (OOP)</li>
        <li>Used in Android, Web, Backend systems</li>
      </ul>

      <p><b>Fun Fact:</b> Java runs on JVM (Java Virtual Machine).</p>
    `,
    code: `
public class Main {
  public static void main(String[] args) {
    System.out.println("Hello Java");
  }
}
    `,
    output: "Hello Java"
  },

  {
    title: "Variables",
    content: `
      <h3>Variables 📦</h3>
      <p>Variables store data values.</p>

      <ul>
        <li><b>int</b> → integers</li>
        <li><b>String</b> → text</li>
        <li><b>double</b> → decimal values</li>
      </ul>

      <p><b>Syntax:</b></p>
      <pre>int age = 20;</pre>
    `,
    code: `
public class Main {
  public static void main(String[] args) {
    int age = 20;
    String name = "Roy";
    System.out.println(name + " is " + age);
  }
}
    `,
    output: "Roy is 20"
  },

  {
    title: "Data Types",
    content: `
      <h3>Data Types 📊</h3>
      <p>Data types define what type of data a variable can hold.</p>

      <ul>
        <li>int → 10</li>
        <li>double → 10.5</li>
        <li>char → 'A'</li>
        <li>boolean → true/false</li>
      </ul>
    `,
    code: `
public class Main {
  public static void main(String[] args) {
    int a = 10;
    double b = 5.5;
    char c = 'A';
    boolean d = true;

    System.out.println(a + " " + b + " " + c + " " + d);
  }
}
    `,
    output: "10 5.5 A true"
  },

  {
    title: "User Input",
    content: `
      <h3>User Input ⌨</h3>
      <p>Java uses Scanner class to take input from user.</p>

      <ul>
        <li>Import Scanner</li>
        <li>Create object</li>
        <li>Use nextInt(), nextLine()</li>
      </ul>
    `,
    code: `
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int num = sc.nextInt();
    System.out.println("You entered: " + num);
  }
}
    `,
    output: (input) => `You entered: ${input || ""}`
  },

  {
    title: "Operators",
    content: `
      <h3>Operators ➕</h3>
      <p>Operators perform operations on variables.</p>

      <ul>
        <li>+ Addition</li>
        <li>- Subtraction</li>
        <li>* Multiplication</li>
        <li>/ Division</li>
      </ul>
    `,
    code: `
public class Main {
  public static void main(String[] args) {
    int a = 10, b = 5;
    System.out.println(a + b);
  }
}
    `,
    output: "15"
  },

  {
    title: "If Else",
    content: `
      <h3>Conditional Statements 🔀</h3>
      <p>Used to make decisions.</p>

      <ul>
        <li>if</li>
        <li>else</li>
        <li>else if</li>
      </ul>
    `,
    code: `
public class Main {
  public static void main(String[] args) {
    int num = 10;
    if(num > 5) {
      System.out.println("Greater");
    } else {
      System.out.println("Smaller");
    }
  }
}
    `,
    output: "Greater"
  },

  {
    title: "Switch Case",
    content: `
      <h3>Switch Case 🔘</h3>
      <p>Used when multiple conditions exist.</p>
    `,
    code: `
public class Main {
  public static void main(String[] args) {
    int day = 2;

    switch(day){
      case 1: System.out.println("Monday"); break;
      case 2: System.out.println("Tuesday"); break;
    }
  }
}
    `,
    output: "Tuesday"
  },

  {
    title: "Loops",
    content: `
      <h3>Loops 🔁</h3>
      <p>Loops repeat code multiple times.</p>

      <ul>
        <li>for loop</li>
        <li>while loop</li>
      </ul>
    `,
    code: `
public class Main {
  public static void main(String[] args) {
    for(int i=1;i<=3;i++){
      System.out.println(i);
    }
  }
}
    `,
    output: "1\n2\n3"
  },

  {
    title: "Methods",
    content: `
      <h3>Methods ⚙</h3>
      <p>Reusable blocks of code.</p>

      <p><b>Why use methods?</b></p>
      <ul>
        <li>Reduce repetition</li>
        <li>Improve readability</li>
      </ul>
    `,
    code: `
public class Main {
  static void greet(){
    System.out.println("Hello!");
  }

  public static void main(String[] args) {
    greet();
  }
}
    `,
    output: "Hello!"
  },

  {
    title: "Arrays",
    content: `
      <h3>Arrays 📚</h3>
      <p>Store multiple values in one variable.</p>
    `,
    code: `
public class Main {
  public static void main(String[] args) {
    int[] arr = {1,2,3};
    for(int i: arr){
      System.out.println(i);
    }
  }
}
    `,
    output: "1\n2\n3"
  },

  // NEW TOPICS 👇

  {
    title: "Strings",
    content: `
      <h3>Strings 🔤</h3>
      <p>Strings store text data.</p>
    `,
    code: `
public class Main {
  public static void main(String[] args) {
    String name = "Java";
    System.out.println(name.length());
  }
}
    `,
    output: "4"
  },

  {
    title: "Type Casting",
    content: `
      <h3>Type Casting 🔄</h3>
      <p>Convert one data type into another.</p>
    `,
    code: `
public class Main {
  public static void main(String[] args) {
    double d = 10.5;
    int i = (int)d;
    System.out.println(i);
  }
}
    `,
    output: "10"
  },

  {
    title: "OOP Basics",
    content: `
      <h3>OOP Concepts 🧠</h3>
      <ul>
        <li>Class</li>
        <li>Object</li>
        <li>Encapsulation</li>
      </ul>
    `,
    code: `
class Car {
  String brand = "BMW";
}

public class Main {
  public static void main(String[] args) {
    Car c = new Car();
    System.out.println(c.brand);
  }
}
    `,
    output: "BMW"
  },

  {
    title: "Constructors",
    content: `
      <h3>Constructors 🏗</h3>
      <p>Special method used to initialize objects.</p>
    `,
    code: `
class Demo {
  Demo(){
    System.out.println("Constructor called");
  }
}

public class Main {
  public static void main(String[] args) {
    new Demo();
  }
}
    `,
    output: "Constructor called"
  },

  {
    title: "Exception Handling",
    content: `
      <h3>Exceptions ⚠</h3>
      <p>Handle runtime errors using try-catch.</p>
    `,
    code: `
public class Main {
  public static void main(String[] args) {
    try {
      int a = 10/0;
    } catch(Exception e){
      System.out.println("Error handled");
    }
  }
}
    `,
    output: "Error handled"
  },

  {
    title: "Multidimensional Arrays",
    content: `
      <h3>2D Arrays 🧩</h3>
    `,
    code: `
public class Main {
  public static void main(String[] args) {
    int[][] arr = {{1,2},{3,4}};
    System.out.println(arr[0][1]);
  }
}
    `,
    output: "2"
  }

];

function LearnJava() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [code, setCode] = useState(topics[0].code);
  const [output, setOutput] = useState("");
  const [input, setInput] = useState("");

  const handleTopicChange = (index) => {
    setActiveIndex(index);
    setCode(topics[index].code);
    setOutput("");
    setInput("");
  };

  const runCodeHandler = () => {
    const topic = topics[activeIndex];

    try {
      if (typeof topic.output === "function") {
        setOutput(topic.output(input));
      } else {
        setOutput(topic.output);
      }
    } catch (err) {
      setOutput("Error running code");
    }
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

          {/* Code */}
          <textarea
            className="editor"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />

          {/* Input */}
          <input
            className="input-box"
            placeholder="Enter input (if needed)"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button className="run-btn" onClick={runCodeHandler}>
            Run Code ▶
          </button>

          {/* Console */}
          <div className="console">
            <h4>Console Output:</h4>
            <pre>{output}</pre>
          </div>
        </div>

      </div>
    </>
  );
}

export default LearnJava;