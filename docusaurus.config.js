// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Terrarium Docs',
  tagline: 'Documenting Terrarium\' latest and greatest mods',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.terrarium.earth',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'terrarium-earth', // Usually your GitHub org/user name.
  projectName: 'project-odyssey', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/proj-odyssey.png',
      navbar: {
        title: 'Terrarium',
        logo: {
          alt: 'Terrarium logo',
          src: 'img/terrarium.png',
        },
        items: [
          {to: '/docs/cadmus/intro', label: 'Cadmus', position: 'left'},
          {to: '/docs/prometheus/intro', label: 'Prometheus', position: 'left'},
          {to: '/docs/heracles/intro', label: 'Heracles', position: 'left'},
          {to: '/docs/hermes/intro', label: 'Hermes', position: 'left'},
          {to: '/docs/argonauts/intro', label: 'Argonauts', position: 'left'},
          {to: '/docs/odysseus/intro', label: 'Odysseus', position: 'left'},
          {
            href: 'https://github.com/terrarium-earth',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Mods',
            items: [
              {
                label: 'Cadmus',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Terrarium, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
    }),
};

module.exports = config;
