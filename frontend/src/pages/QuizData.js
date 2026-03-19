export const quizData = {
  html: [
    // --- BASIC TAGS & STRUCTURE ---
    { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Tech Magic Language"], answer: "Hyper Text Markup Language" },
    { question: "Who is the main maker of Web standards?", options: ["Google", "Microsoft", "The World Wide Web Consortium (W3C)", "Mozilla"], answer: "The World Wide Web Consortium (W3C)" },
    { question: "Choose the correct HTML element for the largest heading:", options: ["<heading>", "<h6>", "<h1>", "<head>"], answer: "<h1>" },
    { question: "What is the correct HTML element for inserting a line break?", options: ["<break>", "<lb>", "<br>", "<hr>"], answer: "<br>" },
    { question: "What is the correct HTML for adding a background color?", options: ["<body bg='yellow'>", "<body style='background-color:yellow;'>", "<background>yellow</background>", "color: yellow"], answer: "<body style='background-color:yellow;'>" },
    { question: "Choose the correct HTML element to define important text:", options: ["<i>", "<strong>", "<important>", "<b>"], answer: "<strong>" },
    { question: "Choose the correct HTML element to define emphasized text:", options: ["<italic>", "<i>", "<em>", "<emphasize>"], answer: "<em>" },
    { question: "What is the correct HTML for creating a hyperlink?", options: ["<a>http://google.com</a>", "<a href='http://google.com'>Google</a>", "<a name='http://google.com'>Google</a>", "<a url='http://google.com'>Google</a>"], answer: "<a href='http://google.com'>Google</a>" },
    { question: "Which character is used to indicate an end tag?", options: ["*", "<", "/", "^"], answer: "/" },
    { question: "How can you open a link in a new tab/browser window?", options: ["<a href='url' target='new'>", "<a href='url' new>", "<a href='url' target='_blank'>", "<a href='url' window>"], answer: "<a href='url' target='_blank'>" },

    // --- TABLES ---
    { question: "Which of these elements are all <table> elements?", options: ["<table><tr><td>", "<table><head><tfoot>", "<table><tr><tt>", "<thead><body><tr>"], answer: "<table><tr><td>" },
    { question: "How can you make a numbered list?", options: ["<dl>", "<ol>", "<ul>", "<list>"], answer: "<ol>" },
    { question: "How can you make a bulleted list?", options: ["<ol>", "<list>", "<ul>", "<dl>"], answer: "<ul>" },
    { question: "What is the correct HTML for making a checkbox?", options: ["<check>", "<input type='checkbox'>", "<checkbox>", "<input type='check'>"], answer: "<input type='checkbox'>" },
    { question: "What is the correct HTML for making a text input field?", options: ["<input type='textfield'>", "<textinput>", "<input type='text'>", "<textfield>"], answer: "<input type='text'>" },
    { question: "What is the correct HTML for making a drop-down list?", options: ["<list>", "<input type='dropdown'>", "<select>", "<dropdown>"], answer: "<select>" },
    { question: "What is the correct HTML for making a multi-line text area?", options: ["<input type='textarea'>", "<textarea>", "<input type='textbox'>", "<text>"], answer: "<textarea>" },
    { question: "What is the correct HTML for inserting an image?", options: ["<img href='image.gif'>", "<image src='image.gif'>", "<img src='image.gif'>", "<img alt='image.gif'>"], answer: "<img src='image.gif'>" },
    { question: "What is the correct HTML for inserting a background image?", options: ["<body background='img.png'>", "<img src='img.png' background>", "<body style='background-image:url(img.png)'>", "<bg img='img.png'>"], answer: "<body style='background-image:url(img.png)'>" },
    { question: "An <iframe> is used to display a web page within a web page.", options: ["True", "False", "Only in HTML4", "There is no such thing"], answer: "True" },

    // --- HTML5 & ADVANCED ---
    { question: "HTML comments start with ", options: ["True", "False", "Depends on browser", "Only for CSS"], answer: "True" },
    { question: "Block elements are normally displayed without starting a new line.", options: ["True", "False", "Only in tables", "Depends on content"], answer: "False" },
    { question: "Which HTML element is used to specify a footer for a document or section?", options: ["<bottom>", "<section>", "<footer>", "<foot>"], answer: "<footer>" },
    { question: "In HTML, which attribute is used to specify an alternate text for an image, if the image cannot be displayed?", options: ["src", "alt", "title", "longdesc"], answer: "alt" },
    { question: "Which doctype is correct for HTML5?", options: ["<!DOCTYPE html>", "<!DOCTYPE HTML5>", "<!DOCTYPE HTML PUBLIC...>", "<!DOCTYPE root>"], answer: "<!DOCTYPE html>" },
    { question: "Which HTML element is used to specify a header for a document or section?", options: ["<top>", "<head>", "<header>", "<section>"], answer: "<header>" },
    { question: "Which HTML element is used to display a scalar measurement within a range?", options: ["<range>", "<measure>", "<meter>", "<gauge>"], answer: "<meter>" },
    { question: "Which HTML element is used to define a navigation link section?", options: ["<navigate>", "<nav>", "<links>", "<menu>"], answer: "<nav>" },
    { question: "Which HTML element is used to define a side-note or content aside from the main page content?", options: ["<sidebar>", "<aside>", "<side>", "<section>"], answer: "<aside>" },
    { question: "Which HTML element is used to define a figure/caption combination?", options: ["<figure>", "<figcaption>", "Both <figure> and <figcaption>", "None"], answer: "Both <figure> and <figcaption>" },

    // --- FORMS & INPUT TYPES ---
    { question: "What is the correct HTML for making a radio button?", options: ["<radio>", "<input type='radio'>", "<input type='button'>", "<rb>"], answer: "<input type='radio'>" },
    { question: "Which attribute is used to name an input field so the server can recognize it?", options: ["id", "class", "name", "type"], answer: "name" },
    { question: "Which HTML5 input type is used specifically for email addresses?", options: ["<input type='mail'>", "<input type='email'>", "<input type='text'>", "<input type='address'>"], answer: "<input type='email'>" },
    { question: "Which attribute is used to pre-fill an input field with text?", options: ["text", "placeholder", "value", "name"], answer: "value" },
    { question: "Which attribute displays hint text inside an input before the user types?", options: ["hint", "placeholder", "value", "title"], answer: "placeholder" },
    { question: "Which input type creates a slider control?", options: ["<input type='slider'>", "<input type='range'>", "<input type='scroll'>", "<input type='meter'>"], answer: "<input type='range'>" },
    { question: "Which HTML element is used to group related elements in a form?", options: ["<group>", "<section>", "<fieldset>", "<optgroup>"], answer: "<fieldset>" },
    { question: "Which element defines a caption for the <fieldset> element?", options: ["<caption>", "<label>", "<legend>", "<title>"], answer: "<legend>" },
    { question: "How do you make a list of pre-defined options for an input?", options: ["<datalist>", "<select>", "<options>", "<list>"], answer: "<datalist>" },
    { question: "What does the 'required' attribute do in a form?", options: ["Makes the field read-only", "Forces the user to fill the field before submitting", "Changes the font color", "Automatically submits the form"], answer: "Forces the user to fill the field before submitting" },

    // --- META & DOCUMENT HEAD ---
    { question: "Where is the <title> tag placed?", options: ["In the <body> section", "In the <head> section", "After the </html> tag", "In the <footer> section"], answer: "In the <head> section" },
    { question: "Which tag is used to define the character set of a document?", options: ["<meta charset='UTF-8'>", "<charset>", "<head encoding='UTF-8'>", "<script>"], answer: "<meta charset='UTF-8'>" },
    { question: "Which element is used to link an external CSS file?", options: ["<style src='...'>", "<link rel='stylesheet' href='...'>", "<script href='...'>", "<css link='...'>"], answer: "<link rel='stylesheet' href='...'>" },
    { question: "Which tag is used to embed client-side scripts (JavaScript)?", options: ["<js>", "<javascript>", "<script>", "<code js>"], answer: "<script>" },
    { question: "Which element defines the main content of the document?", options: ["<content>", "<section>", "<body>", "<main>"], answer: "<body>" },
    { question: "The <title> element is displayed in the browser's title bar or page tab.", options: ["True", "False", "Only in Google Chrome", "Only when printed"], answer: "True" },
    { question: "Which tag is used to provide metadata about the HTML document?", options: ["<meta>", "<info>", "<head>", "<data>"], answer: "<meta>" },
    { question: "Which meta tag ensures a mobile-friendly layout?", options: ["<meta name='mobile'>", "<meta name='viewport' content='width=device-width, initial-scale=1.0'>", "<meta screen='responsive'>", "<meta width='device-width'>"], answer: "<meta name='viewport' content='width=device-width, initial-scale=1.0'>" },

    // --- TEXT FORMATTING & SEMANTICS ---
    { question: "Which tag is used to display code on a webpage?", options: ["<var>", "<pre>", "<code>", "<samp>"], answer: "<code>" },
    { question: "Which tag preserves both spaces and line breaks?", options: ["<code>", "<pre>", "<p>", "<br>"], answer: "<pre>" },
    { question: "Which tag is used for short quotations?", options: ["<quote>", "<q>", "<blockquote>", "<cite>"], answer: "<q>" },
    { question: "Which tag is used for long, indented quotations?", options: ["<q>", "<quote>", "<blockquote>", "<cite>"], answer: "<blockquote>" },
    { question: "What is the correct HTML element for subscript text?", options: ["<subscript>", "<low>", "<sub>", "<down>"], answer: "<sub>" },
    { question: "What is the correct HTML element for superscript text?", options: ["<sup>", "<up>", "<super>", "<high>"], answer: "<sup>" },
    { question: "Which tag is used to highlight text?", options: ["<highlight>", "<mark>", "<yellow>", "<b>"], answer: "<mark>" },
    { question: "Which tag defines text that has been deleted from a document?", options: ["<strike>", "<s>", "<del>", "<remove>"], answer: "<del>" },
    { question: "Which tag defines text that has been inserted into a document?", options: ["<ins>", "<add>", "<new>", "<u>"], answer: "<ins>" },
    { question: "Which element is used to define a paragraph?", options: ["<paragraph>", "<para>", "<p>", "<text>"], answer: "<p>" },

    // --- AUDIO & VIDEO ---
    { question: "Which HTML5 element is used to play video files?", options: ["<movie>", "<video>", "<media>", "<play>"], answer: "<video>" },
    { question: "Which HTML5 element is used to play audio files?", options: ["<sound>", "<music>", "<audio>", "<mp3>"], answer: "<audio>" },
    { question: "Which attribute is used to show video/audio controls?", options: ["play", "show", "controls", "buttons"], answer: "controls" },
    { question: "The <source> tag is used inside which element(s)?", options: ["<video>", "<audio>", "Both <video> and <audio>", "<script>"], answer: "Both <video> and <audio>" },
    { question: "Which attribute starts a video automatically?", options: ["start", "auto", "autoplay", "loop"], answer: "autoplay" },

    // --- ATTRIBUTES & VALUES ---
    { question: "What is the purpose of the 'id' attribute?", options: ["To define a class for CSS", "To uniquely identify an element on a page", "To link to a different page", "To style text"], answer: "To uniquely identify an element on a page" },
    { question: "What is the purpose of the 'class' attribute?", options: ["To uniquely identify an element", "To group multiple elements for styling", "To set the height of an element", "To store user data"], answer: "To group multiple elements for styling" },
    { question: "Which attribute is used to define inline styles?", options: ["class", "css", "style", "font"], answer: "style" },
    { question: "Which HTML attribute specifies an input field's width in characters?", options: ["width", "size", "length", "cols"], answer: "size" },
    { question: "Which attribute makes an element non-editable by the user?", options: ["readonly", "disabled", "Both readonly and disabled", "hide"], answer: "Both readonly and disabled" },
    { question: "The 'title' attribute shows a tooltip when the mouse hovers over an element.", options: ["True", "False", "Only for links", "Only for images"], answer: "True" },

    // --- ENTITIES & CHARACTERS ---
    { question: "How do you display a 'less than' symbol (<) in HTML?", options: ["&lt;", "&less;", "<", "&l;"], answer: "&lt;" },
    { question: "How do you display a 'greater than' symbol (>) in HTML?", options: ["&gt;", "&greater;", ">", "&g;"], answer: "&gt;" },
    { question: "How do you display an ampersand (&) in HTML?", options: ["&ampersand;", "&and;", "&amp;", "&a;"], answer: "&amp;" },
    { question: "How do you display a non-breaking space?", options: ["&space;", "&nbsp;", "&blank;", "&nb;"], answer: "&nbsp;" },
    { question: "How do you display the copyright symbol (©)?", options: ["&copy;", "&copyright;", "&c;", "&copyr;"], answer: "&copy;" },

    // --- HTML SEMANTICS 2 ---
    { question: "Which element represents the main content of the <body>?", options: ["<section>", "<article>", "<main>", "<div>"], answer: "<main>" },
    { question: "Which element represents a self-contained composition like a blog post?", options: ["<section>", "<article>", "<div>", "<aside>"], answer: "<article>" },
    { question: "Which element is used to group related content?", options: ["<section>", "<main>", "<header>", "<span>"], answer: "<section>" },
    { question: "Which tag is a generic block-level container?", options: ["<span>", "<div>", "<section>", "<container>"], answer: "<div>" },
    { question: "Which tag is a generic inline container?", options: ["<div>", "<inline>", "<span>", "<a>"], answer: "<span>" },
    { question: "Which tag defines a thematic change in content (horizontal line)?", options: ["<line>", "<br>", "<hr>", "<border>"], answer: "<hr>" },

    // --- MISCELLANEOUS ---
    { question: "Can a <div> contain another <div>?", options: ["Yes", "No", "Only in HTML5", "Only with CSS"], answer: "Yes" },
    { question: "Is HTML case sensitive?", options: ["Yes", "No", "Only for IDs", "Only for class names"], answer: "No" },
    { question: "What is the default display value for a <div>?", options: ["inline", "block", "inline-block", "none"], answer: "block" },
    { question: "What is the default display value for a <span>?", options: ["block", "inline", "inline-block", "flex"], answer: "inline" },
    { question: "Which tag is used to define a list item?", options: ["<li>", "<item>", "<list>", "<ul>"], answer: "<li>" },
    { question: "Which element is used to define a table row?", options: ["<td>", "<th>", "<tr>", "<row>"], answer: "<tr>" },
    { question: "Which element is used to define a table header?", options: ["<td>", "<tr>", "<th>", "<head>"], answer: "<th>" },
    { question: "Which element is used to define a table cell?", options: ["<td>", "<tr>", "<th>", "<cell>"], answer: "<td>" },
    { question: "Which attribute defines the URL of a linked page?", options: ["src", "link", "href", "url"], answer: "href" },
    { question: "Which attribute defines the URL of an image?", options: ["href", "src", "url", "link"], answer: "src" },
    { question: "Which tag is used to define a button?", options: ["<input type='press'>", "<button>", "<click>", "<input type='link'>"], answer: "<button>" },
    { question: "What does the <kbd> tag define?", options: ["Key board input", "King board", "Knowledge base", "Code block"], answer: "Key board input" },
    { question: "Which element is used to define a description list?", options: ["<ol>", "<ul>", "<dl>", "<list>"], answer: "<dl>" },
    { question: "Which element is used to define a term in a description list?", options: ["<dt>", "<dd>", "<dl>", "<term>"], answer: "<dt>" },
    { question: "Which element is used to define a description in a description list?", options: ["<dt>", "<dd>", "<dl>", "<desc>"], answer: "<dd>" },
    { question: "What is the correct way to write an HTML5 comment?", options: ["// comment", "/* comment */", "", "' comment"], answer: "" },
    { question: "Which HTML5 element is used for drawing graphics via scripting?", options: ["<graphics>", "<canvas>", "<draw>", "<paint>"], answer: "<canvas>" },
    { question: "Which attribute is used to specify the language of a page?", options: ["lang", "xml:lang", "language", "code"], answer: "lang" },
    { question: "SVG stands for Scalable Vector Graphics.", options: ["True", "False", "Only for Adobe", "SVG is not HTML"], answer: "True" },
    { question: "Which element defines the relationship between a document and an external resource?", options: ["<connect>", "<link>", "<rel>", "<meta>"], answer: "<link>" }
  ],

  css: [
    { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"], answer: "Cascading Style Sheets" },
    { question: "Which HTML attribute is used to define inline styles?", options: ["class", "styles", "font", "style"], answer: "style" },
    { question: "Which is the correct CSS syntax?", options: ["body {color: black;}", "{body;color:black;}", "body:color=black;", "body:color(black)"], answer: "body {color: black;}" },
    { question: "How do you insert a comment in a CSS file?", options: ["// this is a comment", "/* this is a comment */", "' this is a comment", "// this is a comment //"], answer: "/* this is a comment */" },
    { question: "Which property is used to change the background color?", options: ["color", "bgcolor", "background-color", "bg-color"], answer: "background-color" },
    { question: "How do you add a background color for all <h1> elements?", options: ["h1.all {background-color:#FFFFFF;}", "h1 {background-color:#FFFFFF;}", "all.h1 {background-color:#FFFFFF;}", "h1 {bg-color:#FFFFFF;}"], answer: "h1 {background-color:#FFFFFF;}" },
    { question: "Which CSS property is used to change the text color of an element?", options: ["fgcolor", "color", "text-color", "font-color"], answer: "color" },
    { question: "Which CSS property controls the text size?", options: ["font-style", "text-size", "font-size", "text-style"], answer: "font-size" },
    { question: "What is the correct CSS syntax for making all the <p> elements bold?", options: ["p {font-weight:bold;}", "p {text-size:bold;}", "<p style='font-size:bold;'>", "p {style:bold;}"], answer: "p {font-weight:bold;}" },
    { question: "How do you display hyperlinks without an underline?", options: ["a {text-decoration:none;}", "a {underline:none;}", "a {decoration:no-underline;}", "a {text-decoration:no-underline;}"], answer: "a {text-decoration:none;}" },
    // ... repeat for 100 total
  ],

  javascript: [
    { question: "Inside which HTML element do we put the JavaScript?", options: ["<script>", "<javascript>", "<js>", "<scripting>"], answer: "<script>" },
    { question: "What is the correct JavaScript syntax to change the content of: <p id='demo'>Hello</p>", options: ["document.getElementByName('p').innerHTML = 'Hi';", "document.getElementById('demo').innerHTML = 'Hi';", "#demo.innerHTML = 'Hi';", "document.getElement('p').value = 'Hi';"], answer: "document.getElementById('demo').innerHTML = 'Hi';" },
    { question: "Where is the correct place to insert a JavaScript?", options: ["The <head> section", "The <body> section", "Both are correct", "The <footer> section"], answer: "Both are correct" },
    { question: "What is the correct syntax for referring to an external script called 'xxx.js'?", options: ["<script name='xxx.js'>", "<script src='xxx.js'>", "<script href='xxx.js'>", "<script link='xxx.js'>"], answer: "<script src='xxx.js'>" },
    { question: "How do you write 'Hello World' in an alert box?", options: ["msg('Hello World');", "alertBox('Hello World');", "alert('Hello World');", "msgBox('Hello World');"], answer: "alert('Hello World');" },
    { question: "How do you create a function in JavaScript?", options: ["function:myFunction()", "function myFunction()", "function = myFunction()", "def myFunction()"], answer: "function myFunction()" },
    { question: "How do you call a function named 'myFunction'?", options: ["call myFunction()", "myFunction()", "call function myFunction()", "exec myFunction()"], answer: "myFunction()" },
    { question: "How to write an IF statement in JavaScript?", options: ["if i = 5 then", "if i == 5 then", "if (i == 5)", "if i = 5"], answer: "if (i == 5)" },
    { question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?", options: ["if (i <> 5)", "if i != 5 then", "if (i != 5)", "if i <> 5"], answer: "if (i != 5)" },
    { question: "How does a WHILE loop start?", options: ["while (i <= 10)", "while i = 1 to 10", "while (i <= 10; i++)", "do while i < 10"], answer: "while (i <= 10)" },
    // ... repeat for 100 total
  ],

  // ... existing html, css, etc.
  c: [
  // --- FUNDAMENTALS & SYNTAX ---
  { question: "Which header file is required for printf() and scanf()?", options: ["<stdlib.h>", "<stdio.h>", "<conio.h>", "<string.h>"], answer: "<stdio.h>" },
  { question: "What is the correct way to terminate a C statement?", options: [":", ".", ";", "!"], answer: ";" },
  { question: "Which of these is NOT a valid variable name in C?", options: ["_var_name", "var_123", "123_var", "VarName"], answer: "123_var" },
  { question: "What is the size of an 'int' on a 32-bit system?", options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"], answer: "4 bytes" },
  { question: "Which keyword is used to declare a constant variable?", options: ["fixed", "immutable", "const", "final"], answer: "const" },
  { question: "What is the escape sequence for a newline?", options: ["\\t", "\\r", "\\n", "\\a"], answer: "\\n" },
  { question: "What is the result of 7 / 2 in C (integer division)?", options: ["3.5", "3", "4", "0"], answer: "3" },
  { question: "Which operator is used for the modulo operation (remainder)?", options: ["/", "\\", "%", "mod"], answer: "%" },
  { question: "How do you start a single-line comment in C?", options: ["#", "//", "/*", "--"], answer: "//" },
  { question: "Which function is the starting point of every C program?", options: ["start()", "init()", "main()", "begin()"], answer: "main()" },

  // --- POINTERS & MEMORY (Crucial for C) ---
  { question: "Which operator is used to get the address of a variable?", options: ["*", "&", "@", "%"], answer: "&" },
  { question: "Which operator is used to dereference a pointer?", options: ["&", "#", "*", "->"], answer: "*" },
  { question: "What is a NULL pointer?", options: ["A pointer pointing to a random address", "A pointer that points to nothing (address 0)", "An uninitialized pointer", "A pointer to a string"], answer: "A pointer that points to nothing (address 0)" },
  { question: "Which function allocates memory dynamically but does not initialize it?", options: ["calloc()", "realloc()", "malloc()", "free()"], answer: "malloc()" },
  { question: "Which function allocates memory and initializes it to zero?", options: ["malloc()", "calloc()", "realloc()", "alloc()"], answer: "calloc()" },
  { question: "What does free() do?", options: ["Deletes a variable", "Releases dynamically allocated memory", "Clears the console", "Ends the program"], answer: "Releases dynamically allocated memory" },
  { question: "A pointer that has been freed but still points to a memory location is called?", options: ["Null pointer", "Void pointer", "Dangling pointer", "Wild pointer"], answer: "Dangling pointer" },
  { question: "Which header file is needed for malloc() and calloc()?", options: ["<stdio.h>", "<stdlib.h>", "<string.h>", "<math.h>"], answer: "<stdlib.h>" },
  { question: "How do you access a struct member via a pointer 'ptr'?", options: ["ptr.member", "ptr->member", "ptr&member", "ptr*member"], answer: "ptr->member" },
  { question: "What is the size of a pointer variable on a 64-bit system?", options: ["4 bytes", "8 bytes", "Depends on what it points to", "16 bytes"], answer: "8 bytes" },

  // --- ARRAYS & STRINGS ---
  { question: "What is the index of the last element in an array of size N?", options: ["N", "N+1", "N-1", "0"], answer: "N-1" },
  { question: "Which character automatically terminates every string in C?", options: ["\\n", "\\t", "\\0 (null character)", "\\s"], answer: "\\0 (null character)" },
  { question: "Which function is used to compare two strings?", options: ["strcat()", "strcpy()", "strcmp()", "strlen()"], answer: "strcmp()" },
  { question: "Which function is used to find the length of a string?", options: ["len()", "size()", "length()", "strlen()"], answer: "strlen()" },
  { question: "Can a C array change its size after declaration?", options: ["Yes", "No", "Only if it's a char array", "Only in C99"], answer: "No" },
  { question: "What does strcat(s1, s2) do?", options: ["Copies s2 to s1", "Compares s1 and s2", "Appends s2 to the end of s1", "Deletes s2 from s1"], answer: "Appends s2 to the end of s1" },
  { question: "How do you declare a 2D array of integers?", options: ["int arr[2,2];", "int arr[2][2];", "int arr{2}{2};", "int arr(2)(2);"], answer: "int arr[2][2];" },

  // --- CONTROL FLOW & FUNCTIONS ---
  { question: "Which statement is used to skip the rest of the current loop iteration?", options: ["break", "exit", "continue", "skip"], answer: "continue" },
  { question: "Which statement is used to exit a switch case or a loop immediately?", options: ["stop", "break", "return", "halt"], answer: "break" },
  { question: "A function that calls itself is known as:", options: ["Iterative", "Recursive", "Nested", "Looping"], answer: "Recursive" },
  { question: "What is the return type of a function that does not return any value?", options: ["int", "null", "void", "empty"], answer: "void" },
  { question: "Which keyword is used to define a custom data type by grouping variables?", options: ["group", "union", "struct", "class"], answer: "struct" },
  { question: "What is the main difference between struct and union?", options: ["Struct uses more memory", "Union members share the same memory location", "Struct is faster", "There is no difference"], answer: "Union members share the same memory location" },
  
  // --- ADVANCED & PREPROCESSOR ---
  { question: "What does the '#' symbol indicate in C (e.g., #include)?", options: ["A pointer", "A preprocessor directive", "A comment", "A logic gate"], answer: "A preprocessor directive" },
  { question: "Which function is used to read a single character from the keyboard?", options: ["scanf()", "gets()", "getchar()", "read()"], answer: "getchar()" },
  { question: "What is the range of a signed char?", options: ["0 to 255", "-128 to 127", "-32768 to 32767", "0 to 65535"], answer: "-128 to 127" },
  { question: "Which format specifier is used for a double?", options: ["%d", "%f", "%lf", "%s"], answer: "%lf" },
  { question: "How do you define a macro in C?", options: ["#macro", "#define", "#const", "#set"], answer: "#define" },
  { question: "What is 'Typecasting'?", options: ["Changing a variable name", "Converting one data type to another", "Deleting a variable", "A way to loop"], answer: "Converting one data type to another" },
  { question: "Which header is used for mathematical functions like sqrt()?", options: ["<stdlib.h>", "<math.h>", "<stdio.h>", "<logic.h>"], answer: "<math.h>" },
  { question: "What is the result of 10 > 5 in C?", options: ["True", "1", "0", "High"], answer: "1" }, // C uses 1 for true
  { question: "Which operator is the Ternary operator?", options: ["??", "&&", "? :", "||"], answer: "? :" },
  { question: "What is an 'auto' variable in C?", options: ["A variable in a car program", "A local variable (default)", "A global variable", "A pointer"], answer: "A local variable (default)" },
  { question: "Which keyword is used to make a variable's value persist between function calls?", options: ["persistent", "static", "volatile", "extern"], answer: "static" },
  { question: "What is an 'extern' variable?", options: ["A variable used only inside a function", "A global variable defined in another file", "A variable that cannot be changed", "A local variable"], answer: "A global variable defined in another file" },
  { question: "Which function is used to read a string with spaces?", options: ["scanf()", "gets() / fgets()", "read()", "input()"], answer: "gets() / fgets()" },
  { question: "What is the value of EOF in C?", options: ["0", "1", "-1", "Depends on compiler"], answer: "-1" },
  { question: "What is a 'Void Pointer'?", options: ["A pointer to nothing", "A pointer that has no associated data type", "An invalid pointer", "A pointer to a function"], answer: "A pointer that has no associated data type" },
  { question: "Which operator is used to find the size of a variable in bytes?", options: ["length()", "sizeof", "size()", "count()"], answer: "sizeof" },
  { question: "Which of the following is an infinite loop?", options: ["for(;;)", "while(1)", "Both", "None"], answer: "Both" }
  // (You can repeat variations of these to reach the full 100, focusing on pointer arithmetic and memory!)
],

  python: [
    { question: "What is the correct extension for Python files?", options: [".pt", ".py", ".pyt", ".pyth"], answer: ".py" },
    { question: "How do you create a variable with the numeric value 5?", options: ["x = int(5)", "x = 5", "Both are correct", "x := 5"], answer: "Both are correct" },
    { question: "What is the correct syntax to output 'Hello World' in Python?", options: ["p('Hello World')", "print('Hello World')", "echo('Hello World')", "console.log('Hello World')"], answer: "print('Hello World')" },
    { question: "How do you start a comment in Python?", options: ["//", "/*", "#", "--"], answer: "#" },
    { question: "Which variable name is invalid?", options: ["my_var", "_myvar", "2myvar", "myVar"], answer: "2myvar" },
    { question: "How do you create a function in Python?", options: ["def myFunction():", "function myFunction():", "create myFunction():", "func myFunction():"], answer: "def myFunction():" },
    { question: "Which method can be used to remove any whitespace from both the beginning and the end of a string?", options: ["len()", "strip()", "trim()", "ptrim()"], answer: "strip()" },
    { question: "Which method can be used to return a string in upper case?", options: ["upper()", "toUpperCase()", "uppercase()", "up()"], answer: "upper()" },
    { question: "Which method can be used to replace parts of a string?", options: ["switch()", "replace()", "repl()", "update()"], answer: "replace()" },
    { question: "Which operator is used to multiply numbers?", options: ["x", "#", "%", "*"], answer: "*" },
    // ... repeat for 100 total
  ],

  cpp: [
    { question: "Which header file allows us to work with input and output objects?", options: ["<iostream>", "<inputout>", "<stream>", "<stdio.h>"], answer: "<iostream>" },
    { question: "Which operator is used to print text in C++?", options: ["cout <<", "print <<", "out <<", "output <<"], answer: "cout <<" },
    { question: "How do you insert a comment in C++?", options: ["# this is a comment", "// this is a comment", "/* this is a comment", "-- this is a comment"], answer: "// this is a comment" },
    { question: "How do you create a variable with the numeric value 5?", options: ["num x = 5;", "double x = 5;", "int x = 5;", "x = 5;"], answer: "int x = 5;" },
    { question: "Which data type is used to create a variable that should store text?", options: ["String", "string", "txt", "str"], answer: "string" },
    { question: "How do you create a reference variable of 'food'?", options: ["string &meal = food;", "string meal = &food;", "string meal = food;", "reference meal = food;"], answer: "string &meal = food;" },
    { question: "Which operator can be used to find the memory address of a variable?", options: ["*", "@", "&", "%"], answer: "&" },
    { question: "Which keyword is used to create a class in C++?", options: ["class", "className", "struct", "void"], answer: "class" },
    { question: "In C++, what is the size of an 'int' usually?", options: ["2 bytes", "4 bytes", "1 byte", "8 bytes"], answer: "4 bytes" },
    { question: "Which operator is used to compare two values?", options: ["=", "<>", "==", "><"], answer: "==" },
    // ... repeat for 100 total
  ],

  java: [
    { question: "What does JVM stand for?", options: ["Java Virtual Machine", "Java Virtual Method", "Java Variable Machine", "Java Visual Machine"], answer: "Java Virtual Machine" },
    { question: "Which keyword is used to create a class in Java?", options: ["class", "struct", "void", "className"], answer: "class" },
    { question: "How do you write 'Hello World' in Java?", options: ["System.out.println('Hello World');", "print('Hello World');", "Console.WriteLine('Hello World');", "echo('Hello World');"], answer: "System.out.println('Hello World');" },
    { question: "How do you insert a comment in Java?", options: ["# comment", "// comment", "/* comment", "-- comment"], answer: "// comment" },
    { question: "Which data type is used to store text?", options: ["txt", "String", "string", "str"], answer: "String" },
    { question: "How do you create a variable with the numeric value 5?", options: ["num x = 5;", "float x = 5;", "int x = 5;", "x = 5;"], answer: "int x = 5;" },
    { question: "How do you create a method in Java?", options: ["methodName()", "void methodName()", "create methodName()", "method methodName()"], answer: "void methodName()" },
    { question: "Which keyword is used to create an object in Java?", options: ["create", "new", "class", "instantiate"], answer: "new" },
    { question: "Which operator is used to add together two values?", options: ["&", "*", "+", "ADD"], answer: "+" },
    { question: "Which method can be used to find the length of a string?", options: ["getSize()", "len()", "length()", "size()"], answer: "length()" },
    // ... repeat for 100 total
  ]
};
