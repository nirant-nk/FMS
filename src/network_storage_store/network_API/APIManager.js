import axios from 'react-native-axios';
import {getToken} from '../LocalDB/LocalDb';
// const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMWQ3OGU3YzljMGYwZmEzNGUzNzAxNjUxMGUxYTExM2ViNzQyMDRjMmRiYTBhNThlNGQwYWIyY2ZmM2FkZGYyNTA1YWZlYjY2NTFkNjdiZTAiLCJpYXQiOjE2OTA4OTEzMTYuMTA2MzY4MDY0ODgwMzcxMDkzNzUsIm5iZiI6MTY5MDg5MTMxNi4xMDYzNzMwNzE2NzA1MzIyMjY1NjI1LCJleHAiOjE3MjI1MTM3MTYuMDk1MTU5MDUzODAyNDkwMjM0Mzc1LCJzdWIiOiIzOCIsInNjb3BlcyI6W119.NjvS5Jz0hp0EHPh_MDfDahBLmc1veP_q16NMSBsGm6lib6RJITszyzOhZE9fL4DwFa88WdV0AHQ-Qs9GJHsq4vMrLlkao_pU2iDHpAdkVHV_A7jQurwRNiwEiFf24uGHSvSqI_2PQAcIdfzhnGOzmaEYYxQS9wFjI9lGqX7AbqvYtMfVbt4CkJFrYE1fXkeDAShSZb7rTLzcRsoSpxmXtPsq2WHAH0ba6gGb_X0VZWTb6F2FHeY78DtpPI77aULLUAiHrVLpetns81Zqk7qU0bkUONCNXn096cYA8muLlXUp9jJvl8eLM2IR9dhHxKpejnEcP5ivIqXWo1peTvDHIaC8DLuMpeoxIv1KlI361_LWD3FKhdB6liB59SMi8Dk01litDTY_tn1kSnZkjj4B7wlbvdVkiuKvYTIgajSDP2i_djAgALSjKtlc3QLmsgNHWcliRtomQkPuSA3xlF1yPkQ6AHJseBjcx7necCQIwswnnVlV65Jasm4Xr2Z_VSgaw2hCn82MmfJeo94LC81XIjISFQHBc8SrGs3HzxjJdW9iJCtZKxUcLRz1rxfaUT_xGtDKKmayQGIW4PHTTt3HGmmYPe6h3Rgfc_q9T_Pbe8Nklvemfr7DXd9YgaTiK4c3e2rRpPTRWw215pN-ejgITA2-cDhxYc94-_ku0Vtm3Z4"
const ApiManager = axios.create({
  baseURL: 'https://realestate.profcymabackend.com/public/api/',
  responseType: 'json',
  withCredentials: true,
});
ApiManager.interceptors.request.use(
  async config => {
    const token = await getToken(); // Replace with your actual token
    // console.warn(`Highlighted value is Token :- ${token}`);
    // const languageId = await getLanguage_ID();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // if (languageId) {
    //     config.params = {
    //         ...config.params,
    //         language_id: languageId,
    //     };
    // }

    return config;
  },
  error => {
    console.warn('HI There');
    return Promise.reject(error);
  },
);
export default ApiManager;
