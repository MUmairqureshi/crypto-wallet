import Image from 'next/image'
import { Inter } from 'next/font/google'

import  {Hero} from '../components/Hero.jsx'
import Nav from '../components/header.jsx'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div > 
     <Hero/>   

 
    </div>
  )
}
