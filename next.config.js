/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
  },
};

const withTM = require("next-transpile-modules")([
  "@fullcalendar/common",
  "@babel/preset-react",
  "@fullcalendar/common",
  "@fullcalendar/daygrid",
  "@fullcalendar/interaction",
  "@fullcalendar/react",
  "@fullcalendar/timegrid",
  "@fullcalendar/google-calendar",
]);

const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins(
  [
    withTM,
    [
      optimizedImages,
      {
        handleImages: ["jpeg", "png", "svg", "jpg", "ico"],
      },
    ],
    // your other plugins here
  ],
  nextConfig
);
