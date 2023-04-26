import React from 'react'
import Link from 'next/link'
const faqs = [
  [
    {
      question: 'What is XXX forex app trading platform?',
      answer:
        'Forex app trading is the process of buying and selling currencies on a mobile device using a dedicated trading app.',
    },
    {
      question: 'What are the advantages of using XXX forex trading app?',
      answer:
        'Forex trading apps offer several advantages, including the ability to trade on-the-go, real-time market data, and access to trading tools and resources.',
    },
    {
      question: 'Is XXX forex app trading safe and secure?',
      answer:
        'Yes, forex app trading can be safe and secure as long as you choose a reputable broker with strong security measures in place.',
    },
  ],
  [
    {
      question: 'How do I download XXX forex trading app?',
      answer:
        'You can download a forex trading app from your app store by searching for your brokers app or by visiting their website.',
    },
    {
      question:
        'What are the minimum deposit requirements for XXX forex web trading?',
      answer:
        'Minimum deposit requirements for forex web trading vary by broker, but they typically range from $100 to $500.',
    },
    {
      question:
        'What are the minimum deposit requirements for XXX forex app trading?',
      answer:
        'Minimum deposit requirements for forex app trading vary by broker, but they typically range from $100 to $500.',
    },
  ],
  [
    {
      question:
        'What trading tools and resources are available on XXX forex trading app?',
      answer:
        'Yes, you can trade forex on a tablet or smartwatch using a forex trading app. Simply download the app on your device and start trading.',
    },
    {
      question:
        'How can I make deposits and withdrawals on XXX forex trading app?',
      answer:
        'You can make deposits and withdrawals on XXX forex trading app using a variety of payment methods, including credit/debit cards, bank transfers, and e-wallets.',
    },
    {
      question: 'What are the trading hours for XXX forex app trading?',
      answer:
        'XXX forex app trading is available 24 hours a day, 5 days a week, from Sunday evening to Friday evening (Eastern Standard Time).',
    },
  ],
]

const Faq = () => {
  return (
    <section className='border-b border-gray-200 py-20 sm:py-32 bg-black'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2
            id='faqs-title'
            className='text-3xl font-semibold tracking-tight text-white'
          >
            Frequently asked questions
          </h2>
          <p className='mt-2 text-lg text-slate-six'>
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
                    <h3 className='text-lg font-semibold leading-6 text-white'>
                      {faq.question}
                    </h3>
                    <p className='mt-4 text-sm text-slate-six'>{faq.answer}</p>
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
