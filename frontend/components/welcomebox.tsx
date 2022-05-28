import { NextPage } from "next";
import { ReactElement } from "react";
import styles from "../styles/components/WelcomeBox.module.css";

const WelcomeBox: NextPage = () => {
  const heartIcon: ReactElement = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
    </svg>
  )
  let requestIcon: ReactElement = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
    </svg>
  );
  return (
    <div className={`bg-slate-100 px-12 py-8 text-stone-800 ${styles.welcomeBox}`}>
      <div className='flex whitespace-nowrap'>
        <h2 className='text-2xl font-bold mb-2 mr-1'>Creative Feedback</h2>
        <span className='ml-1'>{ heartIcon }</span>
      </div>
      <div className='text-stone-700 text-sm'>
        <p className='my-3'>Welcome to Critboardv2</p>
        <p className='my-3'>Critboard makes it easy for content creators to interact with their audience and give them critical feedback on their music, videos, and art.</p>
        <div className="flex justify-between text-sm items-center font-medium mt-8">
          <div className='mr-4'>Submissions are <span className='text-green-400 font-bold'>open</span></div>
          <a href="#">
            <div className="flex items-center text-xs bg-green-400 px-6 py-1.5 text-white rounded-[24px] font-bold text-center hover:text-emerald-50 hover:shadow">
              <div>Request Feedback</div>
              <div className='ml-2'>{ requestIcon }</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default WelcomeBox;