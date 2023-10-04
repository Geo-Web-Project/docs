// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Geo Web",
  tagline: "Public Good Augmented Reality Network",
  favicon: "img/logo.png",

  // Set the production url of your site here
  url: "https://your-docusaurus-test-site.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Geo-Web-Project", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Geo Web",
        logo: {
          alt: "Geo Web Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "introSidebar",
            position: "left",
            label: "Introduction",
          },
          {
            type: "docSidebar",
            sidebarId: "gettingStartedSidebar",
            position: "left",
            label: "Getting Started",
          },
          {
            type: "docSidebar",
            sidebarId: "conceptsSidebar",
            position: "left",
            label: "Core Concepts",
          },
          {
            type: "docSidebar",
            sidebarId: "developersSidebar",
            position: "left",
            label: "Developers",
          },
          {
            type: "docSidebar",
            sidebarId: "communitySidebar",
            position: "left",
            label: "Community & Governance",
          },
          {
            href: "https://github.com/Geo-Web-Project",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/Geo-Web-Project",
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: "W1Z56PWRF2",

        // Public API key: it is safe to commit it
        apiKey: "45fa93e80891fdca92934be886d6c430",

        indexName: "geoweb",

        // Optional: see doc section below
        contextualSearch: true,
      },
    }),
};

module.exports = config;
