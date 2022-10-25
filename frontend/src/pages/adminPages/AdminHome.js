import { Box } from "@mui/system";
import React from "react";
import AdminHeader from "../../adminComponents/AdminHeader";
import AdminSideBar from "../../adminComponents/AdminSideBar";
import Dashboard from "./Dashboard";

export default function AdminHome() {
  return (
    <Box display={"flex"} flexDirection={"row"} height={"100vh"} width={"100vw"}>
      <AdminSideBar/>
      <Box flexShrink={1} flexGrow={1}>
        <AdminHeader />
        <Dashboard/>
      </Box>
    </Box>
  );
}
