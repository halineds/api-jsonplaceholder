import {useState, useEffect} from 'react';
import {FormGroup, FormControl, InputLabel, Input, Typography, Button, styled} from "@mui/material";
import { DeletePostData, PostDetailData} from '../service/api';
import { useParams } from 'react-router-dom';

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
    & > div {
        margin-top: 20px;
    }
`;

const DeletePost = () => {
    const[post, setPost] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        async function getData() {
            const response = await PostDetailData(id);
            setPost(response);
            console.log(response);
        }
        getData();
    }, []);
const onValueChange=(e) => {
    setPost({...post,[e.target.name]: e.target.value})
}
const onSubmit=() => {
    DeletePostData(post.id)
}

    return (
        <Container>
            <Typography variant= "h4"> Delete your post </Typography>
            <FormControl>
                <InputLabel>Title</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="title" 
                value = {post.title} />
            </FormControl>
            <FormControl>
                <InputLabel>Message</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="body" 
                value={post.body} />
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={onSubmit}> Delete Post </Button>
            </FormControl>
        </Container>
    );
}
export default DeletePost;