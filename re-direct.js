(function(d) {
  'use strict';

  var hideReferrer = true;

  function cleanLink(a) {
    var data = a.dataset;
    if (data && data.href && '/url' === a.pathname) {
      a.href = data.href;
      if (hideReferrer)
        a.rel = 'noreferrer';
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
