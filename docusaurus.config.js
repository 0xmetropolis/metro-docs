// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Metropolis Docs',
  tagline: 'Search and protect on-chain permissions.',
  url: 'https://docs.metropolis.space',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '0xmetropolis', // Usually your GitHub org/user name.
  projectName: 'metro-docs', // Usually your repo name.

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
          sidebarCollapsed: false,

          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/0xmetropolis/metro-docs/blob/main/',
        },
        blog: {
          routeBasePath: 'changelog',
          blogSidebarTitle: 'Changelog',
          blogSidebarCount: 'ALL',
          showReadingTime: true,
          // Remove this to remove the "edit this page" links.
          // editUrl:'https://github.com/0xmetropolis/metro-docs/blob/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-7RJY1JVFTE',
          anonymizeIP: true,
        },
      }),
    ],
  ],
  plugins: ['plugin-image-zoom'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */

    {
      image: '/img/openGraphLogo.png',
      imageZoom: {
        // CSS selector to apply the plugin to, defaults to '.markdown img'. If you don't want an image to be zoomable wrap it in an <em> tag
        selector: '.markdown :not(em) > img',
        // Optional medium-zoom options
        // see: https://www.npmjs.com/package/medium-zoom#options
        options: {
          margin: 50,
          background: '#fff',
          scrollOffset: 0,
          //container: '#zoom-container',
          //template: '#zoom-template',
        },
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },
      /*announcementBar: {
        id: 'support_us',
        content:
          'Welcome to Metropolis! Check to see if you <a target="_blank" rel="noopener noreferrer" href="https://pod.xyz">qualified for our Build Permit airdrop!</a>',
        backgroundColor: '#C4BFF2',
        textColor: '#110F1F',
        isCloseable: true,
      },*/
      navbar: {
        logo: {
          alt: 'Metropolis Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: `/`,
            label: 'Metropolis',
            position: 'left',
            className: 'navbarMetropolis',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'Home',
          },
          { to: '/docs/sdk/sdk-overview', label: 'SDK', position: 'right' },
          {
            to: '/docs/smart-contracts/metropolis-contracts',
            label: 'Contracts',
            position: 'right',
          },
          { to: '/changelog', label: 'Changelog', position: 'right' },
          /**       {to: '/docs/guides/pod-blueprints/', label:'Pod Blueprints', position: 'right'}, */
          {
            href: 'https://github.com/0xmetropolis',
            className: 'pseudo-icon github-icon',
            position: 'right',
          },
          {
            type: 'html',
            className: 'launchAppNavButton',
            value:
              '<a href="https://pod.xyz/" target="_blank" class="launchAppNavButton">Launch App</a>',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discordapp.gg/metropolis',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/0xMetropolis',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Changelog',
                to: '/changelog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/0xmetropolis',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Sonar Labs Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    },
};

module.exports = config;
