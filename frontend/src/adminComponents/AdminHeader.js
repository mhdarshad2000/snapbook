import { AppBar, Box, Link, Toolbar, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AdminLogout from "../adminComponents/AdminLogout"
export default function AdminHeader() {
  return (
    <Box>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "end",
          backgroundColor: "#3f51b5",
          width:"45vw"
        }}
      >
        <Link href="/admin/profile">
          <AccountCircleIcon
            sx={{
              color:"white",
              fontSize: 47,
            }}
          />
        </Link>
        <AdminLogout />
      </Toolbar>
    </Box>
  );
}
