/* eslint-env node */
'use strict';

module.exports = function(/* environment, appConfig */) {
  // See https://github.com/san650/ember-web-app#documentation for a list of
  // supported properties

  return {
    name: "10 Week Workout Plan",
    short_name: "10weeks",
    description: "Undertake this ten week training course",
    start_url: "/",
    display: "standalone",
    background_color: "#1f253d",
    theme_color: "#394165",
    icons: [
      {
        src: "/assets/images/icons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/assets/images/icons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      },
      {
        src: "/assets/images/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        targets: ['apple']
      }
    ],
    apple: {
      statusBarStyle: 'black-translucent'
    }
  }
}
