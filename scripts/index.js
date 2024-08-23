sammy.ready(function() {
  // Use a variable to avoid having to select the element each time
  const testElement = sammy(".test-element");

  testElement.addClass("bar");
  testElement.prepend("<div>prepend</div>");
  testElement.append("<div>append</div>");
});