// =============================================================================
// COMMON API PARAMETERS
// =============================================================================
import axios from "axios";

// =============================================================================
// SETTING UP SINGLE AXIOS INSTANCE
// =============================================================================

const axiosClient = axios.create({
  baseURL: `https://fakestoreapi.com`,
});

// =============================================================================
// AXIOS INTERCEPTOR FOR UNAUTHORIZED API CALLS
// =============================================================================
axiosClient.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    let res = error.response;
    if (res.status == 401) {
      window.location.href = "http://localhost:3000/401";
    }
    console.error("Looks like there was a problem. Status Code:?" + res.status);
    return Promise.reject(error);
  }
);

//exporting axios client
export default axiosClient;
