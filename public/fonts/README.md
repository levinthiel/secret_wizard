# Fonts Directory

This directory contains self-hosted font files for GDPR/DSGVO compliance.

## Fredoka Font - GDPR/DSGVO Compliant Setup

### Quick Setup (Recommended)

1. Visit: **https://gwfh.mranftl.com/fonts/fredoka**
2. Select the font weights you need (Regular, Medium, SemiBold, Bold)
3. Click "Download @font-face kit"
4. Extract the downloaded files
5. Copy the `.woff2` files to this directory (`public/fonts/`)
6. Rename them to match:
   - `Fredoka-Regular.woff2` (weight: 400)
   - `Fredoka-Medium.woff2` (weight: 500)
   - `Fredoka-SemiBold.woff2` (weight: 600)
   - `Fredoka-Bold.woff2` (weight: 700)

### Alternative Method

1. Visit: **https://fonts.google.com/specimen/Fredoka**
2. Click "Download family"
3. Extract the `.ttf` files
4. Convert to `.woff2` using: **https://cloudconvert.com/ttf-to-woff2**
5. Place the converted files in this directory with the names above

### Why Self-Host?

Self-hosting fonts ensures GDPR/DSGVO compliance by:
- Not sending user IP addresses to Google servers
- Keeping all data transfers within your domain
- Providing better control over font loading and caching

