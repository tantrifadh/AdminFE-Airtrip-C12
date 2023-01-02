import axios from "axios";
import "../styles/globals.css";

axios.defaults.baseURL = "https://airtrip-be-production.up.railway.app";
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
