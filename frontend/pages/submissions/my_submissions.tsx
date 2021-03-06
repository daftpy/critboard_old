import { NextPage } from "next";
import { ReactElement } from "react";
import Link from "next/link";
import BaseLayout from "../../components/BaseLayout";
import styles from "../../styles/MySubmissions.module.css";
import SocialLinks from "../../components/SocialLinks";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

import { getSubmissionRequests, RequestData } from "../../lib/submissions";
import SubmissionRequests from "../../components/SubmissionRequests";


const MySubmissions: NextPage<{ requestData: RequestData[] }> = ({ requestData }) => {
  const requestIcon: ReactElement = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
    </svg>
  )
  const submissionsIcon: ReactElement = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  )
  const timeIcon: ReactElement = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
  return (
    <BaseLayout>
      <div className={`flex justify-evenly ${styles.pageWrapper}`}>
        <div>
          Submissions
        </div>
        <div className="justify-around">
          <SubmissionRequests requestData={requestData} />
          <div className={`text-center ${styles.mySubmissionsHeader}`}>
            <h2 className="flex font-bold text-2xl items-center justify-center">My Submissions <span className="ml-2 text-stone-800">{ submissionsIcon }</span></h2>
            <p className="my-4">
              On this page you will find your submission requests and previous submissions.
              Any submission request on this page can be turned into a file or link 
              submission.
            </p>
            <p className="text-rose-500 font-bold mb-4">
              Premium submissions are gauranteed feedback.
            </p>
            <div className="mt-12">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  )
}

export async function getServerSideProps(): Promise<{ props: { requestData: RequestData[] } }> {
  // fetch existing submission requests
  const requestData = await getSubmissionRequests();

  return {
    props: {
      requestData
    }
  }
}

export default MySubmissions;
