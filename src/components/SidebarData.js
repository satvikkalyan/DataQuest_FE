import React from "react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import WorkIcon from "@mui/icons-material/Work";

export const SidebarData = [
  {
    title: "Profile",
    path: "/",
    icon: <PermIdentityIcon />,
    cName: "nav-text",
  },
  {
    title: "Search",
    path: "/reports",
    icon: <SearchIcon />,
    cName: "nav-text",
  },
  {
    title: "Jobs",
    path: "/products",
    icon: <WorkIcon />,
    cName: "nav-text",
  },
  {
    title: "Settings",
    path: "/team",
    icon: <SettingsIcon />,
    cName: "nav-text",
  },
  {
    title: "Logout",
    path: "/messages",
    icon: <LogoutIcon />,
    cName: "nav-text",
  },
];
