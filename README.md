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

# Installation

### Terminal

The easiest way to install the theme is via the terminal. Simply clone this repository by doing the following:

	git clone https://github.com/stom66/grav-t2b4 /path/to/grav/user/themes/t2bootstrap

### Zip method

To install this theme via FTP or file browser:

1) Download the zip version of this repository
2) Unzip it under `/path/to/grav/user/themes`
3) Rename the folder to `t2b4`

You should now have all the theme files under

    /path/to/grav/user/themes/t2bootstrap4

### Dependencies

The t2b4 theme depends on the following plugins. If you install via GPM, you should be prompted to also install these plugins. 

* [Error](https://github.com/getgrav/grav-theme-error) 
* [Problems](https://github.com/getgrav/grav-plugin-problems)
* [Sitemap](https://github.com/getgrav/grav-plugin-sitemap)

If you were not prompted to install these automatically you can install them via the terminal with the following commands:

    bin/gpm install error
    bin/gpm install problems
    bin/gpm install sitemap

## Customisation

To customise the theme and rebuild the css first do the following:

1) From the terminal `cd` to the theme dir: `cd /path/to/user/themes/t2b4`
2) Run: `npm install`
3) Run: `npm run watch` to trigger the gulp build

*) Custom styles can be added and changed in `t2b4/src/scss/custom/_styles.scss`
*) Google Fonts can be added and changed in `t2b4/src/scss/custom/_typography.scss`
*) The most common Boostrap variables are in `t2b4/src/scss/custom/_variables.scss`

By default the Bootstrap/Bootswatch libraries are included from CDNs and are not included in `theme.css` If you wish to use a customised local Bootstrap style:

1) Disable the CSS CDN includes in the theme options
2) Uncomment the boostrap include statement in `t2b4/src/scss/theme.scss`
3) Run either `npm run watch` or `npm run build` to rebuild the CSS

You may wish to toggle the "Use minified CSS" option in the theme options during development to assist inspection.

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
