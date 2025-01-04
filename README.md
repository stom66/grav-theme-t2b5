# T2B5 Theme

## Description

The **T2B5** Theme is for [Grav CMS](http://github.com/getgrav/grav). It includes numerous customisation options, such as navbar styles and web-app settings, as well as comprehensive favicon support. It supports using the following:

-   Bootstrap 5.3.3
-   Bootswatch 5.3.3
-   FontAwesome Free 6.7.2
-   Hover.css 2.3.2
-   Animate.css 4.1.1
-   GLightbox 3.3.0

---

# Installation

### New sites

The recommended way to use the theme is by starting with the [grav-skeleton-t2b5](https://github.com/stom66/grav-skeleton-t2b5) repository. This includes this theme as well as the required pages, sample icons, and plugins.

#### Existing sites

It is possible to add the theme to an existing site, but it's a bit more complicated than just installing the theme. See the [Manual Installation](/INSTALL.md) instructions if you must use this approach.

### Post-install steps

Some additional steps you can take after installing the theme to get the most from it:

-   Update `/user/config/site.yaml`, via _Admin -> Configuration -> Site_
-   Customise `/user/config/themes/t2b5.yaml` via _Admin -> Themes -> T2B5_
-   Choose an optional Bootswatch theme in the settings
-   Add `Sitemap: https://example.com/sitemap.xml` to your `robots.txt` file
-   Upload your [favicons](#favicons)

---

### Favicons:

The theme has comprehensive support for favicons and will automatically resize images to a variety of sizes to ensure maxium compatibility with popular browsers and devices.

Upload your favicons to the folder `/user/images/icons` and select them via the Theme config page in the admin panel.

You should upload the following icons:

-   ICO version, with sizes 16x16, 32x32, 48x48
-   SVG version (for manifest)
-   PNG version, 512x512 recommended

These icons will be used for the browser favicon, as well as app icons and shortcut icons.

## Advanced CSS Customisation

To customise the theme and rebuild the css first do the following:

1. From the terminal `cd` to the theme dir: `cd /path/to/user/themes/t2b5`
2. Run: `npm install`
3. Make your changes to the scss files in the `src/scss` folder
4. Run: `npm run build` to trigger the vite build, or `npm run watch`

-   Custom styles can be added and changed in `t2b5/src/scss/custom/_styles.scss`
-   Google Fonts can be added and changed in `t2b5/src/scss/custom/_typography.scss`
-   The most common Boostrap variables are in `t2b5/src/scss/custom/_variables.scss`

By default the Bootstrap/Bootswatch libraries are included from CDNs and are not included in `theme.css` If you wish to use a customised local Bootstrap style:

1. Disable the CSS CDN includes in the theme options
2. Uncomment the boostrap include statement in `t2b5/src/scss/theme.scss`

You may wish to toggle the "Use minified CSS" option in the theme options during development to assist inspection.

---
