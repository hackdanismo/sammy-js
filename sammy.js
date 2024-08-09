(function(window) {
  const sammyLibrary = {
    sammy(selector) {
      const methods = {

      };
      
      return methods;
    },
  };

  // Keep the original namespace clean and only expose the methods in the library globally
  window.sammy = sammyLibrary.sammy;
})(window);