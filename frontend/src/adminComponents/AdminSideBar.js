import { Box } from "@mui/system";
import { Sidebar, Menu, MenuItem, ProSidebarProvider } from "react-pro-sidebar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import "./style.scss";
import { Link } from "@mui/material";

export default function AdminSideBar() {
  return (
    <ProSidebarProvider>
      <Sidebar backgroundColor={"#3f51b5"} width={"240px"}>
        <Menu>
          <MenuItem>
            <h2>Snapbook Admin</h2>
          </MenuItem>
          <MenuItem>
            <Link
              href="/admin/home"
              className="flex_sidebar"
              underline="none"
              color="white"
            >
              <DashboardIcon />
              <span>Dashboard</span>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href="/admin/users"
              className="flex_sidebar"
              underline="none"
              color="white"
            >
              <PeopleAltIcon />
              <span>Users</span>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              className="flex_sidebar"
              href="/admin/posts"
              underline="none"
              color="white"
            >
              <PermMediaIcon />
              <span>Posts</span>
            </Link>
          </MenuItem>
        </Menu>
      </Sidebar>
    </ProSidebarProvider>
  );
}
