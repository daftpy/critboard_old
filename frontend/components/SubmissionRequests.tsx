import { ReactElement } from "react";
import Link from "next/link";
import { RequestData } from "../lib/submissions";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import styles from "../styles/components/SubmissionRequests.module.css";

const SubmissionRequests: React.FC<{requestData: RequestData[]}> = ({requestData}) => {
  const timeIcon: ReactElement = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
  const requestIcon: ReactElement = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
    </svg>
  )
  return (
    <div className={`bg-rose-500 text-slate-50 ${styles.submissionRequestsBox}`}>
      <h2 className="flex font-bold text-2xl items-center justify-center whitespace-nowrap">Submission Requests <span className="ml-2">{ requestIcon }</span></h2>
      <p className="my-4">Click on any submission request to start the process to submit a file or link for feedback.</p>
      {requestData.map((submissionRequest) => {
        let date = new Date(submissionRequest.created_at);
        let distance = formatDistanceToNow(date, {addSuffix: true});
        return (
          <Link href={`/submissions/request?id=${submissionRequest.id}`} key={submissionRequest.id}>
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
  )
}

export default SubmissionRequests;
