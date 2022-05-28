import { NextPage } from "next";
import { ReactElement } from "react";
import styles from "../styles/components/HottestSubmissions.module.css";

const HottestSubmissions: NextPage = () => {
  const fireIcon: ReactElement = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
    </svg>
  )
  return (
    <div className={`bg-rose-500 grow px-12 py-8 text-center text-stone-50 ${styles.hottestBox}`}>
      <div className='flex justify-center whitespace-nowrap'>
        <h2 className='text-2xl font-bold mb-2 mr-1'>Hottest Submissions</h2>
        <span className='ml-1'>{ fireIcon }</span>
      </div>
      <div className='text-stone-100 text-sm'>
        <p className='my-3'>Hottest submission Hottest submission Hottest submission Hottest submission Hottest submission Hottest submission Hottest submission Hottest submission Hottest submission </p>
      </div>
    </div>
  )
}

export default HottestSubmissions;