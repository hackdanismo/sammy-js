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

Inside the `index.js` file, we can add the code.

```javascript
sammy.ready(function() {
  // For example: sammy(".foo").addClass("bar");
});
```

It is recommended to also minify this JavaScript file once ready to reduce the file size and improve performance.

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

### Remove an Element
The `remove()` method can be used to remove an element completely from the DOM.

```javascript
sammy(".foo").remove();
```