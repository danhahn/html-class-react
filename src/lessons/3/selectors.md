Selectors are the way that the HTML and CSS connect to each other.   There are **3 basic types** of selectors, `tag`, `class` and `id`.

## Tag Name Selector

Tag name selectors use HTML tags as the connection.  *Any* HTML element can be used as a selector. Although not all HTML elements can be styled.

### Example

CSS

	<style>
	h1 {
		color: red;
	}
	</style>

	<h1>Tag Name Selector</h1>

HTML
<div class="well">
<style>
h1.exmaple {
    color: red;
}
</style>

<h1 class="exmaple">Tag Name Selector</h1>
</div>

----

## Class Name selector

Class name selectors require an attribute of `class=""` to be added to an HTML element.  A class **name** must be given and that **name** will be used to connect the HTML and CSS.

Many elements on a page may use the same class name.

### Example

	<style>
	.className {
		color: orange;
	}
	</style>

	<h1 class="className">Class Name Selector</h1>

HTML
<div class="well">
<style>
h1.exmaple2 {
    color: orange;
}
</style>

<h1 class="exmaple2">Class Name Selector</h1>
</div>

----

## ID Name selector

An ID name selectors require an attribute of `id=""` to be added to an HTML element.  An ID **name** must be given and that name will be used to connect the HTML and CSS.  Only **one element per page can use an ID name** although there can be many different ID names on the same page.

### Example

CSS

	<style>
	#idName {
		color: green;
	}
	</style>

	<h1 id="idName">ID Name Selector</h1>

HTML

<div class="well">
	<style>
	#idName {
		color: green;
	}
	</style>

	<h1 id="idName">ID Name Selector</h1>
</div>

----

## Limiting the scope
Because classes can be applied to many elements on a page there could be a case where the same class name is used on two or more different elements.  One way to ensure that styles are applied only to the elements intended is limit the scope.  For example you may have a class name of "firstLine" that is applied to both a P tag and an LI tag.  The style you create would apply to both at the same time.

Since they are not the same it may be the case that you want to style each differently.  By combining two of the basic selectors you can ensure that only the intended element is styled.

tag.className

When two selectors are combined without a space, as with the example above, the class will only applied to the HTML tag that has the class name.
Example

	<style>
	p.firstLine {
		color: red;
	}
	</style>

	<p class="firstLine">Example Text</p>
	<ul>
		<li class="firstLine">List Text</li>
	</ul>

<div class="well">
<style>
	p.firstLine {
		color: red;
	}
	</style>

	<p class="firstLine">Example Text</p>
	<ul>
		<li class="firstLine">List Text</li>
	</ul>
</div>

In this example you can see there are two elements that have the class name of "firstLine".  To limit the class "firstLine" only to P tags, we start with a tag name selector and append the class name.

This idea will work with any combination of the three basic selectors

	tag.className
	tag#idName
	#id.className
	.className.className2

Context Selectors
Context selectors use the HTML structure to target elements to be styled.  Context selectors can use any combination of the three basic selectors.

	<style>
	/* case 1 */
	div h1 {
		color: red;
	}
	/* or */
	#example h1 {
		color: red
	}

	/* case 2 */
	div div p {
		color: blue;
	}
	/* or */
	.repetElement p {
		color: blue;
	}
	/* or */
	#example div p {
		color: blue;
	}
	</style>


	<div id="example">
		<h1>Example text</h1><!-- case 1 -->
		<p>Main content Intro. <a href="page.html">Main content Intro</a>. Main content Intro. Main content Intro. </p>
		<div class="repeatElement">
			<h2><a href="url.html">Repeat Text</a></h2>
			<img src="images/image.gif" alt=""/>
			<p>Content Text. Content Text. <a href="url">Content Text</a>. Content Text. Content Text.</p><!-- case 2 -->
		</div>
		<div class="repeatElement">
			<h2><a href="url.html">Repeat Text</a></h2>
			<img src="images/image.gif" alt=""/>
			<p>Content Text. Content Text. <a href="url">Content Text</a>. Content Text. Content Text.</p><!-- case 2 -->
		</div>
		<div class="repeatElement">
			<h2><a href="url.html">Repeat Text</a></h2>
			<img src="images/image.gif" alt=""/>
			<p>Content Text. Content Text. <a href="url">Content Text</a>. Content Text.Content Text.</p><!-- case 2 -->
		</div>
	</div>

<div class="well">
	<style>
	#example h1 {
		color: red
	}

	div#example div p {
		color: blue;
	}
	#example .repetElement p {
		color: blue;
	}
	#example div p {
		color: blue;
	}
	</style>


	<div id="example">
		<h1>Example text</h1><!-- case 1 -->
		<p>Main content Intro. <a href="page.html">Main content Intro</a>. Main content Intro. Main content Intro. </p>
		<div class="repeatElement">
			<h2><a href="url.html">Repeat Text</a></h2>
			<p>Content Text. Content Text. <a href="url">Content Text</a>. Content Text. Content Text.</p><!-- case 2 -->
		</div>
		<div class="repeatElement">
			<h2><a href="url.html">Repeat Text</a></h2>
			<p>Content Text. Content Text. <a href="url">Content Text</a>. Content Text. Content Text.</p><!-- case 2 -->
		</div>
		<div class="repeatElement">
			<h2><a href="url.html">Repeat Text</a></h2>
			<p>Content Text. Content Text. <a href="url">Content Text</a>. Content Text.Content Text.</p><!-- case 2 -->
		</div>
	</div>
</div>
