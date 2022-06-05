import { NextPage } from "next";
import { ReactElement } from "react";
import Link from "next/link";
import BaseLayout from "../../components/baselayout";
import styles from "../../styles/MySubmissions.module.css";
import SocialLinks from "../../components/sociallinks";
import formatDistanceToNow from "date-fns/formatDistanceToNow";


const MySubmissions: NextPage = ({ data }) => {
  const currentTime = Date.now();
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
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
  return (
    <BaseLayout>
      <div className={`flex justify-evenly text-center ${styles.pageWrapper}`}>
        <div>
          Submissions
        </div>
        <div className="justify-around">
          <div className={`bg-rose-500 text-slate-50 ${styles.submissionRequestsBox}`}>
            <h2 className="flex font-bold text-2xl items-center justify-center whitespace-nowrap">Submission Requests <span className="ml-2">{ requestIcon }</span></h2>
            <p className="my-4">Click on any submission request to start the process to submit a file or link for feedback.</p>
            {data.map((submissionRequest) => {
              let date = new Date(submissionRequest.created_at);
              let distance = formatDistanceToNow(date, {addSuffix: true});
              return (
                <Link href="/" key={submissionRequest.id}>
                  <a>
                    <ul className="bg-rose-400 hover:bg-rose-800 pb-6 pt-1 px-4 text-sm rounded-[18px] mt-8">
                      <li className="my-4 flex items-center justify-center">Requested { distance } <span className="ml-2">{ timeIcon }</span></li>
                      <li>id: { submissionRequest.id }</li>
                    </ul>
                  </a>
                </Link>
              )
            })}
          </div>
          <div className={`${styles.mySubmissionsHeader}`}>
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

export async function getServerSideProps() {
  // fetch existing submission requests
  const res = await fetch('http://localhost:8000/submissions/');
  const data = await res.json()

  return { props: { data } }
}

export default MySubmissions;
