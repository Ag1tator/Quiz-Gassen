import React from 'react';

class Form1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      writer: props.uid,
      body: "",
      answerNum: -1,
      answer: "",
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onTextAreaChange = this.onTextAreaChange.bind(this);
  }

  onChange(e) {
    console.log(e.target)
    this.setState({ body: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }
  onTextAreaChange(e) {
    this.setState({ answer: e.target.value })
  }
  render() {
    var states = [
      { code: "CA", name: "California" },
      { code: "HI", name: "Hawaii" },
      { code: "TX", name: "Texas" },
      { code: "WA", name: "Washington" }];
    var options = states.map(
      (n) => (
        <option key={n.code} value={n.code}>
          {n.name}
        </option>
      )
    );
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <select
            value={this.state.usstate}
            onChange={this.onChange}>
            {options}
          </select>
        </div>
        <textarea
          value={this.state.desc}
          onChange={this.onTextAreaChange} />
        <div>
          <button type="submit">OK</button>
        </div>
      </form>
    );
  }
}

export default Form1;