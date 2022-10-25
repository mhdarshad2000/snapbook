import PostsFolders from "../../adminComponents/postManagement/PostsFolders";
import AdminHeader from "../../adminComponents/AdminHeader";
import { Box } from "@mui/material";
import AdminSideBar from "../../adminComponents/AdminSideBar";
import ListFolders from "../../adminComponents/postManagement/ListPosts";

export default function Posts({ type }) {
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      height={"100vh"}
      width={"100vw"}
    >
      <AdminSideBar />
      <Box flexShrink={1} flexGrow={1}>
        <AdminHeader />
        {type === "grid" ? <PostsFolders /> : <ListFolders />}
      </Box>
    </Box>
  );
}
