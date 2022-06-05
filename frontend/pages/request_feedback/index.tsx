import { NextPage } from "next";
import { ReactElement } from "react";
import BaseLayout from "../../components/baselayout";
import axios from 'axios';
import { useRouter } from "next/router";
import styles from "../../styles/RequestFeedback.module.css";

const RequestFeedback: NextPage = () => {
  const guidelinesIcon: ReactElement = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
    </svg>
  )
  let router = useRouter();
  const postSubmissionRequest = () => {
    axios.post('http://localhost:8000/submissions/', {
      'private': false
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
        router.push('/my_submissions');
      })
  }
  return (
    <BaseLayout>
      <div className={`flex grow ${styles.pageWrapper}`}>
        <div className={`text-center p-8 text-slate-100 bg-[#701192] ${styles.communityGuidelines}`}>
          <div className="flex items-center justify-center mb-8">
            <h2 className="font-bold text-3xl">Community Guidelines</h2>
            <div className="ml-3">{ guidelinesIcon }</div>
          </div>
          <div className="text-lg">
            <p className="my-4">
              Lorem ipsum dolor sit amet, nonummy ligula volutpat hac integer nonummy. Suspendisse ultricies, congue etiam 
              tellus, erat libero, nulla eleifend, mauris pellentesque. Suspendisse integer praesent vel, integer gravida 
              mauris, fringilla vehicula lacinia non
            </p>
            <ol className="ml-4 my-3">
              <li className="my-2">Rule</li>
              <li className="my-2">Rule</li>
              <li className="my-2">Rule</li>
              <li className="my-2">Rule</li>
            </ol>
            <p className="my-4">
              Lorem ipsum dolor sit amet, nonummy ligula volutpat hac integer nonummy. Suspendisse ultricies, congue etiam 
              tellus, erat libero, nulla eleifend, mauris pellentesque.
            </p>
          </div>
        </div>
        <div className={`${styles.submissionSelection}`}>
          <div className="text-center bg-sky-50 py-6 px-4">
            <h2 className="font-bold text-2xl">Premium Submission</h2>
            <p className="my-4">
              Premium submissions <span className="text-emerald-600">are guaranteed</span> creator feedback. You can watch this feedback live on stream.
            </p>
            <button className="text-xs bg-green-400 hover:bg-green-500 px-6 py-1.5 text-white rounded-[12px] font-bold text-center hover:text-emerald-50 hover:drop-shadow">
              Premium Submission Request
            </button>
          </div>
          <div className="text-center">
            <h2 className="font-bold text-2xl">Free Submission</h2>
            <p className="my-4">
              Free submissions are <span className="text-red-500">not gauranteed</span> creator feedback but are still
              open for community response.
            </p>
            <button onClick={postSubmissionRequest} className="text-xs bg-green-400 hover:bg-green-500 px-6 py-1.5 text-white rounded-[12px] font-bold text-center hover:text-emerald-50 hover:drop-shadow">
              Free Submission Request
            </button>
          </div>
        </div>
      </div>
    </BaseLayout>
  )
}

export default RequestFeedback;
