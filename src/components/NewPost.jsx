import {useState} from 'react';
import {FormGroup, FormControl, InputLabel, Input, Typography, Button, styled} from "@mui/material"
import { NewPostData } from '../service/api';

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
    & > div {
        margin-top: 20px;
    }
`;

const Newpost = () => {

    return (
        <Container>
            <Typography variant= "h4"> Write your post </Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name" />
            </FormControl>
            <FormControl>
                <InputLabel>Title</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="title" />
            </FormControl>
            <FormControl>
                <InputLabel>Message</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="message" />
            </FormControl>
            <FormControl>
                <Button variant="contained"> Add Post </Button>
            </FormControl>
        </Container>
    );
}
export default NewPost;