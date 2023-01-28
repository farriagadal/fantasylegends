import Head from 'next/head'
import CardGame from 'src/components/CardGame'
import Footer from 'src/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>JUEGO GPT</title>
        <meta name="description" content="juego fran" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CardGame />
    </>
  )
}
