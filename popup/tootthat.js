
let errorElem = document.getElementById("error");

browser.tabs
    .query({active: true, currentWindow: true})
    .then(async (tabs) => {
        if (tabs[0]) {
            try {
                let storage = await browser.storage.local.get(null);
                let {fedi_host} = storage;
                if (!fedi_host) {
                    browser.runtime.openOptionsPage();
                    return;
                }
                let {title, url} = tabs[0];
                let text = encodeURIComponent(title + "\n\n" + url);

                let toot_uri = `https://${fedi_host}/share?text=${text}`;

                window.location.href = toot_uri;
            } catch(e) {
                errorElem.textContent += `Error: ${e}\n`;
                console.error(e);
            }
        }
    });

