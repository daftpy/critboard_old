import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import BaseLayout from '../components/baselayout';

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <p>Welcome to Critboardv2</p>
    </BaseLayout>
  )
}

export default Home
