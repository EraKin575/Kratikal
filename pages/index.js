import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import LoginPage from '@/components/LoginPage'
import Overview from '@/components/Overview'
import WhyKratikal from '@/components/WhyKratikal'
import WhyChooseUs from '@/components/WhyChooseUs'
import Benefits from '@/components/Benefits'
import CodeReview from '@/components/CodeReview'
import FAQ from '@/components/FAQ'
import ContactUs from '@/components/ContactUs'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='w-[100%] overflow-x-hidden'>
      <LoginPage/>
      <Overview/>
      <WhyKratikal/>
      <WhyChooseUs/>
      <Benefits/>
      <CodeReview/>
      <FAQ/>
      <ContactUs/>


    </div>
  )
}
