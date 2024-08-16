# sammy.js
An open-source JavaScript library built as an alternative to jQuery.

## Documentation
The documentation to use the `sammy.js` library in a project. For the examples, the initial HTML element will look like this:

```html
<div class="foo"> ... </div>
```

### Add a Class
To add a `class` to an element. In this example, the `bar` class is being added to the element with a class selector named `foo`.

```javascript
sammy(".foo").addClass("bar");
```

The result:

```html
<!-- Before -->
<div class="foo"> ... </div>

<!-- After -->
<div class="foo bar"> ... </div>
```

### Remove a Class
To remove a `class` from an element. In this example, the `bar` class is being remove from the element with a class selector named `foo`.

```javascript
sammy(".foo").removeClass("bar");
```

If no classes remain, the `class` attribute will also be removed from the element.

The result:

```html
<!-- Before -->
<div class="foo bar"> ... </div>

<!-- After -->
<div class="foo"> ... </div>
```