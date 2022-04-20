const remove = function remove(selector) {
  const toRemove = document.querySelector(selector);
  toRemove.setAttribute('style', 'display:none');
};

export default remove;
