import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import DropDownProfile from "../LoginForms/DropdownProfile";
import {useState} from "react";

const Topbar = () => {
  const theme = useTheme();
  //   const colorss = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <h1> TOEFL MASTERY </h1>
      <Box></Box>
      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
      
        <IconButton onClick={() => setOpenProfile(
          (prev)=> !prev)}>
          <PersonOutlinedIcon/>
          {openProfile && <DropDownProfile />
          }
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
