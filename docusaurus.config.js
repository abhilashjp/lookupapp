// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Lookup Tax",
  tagline: "Global API for VAT validation",
  url: "https://lookuptax.com/",
  baseUrl: "/docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "abhilashjp", // Usually your GitHub org/user name.
  projectName: "lookupapp", // Usually your repo name.

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
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          breadcrumbs: true,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/abhilashjp/lookupapp/blob/main/",
        },
        blog: {
          showReadingTime: true,

          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/abhilashjp/lookupapp/blob/main/",
        },
      /**  googleAnalytics: {
          trackingID: "G-D5YNWHF9Q3",
          anonymizeIP: false,
        },*/
        gtag: {
          trackingID: "G-D5YNWHF9Q3",
          anonymizeIP: false,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: "keywords",
          content: "VAT APIs, Tax guide, Tax invoice, Sales tax",
        },
      ],
      navbar: {
        title: "Lookup Tax",
        logo: {
          alt: "Global API for VAT Validation",
          src: "img/lookuptax-icon.svg",
        },
        items: [
         /** {
            type: "doc",
            docId: "intro",
            position: "right",
            label: "Country guide",
          },*/
          { to: "/category/country-guides", label: "Country guide", position: "right" },
          { to: "/category/explainers", label: "Explainers", position: "right" },
          { to: "/category/einvoicing-guides", label: "Einvoicing", position: "right" },

          { to: "/blog", label: "Blog", position: "right" },
          {
            href: "https://github.com/abhilashjp/lookupapp",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/category/country-guides",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                /**href: "https://stackoverflow.com/questions/tagged/lookuptax",
                **/
                 href: "#",
              },
              {
                label: "Discord",
                href: "#",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/lookuptax",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/abhilashjp/lookupapp/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Lookup, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

