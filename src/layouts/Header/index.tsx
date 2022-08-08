import PropTypes from "prop-types";

// material-ui
import { useTheme } from "@mui/material/styles";
import {
  IconButton,
  Toolbar,
  useMediaQuery,
  Typography,
  styled,
  AppBarProps
} from "@mui/material";
// import { AppBar, Toolbar, useMediaQuery, AppBarProps } from '@mui/material';

import AppBar from "@mui/material/AppBar";

// project import
// import AppBarStyled from './AppBarStyled';
// import HeaderContent from './HeaderContent';

// assets
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { FC, ReactNode } from "react";
import AppBarStyled from "./AppBarStyled";
// import AppBarStyled from "./AppBarStyled";

// ==============================|| MAIN LAYOUT - HEADER ||============================== //
interface HeaderProps {
  open: boolean | any;
  handleDrawerToggle: () => any;
}
const drawerWidth = 240;

const Header = ({ open, handleDrawerToggle }:HeaderProps) => {
  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down("lg"));

  const iconBackColor = "grey.100";
  const iconBackColorOpen = "grey.200";

  // common header
  const mainHeader: ReactNode = (
    <Toolbar>
      <IconButton
        disableRipple
        // aria-label="open drawer"
        onClick={handleDrawerToggle}
        edge="start"
        color="secondary"
        sx={{
          color: "text.primary",
          bgcolor: open ? iconBackColorOpen : iconBackColor,
          ml: { xs: 0, lg: -2 },
        }}
      >
        {!open ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </IconButton>
      {/* <HeaderContent /> */}
    </Toolbar>
  );

  // app-bar params
  const appBar : AppBarProps= {
    position: "fixed",
    // color: "inherit",
    elevation: 0,
    sx: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      // boxShadow: theme.customShadows.z1
    },
  };



  return (
    <>
      {!matchDownMD ? (
        <AppBarStyled open={open} {...appBar}>
          {mainHeader}
        </AppBarStyled>
      ) : (
        <AppBar>{mainHeader}</AppBar>
      )}
    </>
  );
};

export default Header;
