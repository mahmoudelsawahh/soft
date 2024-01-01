/** @type {import('next').NextConfig} */
// const isProd = process.env.NODE_ENV !== "production";

const nextConfig = {
  // async headers() {
  //   return [
  //     {
  //       source: "/",
  //       headers: [
  //         {
  //           key: "x-custom-header",
  //           value: "my custom header value",
  //         },
  //         {
  //           key: "x-another-custom-header",
  //           value: "my other custom header value",
  //         },
  //       ],
  //     },
  //   ];
  // },
  i18n: {
    locales: ["ar"],
    defaultLocale: "ar",
  },
  // assetPrefix: isProd ? "http://localhost:3000/" : undefined,

  reactStrictMode: false,
  swcMinify: true,
  images: {
    minimumCacheTTL: 60,
    deviceSizes: [
      256,
      320,
      492,
      512,
      640,
      768,
      896,
      1024,
      1152,
      1280,
      1408,
      1536,
      1664,
      1792,
      1920,
      2048,
      2176,
      2304,
      2432,
      2560,
      2688,
      2944,
    ],
    imageSizes: [32, 64, 96, 112, 128, 144, 160, 176, 192, 240],
    // formats: ["image/webp" ],
    domains: [
      "your-stock.com",
      "souq.deltawy.com",
      // "apps.mohamed-ibrahiem.com",
      "deltawy-soft.com",
      "192.168.0.201",
      "www.hyperpay.com",
      "deltawy.com",
      "delta.deltawy.com",
    ],
  },
};

module.exports = nextConfig;
