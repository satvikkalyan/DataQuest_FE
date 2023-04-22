import React from "react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import WorkIcon from "@mui/icons-material/Work";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
export const SidebarData = [
  {
    title: "Profile",
    path: "/profile",
    icon: <PermIdentityIcon />,
    cName: "nav-text",
  },
  {
    title: "Search",
    path: "/search",
    icon: <SearchIcon />,
    cName: "nav-text",
  },
  {
    title: "Add Jobs",
    path: "/mod-jobs",
    icon: <ControlPointIcon />,
    cName: "nav-text",
  },
  {
    title: "Jobs",
    path: "/jobs",
    icon: <WorkIcon />,
    cName: "nav-text",
  },
  {
    title: "Charts",
    path: "/charts",
    icon: <QueryStatsIcon />,
    cName: "nav-text",
  },
  {
    title: "Logout",
    path: "/messages",
    icon: <LogoutIcon />,
    cName: "nav-text",
  },
];
