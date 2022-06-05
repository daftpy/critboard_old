import { NextPage } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { ReactElement } from "react";
import BaseLayout from "../../components/BaseLayout";
import styles from "../../styles/RequestForm.module.css";

import { getSubmissionRequests, RequestData } from "../../lib/submissions";
import Link from "next/link";
import SubmissionRequests from "../../components/SubmissionRequests";

const RequestForm: NextPage<{ requestData: RequestData[] }> = ({ requestData }) => {
  const router = useRouter();
  /*
    We are looking for a submission request ID. If we don't receive one
    we get the users submissionRequests if they exist. If they don't, we 
    direct the user to request one.
  */
  const params: ParsedUrlQuery = router.query;
  const submissionTypeButton = "flex flex-col items-center font-light bg-green-500 hover:bg-green-400 py-8 px-10 rounded-[12px] text-xl text-slate-50 hover:drop-shadow"
  const uploadIcon: ReactElement = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
    </svg>
  )
  const linkIcon: ReactElement = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  )
  const containerStyle = "flex items-center flex-col min-h-full grow justify-center px-[10%] py-12";
  const headingStyle = "font-bold text-3xl text-center";
  console.log(requestData);
  return (
    <BaseLayout>
      { params.id &&
        <div className={containerStyle}>
          <h1 className={headingStyle}>Choose Submission Type</h1>
          <p className="my-4 text-center">
            Choose between a link submission or file submission. 
            <span className="underline ml-1">
              Supported files are .mp3, .mp4, .jpeg, and .png
            </span>
          </p>
          <p className="mb-4 text-red-500 font-bold text-center">This selection cannot be undone after completion.</p>
          <div className="my-12 flex justify-around w-1/2 max-w-[500px]">
            <button className={`mr-3 ${submissionTypeButton}`}>
              <span className="w-min">File Submission</span>
              <span className="my-5">{ uploadIcon }</span>
            </button>
            <button className={`ml-4 ${submissionTypeButton}`}>
              <span className="w-min">Link Submission</span>
              <span className="my-5">{ linkIcon }</span>
            </button>
          </div>
        </div>
      }
      {
        !params.id && requestData &&
        <div className={containerStyle}>
          <h1 className={headingStyle}>Choose a Submission Request</h1>
          <p className="mt-4 mb-8">You did not select an open submission request. Please select one below.</p>
          <SubmissionRequests requestData={requestData} />
        </div>
      }
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

export default RequestForm;
