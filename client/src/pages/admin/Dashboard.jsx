import React from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import {
  AdminPanelSettings as AdminPanelSettingsIcon,
  Group as GroupIcon,
  Message as MessageIcon,
  Notifications as NotificationsIcon,
  Person as PersonIcon,
} from "@mui/icons-material";
import {
  Box,
  Container,
  Paper,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import moment from "moment";
import {
  CurveButton,
  SearchField,
} from "../../components/styles/StyledComponents";

const Dashboard = () => {
  const AppBar = (
    <Paper
      elevation={3}
      sx={{ padding: "2rem", margin: "2rem 0", borderRadius: "1rem" }}
    >
      <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
        <AdminPanelSettingsIcon sx={{ fontSize: "3rem" }} />
        <SearchField placeholder="Search..." />
        <CurveButton>Search</CurveButton>
        <Box flexGrow={1} />
        <Typography
          display={{
            xs: "none",
            lg: "block",
          }}
          color={"rgba(0,0,0,0.7)"}
          textAlign={"center"}
        >
          {moment().format("dddd, D MMMM YYYY")}
        </Typography>
        <NotificationsIcon />
      </Stack>
    </Paper>
  );
  return (
    <AdminLayout>
      <Container component={"main"}>{AppBar}</Container>
    </AdminLayout>
  );
};

export default Dashboard;
