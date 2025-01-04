# T2B5 Theme

## Manual Installation to an Existing Site

It is possible to add the theme to an existing site, but it's a bit more complicated than using the Skeleton as a starting point.

If you must use this approach:

1.  Clone the repository into your `/user/themes` folder:

    ```
    git clone https://github.com/stom66/grav-theme-t2b5 user/themes/t2b5
    ```

1.  Configure your site to use T2B5:

    -   Edit `/user/config/system.yaml` to have the following properties:
        -   `theme: t2b5`
        -   `absolute_urls: true`

1.  Clear the Grav cache by running from terminal:

    ```
    bin/grav clear-cache
    ```

1.  Install the dependencies by running from terminal:

    ```
    bin/grav install
    ```

1.  Add support for the ICO media type by adding the following to `user/config/media.yaml`:

    ```
    ico:
      type: file
      thumb: media/thumb-png.png
      mime: image/x-icon
      image: null
    ```

1.  Add the file `pages/browserconfig/default.md` with the following contents:

    ```
    ---
    slug: browserconfig.xml
    title: browserconfig.xml
    append_url_extension: '.xml'
    template_format: xml
    template: browserconfig
    ---
    ```

1.  Add the file `pages/manifest/default.md` with the following contents:

    ```
    ---
    slug: manifest
    title: manifest.json
    append_url_extension: '.json'
    template_format: json
    template: manifest
    ---
    ```
