# T2b4 Theme

The **T2b4** Theme is for [Grav CMS](http://github.com/getgrav/grav).  This README.md file should be modified to describe the features, installation, configuration, and general usage of this theme.

## Description

TomSquared Bootstrap Theme

Includes the following:

* Bootstrap 4.6.0
* Bootswatch 4.5.2
* FontAwesome 5.15.3
* Hover.css 2.3.1
* Animate.css 4.1.1

## Customisation

By default the Bootstrap/Bootswatch libraries are included from CDNs and are not included in `theme.css`

If you wish to customise the the theme further then be sure to disable the CSS CDN includes in the theme options and follow the steps below:

1) From the terminal `cd` to the theme dir: `cd /path/to/user/themes/t2b4`
2) Run: `npm install`
3) Run: `npm run watch` to trigger the gulp build
4) Uncomment the boostrap include in `/src/scss/theme.scss`

You may also wish to toggle the "Use minified CSS" option in the theme options.

### Favicons:

The theme has comprehensive support for favicons and will automatically resize images to a variety of sizes to ensure maxium compatibility with popular browsers and devices.

To enable support for ICO files in the theme configuration page add the following to `user/config/media.yaml`:

```
  ico:
    type: file
    thumb: media/thumb-png.png
    mime: image/x-icon
    image: null
```
