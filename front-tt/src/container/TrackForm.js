import React, {Component} from "react";
import {connect} from "react-redux";
import {addTrack} from "../actions/tracks";
import "../App.css";
class TrackForm extends Component {
  state = {
    title: "",
    status: "Unknown",
    instrumental: "",
    notes: "",

    loading: false,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      // staus: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const track = {
      title: this.state.title,
      status: this.state.status,
      links_attributes: [
        {
          instrumental: this.state.instrumental,
          notes: this.state.notes,
        },
      ],
    };
    this.props.addTrack(track, this.props.history);
    // this.props.history.push("/tracks")
    debugger;
    this.setState({
      title: "",
      status: "",
      instrumental: "",
      notes: "",
      // status:"Unknown",

      loading: false,
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Add New Track</legend>
            {/* <h2>Add New Track</h2> */}
            Title:
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
            Instrumental:
            <input
              type="text"
              name="instrumental"
              value={this.state.instrumental}
              onChange={this.handleChange}
            />
            Notes:
            <textarea
              name="notes"
              value={this.state.notes}
              onChange={this.handleChange}
            />
            <br />
            Status:
            <select
              name="status"
              value={this.state.status}
              onChange={this.handleChange}
            >
              <option value="Unknown">Choose Status / Default "Unknown"</option>
              <option value="Complete">Complete</option>
              <option value="Written But Not Recorded">
                Written, But Not Recorded
              </option>
              <option value="Partialy Written And Recorded">
                Partialy Written & Recorded
              </option>
              <option value="Lyrics No Beat">Lyrics No Instrumental</option>
              <option value="Beat No Lyrics">Instrumental No Lyrics </option>
            </select>
            <input type="submit" value="Submit Track" />
          </fieldset>
        </form>
        <img
          src="https://i.pinimg.com/originals/ab/45/bb/ab45bb4451536652faca51ae4f42d5dd.gif"
          className="home-icon"
          alt="logo"
        />
      </div>
    );
  }
}
export default connect(null, {addTrack})(TrackForm);
