import React from "react";
import { Grid } from "@material-ui/core";

import { SearchBar, VideoDetail } from "./components";

import youtube from "./api/youtube";

import "./App.css";

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

class App extends React.Component {
  handleSubmit = async searchTerm => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: API_KEY,
        q: searchTerm
      }
    });

    console.log(response);
  };

  render() {
    return (
      <div className="App">
        <Grid justify="center" container spacing={10}>
          <Grid item xs={12}>
            <Grid container spacing={10}>
              <Grid item xs={12}>
                {/* Search Bar */}
                <SearchBar onFormSubmit={this.handleSubmit} />
              </Grid>
              <Grid item xs={8}>
                {/* Video Details */}
                <VideoDetail />
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
