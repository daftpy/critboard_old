import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/components/BaseLayout.module.css";
import Navbar from './Navbar';
import StatusBar from "./StatusBar";

/*
  BaseLayout: used for all standard pages across the site.
  Only deviate from BaseLayout if a page requires an
  alternative structure to provide the relevant content.
*/

interface Props {
  children?: React.ReactNode;
  home?: boolean;
}

const BaseLayout: React.FC<Props> = ({children, home}) => {
  return (
    <div className={`${styles.container} bg-slate-100`}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id={styles.Wrapper}>
        <Navbar />
        <div className="w-full grow flex flex-col">
          <StatusBar />
          <div className="bg-white shadow-lg rounded-tl-[36px] mt-4 grow flex flex-col">
            <main className={styles.main}>
              { children }
            </main>

            <footer className={`bg-slate-50 ${styles.footer}`}>
              <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Powered by{' '}
                <span className={styles.logo}>
                  <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </span>
              </a>
            </footer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BaseLayout;