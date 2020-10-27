import React from 'react';
import Head from 'next/head';
import styles from './default.module.css';

const siteTitle = 'Sample NextJs App';
const siteDescription = 'Nextjs app setup with with an opiniated page and store model';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout = (props: DefaultLayoutProps) => {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content={siteDescription} />
        <meta
          property='og:image'
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <main className={styles.container}>{props.children}</main>
      <style jsx global>{`
        body {
          margin: 0px;
          background-color: black;
        }
      `}</style>
    </>
  );
};
