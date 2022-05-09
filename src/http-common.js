import axios from "axios";

export default axios.create({
  baseURL: "https://us-west-2.aws.data.mongodb-api.com/app/restaurants-review-wkuvv/endpoint/",
  headers: {
    "Content-type": "application/json"
  }
});