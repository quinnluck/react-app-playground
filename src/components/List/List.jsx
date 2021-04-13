import React, { Component } from "react";
import ColorText from "../ColorText/ColorText";

class List extends Component {
  state = {
    colorList: [],
    errorMessage: "",
    inputColor: ""
  };

  render() {
    var { inputColor, errorMessage, colorList } = this.state;
    return (
      <div>
        {errorMessage && <h3>{errorMessage}</h3>}
        <input
          type="text"
          placeholder="Enter a color..."
          onChange={(e) => this.setState({ inputColor: e.target.value })}
          value={inputColor}
        />
        <button type="button" onClick={this._saveColor}>
          Save
        </button>

        <ul>
          {colorList.map((color) => {
            return <ColorText label={color} />;
          })}
        </ul>
      </div>
    );
  }

  _saveColor = () => {
    if (this.state.inputColor === "") {
      return;
    }

    if (!this.state.colorList.includes(this.state.inputColor)) {
      this.setState({
        colorList: [...this.state.colorList, this.state.inputColor],
        errorMessage: "",
        inputColor: ""
      });
    } else {
      this.setState({
        errorMessage: "Color already exists!",
        inputColor: ""
      });
    }
  };
}

export default List;
