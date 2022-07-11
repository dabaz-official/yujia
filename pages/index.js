import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import { SpeakerphoneIcon, XIcon, ArrowNarrowRightIcon, CurrencyYenIcon, HomeIcon, UserGroupIcon } from '@heroicons/react/outline'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>予家</title>
        <link rel="icon" href="/logo-sm.svg" />
      </Head>

      <Navbar />

      <div className="bg-blue-600 banner">
        <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <span className="flex p-2 rounded-lg bg-blue-800">
                <SpeakerphoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </span>
              <p className="ml-3 font-medium text-white truncate">
                <span className="md:hidden">予家平台已经上线！</span>
                <span className="hidden md:inline">庆祝予家平台上线！</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-container px-4 pt-4 sm:px-6 lg:flex lg:px-8">
          <div className="relative z-20 mx-auto max-w-[40rem] pb-16 pt-16 lg:mx-0 lg:w-[40rem] lg:max-w-none lg:flex-none lg:pb-24 lg:pr-4 lg:pt-20">
            <div className='mt-4 text-3xl font-extrabold tracking-[-0.04em] text-black sm:text-5xl sm:leading-[3.5rem]'>
              予家
            </div>
            <div className='mt-4 text-3xl font-extrabold tracking-[-0.04em] text-blue-600 sm:text-5xl sm:leading-[3.5rem]'>
              老共青租房平台
            </div>
            <div className='mt-4 text-lg leading-7 text-slate-600'>
              低价出租，获得陪伴。为毕业青年提供优质房源，为独居老年人寻找陪伴。
            </div>
            <div className='mt-8 flex gap-4'>
              <Link href="/rent">
                <a className='inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-blue-600 text-white hover:bg-blue-700 transition'>
                  <span>
                    租房之旅
                  </span>
                  <ArrowNarrowRightIcon aria-hidden="true" className='h-5 text-blue-400 sm:inline justify-center text-center pl-2' />
                </a>
              </Link>
              <Link href="/">
                <a className='inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-white/0 text-slate-900 ring-1 ring-slate-900/10 hover:bg-white/25 hover:ring-slate-900/15'>
                  <span>
                    成为房东
                  </span>
                  <ArrowNarrowRightIcon aria-hidden="true" className='h-5 text-black/25 sm:inline justify-center text-center pl-2' />
                </a>
              </Link>
            </div>
          </div>
          <div className='relative z-10 mt-12 hidden select-none lg:flex mb-16'>
            <Image src='/img/hero.jpg' alt='Hero pic' height='360' width='450' className='rounded-2xl' />
          </div>
        </div>
        <div className='relative z-20 sm:z-auto'>
          <div className='mx-auto max-w-container px-4 pb-16 sm:px-6 lg:px-8'>
            <div className='relative mx-auto grid max-w-[40rem] grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3'>
              <div className='flex'>
                <div className='p-0.5'>
                  <HomeIcon className='h-10 w-10 shrink-0 rounded-lg shadow-md shadow-blue-500/[.12] transform-cpu p-2' />
                </div>
                <div className='ml-6'>
                  <h2 className='text-lg font-semibold leading-6 text-slate-900'>
                    优质房源
                  </h2>
                  <p className='mt-2 text-sm leading-6 text-slate-700'>
                    精选优质房源，总有一套适合您。
                  </p>
                </div>
              </div>
              <div className='flex'>
                <div className='p-0.5'>
                  <UserGroupIcon className='h-10 w-10 shrink-0 rounded-lg shadow-md shadow-blue-500/[.12] transform-cpu p-2' />
                </div>
                <div className='ml-6'>
                  <h2 className='text-lg font-semibold leading-6 text-slate-900'>
                    子账号系统
                  </h2>
                  <p className='mt-2 text-sm leading-6 text-slate-700'>
                    老年人的子女可登录子账号进行协助租房。
                  </p>
                </div>
              </div>
              <div className='flex'>
                <div className='p-0.5'>
                  <CurrencyYenIcon className='h-10 w-10 shrink-0 rounded-lg shadow-md shadow-blue-500/[.12] transform-cpu p-2' />
                </div>
                <div className='ml-6'>
                  <h2 className='text-lg font-semibold leading-6 text-slate-900'>
                    价格实惠
                  </h2>
                  <p className='mt-2 text-sm leading-6 text-slate-700'>
                    减少中间商赚差价，租好房更便宜。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
