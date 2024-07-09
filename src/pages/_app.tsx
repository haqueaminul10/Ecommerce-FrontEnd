import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <h1>Header</h1>
      <h1>Navbar</h1>
      <Component {...pageProps} />
    </>
  );
}
