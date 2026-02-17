# Kruger National Park Animal Trip Tracker

A lightweight app for tracking animals you saw in Kruger National Park on each trip.

## Features

- Expanded mammal checklist to cover the full app mammal catalogue for Kruger-style trip tracking.
- Checkbox per animal to mark if seen.
- Multi-trip support: create, select, and delete trips.
- Sightings are saved in your browser's `localStorage` so you can return later and review what you saw on each trip.
- Search and category filtering.
- Every animal card includes a wildlife photo URL generated per-animal, with a local fallback image if the network image fails.
- Android-friendly PWA setup with `manifest.webmanifest` + service worker so the app can be installed to Android home screen and used offline for the app shell.

## Android install

1. Open the app URL in Chrome on Android.
2. Tap the browser menu (`⋮`) and choose **Add to Home screen** / **Install app**.
3. Launch from your home screen as a standalone app.

## Run locally

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.
