import React from 'react'
import Link from 'next/link'
const faqs = [
  [
    {
      question: 'Is XXX forex web trading safe and secure?',
      answer:
        'Yes, forex web trading can be safe and secure as long as you choose a reputable broker with strong security measures in place.',
    },
    {
      question: 'How do I open an account for forex web trading?',
      answer:
        'To open an account for forex web trading, you will need to choose a broker, provide your personal information, and make a deposit.',
    },
  ],
  [
    {
      question:
        'What are the minimum deposit requirements for forex web trading?',
      answer:
        'Minimum deposit requirements for forex web trading vary by broker, but they typically range from $100 to $500.',
    },
    {
      question:
        'How can I make deposits and withdrawals on a forex web trading platform?',
      answer:
        'You can make deposits and withdrawals on a forex web trading platform using a variety of payment methods, including credit/debit cards, bank transfers, and e-wallets.',
    },
  ],
  [
    {
      question:
        'What trading tools and resources are available on a forex web trading platform?',
      answer:
        'Forex web trading platforms offer a range of trading tools and resources, such as real-time charts, news and analysis, technical indicators, and trading signals.',
    },

    {
      question:
        'Can I trade forex on a mobile device using a web-based trading platform?',
      answer:
        'Yes, you can trade forex on a mobile device using a web-based trading platform. Simply log in to your account on your mobile browser and start trading.',
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
            className='text-3xl font-medium tracking-tight text-white'
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
