import React from 'react'
import Link from 'next/link'
const faqs = [
  [
    {
      question: 'What is MetaTrader 5?',
      answer:
        'MetaTrader 5 is a popular trading platform used by traders to analyze financial markets, place orders, and manage their trading accounts.',
    },
    {
      question: 'What are the main features of MetaTrader 5?',
      answer:
        'The main features of MetaTrader 5 include advanced charting tools, multiple order types, automated trading through expert advisors, market depth analysis, and a wide range of technical indicators.',
    },
    {
      question: 'Can I use MetaTrader 5 on my mobile device?',
      answer:
        'Yes, MetaTrader 5 is available for both Android and iOS devices, allowing you to trade from anywhere at any time.',
    },
  ],
  [
    {
      question: 'Can I trade multiple assets on MetaTrader 5?',
      answer:
        'Yes, you can trade a wide range of assets on MetaTrader 5, including forex, stocks, commodities, and cryptocurrencies.',
    },
    {
      question: 'How do I open a trading account on MetaTrader 5?',
      answer:
        'You can open a trading account on MetaTrader 5 through a licensed broker that supports the platform. Simply download and install the platform, select your broker, and follow the account opening instructions.',
    },
    {
      question: 'How do I fund my trading account on MetaTrader 5?',
      answer:
        'You can fund your trading account on MetaTrader 5 through various payment methods, including credit/debit cards, bank transfers, and e-wallets.',
    },
  ],
  [
    {
      question: 'Can I customize the MetaTrader 5 interface?',
      answer:
        'Yes, MetaTrader 5 allows you to customize the interface to your preferences, including the color scheme, chart settings, and layout.',
    },
    {
      question: 'What is the difference between MetaTrader 4 and MetaTrader 5?',
      answer:
        'MetaTrader 5 is the successor to MetaTrader 4, with improved features such as a more advanced trading system, enhanced charting tools, and multi-currency strategy tester.',
    },
    {
      question: 'Can I use MetaTrader 5 for automated trading?',
      answer:
        'Yes, you can use MetaTrader 5 for automated trading by creating and running expert advisors (EAs) that execute trades based on pre-set criteria.',
    },
  ],
]

const Faq = () => {
  return (
    <section className='border-t border-b border-gray-200 py-20 sm:py-32'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2
            id='faqs-title'
            className='text-3xl font-medium tracking-tight text-gray-900'
          >
            Frequently asked questions
          </h2>
          <p className='mt-2 text-lg text-gray-600'>
            If you have anything else you want to ask,{' '}
            <Link href='/hubungi-kami' className='text-gray-900 underline'>
              reach out to us
            </Link>
            .
          </p>
        </div>
        <ul
          role='list'
          className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3'
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role='list' className='space-y-10'>
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className='text-lg font-semibold leading-6 text-gray-900'>
                      {faq.question}
                    </h3>
                    <p className='mt-4 text-sm text-gray-700'>{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Faq
