import { useEffect, useState } from "react";
import { Axios } from "../../helpers/Axios";
import { useParams } from "react-router-dom";
import Moment from "react-moment";
import {
  Grid,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
  Avatar,
} from "@mui/material";

export default function ListFolders() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [post, setPosts] = useState([]);
  let { userId } = useParams();

  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(+e.target.value);
    setPage(0);
  };
  const getPosts = async () => {
    const { data } = await Axios.get(`/admin/getPosts/${userId}`);
    setPosts(data);
  };
  console.log(userId);
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <Paper xs={{ width: "100%" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Text</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Comments</TableCell>
              <TableCell>Posted At</TableCell>
              <TableCell>Images</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {post
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((p, i) => (
                <TableRow>
                  <TableCell>{i + 1}</TableCell>
                  <TableCell>{p.user.username}</TableCell>
                  <TableCell>{p.text}</TableCell>
                  <TableCell>
                    {p.type === null
                      ? "Posts"
                      : p.type === "profile"
                      ? "profile"
                      : p.type === "cover"
                      ? "cover"
                      : ""}
                  </TableCell>
                  <TableCell>
                    {p.comments.length > 0
                      ? p.comments[0].comment
                      : "no comments"}
                  </TableCell>
                  <TableCell>
                    <Moment format="YYYY/MM/DD hh.mm A">{p.createdAt}</Moment>
                  </TableCell>
                  <TableCell>
                    {p.images && (
                      <Avatar
                        sx={{
                          borderRadius: 0,
                          width: 48,
                          height: 48,
                          objectFit: "cover",
                        }}
                        src={p.images[0].url}
                      />
                    )}
                  </TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 15, 25]}
        component="div"
        count={post.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
