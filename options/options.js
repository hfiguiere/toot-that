// SPDX-License: MPL-2.0
//
// Author: Hubert Figuière

let options = document.getElementById("fediHost");

options.addEventListener("change", async () => {
    await browser.storage.local.set({
        fedi_host: options.value
    });
});

browser.storage.local.get(null).then((storage) => {
    let {fedi_host} = storage;
    if (typeof fedi_host != "undefined") {
        options.value = fedi_host;
    }
});
