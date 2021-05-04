import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Link from "@material-ui/core/Link";
import Theme from "./Theme";

export default function PersistentNav(props) {
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Theme>

      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton color="inherit" onClick={handleDrawerOpen} edge="start">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap style={{ marginLeft: 100 }}>
            Good Time Journal
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
      >
        <List>
          <Link href="/">
            <ListItem button key="Home">
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
           <Link href="/SignIn">
            <ListItem button key="Sign In">
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Sign In" />
            </ListItem>
          </Link>
           <Link href="/SignUp">
            <ListItem button key="Sign Up">
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Sign Up" />
            </ListItem>
          </Link>
          <Link href="/about">
            <ListItem button key="About">
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItem>
          </Link>
          <ListItem button key="close" onClick={handleDrawerClose}>
            <ListItemText primary="close" />
          </ListItem>
        </List>
      </Drawer>
      <main style={{ marginTop: 100, marginLeft: 150 }}>{props.children}</main>

      </Theme>
    </div>
  );
}
