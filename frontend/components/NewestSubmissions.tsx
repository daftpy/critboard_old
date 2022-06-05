import { NextPage } from "next";
import Link from "next/link";
import { ReactElement } from "react";
import styles from "../styles/components/NewestSubmissions.module.css";
import SubmissionPreview from "./SubmissionPreview";

const NewestSubmissions: NextPage = () => {
  const fileIcon: ReactElement = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
    </svg>
  )
  const fireIcon: ReactElement = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
    </svg>
  )
  const userIcon: ReactElement = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
    </svg>
  )
  return (
    <div>
      <h2 className='border-l-8 border-[#8C15B7] text-2xl font-bold mb-8 pl-3'>Newest Submissions</h2>
      <div className={`flex flex-col text-center text-sm h-full ${styles.submissions}`}>
        <Link href="#">
          <a>
            <SubmissionPreview />
          </a>
        </Link>
        <Link href="#">
          <a>
            <SubmissionPreview />
          </a>
        </Link>
        <Link href="#">
          <a>
            <SubmissionPreview />
          </a>
        </Link>
        <Link href="#">
          <a>
            <SubmissionPreview />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default NewestSubmissions;
