## Happy Birthday Mini-Site

Use this template to ship a quick, heartfelt birthday page similar to the `birth-want-to-say` project in [calebman/girlfriend-gift-collection](https://github.com/calebman/girlfriend-gift-collection/tree/master/birth-want-to-say).

### Project layout

```
birthday-site/
├── index.html        # Main page markup
├── style.css         # Theme, layout, and animations
├── script.js         # Smooth scroll + audio toggle
└── assets
    ├── images        # Drop photos here
    └── audio         # Drop an MP3 here
```

### Add your photos

1. Place JPG/PNG files inside `assets/images`.
2. Update the `<img src="">` paths inside the carousel in `index.html` so they reference your filenames (no captions needed).
3. Keep each image under ~1‑2 MB for fast loads (Preview on macOS or Paint/Photos app can resize).

### Add your background song

1. Copy an MP3 you have the rights to into `assets/audio` (example: `our-song.mp3`).
2. Update the `<source>` tag inside `index.html` to match the filename.
3. If browsers block autoplay, press the “Play our song” button to start playback.

### Customize text & colors

- Hero heading, paragraphs, and card content live in `index.html`.
- Global colors and fonts live in `:root` at the top of `style.css`.
- Update the timeline list (`<ol class="timeline">`) to match your story.

### Run locally

Double-click `index.html` to open it in your browser, or use a simple static server:

```sh
cd birthday-site
npx serve .
```

### Deploy to GitHub Pages

1. Create a new GitHub repository (e.g., `happy-birthday`).
2. Copy the entire `birthday-site` folder contents into the repo and commit:

   ```sh
   git add .
   git commit -m "Add birthday site"
   git push origin main
   ```

3. In your repo, open **Settings → Pages**.
4. Under **Source**, choose the `main` branch and the `/ (root)` folder, then **Save**.
5. Wait ~1 minute; GitHub Pages will give you a URL like `https://your-username.github.io/happy-birthday/`.
6. Share the link! You can also map a custom domain via the same Pages screen if you own one.

### Optional upgrades

- Add a countdown using `Date` math in `script.js`.
- Embed a YouTube playlist instead of local audio.
- Drop in confetti or particle effects via Canvas if you need extra sparkle.

Enjoy surprising your favorite human! 💖

