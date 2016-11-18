**Note:** Modern browser try to be helpful with form and store values entered in to the form.  To see a clean version of the page (non cached) hold down the SHIFT key and click the RELOAD button on the browser tool bar.  The page will reload and not longer have values entered in the form files.

Note: The display of form elements vary from browser to browser and operating system to operating system.  Very little style changes can applied to form elements.

## form Tag - `<form></form>`

The `<form>` tag is used to create an HTML form for user input.

### Required Attributes

Attribute | Value | Description
----------|-------|---------------------------------------------------------------------------
action    | URL   | A URL that defines where to send the data when the submit button is pushed

### Optional Attributes

Attribute | Value       | Description
----------|-------------|----------------
method    | get<br>post | The HTTP method for sending data to the action URL. Default is get.method="get": This method sends the form contents in the URL: URL?name=value&name=value.Note: If the form values contains non-ASCII characters or exceeds 100 characters you MUST use method="post".method="post": This method sends the form contents in the body of the request.Note: Most browsers are unable to bookmark post requests.
name      | form_name   | Defines a unique name for the form

### Example

	<form action="/contact/form.jsp" method="get" name="contactUs">
	    Content and form elements
	</form>

Content and form elements
Input - `<imput>`
The `<input>` tag is used to select user information.

An input field can vary in many ways, depending on the type attribute. An input field can be a text field, a checkbox, a password field, a radio button, a button, and more.

Attribute | Value                                                                                | Description
----------|--------------------------------------------------------------------------------------|---------------------------------------------------------------------
type      | button<br>checkbox<br>file<br>hidden<br>password<br>radio<br>reset<br>submit<br>text | Indicates the type of the input element. The default value is "text"
name      | field_name                                                                           | Defines a unique name for the input element.

**Note:** This attribute is required with type="button", type="checkbox", type="file", type="hidden", type="image", type="password", type="text", and type="radio"
type="text"

Defines a standard one line form element

Attribute | Value          | Description
----------|----------------|------------------------------------------------------------------------------------------------------------------------------------------------
disabled  | disabled       | Disables the input element when it first loads so that the user can not write text in it, or select it. Note: Cannot be used with type="hidden"
maxlength | number         | Defines the maximum number of characters allowed in an input field. Note: Only used with type="text" or type="password"
readonly  | readonly       | Indicates that the value of this field cannot be modified. Note: Only used with type="text" or type="password"
size      | number_of_char | Defines the size of the input element. Note: Cannot be used with type="hidden"
value     | value          | Defines the default value of the element.

####Example

	<input type="text" name="name">

<input type="text" name="name">

	<input type="text" name="name" value="value" maxlength="10">

<input type="text" name="name" value="value" maxlength="10">

	<input type="text" name="name" readonly="readonly" value="value">

<input type="text" name="name" readonly="readonly" value="value">

	<input type="text" name="name" disabled="disabled" value="value">

<input type="text" name="name" disabled="disabled" value="value">

## type="password"

Defines a password element

Attribute | Value          | Description
----------|----------------|------------------------------------------------------------------------------------------------------------------------------------------------
disabled  | disabled       | Disables the input element when it first loads so that the user can not write text in it, or select it. Note: Cannot be used with type="hidden"
maxlength | number         | Defines the maximum number of characters allowed in an input field. Note: Only used with type="text" or type="password"
readonly  | readonly       | Indicates that the value of this field cannot be modified. Note: Only used with type="text" or type="password"
size      | number_of_char | Defines the size of the input element. Note: Cannot be used with type="hidden"
value     | value          | Defines the default value of the element.


#### Example

	<input type="password" name="name">

<input type="password" name="name">

	<input type="password" name="name" value="value" maxlength="10">

<input type="password" name="name" value="value" maxlength="10">

	<input type="password" name="name" readonly="readonly" value="value">

<input type="password" name="name" readonly="readonly" value="value">

	<input type="password" name="name" disabled="disabled" value="value">

<input type="password" name="name" disabled="disabled" value="value">


## type="radio" (Radio Buttons)

Radio Buttons are used when you want the user to select one of a limited number of choices.

Attribute | Value      | Description
----------|------------|------------------
name      | field_name | Defines a unique name for the input element.Value groups radio buttons by having the same name.Note: This attribute is required with type="button", type="checkbox", type="file", type="hidden", type="image", type="password", type="text", and type="radio"
value     | value      | For checkboxes and radio buttons: Defines the result of the input element when clicked. The result is sent to the form's action URL.

Attribute Optional|Value|Description
---|---|---
checked|checked|Indicates that the input element should be checked when it first loads (only used with type="checkbox" and type="radio")
disabled|disabledDisables the input element when it first loads so that the user can not write text in it, or select it (cannot be used with type="hidden")

#### Example

	<form>
		<input type="radio" name="sex" value="male"> Male<br>
		<input type="radio" name="sex" value="female"> Female
	</form>

<form>
	<input type="radio" name="sex" value="male"> Male<br>
	<input type="radio" name="sex" value="female"> Female
</form>

## type="checkbox" - (Checkbox)

Checkboxes are used when you want the user to select one or more options of a limited number of choices.


