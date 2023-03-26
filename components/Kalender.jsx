import Script from 'next/script'
export default function Kalendermq() {
  return (
    <>
      <div
        id='economicCalendarWidget'
        style={{ width: '100%', height: '800px' }}
      >
        <iframe
          scrolling='no'
          allowtransparency='true'
          frameborder='0'
          width='100%'
          height='800'
          src='https://www.tradays.com/en/economic-calendar/widget?mode=2&amp;'
        ></iframe>
      </div>
      <Script
        type='text/javascript'
        src='https://c.mql5.com/js/widgets/calendar/widget.js?6'
        nonce=''
      ></Script>
    </>
  )
}
