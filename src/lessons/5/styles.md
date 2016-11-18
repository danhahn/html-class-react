In the past all styles were added to the table using attributes added to the `<table>`, `<tr>`, or `<td>`.  Since HTML5 all style should now be added to a style sheet.

## Basic Table styles

### Adding a border

Borders can be added to both the `<table>` and `<td>` or `<th>`.  Borders can be adding to one or all sides of the `<table>` or `<td>`.

In the event that the table is collapsed the table border and the outermost cell border will overlap and only one will display. When this happens the table border is not visible.

	<style>
		table {
			border: 1px solid black;
		}

		td {
			border: 1px solid red;
		}
	</style>

	<table>
		<tr>
			<td>Table</td>
		</tr>
	</table>


<style>
	table.example {
		border: 1px solid black !important;
		border-collapse: separate;
		width: auto;
		border-spacing: 2px;
		border-radius: 0;
	}
	.example td {
		border: 1px solid red !important;
		border-radius: 0 !important;
		padding: 0;
	}
</style>

<table class="example">
	<tr>
		<td>Table</td>
	</tr>
</table>

-----

### Adding Spacing

By default the `<td>` has no padding this results in the content often being too close to the borders.  This will result in the content being very close to the border.

To add space use `padding`.  Padding adds space from the border into the content.

Padding will always be applied to the `<td>`.

	<style>
		td {
			padding: 10px;
		}
	</style>

	<table>
		<tr>
			<td>Table</td>
		</tr>
	</table>


<style>
	table.example {
		border: 1px solid black;
		border-collapse: separate;
		width: auto;
		border-spacing: 2px;
		border-radius: 0;
	}
	.example td {
		border: 1px solid red;
		border-radius: 0;		
	}
	.example.padding td {
		padding: 10px;
	}
</style>

<table class="example padding">
	<tr>
		<td>Table</td>
	</tr>
</table>

----

### Setting a width

Widths can be set on both the `<table>` and on the `<td>`.

	<style>
		table {
			width: 500px;
		}
		td {
			padding: 50%;
		}
	</style>

	<table>
		<tr>
			<td>Width</td>
			<td>Width</td>
		</tr>
	</table>

<style>
	table.example.width {
		width: 500px;
	}
	.example.width td {
		width: 50%;
	}
</style>

<table class="example width">
	<tr>
		<td>Width</td>
		<td>Width</td>
	</tr>
</table>

----

### Alignment

You can align content within a cell by using `text-align` and `vertical-align`.  Note that the space must be bigger than the content.  

	<style>
		table {
			width: 500px;
		}
		td {
			padding: 50%;
			height: 100px;
			text-align: center;
			vertical-align: top;
		}
	</style>

	<table>
		<tr>
			<td>Align</td>
			<td>Align</td>
		</tr>
	</table>

<style>
	table.example.width {
		width: 500px;
	}
	.example.width td {
		width: 50%;
text-align: center;
		vertical-align: top;
	}
</style>

<table class="example width">
	<tr>
		<td>Align</td>
		<td>Align</td>
	</tr>
</table>

---

### Remove Spacing

By default `<table>` has a `2px` space between the `<table>` and the inner `<td>`.  As well as between the `<td>`.  This can be removed by adding `border-collapse`.


	<style>
		table {
			border-collapse: collapse;
		}
	</style>

	<table>
		<tr>
			<td>Collapse</td>
			<td>Collapse</td>
		</tr>
	</table>

<style>
	table.example.col {
		width: 500px;
border-collapse: collapse;
	}
	.example.col td {
		width: 50%;
text-align: center;
		vertical-align: top;
	}
</style>

<table class="example col">
	<tr>
		<td>Collapse</td>
		<td>Collapse</td>
	</tr>
</table>

---

### Adding Background Color

Background colors can be added to the `<table>`, `<tr>` or `<td>`.   There is an order table is the lowest, then row finally the cell.

	<style>
		table {
			background-color: orange;
		}
		tr {
			background-color: blue;
		}
		td {
			background-color: green;
		}
	</style>

	<table>
		<tr>
			<td>BG Color</td>
			<td>BG Color</td>
		</tr>
	</table>

<style>
	table.example.bg {
		background-color: orange;
	}

	.example.bg tr {
		background-color: blue;
	}
	.example.bg tr .item {
		background-color: green;
	}
</style>

<table class="example bg">
	<tr>
		<td>BG Color</td>
		<td class="item">BG Color</td>
	</tr>
</table>
