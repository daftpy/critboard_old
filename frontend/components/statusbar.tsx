import { NextPage } from "next";
import { ReactElement } from "react";
import styles from '../styles/components/StatusBar.module.css';

const StatusBar: NextPage = () => {
  let activeIcon: ReactElement = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
    </svg>
  );
  let loginIcon: ReactElement = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
    </svg>
  )
  return (
    <div id={styles.StatusBar} className="flex p-5 items-center text-sm">
      <div className={styles.inputField}>
        <input className="rounded-full px-4 py-2" type="text" placeholder="Search Submissions" />
      </div>
      <div id={styles.Wrapper} className="flex items-center grow justify-around">
        <div className="flex justify-around items-center">
          <div className="flex items-center text-white text-xs font-bold px-4 py-2 rounded-lg bg-green-400">
            <span className="mr-2">{ activeIcon }</span><span>Submissions Active</span>
          </div>
        </div>
        <div className="flex items-center px-4">
          <span className="mr-2">{ loginIcon }</span><span>Login</span>
        </div>
      </div>
    </div>
  )
}

export default StatusBar;