import { SiCoinmarketcap, SiHtmlacademy } from 'react-icons/si'
import { FcNeutralTrading } from 'react-icons/fc'
import { BiNews } from 'react-icons/bi'
import { MdPeopleAlt } from 'react-icons/md'
const navlink = [
  {
    name: 'Trading',
    id: 1,
    icon: <FcNeutralTrading />,
    submenu: true,
    sublinks: [
      {
        head: 'Market',
        id: 1,
        sublink: [
          { name: 'Forex', link: '/forex' },
          { name: 'Komoditas', link: '/komoditas' },
          { name: 'Indeks', link: '/indeks' },
          { name: 'Saham', link: '/saham' },
        ],
      },
      {
        head: 'Akun',
        id: 3,
        sublink: [
          { name: 'Jenis Akun', link: '/jenis-akun' },
          { name: 'Akun Demo', link: '/akun-demo' },
          { name: 'Akun Live', link: '/akun-live' },
        ],
      },

      {
        head: 'Informasi',
        id: 5,
        sublink: [
          { name: 'Deposit & Penarikan', link: '/deposit-withdraw' },
          { name: 'Komisi & Spread', link: '/komisi-spread' },
          { name: 'Kalkulator Profit', link: '/kalkulator' },
          { name: 'Promosi', link: '/promosi' },
        ],
      },
    ],
  },
  {
    name: 'Platform',
    id: 2,
    icon: <SiCoinmarketcap />,
    submenu: true,
    sublinks: [
      {
        head: 'Platform Trading',
        id: 1,
        sublink: [
          { name: 'MetaTrader 5', link: '/metatrader-5' },
          { name: 'Aplikasi Trading', link: '/aplikasi-trading' },
          { name: 'Web Trading', link: '/web-trading' },
          { name: 'Perbandingan', link: '/perbandingan' },
        ],
      },
    ],
  },

  {
    name: 'Berita dan Analisa',
    id: 2,
    icon: <BiNews />,
    submenu: true,
    sublinks: [
      {
        head: 'Berita dan Analisa',
        id: 5,
        sublink: [
          { name: 'Berita', link: '/berita' },
          { name: 'Analisa', link: '/analisa' },
        ],
      },
      {
        head: 'Market Update',
        id: 6,
        sublink: [{ name: 'Kalender Ekonomi', link: '/kalender-ekonomi' }],
      },
    ],
  },
  {
    name: 'Edukasi',
    id: 3,
    icon: <SiHtmlacademy />,
    submenu: true,
    sublinks: [
      {
        head: 'Belajar Trading',
        id: 4,
        sublink: [
          { name: 'Blog', link: '/blog' },
          { name: 'Tutorial Aplikasi', link: '/tutorial' },
          { name: 'Panduan Trading', link: '/panduan-trading' },
          { name: 'Kamus', link: '/kamus' },
          { name: 'Ebook', link: '/ebook' },
        ],
      },
    ],
  },
  {
    name: 'Perusahaan',
    id: 5,
    icon: <MdPeopleAlt />,
    submenu: true,
    sublinks: [
      {
        head: 'About',
        id: 8,
        sublink: [
          { name: 'Tentang Kami', link: '/tentang-kami' },
          { name: 'Hubungi Kami', link: '/hubungi-kami' },
          { name: 'Press Room', link: '/press-room' },
          { name: 'Karir', link: '/karir' },
          { name: 'partnership', link: '/partnership' },
        ],
      },
    ],
  },
]

export default navlink
