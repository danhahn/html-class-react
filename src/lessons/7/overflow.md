Overflow is how an element deals with content that is greater than the space it has to display. This will happen when an element has a height defined on it. When an element has a width defined that width will not change but the element will grow in height. If a height is set the element will not grow past that height even if the content is greater than that space.

When the overflow property is set it tells the element how to deal with the extra content. There are four options

Value                            | Description
---------------------------------|------------------------------------------------------------------------------------
[visible](overflow.html#visible) | The overflow is not clipped. It renders outside the element's box. This is default
[hidden](overflow.html#hidden)   | The overflow is clipped, and the rest of the content will be invisible
[scroll](overflow.html#scroll)   | The overflow is clipped, but a scroll-bar is added to see the rest of the content
[auto](overflow.html#auto)       | If overflow is clipped, a scroll-bar should be added to see the rest of the content

## Visible
When visible is set the extra content will overflow the element and is seen in the screen. It may overlap other content below it.
```
overflow: visible;
```
### Example

<div class="overflow">Messenger bag Austin umami, Godard Truffaut Shoreditch photo booth gentrify American Apparel Intelligentsia fixie sriracha vegan pop-up PBR&B. Actually Austin cliche bicycle rights, authentic sriracha cred fixie lo-fi hoodie tattooed street art cray kitsch. Banjo photo booth post-ironic, scenester deep v Shoreditch Intelligentsia occupy meh biodiesel mixtape try-hard. Pinterest Carles before they sold out mlkshk. Tofu McSweeney's tousled, occupy 90's kogi tattooed farm-to-table stumptown quinoa single-origin coffee. Lo-fi fixie pickled, gluten-free scenester retro ethical photo booth cardigan slow-carb chambray literally bitters direct trade. Sartorial shabby chic small batch Wes Anderson, twee cornhole stumptown four dollar toast.</div>

## Hidden

When hidden is she the extra content will not be seen. The element will just be the size but if the content is greater than the size the user will not be able to see it.
```
overflow: hidden;
```
### Example

<div class="overflow" style="overflow: hidden">Messenger bag Austin umami, Godard Truffaut Shoreditch photo booth gentrify American Apparel Intelligentsia fixie sriracha vegan pop-up PBR&B. Actually Austin cliche bicycle rights, authentic sriracha cred fixie lo-fi hoodie tattooed street art cray kitsch. Banjo photo booth post-ironic, scenester deep v Shoreditch Intelligentsia occupy meh biodiesel mixtape try-hard. Pinterest Carles before they sold out mlkshk. Tofu McSweeney's tousled, occupy 90's kogi tattooed farm-to-table stumptown quinoa single-origin coffee. Lo-fi fixie pickled, gluten-free scenester retro ethical photo booth cardigan slow-carb chambray literally bitters direct trade. Sartorial shabby chic small batch Wes Anderson, twee cornhole stumptown four dollar toast.</div>


## Auto

Like hidden the content that is greater than the element will not be seen but if they are needed scrollbars will appear.
```
overflow: auto;
```
### Example

<div class="overflow" style="overflow: auto">Messenger bag Austin umami, Godard Truffaut Shoreditch photo booth gentrify American Apparel Intelligentsia fixie sriracha vegan pop-up PBR&B. Actually Austin cliche bicycle rights, authentic sriracha cred fixie lo-fi hoodie tattooed street art cray kitsch. Banjo photo booth post-ironic, scenester deep v Shoreditch Intelligentsia occupy meh biodiesel mixtape try-hard. Pinterest Carles before they sold out mlkshk. Tofu McSweeney's tousled, occupy 90's kogi tattooed farm-to-table stumptown quinoa single-origin coffee. Lo-fi fixie pickled, gluten-free scenester retro ethical photo booth cardigan slow-carb chambray literally bitters direct trade. Sartorial shabby chic small batch Wes Anderson, twee cornhole stumptown four dollar toast.</div>


## Scroll

In this case scroll bars will be present at all times even if they are not needed.
```
overflow: scroll;
```
### Example

<div class="overflow" style="overflow: scroll">Messenger bag Austin umami, Godard Truffaut Shoreditch photo booth gentrify American Apparel Intelligentsia fixie sriracha vegan pop-up PBR&B. Actually Austin cliche bicycle rights, authentic sriracha cred fixie lo-fi hoodie tattooed street art cray kitsch. Banjo photo booth post-ironic, scenester deep v Shoreditch Intelligentsia occupy meh biodiesel mixtape try-hard. Pinterest Carles before they sold out mlkshk. Tofu McSweeney's tousled, occupy 90's kogi tattooed farm-to-table stumptown quinoa single-origin coffee. Lo-fi fixie pickled, gluten-free scenester retro ethical photo booth cardigan slow-carb chambray literally bitters direct trade. Sartorial shabby chic small batch Wes Anderson, twee cornhole stumptown four dollar toast.</div>

**Note:** Reminder that we can use this to fix the [clear fix](/lessons/lesson-6/clear-fix.html).
