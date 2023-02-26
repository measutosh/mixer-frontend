import React from 'react'
import Head from 'next/head'
import styles from '../styles/Layout.module.css'

export default function Layout({ title, keywords, description, children}) {
  return (
    <div>
        <Head>
            <title>{title}</title>
            <meta name='description' content={description}></meta>
            <meta name='keywords' content={keywords}></meta>
        </Head>
        <div className={styles.container}>
          {children}
        </div>
        
        
    </div>
  )
}

Layout.defaultProps = {
    title: 'Mixer | Find The Hottest Parties',
    description: 'Find The Latest DJ And Other Musical Events',
    keywords: 'music, dj, latest'
}
