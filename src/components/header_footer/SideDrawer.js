import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const SideDrawer = props => {
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav">
        <ListItem
          button
          onClick={() => {
            console.log("Feature");
          }}
        >
          Event Start in
        </ListItem>
        <ListItem
          button
          onClick={() => {
            console.log("info");
          }}
        >
          Venue NFO
        </ListItem>
        <ListItem
          button
          onClick={() => {
            console.log("info");
          }}
        >
          HighLight
        </ListItem>{" "}
        <ListItem
          button
          onClick={() => {
            console.log("info");
          }}
        >
          Pricing
        </ListItem>{" "}
        <ListItem
          button
          onClick={() => {
            console.log("info");
          }}
        >
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
