(function(window) {
  const sammyLibrary = {
    // Property that outputs the version of the library
    version: "0.0.3",

    sammy(selector) {
      // Select elements based on the selector parameter
      const elements = document.querySelectorAll(selector);

      const methods = {
        // Add a class to an element in the DOM
        addClass: function(className) {
          elements.forEach(function(element) {
            element.classList.add(className);
          });
          // Allow method chaining
          return this;
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
  window.sammy = sammyLibrary.sammy;
  window.sammy.ready = sammyLibrary.ready;
  // Expose the version number property globally
  window.sammy.version = sammyLibrary.version;
})(window);