(function(window) {
  const sammyLibrary = {
    // Property that outputs the version of the library
    version: "0.3.0",

    sammy(selector) {
      let elements = [];

      // Functionality to handle both CSS selectors as strings and individual DOM elements
      if (typeof selector === "string") {
        // Select elements based on the selector parameter if the selector is a string
        elements = document.querySelectorAll(selector);

        // Warn if no elements are found
        if (elements.length === 0) {
          console.warn(`No elements found for the selector: "${selector}".`);
          // Return an object when no elements are found
          return {
            // Each method allows method chaining to continue without throwing a runtime error to be fail safe
            addClass: () => this,
            removeClass: () => this,
            toggleClass: () => this,
            addAttribute: () => this,
            removeAttribute: () => this,
            on: () => this,
          };
        }
      } else if (selector instanceof Element) {
        // If a single element is passed, wrap it in an array
        elements = [selector];
      } else {
        // Warn if the selector is neither a string nor an Element
        console.warn("Invalid selector: Selector must be a string or a DOM element.");
      }

      const methods = {
        // Add a class to an element in the DOM
        addClass: function(className) {
          elements.forEach(function(element) {
            element.classList.add(className);
          });
          // Allow method chaining
          return this;
        },

        // Remove a class from an element and the class attribute if no classes remain
        removeClass: function(className) {
          elements.forEach(function(element) {
            element.classList.remove(className);
            // Check if the element has any classes remaining
            if (element.classList.length === 0) {
              // If no classes remain, remove the class attribute from the element also
              element.removeAttribute("class");
            }
          });
          // Allow method chaining
          return this;
        },

        // Toggle classes on elements, this can be chained to the other methods in the library
        toggleClass: function(className) {
          elements.forEach(function(element) {
            if (element.classList.contains(className)) {
              element.classList.remove(className);

              // Check if the element has any classes remaining
              if (element.classList.length === 0) {
                // If no classes remain on the element, remove the class attribute from the element
                element.removeAttribute("class");
              }
            } else {
              element.classList.add(className);
            }
          });
          // Allow method chaining
          return this;
        },

        // Add an attribute to an element. This requires a name and a value
        addAttribute: function(attributeName, attributeValue) {
          // Throw an error if either the name and/or value is not provided as an argument
          if (attributeName === undefined || attributeValue === undefined || attributeName === null || attributeValue === null) {
            throw new Error("Both attribute name and value must be provided and cannot be null.");
          }
          elements.forEach(function(element) {
            element.setAttribute(attributeName, attributeValue);
          });
          // Allow method chaining
          return this;
        },

        // Remove an attribute from an element
        removeAttribute: function(attributeName) {
          elements.forEach(function(element) {
            element.removeAttribute(attributeName);
          });
          // Allow method chaining
          return this;
        },

        // Add an event listener to elements
        on: function(eventType, callback) {
          if (typeof eventType !== "string" || typeof callback !== "function") {
            throw new Error("Event type must be a string and callback must be a function.");
          }
          elements.forEach(function(element) {
            element.addEventListener(eventType, function(event) {
              callback.call(element, event);
            });
          });
          // Allow method chaining
          return this;
        },
      };
      
      return methods;
    },

    // The ready function for loading the library
    ready(fn) {
      if (document.readyState !== "loading") {
        fn();
      } else {
        document.addEventListener("DOMContentLoaded", fn);
      }
    },
  };

  // Keep the original namespace clean and only expose the methods in the library globally
  window.sammy = sammyLibrary.sammy;
  window.sammy.ready = sammyLibrary.ready;
  // Expose the version number property globally
  window.sammy.version = sammyLibrary.version;
})(window);