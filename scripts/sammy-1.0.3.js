/*
 * sammy.js v1.0.3
 * Open Source JavaScript Library
 * https://github.com/hackdanismo/sammy-js
 *
 * Copyright Hackdanismo and any other contributors
 * Released under the GPL-3.0 license
 * https://github.com/hackdanismo/sammy-js?tab=GPL-3.0-1-ov-file
 *
 * Date: 2024-09-28
 */

((globalThis, document) => {
  "use strict";

  const sammyLibrary = {
    // Property that outputs the version of the library
    version: "1.0.3",

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
            toggle: () => this,
            addAttribute: () => this,
            removeAttribute: () => this,
            css: () => this,
            on: () => this,
            html: () => this,
            text: () => this,
            hide: () => this,
            show: () => this,
            append: () => this,
            prepend: () => this,
            remove: () => this,
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
        addClass(className) {
          elements.forEach((element) => {
           // Cache the classList object
           const classList = element.classList;
            classList.add(className);
          });
          // Allow method chaining
          return methods;
        },

        // Remove a class from an element and the class attribute if no classes remain
        removeClass(className) {
          elements.forEach((element) => {
            // Cache the classList object
            const classList = element.classList;
            classList.remove(className);
            // Remove the attribute if no other values are found
            if (!classList.length) {
              element.removeAttribute("class");
            }
          });
          // Allow method chaining
          return methods;
        },

        toggleClass(className) {
          elements.forEach((element) => {
            // Cache the classList object
            const classList = element.classList;
            classList.toggle(className);

            // Remove the attribute if no other values are found
            if (!classList.length) {
              element.removeAttribute("class");
            }
          });
          return methods;
        },

        // Toggle the visibility of elements, switching between show and hide
        toggle() {
          elements.forEach((element) => {
            if (window.getComputedStyle(element).display === "none") {
              element.style.display = "";
            } else {
              element.style.display = "none";
            }
            // Remove the style attribute if it has no other properties
            if (element.style.cssText.trim() === "") {
              element.removeAttribute("style");
            }
          });
          // Allow method chaining
          return methods;
        },

        // Add an attribute to an element. This requires a name and a value
        addAttribute(attributeName, attributeValue) {
          // Throw an error if either the name and/or value is not provided as an argument
          if (attributeName === undefined || attributeValue === undefined || attributeName === null || attributeValue === null) {
            throw new Error("Both attribute name and value must be provided and cannot be null.");
          }
          elements.forEach((element) => {
            element.setAttribute(attributeName, attributeValue);
          });
          // Allow method chaining
          return methods;
        },

        // Remove an attribute from an element
        removeAttribute(attributeName) {
          elements.forEach((element) => {
            element.removeAttribute(attributeName);
          });
          // Allow method chaining
          return methods;
        },

        // Apply styles to all elements matched by the selector
        css(property, value) {
          if (typeof property === "string" && value === undefined) {
            // Get the style for the first element
            return elements[0] ? window.getComputedStyle(elements[0])[property] : undefined;
          }
          elements.forEach((element) => {
            element.style[property] = value;
          });
          // Allow method chaining
          return methods;
        },

        // Add an event listener to elements
        on(eventType, callback) {
          if (typeof eventType !== "string" || typeof callback !== "function") {
            throw new Error("Event type must be a string and callback must be a function.");
          }
          elements.forEach((element) => {
            element.addEventListener(eventType, function(event) {
              callback.call(element, event);
            });
          });
          // Allow method chaining
          return methods;
        },

        // Get or set the inner HTML of an element to allow manipulation of its content
        html(htmlContent) {
          if (htmlContent === undefined) {
            // Return the HTML content of the first element
            return elements[0] ? elements[0].innerHTML : undefined;
          }
          elements.forEach((element) => {
            element.innerHTML = htmlContent;
          });
          // Allow method chaining
          return methods;
        },

        // Get or set the text content of an element and working with text nodes
        text(textContent) {
          if (textContent === undefined) {
            // Return the text content of the first element
            return elements[0] ? elements[0].textContent : undefined;
          }
          elements.forEach((element) => {
            element.textContent = textContent;
          });
          // Allow method chaining
          return methods;
        },

        // Apply style attribute to set the display to be none to hide an element
        hide() {
          elements.forEach((element) => {
            element.style.display = "none";
          });
          // Allow method chaining
          return methods;
        },

        // Apply style attribute to set the display to be empty to show a hidden element
        show() {
          elements.forEach((element) => {
            // Reset to the default display value
            element.style.display = "";

            // Check if the style attribute is empty after resetting the display value
            if (element.style.cssText.trim() === "") {
              element.removeAttribute("style");
            }
          });
          // Allow method chaining
          return methods;
        },

        // Helper method to handle both append and prepend
        _manipulateContent(content, position) {
          elements.forEach((element) => {
            if (typeof content === "string") {
              element.insertAdjacentHTML(position, content);
            } else if (content instanceof Element) {
              if (position === "beforeend") {
                element.appendChild(content);
              } else if (position === "afterbegin") {
                element.insertBefore(content, element.firstChild);
              }
            }
          });
          // Allow method chaining
          return methods;
        },

        // Method to add elements or content at the beginning of a selected element
        append(content) {
          return methods._manipulateContent(content, "beforeend");
        },

        // Method to add elements or content at the end of a selected element
        prepend(content) {
          return methods._manipulateContent(content, "afterbegin");
        },

        // Remove select elements from the DOM
        remove() {
          elements.forEach((element) => {
            element.remove();
          });
          // Allow method chaining
          return methods;
        }
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
  globalThis.sammy = sammyLibrary.sammy;
  globalThis.sammy.ready = sammyLibrary.ready;
  // Expose the version number property globally
  globalThis.sammy.version = sammyLibrary.version;
})(
  // Check for the global object type to use within the library
  typeof globalThis !== "undefined" // Default
    ? globalThis 
    : typeof window !== "undefined" // Used for browsers
    ? window
    : typeof self !== "undefined" // Used for browsers
    ? self
    : typeof global !== "undefined" // Used for Node as window and self are not defined
    ? global
    : {},
  typeof document !== "undefined" ? document : undefined
);