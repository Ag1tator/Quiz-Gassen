import React from "react";

class CreateRoom extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="roomName">Room Name</label>
        <input type="text" name="roomName" id="roomName" />
        <label htmlFor="description">Description</label>
        <input type="text" name="description" id="description" />
        <button>Add new quiz</button>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default CreateRoom;