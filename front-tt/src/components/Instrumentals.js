import React, {Component} from "react";
import ReactPlayer from "react-player";
class Instrumentals extends Component {
  state = {
    show: false,
    note: "",
  };

  handleClick = () => {
    this.setState({
      show: !this.state.show,
      note: this.props.link.notes,
    });
  };

  render() {
    const split = this.state.note
      .split(/[\n\r]/g)
      .map((split) => <p className="split">{split}</p>);
    return (
      <div>
        <h2>{this.props.title}</h2>
        <ReactPlayer className="p" url={this.props.instrumental} />

        <button onClick={this.handleClick}>Notes</button>
        {this.state.show ? <p className="myBox">{split}</p> : ""}
      </div>
    );
  }
}
export default Instrumentals;
