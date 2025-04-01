// import "@/styles/globals.css";
// import type { AppProps } from "next/app";

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }
// pages/_app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Lora } from "next/font/google";
import { Great_Vibes } from "next/font/google";

const lora = Lora({ subsets: ["latin"], weight: "400" });
const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={lora.className}>
      <style jsx global>{`
        .font-script {
          font-family: ${greatVibes.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </main>
  );
}
