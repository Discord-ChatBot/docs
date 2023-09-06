// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'InterChat',
  tagline: 'Connecting Server like never before!',
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: 'https://discord-interchat.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Discord-InterChat', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
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
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Discord-InterChat/docs/tree/main/',
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
      colorMode: {
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
  
      // Replace with your project's social card
      image: 'img/banner.jpg',
      navbar: {
        title: 'InterChat Docs',
        logo: {
          alt: 'InterChat Logo',
          src: 'img/logo.png',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'docSidebar',
          //   position: 'left',
          //   label: 'Docs',
          // },
          {
            href: 'https://github.com/Discord-InterChat/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Links',
            items: [
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/YygGYA6zhX',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Discord-InterChat',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} InterChat.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
