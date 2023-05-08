import React from 'react'
import Link from 'next/link'
const faqs = [
  [
    {
      question: 'What is a forex real account?',
      answer:
        'A forex real account is a trading account that allows you to trade in the real forex market with real money. This account gives you access to various trading instruments and features that you can use to trade currencies, commodities, indices, and more.',
    },
    {
      question: 'How do I open a forex real account?',
      answer:
        'To open a forex real account, you need to choose a reputable forex broker, fill in your personal information, verify your identity, fund your account, and start trading. Follow our step-by-step guide above for more details.',
    },
  ],
  [
    {
      question: 'How much money do I need to open a forex real account?',
      answer:
        'The minimum deposit requirements for forex real accounts vary depending on the broker and account type. Some brokers may require a minimum deposit of $100, while others may require $1,000 or more. Be sure to check the minimum deposit requirements before opening your account.',
    },
    {
      question: 'What documents do I need to open a forex real account?',
      answer:
        'To comply with anti-money laundering regulations, most brokers will require you to provide a copy of your passport or national ID card, as well as a recent utility bill or bank statement to verify your identity and address.',
    },
  ],
  [
    {
      question:
        'What is the difference between a forex demo account and a forex real account?',
      answer:
        'A forex demo account allows you to practice trading in a simulated trading environment using virtual money, whereas a forex real account allows you to trade with real money in the live forex market. ',
    },
    {
      question:
        'Can I switch from a forex demo account to a forex real account?',
      answer:
        'Yes, you can switch from a forex demo account to a forex real account. To switch to a real account, you will need to open a new account with a forex broker, fill in your personal information, verify your identity, and fund your account with real money.',
    },
  ],
]

const Faq = () => {
  return (
    <section className='border-b border-gray-200 py-20 sm:py-32'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2
            id='faqs-title'
            className='text-3xl font-medium tracking-tight text-black'
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
                    <h3 className='text-lg font-semibold leading-6 text-black'>
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
