(function(d) {
  'use strict';

  function cleanLink(el) {
    var data = el.dataset;
    if (data && data.href && el.pathname === '/url' && el.href !== data.href) {
      el.href = data.href;
      el.onmousedown = null;
    }
  }

  (function() {
    var i = 0, elems = d.getElementsByTagName('a');
    while (i<elems.length)
      cleanLink(elems[i++]);
  }());

  var observer = new MutationObserver(function(mutations) {
    observer.disconnect();
    mutations.forEach(function(mrec) {
      cleanLink(mrec.target);
    });
    startObserving();
  });

  function startObserving() {
    observer.observe(d, {
      attributes: true,
      subtree: true,
      attributeFilter: ['href']
    });
  }

  startObserving();

}(document));
