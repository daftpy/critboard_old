import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import BaseLayout from '../components/baselayout';


import WelcomeBox from '../components/welcomebox';
import HottestSubmissions from '../components/hottestsubmissions';
import SocialLinks from '../components/sociallinks';
import NewestSubmissions from '../components/newestsubmissions';

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <div className={`flex flex-col ${styles.wrapper}`}>
        <div>
          <div className="mb-20">
            <WelcomeBox />
          </div>
          <div className={`${styles.socialLinksWrapper} mb-4`}>
            <SocialLinks />
          </div>
        </div>
        <div className='grow'>
          <HottestSubmissions />
        </div>
      </div>
      <div className={`${styles.wrapper}`}>
        <NewestSubmissions />
      </div>
    </BaseLayout>
  )
}

export default Home
