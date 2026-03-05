# Srav Health — Website

Integrative Practitioner Growth

## Stack
Pure HTML · CSS · Vanilla JS · No build step · Deploy anywhere

## Pages
| File | Purpose |
|------|---------|
| `/` | Homepage |
| `/ayurveda` | Ayurveda modality page |
| `/how-we-work` | Process + offering |
| `/apply` | AI agent application |
| `styles.css` | Global styles |
| `main.js` | Shared JS |

## Deploy to Vercel
1. Push repo to GitHub
2. vercel.com → New Project → Import repo
3. Framework Preset: **Other**
4. No build command needed → Deploy

## Deploy to Cloudflare Pages
1. Push repo to GitHub
2. Cloudflare Dashboard → Pages → Create Project
3. Connect GitHub repo
4. Build command: leave empty
5. Output directory: `/`
6. Deploy

## Add Your Photo
In `/`, replace the About image placeholder div with:
```html
<img src="priyanka.jpg" alt="Priyanka Aggarwal" style="width:100%;height:100%;object-fit:cover;">
```
And add `priyanka.jpg` to the root folder.

## Brand Colors
- Forest Green: `#2D5A3D`
- Midnight Navy: `#1B2A4A`  
- Gold: `#C4A35A`
- Ivory: `#F5F0E8`
