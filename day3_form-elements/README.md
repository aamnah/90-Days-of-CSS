# Styling Form Elements

Date: Wed Oct 11, 2017

> Be sure to use an appropriate type attribute on all inputs (e.g., email for email address or number for numerical information) to take advantage of newer input controls like email verification, number selection, and more.

### Fieldsets and Legends

```html
<fieldset>
	<legend>Contact Us</legend>
	<label for="name">Name: </label>
	<input type="text" id="name" placeholder="Name">
</fieldset>
```

`fieldset` partitions the `form`. It'll wrap everything inside in a surrounding border. The `<legend>` adds a heading for the `<fieldset>`

### Labels
- `<label>` and `<input>` are associated via their `for` and `id` attributes respectively (the label `for` attribute references the `id` attribute of the corresponding input)
- `<label>`'s `for` links to an `<input>`'s `id`
- Clicking the label highlights the corresponding input field. So if you entered the input `id` wrong you may just end up highlighting the wrong element on the page. It is good practice to click all the labels once you are done laying out the form.

### Inputs
- Inputs allow you to accept data from the user
- To test each input type out, just start changing the `type` attribute of an input field in a live editor (e.g. Codepen)

> In each case, the initial value (text) produces a basic text input, but you can try other values such as number, color, checkbox, radio, date, file, month, password, range, or time.

### Input Structuring

- By default inputs within forms are not block level elements. If you want them on separate lines, you'll have to put them inside a block level element, like a `<div>`. Then for styling you can give that div a class. For example, Bootstrap4 uses `.form-group` for textual form controls (`<input>`, `<select>`, `<textarea>`) and `.form-check` for checkboxes and radios. 

> By default, any number of checkboxes and radios that are immediate sibling will be vertically stacked and appropriately spaced with `.form-check`.

.

> it's common practice to wrap a label and its widget with a `<div>` element. `<p>` elements are also commonly used, as are HTML lists (the latter is most common for structuring multiple checkboxes or radio buttons).

- Also try `display: block` and see how it goes

### ID-ing the Input fields
- Input `id`s need to be unique, for various reasons. They might be used in JS, or there might be different form on the page. 
- If a label is linking to the `name` id of an input and multiple forms have `name`, it'll only highlight the first occurance of id `name` on the page.
- In case of multiple forms on the page, one approach could be appending the form's ID to the input ID fields. For example, if a form has an ID of `contact`, we can use the structure of `contactName` for it's input fields

### Input types
- Input types are a plenty (20+, [22 listed on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types))
- If an input `type` is not specified, the default is `text`

| Type | Description |
|------|---------------------------------------|
| `button` | A push button with no default behavior. |
| `checkbox` | A check box allowing single values to be selected/deselected. |
| `color` | HTML5 A control for specifying a color. A color picker's UI has no required features other than accepting simple colors as text (more info). |
| `date` | HTML5 A control for entering a date (year, month, and day, with no time). |
| `datetime-local` | HTML5 A control for entering a date and time, with no time zone. |
| `email` | HTML5 A field for editing an e-mail address. |
| `file` | A control that lets the user select a file. Use the **accept** attribute to define the types of files that the control can select. |
| `hidden` | A control that is not displayed but whose value is submitted to the server. |
| `image` | A graphical submit button. You must use the **src** attribute to define the source of the image and the **alt** attribute to define alternative text. You can use the **height** and **width** attributes to define the size of the image in pixels. |
| `month` | HTML5 A control for entering a month and year, with no time zone. |
| `number` | HTML5 A control for entering a number. |
| `password` | A single-line text field whose value is obscured. Use the **maxlength** attribute to specify the maximum length of the value that can be entered. |
| `radio` | A radio button, allowing a single value to be selected out of multiple choices. |
| `range` | HTML5 A control for entering a number whose exact value is not important. |
| `reset` | A button that resets the contents of the form to default values. |
| `search` | HTML5 A single-line text field for entering search strings. Line-breaks are automatically removed from the input value. |
| `submit` | A button that submits the form. defines a button for **submitting** form data to a **form-handler**. The form-handler is typically a server page with a script for processing input data. The form-handler is specified in the form's **action** attribute |
| `tel` | HTML5 A control for entering a telephone number. |
| `text` | A single-line text field. Line-breaks are automatically removed from the input value. |
| `time` | HTML5 A control for entering a time value with no time zone. |
| `url` | HTML5 A field for entering a URL. |
| `week` | HTML5 A control for entering a date consisting of a week-year number and a week number with no time zone.


### Design Patterns
- Floating Labels
- Make the radio/checkboxes a button

#### Placing Icons inside Input fields

```html
<div>
	<label for="contactMessage">Message</label>
	<textarea class="message" name="contactMessage" id="contactMessage" required="">
	</textarea>
</div>
```

```css
/*
 - Add a background image and align it's position
 - Add padding in that area
*/

textarea {
  padding-left: 54px !important;
}
textarea .message {
  background: url("../img/cd-icon-message.svg") no-repeat 16px 16px;
}
```





Links
---

- [MDN: How to structure an HTML form](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/How_to_structure_an_HTML_form)
- [CodyHouse: CSS Contact Form](https://codyhouse.co/demo/contact-form/index.html)
- [Bootstrap Forms](https://getbootstrap.com/docs/4.0/components/forms/)
- [MDN: <input> types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types)
- [W3Schools: HTML Input Types](https://www.w3schools.com/html/html_form_input_types.asp)