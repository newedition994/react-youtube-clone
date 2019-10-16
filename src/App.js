import React from "react";
import { Grid } from "material-ui";

import { SearchBar, VideoList, VideoDetail } from "./components";

import YouTube from "./api/youtube";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Grid justify="center" container spacing={16}>
          <Grid item xs={12}>
            <Grid container spacing={16}>
              <Grid item xs={12}>
                {/* Search Bar */}
              </Grid>
              <Grid item xs={8}>
                {/* Video Details */}
              </Grid>
              <Grid item xs={4}>
                {/* Video list */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
