To include a css file in an HTML the first thing you need is a .css file.  You can create a .css file the same way you create a .html.  Go to file save as and give the file a name and add .css as the extension.

## Link Tag

The link tag is an HTML tag that is added within the head of a document.  This tag has three attributes.

* `href` – the location of the file
* `rel` – set to stylesheet
* `type` – set to text/css - *Not needed with HTML5*

### Example

	<link rel=”stylesheet” type=”text/css” href=”filelocaiton.css”/>

---

## @IMPORT

`@import` includes a `.css` but does it with in CSS itself.  With `@import` one css file can include another file.

### Example

	<style type=”text/css”>
		@import url(filename.css);
	</style>
