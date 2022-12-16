Toot That
=========

Publish the current tab URL to the configured Mastodon instance for
the Fediverse to enjoy.

Requires a recent Firefox. Compatibility with Chrome is
unknown. Patches welcome.

Building
--------

This is based on tweet-that that was written for the bird site.

Source at:
https://github.com/hfiguiere/toot-that

To build, you need NodeJS and npm.

From the source directory, to setup the environment:

```shell
$ npm install
```

Then to builf
```shell
$ npx web-ext build
```

`web-ext-artifacts` will contain a zipped version of the extension.


Author:
Hubert Figuière <hub@figuiere.net>

License: MPL
