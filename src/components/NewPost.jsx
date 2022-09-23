import {useState, useEffect} from 'react';
import {FormGroup, FormControl, InputLabel, Input, Typography, Button, styled} from "@mui/material"
import { NewPostData } from '../service/api';

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
    & > div {
        margin-top: 20px;
    }
`;

const NewPost = () => {
    const[post, setPost] = useState(NewPostData);
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
    const onSubmit=() => {
        NewPostData(post)
    }
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