Attribute | Value      | Description
----------|------------|----------------------
name      | field_name | Defines a unique name for the input element. Value groups radio buttons by having the same name. Note: This attribute is required with type="button", type="checkbox", type="file", type="hidden", type="image", type="password", type="text", and type="radio"
value     | value      | For checkboxes and radio buttons: Defines the result of the input element when clicked. The result is sent to the form's action URL.

Attribute Optional | Value    | Description
-------------------|----------|---------------------
checked            | checked  | Indicates that the input element should be checked when it first loads (only used with type="checkbox" and type="radio")
disabled           | disabled | Disables the input element when it first loads so that the user can not write text in it, or select it (cannot be used with type="hidden")Note: Attributes are the same of both checkbox and radio buttons

## Button Tag
The `<button>` tag defines a push button.  The button tag creates a button displayed on the page.  It is a standard HTML tag so the value of the button is wrapped with the button tag.

The button tag can be used in place of the INPUT type button/reset/submit.

If a button in in a valid form the default type will be submit otherwise it will be button.  

Attribute | Value    | Description
----------|----------|-------------------------------------------
disabled  | disabled | Specifies that a button should be disabled
name      | name     | Specifies the name for a button
type      | button   | reset<br>submit

Specifies the type of a button

Example

	<button>Go!</button>

<button type="submit">GO!</button>

Type|Definition
---|---
submit|form is submitted to the url in the action
reset|form is change back to the default values when page loaded
button|when clicked nothing happens often used for javascript

## type="submit"
When the user clicks on the "Submit" button, the content of the form is sent to the server. The form's action attribute defines the name of the file to send the content to. The file defined in the action attribute usually does something with the received input.

Attribute | Value | Description
----------|-------|------------------------------------------------------------------------------
value     | value | Button label.  Default value "submit" or "submit query" based on the browser.

Example

	<input type="submit">

<input type="submit">

## type="reset" - (reset button)

When the user clicks on the "Reset" button, the content in the form is reloaded to the values they had when the page loaded.

Attribute | Value | Description
----------|-------|-------------------------------------
value     | value | Button label.  Default value "reset"

	<input type="reset">

<input type="reset">

## type="file"

Used to create a form element to update a file.  There needs to back end support for uploading the file.  We will not cover the back end support.

	<input type="file">

<input type="file">

## type="button"

Just alike a submit or reset but when the user clicks nothing happens

Attribute|Value|Description
value|value|Button label.  Default value "reset"

## type="hidden"
Used to set a value of a form element that needs to be passed along with out making it viewable to the end user. An example of this would be setting the users language on the page the user cannot change it but it needed by the next page to handle the information.  

## Select Box - (`<select>`, `<option>`)

The `<select>` tag is used to create a select list (drop-down list).

The `<option>` tags inside the select element define the available options in the list.

`<select>`

Defines the select container.  Must add option tag

Attribute | Value    | Description
----------|----------|------------------------------------------------------------
disabled  | disabled | Specifies that a drop-down list should be disabled
multiple  | multiple | Specifies that multiple options can be selected
name*     | name     | Specifies the name of a drop-down list
size      | number   | Specifies the number of visible options in a drop-down list

**\*required**

`<option>`

Option tag add items to the select box.  Option tag will always be a child of the select tag.

Attribute | Value    | Description
----------|----------|--------------------------------------------------------------------
disabled  | disabled | Specifies that an option should be disabled
label     | text     | Specifies a shorter label for an option
selected  | selected | Specifies that an option should be selected by default
value*    | text     | Specifies the value to be sent to a server when a form is submitted

**\*required**

#### Example

	<select name="cars">
	  <option value="Volvo">Volvo</option>
	  <option value="Saab">Saab</option>
	  <option value="Mercedes">Mercedes</option>
	  <option value="Audi">Audi</option>
	</select>

<select name="cars">
  <option value="Volvo">Volvo</option>
  <option value="Saab">Saab</option>
  <option value="Mercedes">Mercedes</option>
  <option value="Audi">Audi</option>
</select>

## Textarea - `<textarea>``</textarea>`

Defines a text-area (a multi-line text input control)

Unlike other form elements text area does not have a value attribute instead the value or text would be wrapped with the text area.

Attribute | Value  | Description
----------|--------|----------------------------------------------------
cols      | number | Specifies the visible width of a text-area
rows      | number | Specifies the visible number of rows in a text-area
name      | name   | Specifies that a text-area should be disabled

Attribute Optional | Value    | Description
-------------------|----------|-----------------------------------------------
disabled           | disabled | Specifies that a text-area should be disabled
readonly           | readonly | Specifies that a text-area should be read-only

#### Example

	<textarea name="message" rows="2" cols="30">`With test inside</textarea>

<textarea name="message" rows="2" cols="30">`With test inside</textarea>

## Label - `<label>``</label>`

Defines the text form element.  Label is an option inline that can be used to help organize the text with the form element.

When using label tag  you can replace the NAME with an ID for each element but the name will work just fine.

Attribute | Value      | Description
----------|------------|-------------------------------------------------
for       | element_id | Specifies which form element a label is bound to

	<form>
		<label for="male">Male</label>
		<input type="radio" name="sex" id="male" >
		<br >
		<label for="female">Female</label>
		<input type="radio" name="sex" id="female" >
	</form>

<form>
	<label for="male">Male</label>
	<input type="radio" name="sex" id="male" >
	<br >
	<label for="female">Female</label>
	<input type="radio" name="sex" id="female" >
</form>
