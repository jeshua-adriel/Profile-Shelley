# Shelley Margaux A. Reyes: Singer Profile Website

A star-themed, single-page profile website for professional singer Shelley Margaux A. Reyes. It has a shiny night sky of twinkling stars with a glowing sun and moon, and shows her bio, press and event highlights, music, accomplishments, bands, and contact details.

Built with **React** and **Vite**, using plain CSS and no extra libraries.

## Features

- **Opening animation:** colored clouds, a burst of stars, and her name popping in letter by letter. A portal then opens to reveal the site. Visitors can skip it by clicking, pressing `Esc`, or using the Skip button.
- **Animated star background:** twinkling stars with the occasional shooting star.
- **Interactive sun and moon:** they float and glow, and on hover or tap they grow and reveal a vivid image (the moon turns from a crescent into a full moon).
- **Animated profile photo:** it zooms in on scroll, floats, has a spinning glow ring and sparkles, and tilts in 3D with the mouse.
- **Bottom corner animations:** music notes rise on the left, and sound ripples with an equalizer play on the right.
- **Accomplishments timeline** with circular photos beside it that pop in, float, and show a caption on hover or tap.
- **Music section:** genres, a list of songs with links, and an embedded Spotify playlist.
- **Bands section:** a card and photos for each band.
- **Mobile friendly:** hamburger menu, layouts for tablets and phones, and support for phone notches.
- **Accessible:** respects the "reduce motion" setting (the intro is skipped and animations are switched off), and works with the keyboard.

## Sections

1. **Hero:** name, title, tagline, and "Listen now" / "Book a show" buttons
2. **About:** photo and bio
3. **In the zone:** links to highlights of events, gigs, and competitions
4. **Music:** genres, songs, and Spotify player
5. **Accomplishments:** timeline and photos
6. **Bands**
7. **Contact:** email, phone, and social links

## Getting started

You need [Node.js](https://nodejs.org) installed.

```bash
npm install        # install dependencies
npm run dev        # start the site locally
npm run build      # create the production build in /dist
npm run preview    # preview the production build
```

## Project structure

```
shelley-site/
├── public/                  # images and other static files
├── src/
│   ├── components/
│   │   ├── intro.jsx        # opening animation
│   │   ├── corners.jsx      # bottom-left notes and bottom-right equalizer
│   │   ├── starField.jsx    # twinkling star background
│   │   ├── section.jsx      # reusable section wrapper (heading + anchor)
│   │   ├── portrait.jsx     # animated profile photo
│   │   └── photoOrbs.jsx    # circular photos beside the timeline
│   ├── data/
│   │   └── siteData.js      # all of the site's content (edit this)
│   ├── App.jsx              # page layout and sections
│   ├── App.css              # all styles
│   └── main.jsx
├── index.html
└── package.json
```

> **File names:** imports are case-sensitive on most hosting services (including Netlify). Make sure each file name matches its import exactly, for example `./components/starField` needs a file named `starField.jsx`.

## Updating the content

Almost everything is edited in **`src/data/siteData.js`**, so you rarely need to touch the components.

| Export | What it controls |
| --- | --- |
| `profile` | name, title, tagline, photo, and bio paragraphs |
| `press` | the "In the zone" links (title, description, and link) |
| `music` | genres, song list, and the Spotify playlist ID |
| `accomplishments` | the timeline entries (newest first) |
| `accomplishmentPhotos` | up to 6 circular photos beside the timeline |
| `bands` | band name, role, years, description, and link |
| `contact` | email, phone, and social links |
| `heroImages` | images shown when hovering the sun and moon (leave `""` for the built-in artwork) |

### Spotify playlist

Copy the ID from the playlist's share link (the part after `/playlist/`, without anything after a `?`):

```js
spotifyPlaylistId: "1h1S0D3GIXBCs4Jkl8vptn",
```

### Images

Put all images in the `public/` folder and refer to them with a leading `/`.

| File | Used for |
| --- | --- |
| `shelley.jpg` | profile photo (portrait photos work best) |
| `sun.jpg`, `moon.jpg` | hover images for the sun and moon |
| `moonserenade1.jpg`, `moonserenade2.jpg` | Moon Serenade photos |
| `echovibe1.jpg`, `echovibe2.jpg` | Echo Vibes photos |
| `acc-*.jpg` | circular accomplishment photos (names are set in `accomplishmentPhotos`) |

The band photos are matched by band name in `App.jsx`, so if you rename a band in `siteData.js`, update the name there too. Square photos with the subject near the center work best for the circles.

## Customizing the look

- **Colors:** change the variables at the top of `src/App.css` (`--night`, `--violet`, `--moon`, `--sun`, `--rose`).
- **Fonts:** the site uses *Cormorant Garamond* for headings and *Outfit* for text, loaded from Google Fonts in `index.html`.
- **Opening animation length:** change `PLAY_MS` at the top of `src/components/intro.jsx` (in milliseconds).
- **Photo circle layout:** the size and position of each circle is set in the `.photo-orb:nth-child(...)` rules in `App.css`.

## Mobile support

`index.html` needs this viewport line in the `<head>`:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
```

The layout changes at 900px (tablet), 760px (phone), 600px and 380px (small phones), and for phones turned sideways.

## Deploying (Netlify)

1. Push the project to GitHub.
2. On Netlify, choose **Add new site → Import an existing project**.
3. Use these settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Deploy. Netlify rebuilds the site every time you push changes.

## Tech

- [React](https://react.dev) and [Vite](https://vite.dev)
- Plain CSS (animations use CSS plus a small canvas for the star field)
- [Google Fonts](https://fonts.google.com): Cormorant Garamond and Outfit
- Spotify embedded player
