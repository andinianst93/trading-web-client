const footer = [
  {
    id: 1,
    name: 'Quick Links',
    submenu: true,
    sublinks: [
      {
        Head: 'Quick Links',
        sublink: [
          { id: 1, name: 'Tentang Kami', link: '/tentang-kami' },
          { id: 2, name: 'Hubungi Kami', link: '/hubungi-kami' },
          { id: 3, name: 'Web Trading', link: '/web' },
          { id: 4, name: 'Aplikasi Trading', link: '/aplikasi' },
          { id: 7, name: 'MetaTrader5', link: '/metatrader' },
          { id: 5, name: 'Panduan Trading', link: '/panduan-trading' },
          { id: 6, name: 'Tutorial Aplikasi', link: '/tutorial' },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Legal',
    submenu: true,
    sublinks: [
      {
        Head: 'Legal',
        sublink: [
          { id: 1, name: 'Privacy Policy', link: '/privacy-policy' },
          { id: 2, name: 'Terms & Conditions', link: '/terms-and-conditions' },
          { id: 3, name: 'Faq', link: '/faq' },
        ],
      },
    ],
  },
]

export default footer
