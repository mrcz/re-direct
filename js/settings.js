/* global chrome */
'use strict'

function initHandlers (hideReferrer) {
  function saveSettings () {
    var hideReferrer = document.getElementById('hide-referrer').checked
    chrome.storage.local.set({'hideReferrer': hideReferrer})
  }
  document.getElementById('hide-referrer').checked = hideReferrer
  document.getElementById('hide-referrer').addEventListener('click', saveSettings)
}

chrome.storage.local.get('hideReferrer', (settings) => {
  var hideReferrer = (settings.hideReferrer !== false)
  if (document.readyState !== 'loading') {
    initHandlers(hideReferrer)
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      initHandlers(hideReferrer)
    })
  }
})
