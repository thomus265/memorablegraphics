import Layout from "../components/layout";
import "../styles/globals.css";
import { useState } from "react"
import Loader from "./loader";

function MyApp({ Component, pageProps }) {

  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 7500);

  return (
    <Layout>
      {
        loading? <Loader/> : <Component {...pageProps} />
      }
    </Layout>
  );
}

export default MyApp;
