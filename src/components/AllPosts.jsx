import { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  styled,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  ButtonGroup
} from "@mui/material";
import {Link} from 'react-router-dom';
import { AllPostsData, DeletePostData} from "../service/api";
const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
`;
const Thead = styled(TableRow)`
  background: #620E7E;
  & > th {
    color: #fff;
    font-size: 20px;
  }
`;
const TBody = styled(TableRow)`
  & > th {
    color: #fff;
    font-size: 20px;
  }
`;
const AllPosts = () => {

  const [posts, setPosts] = useState([]);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    async function getData() {
      const response = await AllPostsData();
      setPosts(response);
    }
    getData();
  }, []);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleDelete = async (id) => {
      await DeletePostData(id)
      handleClose();
    };
   
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>User Id</TableCell>
          <TableCell>Id</TableCell>
          <TableCell>Title</TableCell>
          <TableCell>body</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {posts.map((post) => (
          <TBody>
            <TableCell>{post.userId}</TableCell>
            <TableCell>{post.id}</TableCell>
            <TableCell>
            <a href={`/post/${post.id}`}>{post.title}</a>
            </TableCell>
            <TableCell>{post.body}</TableCell>
            <TableCell>
            <ButtonGroup variant="outlined" aria-label="outlined button group">
              <Button variant="contained" 
              style= {{marginRight: 10}} component={Link} 
              to={`/edit/${post.id}`}> Edit </Button>
              
                <Button variant="contained" color="secondary"
                style= {{marginRight: 10}} component={Link}  
                onClick={handleClickOpen}> Delete </Button>

                <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    {"Are you sure about that?"}
                  </DialogTitle>
                  <DialogActions>
                    <Button onClick={handleClose}>No</Button>
                    <Button onClick={() => handleDelete(post.id)} autoFocus>
                      Yes
                    </Button>
                  </DialogActions>
                </Dialog>
              </ButtonGroup>
            </TableCell>
          </TBody>
        ))}
      </TableBody>
    </Table>
  );
};
export default AllPosts;









