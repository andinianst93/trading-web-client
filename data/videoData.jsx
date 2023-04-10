const video = [
  {
    category: 'Tingkat Pemula',
    link: 'pemula',
    id: 1,
    sublinks: [
      {
        id: 1,
        sublink: [
          { name: 'Apa Itu Forex?', link: 'apa-itu-forex' },
          {
            name: 'Mengapa Pilih Trading Forex?',
            link: 'mengapa-pilih-trading-forex',
          },
        ],
      },
    ],
  },
  {
    category: 'Tingkat Menengah',
    link: 'menengah',
    id: 2,
    sublinks: [
      {
        id: 2,
        sublink: [
          { name: 'Analisis Fundamental', link: 'analisis-fundamental' },
          { name: 'Analisis Teknikal', link: 'analisis-teknikal' },
          { name: 'Analisis Sentimen', link: 'analisis-sentimen' },
        ],
      },
      {
        id: 3,
        sublink: [{ name: 'day trading', link: 'day-trading' }],
      },
    ],
  },
  {
    category: 'Tingkat Mahir',
    link: 'mahir',
    id: 3,
    sublinks: [
      {
        id: 4,
        sublink: [{ name: 'manajemen risiko', link: 'manajemen-risiko' }],
      },
    ],
  },
]

export default video
