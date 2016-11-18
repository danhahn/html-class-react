---
title: Lesson 9
author: Dan Hahn
date: 3/30/2016 15:00
template: article.jade
---

# Introduction to JavaScript

* [HTML Forms]()
* [Class Work](classwork.html)
* [Intro to JS and Jquery](javascript.html)

## What is JavaScript?

Javascript is the action layer of web development.  Javascript allows for things on the page to change after the page has loaded.  
 
## What is JQuery?
 
Jquery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.

You can use JavaScript with out Jquery but can not use Jquery with out JavaScript.

## Class work

We are going to use Jquery to check to see if all the fields are filled out.  If they are not we will prevent the form from being submitted.

### there are a few basis ideas that we need to go over

There are a number of way we can store data in JS.

1. string - plain text `"string"`
2. boolean - true or false `true`
3. number - a number `20`
4. array - comma separated list `["red", "blue", "green"]`
5. object - a group of strings, booleans, numbers, arrays or objects `{numbers: [1,2,3]}` 

### functions 

You can think of a function as small program that you can define when it is runs. 

	// set up function 
	function runTest(var) {
		// do test here
		alert(var)
	}
	
	// run function
	runTest();
	
#### Parts of the function

* function - defines the start of a function 
* runTest - the name of the function (this could be anything)
* (var) - any variable passed in to the function 
* {} - wraps what the function should do when called.
	
### Event Handlers
 
 Events handlers are a way to let the user call a function that could change something on the page.
 
 Event handlers can be added directly on an html elements.
 
    <button onclick="runTest();">Run Test</button>
    
When the button is clicked the function `runTest();` will run.

## if statements

One of the ways that javascript is so powerful is it can make a decision.  We can use a `if` statement to see if something is true.  Based on the result of that question we can do one of two things.
  
If the question is true than run this code otherwise run this code.

	if(today == "monday") {
		alert("YES its monday");
	}
	else {
		alert("NO today is not monday");
	}

In this example we are checking if the variable `today` is equal to the string "monday".  If it is than this is a true statement and the code inside the `{}` will run.  If it is not true than the code in the `else` will run. 

## Using Jquery 

Jquery is a library that extends JavaScript so it can use all the parts of Javascript but has some nice tools to make working with HTML a bit easy.

Lets say we want to create an element then add that element to an HTML page.  In javascript you would un this command in your script.  

	var newDiv = document.createElement("div");
	
Now you have a new div but we still need to add text to this div

	var newContent = document.createTextNode("Hi there and greetings!"); 
	
Now we need to add the content to the new div

	newDiv.appendChild(newContent);
	
Last we want to add this to the body 

	document.body.appendChild(newDiv);
	
As you can see there is a lot of stuff going on.  Most of it we do not really understand.

We can do the same thing with Jquery but in a much ore logical way using things we are comfortable with like css selectors.

Lets create a  new div 

	var newDiv = $("<div>");
	
Now lets add the text

	newDiv.html("Hi there and greetings!");
	
Now we need to add it to the body

	newDiv.appendTo("body");
	
What makes Jquery so easy to work with is we can do all three things in one line.


	var newDiv = $("<div>").html("Hi there and greetings!").appendTo("body");
	
	
Jquery also lets you easy add css or add a class

	newDiv.css("color", "red");
	newDiv.addClass("active");
	
### Events with jquery 

Before we added an event by adding it do the `button` the problem with this is we do not have a spereratoin of the HTML and JS.  Like with CSS if we had to make a change we would to go in to every page and update it.

We can add an event using jquery like this

	$("button").on("click", function() {
		// code to run if clicked
	})
	
Here we call `on` and tell it what type of event we want.  There are many like click, submit, mouseover and many more.  Then we need to pass in a function (remember that functions are the the doers)

That functions is called an anonymous function. It is like a named functions but is just called/run at the time it is defined.  
	
	