"use strict";

chrome.storage.local.get("hideReferrer", settings => {
  const hideReferrer = (settings["hideReferrer"] !== false);

  const cleanLink = a => {
    if (a.pathname === "/url") {
      const href = getOriginalUrl(a);
      if (href) {
        updateLink(a, href);
      }
    }
  };

  const getOriginalUrl = a =>
    a.dataset && a.dataset.data && a.dataset.data.href || (new URLSearchParams(a.href)).get("url");

  const updateLink = (a, href) => {
    a.href = href;
    if (hideReferrer) {
      a.rel = "noreferrer";
    }
  };

  for (const a of d.getElementsByTagName("a")) {
    cleanLink(a);
  }

  const observer = new MutationObserver(mutations => {
    observer.disconnect();
    mutations.forEach(mrec => cleanLink(mrec.target));
    observe();
  });

  const observe = () => {
    observer.observe(document, {
      attributes: true,
      subtree: true,
      attributeFilter: ["href"]
    });
  };

  observe();
});
