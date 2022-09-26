import { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  styled
} from "@mui/material";
import { CommentsPostData} from "../service/api";
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
const Comments = () => {

const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await CommentsPostData();
      setPosts(response);
    }
    getData();
  }, []);

   
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Post Id</TableCell>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Comment</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {posts.map((post) => (
          <TBody>
            <TableCell>{post.postId}</TableCell>
            <TableCell>{post.id}</TableCell>
            <TableCell>{post.name}</TableCell>
            <TableCell>{post.email}</TableCell>
            <TableCell>{post.body}</TableCell>
            <TableCell>
           
            </TableCell>
          </TBody>
        ))}
      </TableBody>
    </Table>
  );
};
export default Comments;









