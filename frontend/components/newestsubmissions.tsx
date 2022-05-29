import { NextPage } from "next";
import { ReactElement } from "react";
import styles from "../styles/components/NewestSubmissions.module.css";

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
  return (
    <div>
      <h2 className='border-l-8 border-[#701192] text-2xl font-bold mb-8 pl-3'>Newest Submissions</h2>
      <div className={`flex flex-col text-center text-sm h-full ${styles.submissions}`}>
        <div className='flex flex-col justify-between grow hover:bg-[#F9EDFD] bg-[#FCF1FF] pb-12 px-6 rounded-lg'>
          <div className="flex justify-between text-[#EF4444]">
            <div className="invisible">.</div>
            <div className="flex font-bold text-xs mt-3 px-3 py-1 rounded-full w-fit items-center bg-white">
              <span>6 x</span><span>{ fireIcon }</span>
            </div>
          </div>
          <h4 className='font-bold text-lg text-[#701192] mt-2'>Submission</h4>
          <div className='font-bold text-rose-500 mb-2'>05/20/22</div>
          <div className="text-xs flex justify-center">
            <div className="flex items-center bg-[#701192] text-white rounded-[12px] mb-6 px-4 py-2">
              <span className="mr-2">{ fileIcon }</span><span>File Submission</span>
            </div>
          </div>
          <p className='text-xs px-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur justo arcu. Donec sit amet dictum lorem. Suspendisse potenti. Aenean. </p>
        </div>
        <div className='flex flex-col justify-between grow hover:bg-[#F9EDFD] bg-[#FCF1FF] pb-12 px-6 rounded-lg'>
          <div className="flex justify-between text-[#EF4444]">
            <div className="invisible">.</div>
            <div className="flex font-bold text-xs mt-3 px-3 py-1 rounded-full w-fit items-center bg-white">
              <span>6 x</span><span>{ fireIcon }</span>
            </div>
          </div>
          <h4 className='font-bold text-lg text-[#701192] mt-2'>Submission</h4>
          <div className='font-bold text-rose-500 mb-2'>05/20/22</div>
          <div className="text-xs flex justify-center">
            <div className="flex items-center bg-[#701192] text-white rounded-[12px] mb-6 px-4 py-2">
              <span className="mr-2">{ fileIcon }</span><span>File Submission</span>
            </div>
          </div>
          <p className='text-xs px-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur justo arcu. Donec sit amet dictum lorem. Suspendisse potenti. Aenean. </p>
        </div>
        <div className='flex flex-col justify-between grow hover:bg-[#F9EDFD] bg-[#FCF1FF] mb-6 pb-12 px-6 rounded-lg'>
          <div className="flex justify-between text-[#EF4444]">
            <div className="invisible">.</div>
            <div className="flex font-bold text-xs mt-3 px-3 py-1 rounded-full w-fit items-center bg-white">
              <span>6 x</span><span>{ fireIcon }</span>
            </div>
          </div>
          <h4 className='font-bold text-lg text-[#701192] mt-2'>Submission</h4>
          <div className='font-bold text-rose-500 mb-2'>05/20/22</div>
          <div className="text-xs flex justify-center">
            <div className="flex items-center bg-[#701192] text-white rounded-[12px] mb-6 px-4 py-2">
              <span className="mr-2 px-2">{ fileIcon }</span><span>File Submission</span>
            </div>
          </div>
          <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur justo arcu. Donec sit amet dictum lorem. Suspendisse potenti. Aenean. </p>
        </div>
        <div className='flex flex-col justify-between grow hover:bg-[#F9EDFD] bg-[#FCF1FF] mb-6 pb-12 px-6 rounded-lg'>
          <div className="flex justify-between text-[#EF4444]">
            <div className="invisible">.</div>
            <div className="flex font-bold text-xs mt-3 px-3 py-1 rounded-full w-fit items-center bg-white">
              <span>6 x</span><span>{ fireIcon }</span>
            </div>
          </div>
          <h4 className='font-bold text-lg text-[#701192] mt-2'>Submission</h4>
          <div className='font-bold text-rose-500 mb-2'>05/20/22</div>
          <div className="text-xs flex justify-center">
            <div className="flex items-center bg-[#701192] text-white rounded-[12px] mb-6 px-4 py-2">
              <span className="mr-2">{ fileIcon }</span><span>File Submission</span>
            </div>
          </div>
          <p className='text-xs px-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur justo arcu. Donec sit amet dictum lorem. Suspendisse potenti. Aenean. </p>
        </div>
      </div>
    </div>
  )
}

export default NewestSubmissions;
