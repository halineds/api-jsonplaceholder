import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com";

export const AllPostsData = async () => {
  try {
    const response = await axios.get(API_URL + "posts");
    return response.data;
  } catch (error) {
    console.log("Error while calling NewPost api", error.message);
  }
};
export const PostDetailData = async (id) => {
    try {
      const response = await axios.get(API_URL + "posts/" + id);
      return response.data;
    } catch (error) {
      console.log("Error while calling NewPost api", error.message);
    }
  };
  
  export const NewPostData = async (data) => {
    try {
      return await axios.post(API_URL + "posts", data);
    } catch (error) {
      console.log("Error while calling NewPost api", error.message);
    }
  };