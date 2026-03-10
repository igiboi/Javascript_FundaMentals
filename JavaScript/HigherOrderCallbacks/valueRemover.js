function destroyer(array, ...valuesToRemove) {
  // "For each item, keep it only if the remove list does NOT include it."
  return array.filter((item) => !valuesToRemove.includes(item));
}