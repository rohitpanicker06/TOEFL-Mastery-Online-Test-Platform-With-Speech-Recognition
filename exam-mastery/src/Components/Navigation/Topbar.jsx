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
import Logo from "../../Assets/bgbg.png";

const Topbar = () => {
  const theme = useTheme();
  //   const colorss = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [openProfile, setOpenProfile] = useState(false);

  const styles = {
    fontSize: '24px', // set the font size to 24 pixels
    fontFamily: 'Arial, sans-serif', // set the font family to Arial, sans-serif
  };

  return (
    <Box display="flex" justifyContent="space-between" p={2} paddingRight = "30px">
      <Box style={styles}>
      <h1> TOEFL MASTERY </h1>
      </Box>
      {/* ICONS */}
      <Box display="flex" paddingLeft = "30px">
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
