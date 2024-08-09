(function(window) {
  const sammyLibrary = {
    // Property that outputs the version of the library
    version: "0.0.1",

    sammy(selector) {
      const methods = {

      };
      
      return methods;
    },
  };

  // Keep the original namespace clean and only expose the methods in the library globally
  window.sammy = sammyLibrary.sammy;
  // Expose the version number property globally
  window.sammy.version = sammyLibrary.version;
})(window);