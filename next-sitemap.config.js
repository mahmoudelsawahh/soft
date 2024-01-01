/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://deltawy.com/",
  generateRobotsTxt: true,
  exclude: ["/apps.index.xml", "/articles.index.xml", "projects.index.xml", "website.index.xml", "videos.index.xml"], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://deltawy.com/apps.index.xml", // <==== Add here
      "https://deltawy.com/projects.index.xml",
      "https://deltawy.com/videos.index.xml",
      "https://deltawy.com/articles.index.xml",
      "https://deltawy.com/website.index.xml",
      "https://deltawy.com/services.index.xml",
    ],
  },
};
