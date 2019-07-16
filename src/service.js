import axios from 'axios';

const foodstp = "https://foodstp.com/";
const localhost = "http://localhost:3000/";

export default async function fetchRequest(url,method,body) {
     return await axios({
         method: method,
         url: url,
         baseURL: localhost,
         data: body,
         headers: {'X-Requested-With': 'XMLHttpRequest','Accept':"*/*",'apiCheckSum':'b5a2961c7165bd9c466847cc206b6d94','ApiKey':'88d85d8a6b9d4e409e817dca1c2cd1fb'},
     }).then(function (response) {
         console.log(response);
         if(response.status === 200 || response.status === 304){
             return response.data;
         }else {
             alert(response.statusText)
         }
     }).catch(function (error) {
         if (error.response) {
             // The request was made and the server responded with a status code
             // that falls out of the range of 2xx
             console.log(error.response.data);
             console.log(error.response.status);
             console.log(error.response.headers);
         } else if (error.request) {
             // The request was made but no response was received
             // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
             // http.ClientRequest in node.js
             console.log(error.request);
             alert("已提出请求，但未收到答复")
         } else {
             // Something happened in setting up the request that triggered an Error
             alert(error.message);
         }
         //console.log(error.config);
         console.dir(error);
     });

}