import { useEffect, useState } from "react";
import { styled } from "@mui/material";
import { useParams } from "react-router-dom";

import { PostDetailData } from "../service/api";

const PostDetail = () => {
  const { id } = useParams();

  const [post, setPost] = useState({});

  useEffect(() => {
    async function getData() {
      const response = await PostDetailData(id);

      setPost(response);
    }

    getData();
  }, []);

  return <h1>{post.title}</h1>;
};
export default PostDetail;





