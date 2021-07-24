# T2B5 Theme

## Description

The **T2B5** Theme is for [Grav CMS](http://github.com/getgrav/grav). It includes numerous customisation options, such as navbar styles and web-app settings, as well as comprehensive favicon support. It supports using the following:

* Bootstrap 5.0.2
* Bootswatch 5.0.2
* FontAwesome 5.15.3
* Hover.css 2.3.1
* Animate.css 4.1.1

---

# Installation

### New sites

The recommended way to use the theme is by starting with the [grav-skeleton-t2b5](https://github.com/stom66/grav-skeleton-t2b5) repository. This includes this theme as well as the required pages, sample icons, and plugins.

### Existing sites

To add the theme to an existing site first clone the repository into your `/user/themes` folder:

	git clone https://github.com/stom66/grav-t2b5 /path/to/grav/user/themes/t2b5

To configure your site to use T2B5 you will need to do the following:

* Edit `/user/config/system.yaml` to have the following properties:
    * Set `theme:` setting to `t2b5`.
    * Set `absolute_urls:` setting to `true`.
* Clear the Grav cache. The simplest way to do this is by going to the root Grav directory in Terminal and typing `bin/grav clear-cache`.
* Install the dependencies below
* Add the ICO media type (described below)
* Add the `manifest.json` and `browserconfig.xml` pages (described below)


### Dependencies

The T2B5 theme depends on a number of plugins. If you install via GPM you should be prompted to also install them. 

If you were not prompted to install these automatically you can install them via the terminal with the following command:

    bin/grav install


### Post-install steps

Some additional steps you can take after installing the theme to get the most from it:

* Add `Sitemap: https://example.com/sitemap.xml` to your `robots.txt` file

---

## Customisation

To customise the theme and rebuild the css first do the following:

1) From the terminal `cd` to the theme dir: `cd /path/to/user/themes/t2b5`
2) Run: `npm install`
3) Run: `npm run watch` to trigger the gulp build

* Custom styles can be added and changed in `t2b5/src/scss/custom/_styles.scss`
* Google Fonts can be added and changed in `t2b5/src/scss/custom/_typography.scss`
* The most common Boostrap variables are in `t2b5/src/scss/custom/_variables.scss`

By default the Bootstrap/Bootswatch libraries are included from CDNs and are not included in `theme.css` If you wish to use a customised local Bootstrap style:

1) Disable the CSS CDN includes in the theme options
2) Uncomment the boostrap include statement in `t2b5/src/scss/theme.scss`
3) Run either `npm run watch` or `npm run build` to rebuild the CSS

You may wish to toggle the "Use minified CSS" option in the theme options during development to assist inspection.

### Favicons:

The theme has comprehensive support for favicons and will automatically resize images to a variety of sizes to ensure maxium compatibility with popular browsers and devices.

Upload your favicons to the folder `/user/images/icons` and select them via the Theme config page in the admin panel.

To enable support for ICO files in the theme configuration page add the following to `user/config/media.yaml`:

```
  ico:
    type: file
    thumb: media/thumb-png.png
    mime: image/x-icon
    image: null
```

---

### manifest.json and browserconfig.xml

To enable browserconfig.xml create the file `pages/browserconfig/default.md` with the following contents:
```
---
slug: browserconfig.xml
title: browserconfig.xml
append_url_extension: '.xml'
template_format: xml
template: browserconfig
---
```

To enable manifest.json create the file `pages/manifest/default.md` with the following contents:
```
---
slug: manifest
title: manifest.json
append_url_extension: '.json'
template_format: json
template: manifest
---
```