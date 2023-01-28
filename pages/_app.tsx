import 'src/styles/main.css'
import type { AppProps } from 'next/app'
import Transition from 'src/components/Transition'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Transition>
        <Component {...pageProps} />
      </Transition>
    </>
  )
}