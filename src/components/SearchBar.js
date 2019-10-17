import React from "react";

import { Paper, TextField } from "@material-ui/core";

class SearchBar extends React.Component {
  state = {
    searchTerm: ""
  };

  handleChange = event => this.setState({ searchTerm: event.target.value });

  handleSubmit = e => {
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;

    onFormSubmit(searchTerm);

    e.preventDefault();
  };

  render() {
    return (
      <Paper
        elevation={6}
        style={{
          padding: "25px",
          background: "linear-gradient(to right,  #FC5C7D, #6A82FB)"
        }}
      >
        <form onSubmit={this.handleSubmit}>
          <TextField fullWidth label="Search.." onChange={this.handleChange} />
        </form>
      </Paper>
    );
  }
}

export default SearchBar;
