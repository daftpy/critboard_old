import type { NextPage } from 'next'
import { ReactElement } from 'react';
import styles from '../styles/Home.module.css';
import BaseLayout from '../components/baselayout';

import WelcomeBox from '../components/welcomebox';
import HottestSubmissions from '../components/hottestsubmissions';

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <div className={`flex flex-col ${styles.wrapper}`}>
        <WelcomeBox />
        <HottestSubmissions />
      </div>
    </BaseLayout>
  )
}

export default Home
