import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PersistentNav from "../comps/partials/PersistentNav";
import ResponsiveNav from "../comps/partials/ResponsiveNav";
//import Image from 'material-ui-image';

export default function Index() {
  return (
      <div>
      <PersistentNav>
          <h1>Welcome to the Good Time Journal!</h1>
          <p>If you have an account, please sign in- </p>
          <p>if not, create an account here.</p>
          <img
            src="http://getdrawings.com/image/bald-eagle-easy-drawing-57.jpg"
            style={{width: 200, height: 200, marginLeft: 300}}
          />
      </PersistentNav>
      </div>
  );
}
