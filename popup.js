document.getElementById('closeTabsButton').addEventListener('click', () => {
    chrome.tabs.query({}, (tabs) => {
        tabs.forEach(tab => {
            chrome.tabs.remove(tab.id);
        });
    });
});
