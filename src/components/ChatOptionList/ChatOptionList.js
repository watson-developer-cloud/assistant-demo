import React from 'react';
import PropTypes from 'prop-types';
import ChatOption from '../ChatOption/ChatOption';

class ChatOptionList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: [],
    };
  }

  componentWillMount() {
    this.setState({ options: this.props.options });
  }

  optionSelect(option) {
    this.setState({ options: [Object.assign(option, { isSelected: true })] });
    this.props.onUserInput('option', option.value);
  }

  render() {
    return (
      <div className="chat-option-list">
        {this.state.options.map(option => (
          <ChatOption
            option={option}
            onUserInput={(selectedOption) => { this.optionSelect(selectedOption); }}
            isSelected={option.isSelected}
          />
        ))}
      </div>
    );
  }
}

ChatOptionList.propTypes = {
  options: PropTypes.array.isRequired,
  onUserInput: PropTypes.func.isRequired,
};

export default ChatOptionList;
