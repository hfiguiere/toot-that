
browser.tabs
    .query({active: true, currentWindow: true})
    .then((tabs) => {
        if (tabs[0]) {
            let activeTab = tabs[0];
            let twitter_uri = "https://twitter.com/intent/tweet?url=" +
                encodeURIComponent(activeTab.url) +
                "&text=" + encodeURIComponent(activeTab.title);
            try {
                window.location.href = twitter_uri;
            } catch(e) {
                console.error(e);
            }
        }
    });

