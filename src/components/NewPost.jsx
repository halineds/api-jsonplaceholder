import {useState, useEffect} from 'react';
import {FormGroup, FormControl, InputLabel, Input, Typography, Button, styled} from "@mui/material"
import { NewPostData } from '../service/api';
import { useParams,useNavigate } from "react-router-dom";

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
    & > div {
        margin-top: 20px;
    }
`;

const NewPost = () => {
    const[post, setPost] = useState(NewPostData);
    const { id } = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        async function putData() {
            const response = await NewPostData();
            setPost(response);
        }
        putData();
    }, []);
    const onValueChange=(e) => {
        setPost({...post,[e.target.name]: e.target.value})
    }
    // const onSubmit=() => {
    //     NewPostData(post)
    // }

    const onSubmit = async () => {
        await NewPostData(post);
        navigate("/");
      };
    
    return (
        <Container>
            <Typography variant= "h4"> Write your post </Typography>
            <FormControl>
                <InputLabel>Title</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="title" />
            </FormControl>
            <FormControl>
                <InputLabel>Message</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="body" />
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={onSubmit}> Add Post </Button>
            </FormControl>
        </Container>
    );
}
export default NewPost;