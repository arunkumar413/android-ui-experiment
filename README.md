# App Icon Library

A responsive React app for browsing a curated collection of app icons. Icons are grouped by their labels, so an app with multiple labels appears in each relevant group.

## Features

- Browse app icons in a responsive grid, including a four-column layout on mobile.
- Expand and collapse label groups using the accordion headings.
- Filter the collection with the sticky group menu. Each button shows the number of apps in that group.
- Search apps by name or label. Focusing search switches the selected group to **All** so search covers the complete collection.
- View the app count for **All** and for each group.

## Run locally

Requirements: Node.js and npm.

Install dependencies and start the development server:

```sh
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

### Open on a phone over Wi-Fi

Connect your phone and computer to the same trusted Wi-Fi network, then start Vite so it accepts connections from the local network:

```sh
npm run dev -- --host 0.0.0.0
```

On macOS, find the computer's local IP address with:

```sh
ipconfig getifaddr en0
```

Open `http://<computer-ip-address>:5173` in the phone's browser, replacing the placeholder with the IP address. Your firewall may ask permission for the connection.

## Available scripts

```sh
npm run dev      # Start the Vite development server
npm run build    # Create a production build in dist/
npm run preview  # Preview the production build locally
npm run lint     # Run Oxlint
```
