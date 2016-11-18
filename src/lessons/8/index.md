> JavaScript (JS) is an interpreted computer programming language.  It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed. More recently, however, it has become common in both game development and the creation of desktop applications.


## What does that mean?
JavaScript gives life to web pages by way of the interpreter in a web browser.  The JavaScript interpreter translates a given script in order to manipulate elements within the page.
Without it web sites would be fairly static.




## History of JavaScript
<ol>
<li class="fragment">Created by Brendan Eich (Mozilla CTO) </li>
<li class="fragment">Shipped in Netscape Navigator 2.0 in 1995</li>
<li class="fragment">Originally Called <i>LiveScript</i></li>
<li class="fragment">Partially inspired by and shares superficial similarities to Java, but intended to appeal to non-programmers, similar to Microsoft's Visual Basic</li>
<li class="fragment">Microsoft quickly adopted to gain footing with IE 3 in 1996</li>
<li class="fragment">Netscape submitted it to to The European Computer Manufacturers Association (ECMA) in 1996 for standardization. The standardized spec for this language is ECMAscript</li>
<li class="fragment">Now the working language of the web, for better or worse</li>
</ol>




## What is it used for?
<ol>
<li class="fragment">Adding dynamic behavior to web pages</li>
<li class="fragment">Manipulating and scripting elements on web pages</li>
<li class="fragment">Requesting data from a different source (we won't cover this)</li>
<li class="fragment">Processing data outside of the web with frameworks like Node.js (we won't cover this)</li>
</ol>

### Examples

<h3>Gmail</h3>
check out the sweet hover menu!

<h3><b style="color: gray">color</b> a color matching game</h3>

Using a markup language called SVG, JavaScript brings interactive graphics to create a rich experience

<a href="http://color.method.ac/">http://color.method.ac</a>


<h3>reveal.js</h3>
This presentation is using a JavaScript library.  Requires no JS knowledge on my part,  but automagically adds razzle & dazzle.

<a href="http://lab.hakim.se/reveal-js/">http://lab.hakim.se/reveal-js/</a>

<h2>What does it look like?</h2>

```
<head>
<script>
function sayHello(name) {
    alert("Hello " + name + "!");
}
</script>
</head>
```

Similar to stylesheets, to keep your code clean & organized, best practice is to include external script

```
<head>
<link href="path/to/mystylesheet.css" rel="stylesheet" type="text/css"></link>
<script src="path/to/myjavascript.js"></script>
</head>
```

In most cases stylesheets should precede script tags so that the browser can immediately render layout as intended, whereas scripts adding interactive behavior can take considerable time to load

<h2>Lets dive in</h2>

Variable assignment: numbers, booleans, strings

    var myNumber = 5;
    var myBoolean = true;
    var myString = "Hello World!";


Variable assignment: arrays, objects

    var myNumberArray = [1,2,3];
    var myCircleObject = { color: "red", radius: 2};

Take note how variable declarations begin with the <b>var</b> keyword

<h2>Control Flow</h2>

<b>if</b> statements are used to control the flow of logic in your script. The expression within the parenthesis following the `if` keyword must evaluate to a boolean value: `true` or `false` in order to evaluate


var myGrade = 92;

    if (myGrade >= 85) {
    alert('You are doing really well in this class!');
    } else {
    alert('You might want to study up.');
    }

The expression in the parenthesis is checking that <b>myGrade</b> is greater than or equal to 85.  `<`, `<=`, `>`, `>=`, `==` are all logical operators used to compare values.

<h2>Arithmetic Expressions</h2>

We can perform arithmetic operations on numbers in JavaScript.  +, -, /, * are standard operators.  Take note on the 8th line that when we add a number to a string (a series of characters), JavaScript coerces the number to a string & appends it.


    var exam1 = 92;
    var exam2 = 85;
    var exam3 = 90;

    var average = (exam1 + exam2 + exam3) / 3;

    if (average >= 85) {
    alert('You are doing really well in this class!');
    } else {
    alert('You might want to study up. Your average is ' + average + '.');
    }

JavaScript also features a <b>Math</b> namespace of advanced operations including `sqrt()`, `pow()` and `abs()`.




<h2>Objects</h2>

Objects are a structured set of primitive values.  Let's declare an object named circle with
a color and radius property.  Then we'll calculate the circumference and update the object with a new property that we can access later.

    var pi = 3.14;

    var circle = {
    color: "red",
    radius: 5
    };

    circle.circumference = 2 * pi * circle.radius;

Note that we've declared a variable called pi for convenience and readability.






<h2>Arrays & Iteration</h2>
An array is a collection of things.  They could be basic values, such as numbers, or more complex data structures such as objects.

Let's declare an array of objects representing report cards. We can access the length of the array. The first element of an array starts at 0 and the last one is at the position of length - 1
<pre><code data-trim contenteditable>
var ReportCards = [
{ name: "Dan", Exam1: 85, Exam2: 90, Exam3: 75 },
{ name: "Elijah", Exam1: 65, Exam2: 80, Exam3: 75 },
{ name: "Jennifer", Exam1: 95, Exam2: 80, Exam3: 100 }
];

//Access the 1st element
ReportCards[0];

//Access the name of the 2nd element
ReportCards[1].name;
</code></pre>



Now Let's iterate over our ReportCards array and calculate the average final score for each student.
A <b>for</b> loop is composed of multiple statements: the initial position of the iterator (in this case we are using the variable i), the terminating position & finally the incrementor.  In most for loops it is only needed to increment by one using the operator i++.  This is equivalent to i = i + 1.
<pre class="fragment"><code data-trim contenteditable>
for (var i = 0; i < ReportCards.length; i++) {
var card = ReportCards[i];
card.final = (card.Exam1 + card.Exam2 + card.Exam3) / 3;
}
</code></pre>




<h2>Functions</h2>

Functions encapsulate a series of statements to represent a particular behavior. Functions become a critical mechanism when working with a large code base because they allow behaviors to be reusable.
<pre class="fragment"><code data-trim contenteditable>
function calculateAverage(numbers) {
var aggregate = 0;

for (var i = 0; i < numbers.length; i++) {
aggregate = aggregate + numbers[i];
}

return aggregate / numbers.length;
}

var set_of_numbers = [5, 10, 15];

calculateAverage(set_of_numbers);

var another_set_of_numbers = [100, 130, 150, 170, 200];

calculateAverage(another_set_of_numbers);
</code></pre>




<img src="img/jquery_hosting.png"></img>
<h1>jQuery</h1>



<h2>What is jQuery?</h2>
jQuery is a cross-browser JavaScript library originally developed by John Resig.  It simplifies DOM (Document Object Model) manipulation and standardizes the API between different browser environments. jQuery has gained incredible popularity for its ease of use and expressive syntax.

Note: The DOM just means HTML accessible by JavaScript. Its effectively a snooty way of saying HTML when its live and programmable in a web browser. An API just stands for Application Programming Interface.  It means 'The way something can be programmatically accessed.'



<h2>Selectors</h2>
jQuery offers an especially convenient way to select HTML elements by way of CSS selectors, as well as creating HTML fragments on the fly.
<pre class="fragment"><code data-trim contenteditable>
//select all divs with the class button
$('div.button');

//select all table data cells whose parents are a table row with class even
$('tr.even > td');

//select by id (should only return one element)
$('#reportcards');
</code></pre>
$() is jQuery's magic function.  jQuery sacrifices verbose syntax in favor of short, expressive statements.  One of the jQuery framework's design decisions is to have a magic $() function that is context aware to the arguments being passed in.  In this case we are passing in a string representing a CSS selector, so jQuery knows to look for elements in our web page.



<h2>DOM Fragments</h2>
Let's create a document fragment composed of an HTML string.  We will then use
jQuery's append() method to add it to our document body.
<pre class="fragment"><code data-trim contenteditable>
var paragraph_fragment = $('Hello World!');

$('#paragraph-container').append(paragraph_fragment);
</code></pre>
jQuery's magic $() function recognized that our string represents HTML instead of a CSS selector, so it knows to create a document object which we can further manipulate.
<pre class="fragment"><code data-trim contenteditable>
paragraph_fragment.addClass('red-border');
</code></pre>
We added the class 'red-border' to our paragraph tag.

<h2>Expand your knowledge</h2>
<ul>
<li class="fragment">Code Academy: <a href="http://www.codecademy.com/tracks/javascript">http://www.codecademy.com/tracks/javascript</a></li>
<li class="fragment">JavaScript the Good Parts: <a href="http://shop.oreilly.com/product/9780596517748.do">http://shop.oreilly.com/product/9780596517748.do</a></li>
<li class="fragment">jQuery Documentation: <a href="http://api.jquery.com/">http://api.jquery.com/</a></li>
</ul>

<h2>Happy Scripting</h2>
Elijah Meerson, Software Engineer at AppNexus.  <a href="https://twitter.com/elimeerson">@elimeerson</a>
Also I'm on Google+
