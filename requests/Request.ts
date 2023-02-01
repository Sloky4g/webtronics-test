import axios from "axios";
import {feedbackInterface} from "../interfaces/interfaces";

export async function sendFeedback(data: feedbackInterface) {
  let request = axios.post(
    "http://localhost:3004/feedback",
    data,
  ).then(result => {
    return {
      type: "success",
      data: result.data,
    };
  },
    error => {
      return {
        type: "error",
        data: error.response,
      };
    });
  return await request;
}