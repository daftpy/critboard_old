import type { NextPage } from 'next';
import { ReactElement } from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import BaseLayout from '../components/baselayout';


import WelcomeBox from '../components/welcomebox';
import HottestSubmissions from '../components/hottestsubmissions';

const Home: NextPage = () => {
  const twitchIcon: ReactElement = (
    <svg role="img" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <title>Twitch</title>
      <path className={styles.twitchIcon} d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
    </svg>
  )
  const youtubeIcon: ReactElement = (
    <svg role="img" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <title>YouTube</title>
      <path className={styles.youtubeIcon} d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  )
  return (
    <BaseLayout>
      <div className={`flex flex-col ${styles.wrapper}`}>
        <div>
          <WelcomeBox />
          <div className={`${styles.socialLinks} mt-12 text-center`}>
            <h3 className='font-bold mb-6'>Feedback Streamed Live</h3>
            <div className='flex hover:drop-shadow-sm flex-wrap justify-around text-sm font-medium'>
              <Link href="#">
                <a>
                  <div className='flex bg-purple-100 rounded-[12px] px-4 py-2 mb-4 items-center'>
                    <div className='mr-2'>{ twitchIcon }</div>
                    <div className='w-fit text-[#9146FF] '>Twitch.tv/UserChannel</div>
                  </div>
                </a>
              </Link>
              <Link href="#">
                <a>
                  <div className='flex bg-red-100 rounded-[12px] px-4 py-2 items-center mb-4'>
                    <div className="mr-2">{ youtubeIcon }</div>
                    <div className='w-fit text-[#FF0000]'>Youtube.com/c/UserChannel</div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className='grow'><HottestSubmissions /></div>
      </div>
    </BaseLayout>
  )
}

export default Home
