# Jason Olmstead Portfolio

Standalone static copy of the portfolio currently served from `jasonolmstead.com`.

## Source

- Source host: GoDaddy cPanel account for `jasonolmstead.com`
- Source entry point: `/home/ojason/public_html/index.html`
- The downloaded `index.html` was verified as an exact byte-for-byte match to the live page on August 20, 2026.

## Contents

This repository contains the HTML entry point and the local CSS, JavaScript, icon-font, image, favicon, and resume files required by the page. It intentionally does not include GoDaddy hosting files such as `.htaccess`, account directories, logs, backups, or unrelated sites.

Two stale references existed in the original page and were not copied because they return 404 from the source host:

- `apple-touch-icon.png`
- `css/fonts/icomoon.svg`

The remaining icon-font formats and all working image references are included.

## Local preview

```bash
python3 -m http.server 4178
```

Then open <http://127.0.0.1:4178/>.

## GitHub Pages

This is a static site and does not require a build step. The current HTML still contains the original GoDaddy Open Graph URL and Google Analytics property. A custom-domain cutover and DNS changes should be handled separately after the GitHub Pages copy has been approved.
