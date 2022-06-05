import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import BaseLayout from '../components/BaseLayout';
import WelcomeBox from '../components/WelcomeBox';
import HottestSubmissions from '../components/HottestSubmissions';
import SocialLinks from '../components/SocialLinks';
import NewestSubmissions from '../components/NewestSubmissions';

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <div className={`flex flex-col ${styles.wrapper}`}>
        <div className='flex flex-col justify-between'>
          <div className='mb-12'>
            <WelcomeBox />
          </div>
          <div className={`${styles.socialLinksWrapper}`}>
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
