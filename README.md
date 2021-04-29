# Videwhoa!

![Videowhoa Logo](https://videwhoa.netlify.app/images/logo/videwhoa-logo.svg)
_Videwhoa | Find your favorite Videos_

[![Netlify Status](https://api.netlify.com/api/v1/badges/74e20d93-3f2f-49ec-887e-b3458a3a77a8/deploy-status)](https://app.netlify.com/sites/videwhoa/deploys)

Deployed URL: [videwhoa.netlify.app](https://videwhoa.netlify.app/)

![Videwhoa home](https://videwhoa.netlify.app/images/screenshots/videwhoa-home.png)

## What Worked Well

- Added scroll to top feature that scrolls back to the featured/detail video once a new one is selected
- Added logic that parses the HTML in the title so that insteadd of seeing `&amp;`, the UI properly displays `&`.
- Added custom styling and implemented responsive design
- Created custom logo
- Added CSS `clip-path` to create a unique shape/mask for video thumbnails
- Modified Youtube API function to bring in additional videos
- Displayed channel name alongside featured/detail video
- Used [SVG background generator](https://www.svgbackgrounds.com/#liquid-cheese) to add color scheme to selected background graphic
- Added transitions/animations to additional videos and text links
- Implemented logic for loading "dummy" data from local directory when in development

## What Didn't

- Would have been nice to include additional details about the channel for the featured/detail video (i.e. channel thumbnail)

## Extra Credit

- No additional APIs used (only modified the data returned by the YouTube API)

## Extra Credit with Redux Implementation

- Refactored code to use functional components
- Added redux-thunk for handling API call (thunk viewable in redux actions)

## Screenshots

Parsed HTML Entities  
![Parsed HTML Entities](https://videwhoa.netlify.app/images/screenshots/parsed-html-entities.png)

Custom Logo  
![Custom Logo](https://videwhoa.netlify.app/images/logo/videwhoa-logo-white.svg)

Favicon  
![Custom Favicon](https://videwhoa.netlify.app/favicon.png)

Social Card (for URL unfurls)  
![Custom Favicon](https://videwhoa.netlify.app/images/social-card/videwhoa-social-card.png)

Social Card Preview  
![Social Card Preview](https://videwhoa.netlify.app/images/social-card/social-card-preview.png)
