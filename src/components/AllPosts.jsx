import { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  styled,
  Button
} from "@mui/material";
import {Link} from 'react-router-dom';
import { AllPostsData } from "../service/api";
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
  useEffect(() => {
    async function getData() {
      const response = await AllPostsData();
      setPosts(response);
    }
    getData();
  }, []);
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
              <Button variant="contained" 
              style= {{marginRight: 10}} component={Link} 
              to={`/edit/${post.id}`}> Edit </Button>
              <Button variant="contained" 
              color="secondary"> Delete </Button>
            </TableCell>
          </TBody>
        ))}
      </TableBody>
    </Table>
  );
};
export default AllPosts;









