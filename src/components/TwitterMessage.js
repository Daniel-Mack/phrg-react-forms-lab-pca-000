import React from "react";
import PropTypes from "prop-types"

export default class TwitterMessage extends React.Component {
  constructor() {
    super()

    this.state = {
      messageValue: ""
    }
  }

    handleMessage = event => {
    this.setState({
      messageValue: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
        value={this.state.messageValue}
        onChange={this.handleMessage}
        />
        <p>{this.props.maxChars - this.state.messageValue.length}</p>
      </div>
    )
  }
}

TwitterMessage.defaultProps = {
  maxChars: 50 //random number
}

TwitterMessage.propTypes = {
  maxChars: PropTypes.integer
}
