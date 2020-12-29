module.exports = {
  title: 'Durmon Minecraft',
  tagline: 'Welcome to Durmon Minecraft',
  url: 'https://durmon.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'dwightdurmon', // Usually your GitHub org/user name.
  projectName: 'DurmonMC2', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Durmon Minecraft',
      logo: {
        alt: 'Durmon Minecraft Logo',
        src: 'img/server-icon.png',
      },
      items: [
        {to: 'blog', label: 'Blog', position: 'left'},
        {to: 'serveradmins', label: 'Server Admins', position: 'left'},
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        
        {
          href: 'minecraft://minecraft.durmon.org',
          label: 'Server IP: minecraft.durmon.org',
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
              label: 'Rules',
              to: 'docs/rules/',
            },
            {
              label: 'Connecting to the Server',
              to: 'docs/connecting/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discordapp.com/users/212012107401527296/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Durmon Minecraft. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
