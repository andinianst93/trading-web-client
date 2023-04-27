import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'

export function Navigation({ navigation, className }) {
  let router = useRouter()

  return (
    <nav className={clsx('text-base lg:text-sm', className)}>
      <ul role='list' className='space-y-9'>
        {navigation.map((section) => (
          <li key={section.title}>
            <div className='font-display text-xl font-medium text-slate'>
              <Link href={`${section.link}`}> {section.title}</Link>
            </div>
            <ul
              role='list'
              className='mt-2 space-y-2 border-l-2 border-slate lg:mt-4 lg:space-y-4 lg:border-slate'
            >
              {section.links.map((link) => (
                <li key={`${link.href}`} className='relative'>
                  <Link
                    href={`${link.href}`}
                    className={clsx(
                      'block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full',
                      link.href === router.pathname
                        ? 'font-semibold text-blue before:bg-blue'
                        : 'text-slate before:hidden before:bg-slate hover:text-slate hover:before:block'
                    )}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}
