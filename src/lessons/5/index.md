Tables are defined with the `<table>` tag. A table is divided into rows (with the `<tr>` tag), and each row is divided into data cells (with the `<td>` tag). The letters td stands for **"table data,"** which is the content of a data cell. A data cell can contain text, images, lists, paragraphs, forms, tables, etc. There is also the `<th>` or table header to define a header within the table.  **HTML5** added two new tags to help better group content within the table.  The `<thead>` or table header and `<tbody>` or table body are **optional** tags that can be used to help define areas of the table.

	<table>
		<thead>
			<tr>
				<th>row 1, cell 1</th>
				<th>row 1, cell 2</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>row 2, cell 1</td>
				<td>row 2, cell 2</td>
			</tr>
		</tbody>
	</table>

### Example

<table class="no-style">
	<thead>
		<tr>
			<th>row 1, cell 1</th>
			<th>row 1, cell 2</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>row 2, cell 1</td>
			<td>row 2, cell 2</td>
		</tr>
	</tbody>
</table>

## Table Tag

`<table></table>`

The **table** tag defines the starting and stopping points of the table. After the `<table>` all content that is to be displayed on the screen must be placed between `<td>` and `</td>`. Once a `</table>` is indicated all html goes on as normal.

	<table>
		<!-- add table content -->
	</table>

----

## Table Row

`<tr></tr>`

**Table Row** defines the starting and stopping points for a table row. All table data cells must be placed between the `<tr>` and `</tr>`. Because a table might have more than one row you can have more than one `<tr>` set.

	<table>
		<tr>
			<!-- add table content -->
		</tr>
	</table>

---

## Table Data

`<td></td>`

**table data** Defines a cell with a table and must be between `<tr>` and `</tr>`. Because all content must be located in the `<td>` set you can have more than on `<td>` set per row.

	<table>
        <tr>
            <td><!-- add table content --></td>
        </tr>
    </table>

----

## Table Header

`<th></th>`

**table header** Just like the `<td>` but defines a **header**. The table header is always *bold and center* although this can be overwritten with CSS.

	<table>
        <tr>
            <th><!-- add table content --></tg>
        </tr>
    </table>

---

## Table Head
`<thead></thead>`

**table head** Defines an *optional* area within the table as the header of that table. `<thead>` is descendant of the `<table>`.

	<table>
		<thead>
	        <tr>
	            <th><!-- add table content --></tg>
	        </tr>
        </head>
    </table>

---

## Table Body
`<tbody></tbody>`

 **table body** Defines an *optional* area within the table as the body of that table. `<thead>` is descendant of the `<table>`.

	<table>
		<tbody>
	        <tr>
	            <td><!-- add table content --></td>
	        </tr>
        </tbody>
    </table>

---

### Examples
Normal table with header

	<table>
		<thead>
			<tr>
				<th>Heading</th>
				<th>Another Heading</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>row 1, cell 1</td>
				<td>row 1, cell 2</td>
			</tr>
			<tr>
				<td>row 2, cell 1</td>
				<td>row 2, cell 2</td>
			</tr>
		<tbody>
	</table>

<table border="1" class="no-style">
	<thead>
		<tr>
			<th>Heading</th>
			<th>Another Heading</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>row 1, cell 1</td>
			<td>row 1, cell 2</td>
		</tr>
		<tr>
			<td>row 2, cell 1</td>
			<td>row 2, cell 2</td>
		</tr>
	<tbody>
</table>

## Row Span and Col Span

The `colspan` attribute is a way to make on `<td>` take up the space of two or more columns.  This is very useful when you have a title or other content that need to span over two or more columns.

### Table with colspan

	<table border="1">
	<tr>
		<td colspan="2">row 1, cell 1</td>
	</tr>
	<tr>
		<td>row 2, cell 1</td>
		<td>row 2, cell 2</td>
	</tr>
	</table>

<table border="1" class="no-style">
<tr>
	<td colspan="2">row 1, cell 1</td>
</tr>
<tr>
	<td>row 2, cell 1</td>
	<td>row 2, cell 2</td>
</tr>
</table>

The `rowspan` attribute is like the `colspan` but the cell will span from one row to the next.

### Table with rowspan

	<table border="1">
	<tr>
		<td rowspan="2">row 1, cell 1</td>
		<td>row 1, cell 2</td>
	</tr>
	<tr>
		<td>row 2, cell 2</td>
	</tr>
	</table>

<table border="1" class="no-style">
<tr>
	<td rowspan="2">row 1, cell 1</td>
	<td>row 1, cell 2</td>
</tr>
<tr>
	<td>row 2, cell 2</td>
</tr>
</table>

**Note:** that you would never put a colspan or rowspan on the last td in the row or column.

## Nested Tables
A nested is one table that is coded within another table.   All HTML elements in a table must be coded within the <td> tag.  Almost all HTML elements can be code in a table including another table.

When nesting a table within another table be aware that you will now have a `<table></table>` for each table.  So if you have two tables (one inside the other) you will need to have two sets of table tags.

#### Adding a comment <!-- -->

One way to help organized and limit the number of errors is to add a HTML comment.  A comment is a snippet of code that is ignored by the browser.  It used to leave a note in the code.

	<!-- comment here -->  (replace comment here with your note)

Anything between the two tags will not seen on the screen.

Adding comments before and after a nested table helps keep the two table straight and can limit the number of errors.

### Setting up a nested table

	<table>
		<tr>
		    <td>
				This cell contains a nested table.
			    <!-- start nested table -->
			    <table>
			    <tr>
				    <td>Nested table</td>
	                <td>Nested table</td>
			    </tr>
	            <tr>
				    <td>Nested table</td>
	                <td>Nested table</td>
			    </tr>
			    </table>
			    <!-- end nested table -->
			</td>
		    <td>No Nested table here.</td>
		</tr>
	</table>

<table class="no-style">
<tr>
    <td>
		This cell contains a nested table.
	    <!-- start nested table -->
	    <table>
	    <tr>
		    <td>Nested table</td>
            <td>Nested table</td>
	    </tr>
        <tr>
		    <td>Nested table</td>
            <td>Nested table</td>
	    </tr>
	    </table>
	    <!-- end nested table -->
	</td>
    <td>No Nested table here.</td>
</tr>
</table>
