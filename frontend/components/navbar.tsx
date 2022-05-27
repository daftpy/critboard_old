import { NextPage } from "next";
import Link from "next/link";
import { ReactElement, useEffect, useState } from "react";
import styles from '../styles/components/Navbar.module.css';

const Navbar: NextPage = () => {
  let requestIcon: ReactElement = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
    </svg>
  );
  let submissionsIcon: ReactElement = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
    </svg>
  );
  let searchIcon: ReactElement = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
  let menuIcon: ReactElement = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
  let closeIcon: ReactElement = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
  const [visibility, setVisibility] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0); // Used to avoid animating on component mount


  // Toggles the navbar visibility
  const toggleMenu = () => {
    if (visibility === false) {
      setVisibility(!visibility);
    } else if (visibility === true) {
      setVisibility(!visibility);
    }
  }

  // Animates the navbar depedent on the visibility state
  useEffect(() => {
    let menu: HTMLElement = document.getElementById("Navigation")!;
    if (visibility) {
      menu.classList.add(styles.animateSlideOut);
      setTimeout(function() {
        menu.classList.remove(styles.navHidden, styles.animateSlideOut);
      }, 500);      
    } else if (!visibility && count != 0) {
      menu.classList.add(styles.animateSlideIn);
      setTimeout(function() {
        menu.classList.add(styles.navHidden);
        menu.classList.remove(styles.animateSlideIn);
      }, 500);    
    }
    let newCount: number = count + 1;
    setCount(newCount);
  }, [visibility]);

  return (
    <div id={styles.Navbar}>
      <div>
        <div id={styles.Brand} className="text-3xl font-bold text-indigo-500 mt-5 text-center">
          <Link href='/'>
            <a>
              Cirtboard
            </a>
          </Link>
        </div>
        <span id="NavButton" onClick={toggleMenu} className={`absolute right-9 top-7 text-slate-400 hover:text-slate-500 ${styles.menuIcon}`}>
          { visibility === false && 
            <a href="#">{ menuIcon }</a>
          }
          { visibility === true &&
            <a href="#">{ closeIcon }</a>
          }
        </span>
      </div>
      <div id="Navigation" className={`${styles.navigation} ${styles.navHidden}`}>
        <ul>
          <li>
            <Link href='#'>
              <div className="flex flex-col items-center text-xs"><span className="mb-1">{ requestIcon }</span><a>Request Feedback</a></div>
            </Link>
          </li>
          <li>
            <Link href='#'>
              <div className="flex flex-col items-center text-xs"><span className="mb-1">{ submissionsIcon }</span><a>My Submissions</a></div>
            </Link>
          </li>
          <li>
            <Link href='#'>
              <div className="flex flex-col items-center text-xs"><span className="mb-1">{ searchIcon }</span><a>Advanced Search</a></div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;