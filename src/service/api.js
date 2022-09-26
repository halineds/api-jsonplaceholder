import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/";

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

  export const EditPostData = async (id, post) => {
    try {
      return await axios.put(`${API_URL}posts/${id}`,post);
    } catch (error) {
      console.log("Error while calling EditPost api", error.message);
    }
  };

  export const DeletePostData = async (id) => {
    try {
      return await axios.delete(`${API_URL}posts/${id}`);
    } catch (error) {
      console.log("Error while calling deletePost api", error.message);
    }
  };

  export const CommentsPostData = async () => {
    try {
      const response = await axios.get(API_URL + "comments");
      return response.data;
    } catch (error) {
      console.log("Error while calling Comments api", error.message);
    }
  };