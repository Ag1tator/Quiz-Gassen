import React from 'react';

class TableElement extends React.Component {

  render() {
    console.log(this.props)
    return (
      <tr>
        {console.log(this.props)}
        <td>{this.props.body}</td>
        <td>{this.props.answer}</td>
        <td>{this.props.description}</td>
      </tr>
    )
  }
}

export default TableElement
