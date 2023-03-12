import { SiCoinmarketcap, SiHtmlacademy } from 'react-icons/si'
import { FcNeutralTrading } from 'react-icons/fc'
import { BiNews } from 'react-icons/bi'
import { MdPeopleAlt } from 'react-icons/md'
const navlink = [
  {
    name: 'Market',
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
          { name: 'Test', link: '/test' },
        ],
      },
    ],
  },
  {
    name: 'Produk',
    id: 2,
    icon: <SiCoinmarketcap />,
    submenu: true,
    sublinks: [
      {
        head: 'Trading',
        id: 2,
        sublink: [
          { name: 'Jenis Akun', link: '/jenis-akun' },
          { name: 'Akun Demo', link: '/akun-demo' },
          { name: 'Deposit & Withdraw', link: '/deposit-withdraw' },
          { name: 'Komisi & Spread', link: '/komisi-spread' },
          { name: 'Promo', link: '/promo' },
        ],
      },
      {
        head: 'Platform',
        id: 3,
        sublink: [
          { name: 'Web', link: '/web' },
          { name: 'Aplikasi', link: '/aplikasi' },
          { name: 'MetaTrader5', link: '/metatrader' },
        ],
      },
    ],
  },
  {
    name: 'Akademi',
    id: 3,
    icon: <SiHtmlacademy />,
    submenu: true,
    sublinks: [
      {
        head: 'Belajar Trading',
        id: 4,
        sublink: [
          { name: 'Glosarium', link: '/glosarium' },
          { name: 'Video', link: '/video-trading' },
          { name: 'Kelas', link: '/kelas-trading' },
          { name: 'Ebook', link: '/ebook' },
          { name: 'Kalkulator', link: '/kalkulator' },
        ],
      },
    ],
  },
  {
    name: 'Berita dan Analisa',
    id: 4,
    icon: <BiNews />,
    submenu: true,
    sublinks: [
      {
        head: 'Berita',
        id: 5,
        sublink: [{ name: 'Analisa', link: '/berita-dan-analisa' }],
      },
      {
        head: 'Market Update',
        id: 6,
        sublink: [{ name: 'Kalender Ekonomi', link: '/kalender-ekonomi' }],
      },
      {
        head: 'Blog',
        id: 7,
        sublink: [{ name: 'Blog', link: '/blog' }],
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
        ],
      },
      {
        head: 'Partnership',
        id: 9,
        sublink: [{ name: 'Program Partnership', link: '/partnership' }],
      },
    ],
  },
]

export default navlink
