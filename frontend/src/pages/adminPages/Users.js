import ShowUsers from "../../adminComponents/ShowUsers";
import { Box } from "@mui/system";
import AdminHeader from "../../adminComponents/AdminHeader";
import AdminSideBar from "../../adminComponents/AdminSideBar";

export default function Users() {
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
        <ShowUsers />
      </Box>
    </Box>
  );
}
