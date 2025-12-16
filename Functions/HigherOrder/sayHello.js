function once(fn) {
  let hasBeenCalled = false;

  return function () {
    if (hasBeenCalled) {
      return; // Already called, do nothing
    }

    hasBeenCalled = true; // Mark as called
    fn(); // Call the original function
  };
}
