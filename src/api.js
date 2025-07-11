const api = () => {

  const RR_baseUrl = "https://37hzewg4ahsanfwhneaszssnwq0deiej.lambda-url.us-west-1.on.aws/api"; 
  const WD_baseUrl = "https://zoxazzvkxnn5ubjkmlsfxmhqwa0tazte.lambda-url.us-west-1.on.aws/api";

 
    const headers = {
      "Content-Type": "application/json",
    };

    const get = (url) => fetch(url, { method: "GET", headers });


    // const post = (url, body) => {
    //   return fetch(
    //     baseUrl + url,
    //     {
    //       method: "POST",
    //       headers,
    //       body: JSON.stringify(body),
    //     }
    //   );
    // };

    const pingRR = () => get(`${RR_baseUrl}/pingdb`);

    const pingWD = () => get(`${WD_baseUrl}/date/pingdb`);

    return { pingRR, pingWD, get };
  };
  
  export default api;
  
  