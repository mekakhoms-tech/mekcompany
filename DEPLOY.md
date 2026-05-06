# MEK Imports-Exports — GoDaddy deployment

## What's in the zip
`mek-website-godaddy-upload.zip` contains everything that should sit inside `public_html/` on your GoDaddy hosting:

```
index.html              ← homepage (single-page site, all data inline)
favicon.ico             ← browser tab icon
DEPLOY.md               ← this file (optional, can be ignored on the server)
assets/
  logo.png              ← MEK logo (1200×1200 transparent PNG)
  slogan-white.png      ← transparent-background slogan, white text
  favicon.png           ← high-res favicon (256×256)
  apple-touch-icon.png  ← icon when added to iOS/Android home screens
```

The product catalogue is now embedded directly inside `index.html` — no separate JSON file is needed and the site works when opened from a phone, a memory stick or local hard drive in addition to GoDaddy.

## Step-by-step upload to GoDaddy
1. Log into GoDaddy → **My Products** → next to your `meklaos.com` hosting plan click **Manage**.
2. In the cPanel dashboard open **File Manager**.
3. Open the `public_html` folder.
4. (Recommended) If there's an existing default `index.html` from GoDaddy, delete or rename it first.
5. Click **Upload** and drag in the `mek-website-godaddy-upload.zip` file.
6. Once uploaded, right-click the zip in File Manager → **Extract** → confirm extraction into `public_html/`.
7. Visit https://www.meklaos.com — you should see the new site.

## SSL / HTTPS
GoDaddy normally provisions a free SSL via the cPanel **SSL/TLS Status** page. Click **Run AutoSSL** if your domain still shows as not secure.

## Editing later
- All copy, colours, brand info and product data live inside `index.html`.
- Brand and product data are inline JS arrays near the bottom of `index.html` (search for `const PRODUCTS =` and `const BRANDS =`).
- Brand colours are defined as CSS variables near the top of `index.html` under `:root { --dark-green … }`.

## Re-generating the product catalogue
If you receive an updated SKU spreadsheet, ask Claude to regenerate the embedded `PRODUCTS` array from it — the script reads the *Catalog All Bland* sheet and groups products by brand and category.

## Adding real product photography or brand logos
To swap the typography brand cards for real logos:
1. Drop logo PNGs into `assets/brands/` (e.g. `assets/brands/jinro.png`).
2. In `index.html`, search for `class="brand-mark"` in the brand-card template inside the script and replace `${initials}` with `<img src="./assets/brands/${name.toLowerCase().replace(/[^a-z]/g,'')}.png" />`.

The same pattern works for product images.
