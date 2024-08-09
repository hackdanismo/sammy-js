(function(window) {
  const sammyLibrary = {
    // Property that outputs the version of the library
    version: "0.0.2",

    sammy(selector) {
      const methods = {

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