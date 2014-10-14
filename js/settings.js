function loadSettings() {
	chrome.storage.local.get('hideReferrer', function(settings) {
		document.getElementById('hide-referrer').checked = (false !== settings.hideReferrer);
	});
}

function saveSettings() {
	var hideReferrer = document.getElementById('hide-referrer').checked;
	chrome.storage.local.set({'hideReferrer': hideReferrer});
}

document.addEventListener('DOMContentLoaded', loadSettings);
document.getElementById('hide-referrer').addEventListener('click', saveSettings);
