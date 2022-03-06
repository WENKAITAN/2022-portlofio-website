import Head from 'next/head'


export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Wenkai Tan</title>
      </Head>
      <main>{children}</main>
    </>
  )
}
