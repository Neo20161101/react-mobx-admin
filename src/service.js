import axios from 'axios';
import { notification } from 'antd';

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
         if(response.status >= 200 || response.status <= 304){
             return response.data;
         }else {
             notification['warning']({
                 message: response.message || response.msg,
                 description:response.statusText,
                 onClick: () => {
                     console.log(response);
                 },
             });
         }
     }).catch(function (error) {
         console.error("error:",error);
         if (error.response) {
             // The request was made and the server responded with a status code
             // that falls out of the range of 2xx
             notification['error']({
                 message: error.message,
                 description:error.response.statusText,
                 onClick: () => {
                     console.log(error.response);
                 },
             });
         } else if (error.request) {
             // The request was made but no response was received
             // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
             // http.ClientRequest in node.js
             notification['error']({
                 message: "已发出请求，未收到答复！",
                 description:error.request.statusText,
                 onClick: () => {
                     console.log(error.request);
                 },
             });
         } else {
             // Something happened in setting up the request that triggered an Error
             notification['error']({
                 message: error.message,
                 description:error.stack,
                 onClick: () => {
                     console.log(error);
                 },
             });
         }
         return {status:500};
    });

}