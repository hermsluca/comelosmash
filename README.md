# Com'è lo smash?

This project is a simple "come lo smash" button site.

It was made for fun because the way the meme sounds and the overall vibe of it were funny to us. The site is just a playful homage to that meme and is not meant to carry any harmful or negative intent.

## Note about the original meme

This site is not meant to insult or attack anyone. It was created only because the original Instagram post at https://www.instagram.com/paninoteca_da_daniele/ and the associated meme style felt funny and memorable.

There is no bad intention behind this project. It is simply a lighthearted, humorous tribute to a meme that amused us. ❤️

Original website: https://comelosmash.it

## Cloudflare Worker support

This project now includes a basic Cloudflare Worker setup so it can be deployed as a static site with Workers.

### Deploy

1. Install Wrangler if needed:
   `npm install`
2. Log in to Cloudflare:
   `npx wrangler login`
3. Deploy:
   `npm run deploy`

The site assets live in the public folder and the Worker entrypoint is in src/index.js.
