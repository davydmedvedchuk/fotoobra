# FotoObra

Photo reports for construction sites. Take a photo, say what was done, send a PDF to the client on WhatsApp.

No account. No subscription. Works offline.

**[Open the app →](https://davydmedvedchuk.github.io/fotoobra/)**

![FotoObra screens and a sample PDF report](docs/banner.png)

## Why I built it

I work on construction sites in Lisbon. Every day there are dozens of photos: before, during, after. They end up mixed with personal photos in the gallery, and the report for the client gets put together by hand in the evening.

FotoObra keeps photos by job site and turns them into a clean PDF in a couple of taps.

## What it does

- **Job sites.** Name, address, client.
- **Photos by day.** Straight from the camera or several at once from the gallery.
- **Voice captions.** Tap the mic and say what was done. Russian, Portuguese, Ukrainian or English.
- **PDF report.** Today, last 7 days, all, or custom dates. Tap a photo to leave it out. Your logo and company name in the header. Report language: PT, EN, RU or UA.
- **Send.** Share the PDF straight to WhatsApp, email or Drive.
- **Backup.** One file with everything. Restore on a new phone.
- **Help on the home screen.** How it works, a sample PDF report, photo tips and FAQ.

| Job sites | Photo feed | Report |
|---|---|---|
| ![](docs/screen-objects.png) | ![](docs/screen-feed.png) | ![](docs/screen-report.png) |

## How it works

One HTML file. No framework, no backend, no external libraries.

- **Storage:** IndexedDB. Photos never leave the phone.
- **Photos:** resized on device to 1600 px, plus a small thumbnail for the feed.
- **Voice:** the browser's built-in Web Speech API.
- **PDF:** each page is drawn on a canvas and packed into a PDF by a ~40-line writer. That keeps Cyrillic text working without embedding fonts.
- **Offline:** a service worker caches the app after the first visit.
- **Hosting:** GitHub Pages. Free.

## Install on your phone

1. Open the link above.
2. **iPhone:** Safari → Share → Add to Home Screen.
   **Android:** Chrome → ⋮ → Add to Home screen.
3. Always open it from the icon.

## Good to know

- Data lives only on your phone. Make a backup from Settings once a week.
- Voice captions work best in Chrome on Android. On iPhone you can use the mic on the keyboard.

## Next

- [ ] Draw on photos (arrows, circles)
- [ ] Before / after pairs
- [ ] Share a report as a link

## Credits

Built by Davyd Medvedchuk, with Claude as a coding partner.

## License

[MIT](LICENSE)
