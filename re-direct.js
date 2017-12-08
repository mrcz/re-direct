/* global chrome, MutationObserver */
((d) => {
  'use strict'

  chrome.storage.local.get('hideReferrer', (settings) => {
    const hideReferrer = (settings['hideReferrer'] !== false)

    const cleanLink = a => {
      var data = a.dataset
      if (a.pathname === '/url') {
        if (hideReferrer) {
          a.rel = 'noreferrer'
        }
        if (data && data.href) {
          a.href = data.href
        } else {
          let url = (new URLSearchParams(a.href)).get('url')
          if (url) {
            a.href = url
          }
        }
      }

      if (data && data.href && a.pathname === '/url') {
        a.href = data.href
        if (hideReferrer) {
          a.rel = 'noreferrer'
        }
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
