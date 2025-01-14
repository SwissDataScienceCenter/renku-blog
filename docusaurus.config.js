// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Renku Blog",
  tagline:
    "Nothing lasts forever - except for sustainable data science done with Renku platform, since 2018.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://blog.renkulab.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  // Include a trailing slash for article pages, which is what GitHub pages does by default.
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "SwissDataScienceCenter", // Usually your GitHub org/user name.
  projectName: "renku-blog", // Usually your repo name.

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
        docs: false,
        blog: {
          routeBasePath: "/",
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/SwissDataScienceCenter/renku-blog/tree/main/",

          blogTitle: "The Renku blog",
          blogDescription:
            "Blog about reproducibility in data science, technical solutions to engineering problems and use-cases of the Renku platform.",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/renku-social-card.png",
      navbar: {
        title: "",
        logo: {
          alt: "Renku Logo",
          src: "img/renku-logo.svg",
        },
        items: [
          { to: "/", label: "Articles", position: "right" },
          { to: "/tags", label: "Tags", position: "right" },
          {
            href: "https://github.com/SwissDataScienceCenter/renku-blog",
            label: "GitHub",
            position: "right",
          },
        ],
        style: "dark",
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Learn",
            items: [
              {
                label: "About Renku",
                href: "https://renkulab.io",
              },
              {
                label: "Documentation",
                href: "https://renku.readthedocs.io/en/stable",
              },
              {
                label: "Get Started",
                href: "https://renku.readthedocs.io/en/stable/tutorials/01_firststeps.html",
              },
              {
                label: "Help",
                href: "https://renkulab.io/help",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Forum",
                href: "https://renku.discourse.group/",
              },
              {
                label: "Chat (Gitter)",
                href: "https://gitter.im/SwissDataScienceCenter/renku",
              },
              {
                label: "GitHub",
                href: "https://github.com/SwissDataScienceCenter/renku",
              },
            ],
          },
          {
            title: "Follow us",
            items: [
              {
                label: "YouTube",
                href: "https://www.youtube.com/channel/UCMF2tBtWU1sKWvtPl_HpI4A",
              },
              {
                label: "Mastodon",
                href: "https://fosstodon.org/@renku",
              },
            ],
          },
          {
            title: "About",
            items: [
              {
                label: "Why Renku?",
                href: "https://renku.readthedocs.io/en/stable/introduction/why.html",
              },
              {
                label: "Who we are?",
                href: "https://datascience.ch/team/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SDSC`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),

  plugins: ["docusaurus-plugin-sass"],
};

module.exports = config;
