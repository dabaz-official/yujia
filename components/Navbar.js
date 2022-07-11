import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  CollectionIcon,
  HomeIcon,
  MenuIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  ArrowsExpandIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import Image from 'next/image'

const functions = [
  {
    name: '租房',
    description: '寻找优质房源。',
    href: '/rent',
    icon: HomeIcon,
  },
  {
    name: '发布房源',
    description: '成为房东。',
    href: '#',
    icon: CollectionIcon,
  },
]
const resources = [
  {
    name: '了解予家',
    description: '阅览常见问题以了解予家。',
    href: '/faqs',
    icon: QuestionMarkCircleIcon,
  },
  {
    name: '关爱模式',
    description: '即将上线。',
    href: '#',
    icon: ArrowsExpandIcon,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Popover className="relative bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-slate-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <a>
                <span className="sr-only">予家</span>
                <Image src="/img/logo-sm.svg" alt="Yujia" width="45" height="45" />
              </a>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
              <span className="sr-only">打开菜单</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">

            <Link href="/rent">
              <a className="text-base font-bold text-slate-500 hover:text-slate-900">
                租房
              </a>
            </Link>
            
            <Link href="#">
              <a className="text-base font-bold text-slate-500 hover:text-slate-900">
                发布房源
              </a>
            </Link>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-slate-900' : 'text-slate-500',
                      'group bg-white rounded-md inline-flex items-center text-base font-bold hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                    )}
                  >
                    <span>更多</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-slate-600' : 'text-slate-400',
                        'ml-2 h-5 w-5 group-hover:text-slate-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <Link href={item.href}>
                              <a
                                key={item.name}
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-slate-50"
                              >
                                <item.icon className="flex-shrink-0 h-6 w-6 text-blue-600" aria-hidden="true" />
                                <div className="ml-4">
                                  <p className="text-base text-slate-900">{item.name}</p>
                                  <p className="mt-1 text-sm font-medium text-slate-500">{item.description}</p>
                                </div>
                              </a>
                            </Link>
                            
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link href="/sign-in">
              <a className="whitespace-nowrap text-base font-bold text-slate-500 hover:text-slate-900">
                登录
              </a>
            </Link>
            
            <Link href="/sign-up">
              <a className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-bold text-white bg-blue-600 hover:bg-blue-700"
              >
                注册
              </a>
            </Link>
            
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-slate-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Image src="/img/logo-sm.svg" alt="yujia" height="40" width="40" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {functions.map((item) => (
                    <Link href={item.href}>
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-slate-50"
                      >
                        <item.icon className="flex-shrink-0 h-6 w-6 text-blue-600" aria-hidden="true" />
                        <span className="ml-3 text-base font-medium text-slate-900">{item.name}</span>
                      </a>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {resources.map((item) => (
                  <Link href={item.href}>
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-slate-900 hover:text-slate-700"
                    >
                      {item.name}
                    </a>
                  </Link>
                ))}
              </div>
              <div>
                <Link href="/sign-up">
                  <a
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                  >
                    注册
                  </a>
                </Link>
                <p className="mt-6 text-center text-base font-medium text-slate-500">
                  已有账户?{' '}
                  <Link href="/sign-in">
                    <a href="/sign-in" className="text-blue-600 hover:text-blue-500">
                      登录
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}