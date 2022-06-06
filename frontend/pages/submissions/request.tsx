import { NextPage } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { ReactElement, useEffect, useState } from "react";
import BaseLayout from "../../components/BaseLayout";
import styles from "../../styles/RequestForm.module.css";

import { getSubmissionRequests, RequestData } from "../../lib/submissions";
import SubmissionRequests from "../../components/SubmissionRequests";

const RequestForm: NextPage<{ requestData: RequestData[] }> = ({ requestData }) => {
  /*
    We are looking for a submission request ID. If we don't receive one
    we get the users submissionRequests if they exist. If they don't, we 
    direct the user to request one.
  */
  const router = useRouter();
  const params: ParsedUrlQuery = router.query;
  // icons
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
  const backIcon: ReactElement = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
    </svg>
  )
  // tailwind styles
  const containerStyle = "flex items-center flex-col min-h-full grow justify-center px-[10%] py-12";
  const headingStyle = "font-bold text-3xl text-center";
  const submissionTypeButton = "flex flex-col items-center font-light bg-green-500 hover:bg-green-400 py-8 px-10 rounded-[12px] text-xl text-slate-50 hover:drop-shadow"

  // state for submission_type selection to control div visibility
  const [submissionType, setType] = useState<React.SetStateAction<string | null>>(null);

  useEffect(() => {
    const FileForm: HTMLElement = document.getElementById("FileForm")!;
    const LinkForm: HTMLElement = document.getElementById("LinkForm")!;
    const TypeSelection: HTMLElement = document.getElementById("TypeSelection")!;

    if (submissionType == null) {
      TypeSelection.classList.remove("hidden", styles.formClose);
      FileForm.classList.remove(styles.formOpen);
      LinkForm.classList.remove(styles.formOpen);
    } else if (submissionType == "FileForm") {
      setTimeout(function() {
        TypeSelection.classList.add("hidden");
        FileForm.classList.add(styles.formOpen);
      }, 800);
      TypeSelection.classList.add(styles.formClose);
    } else if (submissionType == "LinkForm") {
      setTimeout(function() {
        TypeSelection.classList.add("hidden");
        LinkForm.classList.add(styles.formOpen);
      }, 800);
      TypeSelection.classList.add(styles.formClose);
    }
  }, [submissionType])


  const submissionSelection = (e: React.MouseEvent) => {
    setType(e.currentTarget.getAttribute("data-selection"));
  }

  const selectionNull = (e: React.MouseEvent) => {
    setType(null);
  }
  
  return (
    <BaseLayout>
      { params.id // If the user passses a request ID.
        ? (
          <div className={containerStyle}>
            <div id="TypeSelection" className={styles.submissionTypeSelection}>
              <h1 className={headingStyle}>Choose Submission Type</h1>
              <p className="my-4 text-center">
                Choose between a link submission or file submission. 
                <span className="underline ml-1">
                  Supported files are .mp3, .mp4, .jpeg, and .png
                </span>
              </p>
              <p className="mb-4 text-red-500 font-bold text-center">This selection cannot be undone after completion.</p>
              <div className="my-12 flex justify-around">
                <button data-selection="FileForm" onClick={submissionSelection} className={`mr-3 ${submissionTypeButton}`}>
                  <span className="w-min">File Submission</span>
                  <span className="my-5">{ uploadIcon }</span>
                </button>
                <button data-selection="LinkForm" onClick={submissionSelection} className={`ml-4 ${submissionTypeButton}`}>
                  <span className="w-min">Link Submission</span>
                  <span className="my-5">{ linkIcon }</span>
                </button>
              </div>
            </div>
            <div id="FileForm" className={`w-1/2 ${styles.submissionForm}`}>
              <div className="flex justify-between mb-6">
                <button onClick={selectionNull}>{ backIcon } Back</button>
                <div className="invisible">x</div>
              </div>
              <div className="flex flex-col">
                <h2 className="text-center font-bold text-2xl">File Submission</h2>
                <span className="underline text-center my-2 text-red-600">
                  Supported files are .mp3, .mp4, .jpeg, and .png
                </span>
                <label className="ml-4 mb-2">Title</label>
                <input className="rounded-full px-4 py-2 border-slate-600 border-[1px] active:border-0 focus:border-0" type="text" placeholder="Submission Title" />
                <label className="ml-4 mb-2 mt-8">Description</label>
                <textarea className="rounded-[10px] px-4 py-2 border-slate-600 border-[1px] active:border-0 focus:border-0" rows={6} placeholder="Submission Description" />
              </div>
            </div>
            <div id="LinkForm" className={`w-1/2 ${styles.submissionForm}`}>
              <div className="flex justify-between mb-6">
                <button onClick={selectionNull}>{ backIcon } Back</button>
                <div className="invisible">x</div>
              </div>
              <div className="flex flex-col">
                <h2 className="text-center font-bold text-2xl">Link Submission</h2>
                <label className="ml-4 mb-2">Title</label>
                <input className="rounded-full px-4 py-2 border-slate-600 border-2 active:border-0 focus:border-0" type="text" placeholder="Submission Title" />
                <label className="ml-4 mb-2 mt-8">Description</label>
                <textarea className="rounded-[10px] px-4 py-2 border-slate-600 border-2 active:border-0 focus:border-0" rows={10} placeholder="Submission Description" />
              </div>
            </div>
          </div>
        )
        // If the user doesn't pass a request ID but has active submission requests.
        : !params.id && requestData.length != 0
        ? (
          <div className={containerStyle}>
            <h1 className={headingStyle}>Choose a Submission Request</h1>
            <p className="mt-4 mb-8">You did not select an open submission request. Please select one below.</p>
            <SubmissionRequests requestData={requestData} />
          </div>
        )
        // If the user doesn't pass a request ID and has no submission requests.
        : (
          <div className={containerStyle}>
            <p>Nothing</p>
          </div>
        )
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
