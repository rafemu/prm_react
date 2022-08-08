import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Header from './Header';
import Sidebar from './SideBar';
import { useMediaQuery } from '@mui/material';
import { useEffect } from 'react';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Mainlayout() {
  const theme = useTheme();
  const matchDownLG = useMediaQuery(theme.breakpoints.down('md'));

  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

 // set media wise responsive drawer
 useEffect(() => {
  setOpen(!matchDownLG);
  // dispatch(openDrawer({ drawerOpen: !matchDownLG }));

  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [matchDownLG]);

// useEffect(() => {
//   if (open !== drawerOpen) setOpen(drawerOpen);
//   // eslint-disable-next-line react-hooks/exhaustive-deps
// }, [drawerOpen]);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* header */}
      <Header open={open} handleDrawerToggle={handleDrawerOpen}/>
      {/* end header */}
      {/* sidebar */}
     <Sidebar  open={open} handleDrawerToggle={handleDrawerOpen}/>

      {/* end side bar */}

      {/* content    */}
      <Main open={open}>
      <Toolbar />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Main>
    </Box>
  );
}





// import { Divider, Drawer, Toolbar } from '@mui/material';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import { useState } from 'react';
// import Header from './Header';
// import Sidebar from './SideBar';

// const Mainlayout = () => {
//     // drawer toggler
//     const [open, setOpen] = useState(true);
//     const handleDrawerToggle = () => {
//       console.log('drawer toggle',open);
//         setOpen(!open);
//         // dispatch(openDrawer({ drawerOpen: !open }));
//     };

//   return (
 
// <Box sx={{ display: 'flex', width: '100%' }}>
//             {/* <Header open={open} handleDrawerToggle={handleDrawerToggle} /> */}
//             <Divider />

//             <Sidebar open={open} handleDrawerToggle={handleDrawerToggle} />

//             <Box component="main" sx={{ width: '100%', flexGrow: 1, p: { xs: 2, sm: 3 } }}>
//                 {/* <Toolbar /> */}
//                 CONTENT
//                 {/* <Breadcrumbs navigation={navigation} title titleBottom card={false} divider={false} />
//                 <Outlet /> */}
//             </Box>
//         </Box>  )
// }

// export default Mainlayout