import Layout from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </div>
  )
  
}

export default MyApp
