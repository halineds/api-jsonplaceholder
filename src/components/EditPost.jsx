import { useState, useEffect } from "react";
import {
  FormGroup,
  FormControl,
  Typography,
  Button,
  styled,
  TextField,
} from "@mui/material";
import { EditPostData, PostDetailData } from "../service/api";
import { useParams,useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const EditPost = () => {
  const [post, setPost] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    async function getData() {
      const response = await PostDetailData(id);
      setPost(response);
      console.log(response);
    }
    getData();
  }, []);
  const onValueChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  const onSubmit = async () => {
    await EditPostData(post.id, post);
    console.log("Success");
    navigate("/");
  };

  return (
    <Container>
      <Typography variant="h4"> Edit your post </Typography>
      <FormControl>
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          onChange={(e) => onValueChange(e)}
          name="title"
          value={post.title}
        />
      </FormControl>
      <FormControl>
        <TextField
          id="outlined-basic"
          label="Body"
          variant="outlined"
          onChange={(e) => onValueChange(e)}
          name="body"
          value={post.body}
        />
      </FormControl>
      <FormControl>
        <Button
          variant="contained"
          style={{ marginRight: 10 }}
          component={Link}
          onClick={onSubmit}
        >
          Edit Post
        </Button>
      </FormControl>
    </Container>
  );
};
export default EditPost;
