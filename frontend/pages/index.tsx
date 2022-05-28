import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import BaseLayout from '../components/baselayout';


import WelcomeBox from '../components/welcomebox';
import HottestSubmissions from '../components/hottestsubmissions';
import SocialLinks from '../components/sociallinks';

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <div className={`flex flex-col ${styles.wrapper}`}>
        <div>
          <WelcomeBox />
          <SocialLinks />
        </div>
        <div className='grow'><HottestSubmissions /></div>
      </div>
      <div className={`${styles.wrapper}`}>
        <h2 className='border-l-8 border-[#AFD2E9] text-2xl font-bold pl-3'>Newest Submissions</h2>
      </div>
    </BaseLayout>
  )
}

export default Home
