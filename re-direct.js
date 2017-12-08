/* global chrome, MutationObserver */
((d) => {
  'use strict'

  chrome.storage.local.get('hideReferrer', (settings) => {
    const hideReferrer = (settings['hideReferrer'] !== false)

    const cleanLink = a => {
      var data = a.dataset
      if (a.pathname === '/url') {
        if (data && data.href) {
          updateLink(a, data.href)
        } else {
          let url = (new URLSearchParams(a.href)).get('url')
          if (url) {
            updateLink(a, url)
          }
        }
      }

      if (data && data.href && a.pathname === '/url') {
        a.href = data.href
      }
    }

    const updateLink = (a, href) => {
      a.href = href
      if (hideReferrer) {
        a.rel = 'noreferrer'
      }
    }

    for (let e of d.getElementsByTagName('a')) {
      cleanLink(e)
    }

    const observer = new MutationObserver(mutations => {
      observer.disconnect()
      mutations.forEach((mrec) => { cleanLink(mrec.target) })
      observe()
    })

    const observe = () => {
      observer.observe(d, {
        attributes: true,
        subtree: true,
        attributeFilter: ['href']
      })
    }

    observe()
  })
})(document)
