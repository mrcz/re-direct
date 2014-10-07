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

  new MutationObserver(function(mutations) {
    mutations.forEach(function(mrec) {
      cleanLink(mrec.target);
    });
  }).observe(d, { attributes: true, subtree: true, attributeFilter: ['href'] });

}(document));
