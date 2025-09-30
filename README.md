# SWF USA Website (swf-usa.com)

A static, fast site for the SWF brand in the United States. Deployed on GitHub Pages. No build step required.

## Structure
- `index.html` — Home
- `machines/` — Product lineup overview
- `support/` — Manuals, downloads, FAQs, ticket link
- `dealers/` — Dealer locator with simple JSON + search
- `portal/` — Dealer portal landing (link out to secure portal when ready)
- `contact/` — Contact page
- `css/styles.css` — Small custom CSS
- `js/main.js` — Minor interactivity
- `dealers/dealers.js` — Dealer locator logic
- `dealers/dealers.json` — Editable dealer data
- `CNAME` — Custom domain for GitHub Pages
- `404.html` — Not found page

## Quick Deploy (GitHub Pages)
1. Create a new public repo named `swf-usa-site` under your org.
2. Upload this folder’s contents to the repo root.
3. In the repo settings > Pages, choose `Deploy from a branch`, `main`, `/root`.
4. Add the custom domain `swf-usa.com` and enforce HTTPS.
5. In your DNS, add a `CNAME` record: `swf-usa.com` -> `<your-username>.github.io`.
   - For apex A records, you can instead use GitHub Pages IPs if preferred.

## Dealer Portal Options
GitHub Pages does not support authentication. For a secure dealer portal you can:
- Use Softr with Google Drive assets and gate access by user login.
- Use Cloudflare Access on a subdomain like `portal.swf-usa.com`.
- Host the portal on Netlify with password or SSO.
This landing page links out to whatever secure portal you choose later.

## Editing Dealers
Update `dealers/dealers.json`. Each dealer has: `name`, `address`, `city`, `state`, `zip`, `phone`, `email`, `website`.
The locator supports keyword, state filter, and simple distance-by-zip (optional to wire later).

## Analytics
Drop your GA4 or Tag Manager script in `index.html` just before `</head>`.

