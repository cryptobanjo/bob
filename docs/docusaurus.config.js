// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const GITHUB_LINK = 'https://github.com/bob-collective/bob';
const LANDING_PAGE = 'https://bob.interlay.io';
const DOCS_PAGE = 'https://build.interlay.io';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BOB',
  tagline: 'Building on Bitcoin',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: DOCS_PAGE,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            `${GITHUB_LINK}/tree/master/docs/`,
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
      image: 'img/bob-social-card.png',
      navbar: {
        logo: {
          alt: 'BOB Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo-light.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'learnSidebar',
            position: 'left',
            label: 'Learn',
          },
          {
            type: 'docSidebar',
            sidebarId: 'buildSidebar',
            position: 'left',
            label: 'Build',
          },
          {
            href: 'https://github.com/interlay/bob',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/interlay',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/interlayHQ',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: GITHUB_LINK,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Distributed Crafts.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      }
    }),

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
};

module.exports = config;
