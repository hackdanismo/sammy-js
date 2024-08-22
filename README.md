# sammy.js
An open-source JavaScript library built as an alternative to jQuery.

## Development
The development steps are documented below.

### Clone the Repository
This `GitHub` respository can be cloned using `SSH`. This requires `git` to be installed:

```shell
$ git clone git@github.com:hackdanismo/sammy-js.git
```

Once the repository has been cloned, run the `npm install` command in the terminal to install any packages and/or dependencies needed.

```shell
$ cd sammy-js
$ npm install
```

### Minify the JavaScript code
The `unminified` JavaScript file is named `sammy-x.x.x.js`. Once changes have been made, this file should be minified to create a compressed version named `sammy-x.x.x.min.js`. This is done through the `terser` npm package.

```shell
$ npm run minify
```

## Documentation
The documentation to use the `sammy.js` library in a project. For the examples, the initial HTML element will look like this:

```html
<div class="foo"> ... </div>
```

### Initial Setup
Begin by downloading the unminified `sammy-0.10.3.js` or minified `sammy-0.10.3.min.js` files. It is recommended to use the minified file as this will improve performance due to the reduced file size.

Setup your HTML file with the `<script>` before the closing `</body>` tag.

```html
<script src="scripts/sammy-0.10.3.min.js"></script>
</body>
</html>
```

Create a second `JavaScript` file. This will contain the methods you wish to use within your project. In this example, the file is named `index.js`.

```html
<script src="scripts/sammy-0.10.3.min.js"></script>
<script src="scripts/index.js"></script>
</body>
</html>
```

Inside the `index.js` file, we can add the code:

```javascript
sammy.ready(function() {
  // For example: sammy(".foo").addClass("bar");
});
```

It is recommended to also minify this JavaScript file once ready to reduce the file size and improve performance.

### Check Version
A property within the library can be used to check the version of the library being used.

```javascript
sammy.version

// Output log inside the console
console.log(sammy.version);
```

### Add a Class
To add a `class` to an element using the `addClass()` method. In this example, the `bar` class is being added to the element with a class selector named `foo`.

```javascript
sammy(".foo").addClass("bar");
```

**The result:**

```html
<!-- Before -->
<div class="foo"> ... </div>

<!-- After -->
<div class="foo bar"> ... </div>
```

### Remove a Class
To remove a `class` from an element using the `removeClass()` method. In this example, the `bar` class is being remove from the element with a class selector named `foo`.

```javascript
sammy(".foo").removeClass("bar");
```

If no classes remain, the `class` attribute will also be removed from the element.

**The result:**

```html
<!-- Before -->
<div class="foo bar"> ... </div>

<!-- After -->
<div class="foo"> ... </div>
```

### Toggle a Class
To toggle a class on an element, the `toggleClass()` method can be used.

```javascript
sammy(".foo").toggleClass("bar");
```

**The result:**

```html
<!-- Before -->
<div class="foo bar"> ... </div>

<!-- After -->
<div class="foo"> ... </div>
```

### Add an Attribute
To add an `attribute` to an element using the `addAttribute()` method. In this example, the `id` attribute is being added to the element with a class selector named `foo`.

```javascript
sammy(".foo").addAttribute("id", "testId");
```

**The result:**

```html
<!-- Before -->
<div class="foo"> ... </div>

<!-- After -->
<div class="foo" id="testId"> ... </div>
```

### Remove an Attribute
To remove an `attribute` from an element using the `removeAttribute()` method. In this example, the `id` attribute is to be removed from the element with a class selector named `foo`.

```javascript
sammy(".foo").removeAttribute("id");
```

**The result:**

```html
<!-- Before -->
<div class="foo" id="testId"> ... </div>

<!-- After -->
<div class="foo"> ... </div>
```

### Adding Text
The `text()` method can be used to add text to an element.

```javascript
sammy(".foo").text("Hello, World");
```

**The result:**

```html
<!-- Before -->
<div class="foo"> ... </div>

<!-- After -->
<div class="foo">Hello, World</div>
```

### Adding HTML
The `html()` method can be used to add `HTML` code to an element.

```javascript
sammy(".foo").text("<p>Paragraph added to the element.</p>");
```

**The result:**

```html
<!-- Before -->
<div class="foo"> ... </div>

<!-- After -->
<div class="foo"><p>Paragraph added to the element.</p></div>
```

### Adding CSS
Styling can be applied to an element using the `css()` method. The styling will be added to a `style` attribute.

```javascript
sammy(".foo").css("background-color", "blue").css("border", "1px solid black");
```

**The result:**

```html
<!-- Before -->
<div class="foo"> ... </div>

<!-- After -->
<div class="foo" style="background-color: blue; border: 1px solid black;"> ... </div>
```

The `css()` method can also be used to return values.

```javascript
const backgroundColor = sammy(".foo").css("background-color");
console.log(backgroundColor);
```

### Handle Events
The `on()` method can be used to handle events, such as `click` events.

```javascript
sammy(".foo").on("click", function() {
  alert("The Button was clicked!");
});
```

This can be combined with other methods in the library as this example will demonstrate:

```javascript
sammy(".foo").on("click", function() {
  sammy(".bar").toggleClass("active");
});
```

### Append
Elements can added to the start of a parent element using the `append()` method.

```javascript
sammy(".foo").append("<div>This is a new element added.</div>");
```

```html
<!-- Before -->
<div class="foo"> ... </div>

<!-- After -->
<div class="foo">
  <div>This is a new element added.</div>
</div>
```

### Prepend
Elements can added to the end of a parent element using the `prepend()` method.

```javascript
sammy(".foo").prepend("<div>This is another new element added to the end.</div>");
```

```html
<!-- Before -->
<div class="foo">
  <div>This is a new element added.</div>
</div>

<!-- After -->
<div class="foo">
  <div>This is a new element added.</div>
  <div>This is another new element added to the end.</div>
</div>
```

### Hide
Use the `hide()` method to hide the element. This applies the `style` attribute to the element.

```javascript
sammy(".foo").hide();
```

**The result:**

```html
<!-- Before -->
<div class="foo"> ... </div>

<!-- After -->
<div class="foo" style="display: none;"> ... </div>
```

### Show
Use the `show()` method to show the element to be visible. This remove the `style` attribute from the element.

```javascript
sammy(".foo").show();
```

**The result:**

```html
<!-- Before -->
<div class="foo" style="display: none;"> ... </div>

<!-- After -->
<div class="foo"> ... </div>
```

### Toggle
The `toggle()` method is used to toggle between `show` and `hide`.

```javascript
sammy(".foo").toggle();
```

```html
<!-- Before -->
<div class="foo"> ... </div>

<!-- After -->
<div class="foo" style="display: none;"> ... </div>
```

This method is useful when hiding and showing elements on a button click. The element with the class of `bar` will be hidden or shown each time the button is clicked.

```javascript
sammy(".foo").on("click", function() {
  sammy(".bar").toggle();
});
```

### Remove an Element
The `remove()` method can be used to remove an element completely from the DOM.

```javascript
sammy(".foo").remove();
```