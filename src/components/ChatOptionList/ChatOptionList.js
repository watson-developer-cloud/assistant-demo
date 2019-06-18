import React from 'react';
import PropTypes from 'prop-types';
import ChatOption from '../ChatOption/ChatOption';
import CreditCardOption from '../CreditCardOption/CreditCardOption';
import ChatUnorderedList from '../ChatUnorderedList/ChatUnorderedList';

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
    this.props.onUserInput('option', option.value.input.text);
  }

  render() {
    const options = this.props.isLastMessage || this.state.options[0].isSelected ? this.state.options : []; // eslint-disable-line

    if (this.props.type === 'creditCard') {
      return (
        <div>
          {options.map(option => (
            <CreditCardOption
              cardName={option.cardName}
              description={option.description}
              onUserInput={(value) => {
                this.onUserInput(value);
              }}
            />
          ))}
        </div>
      );
    }
    if (this.props.type === 'button') {
      return (
        <div className="chat-option-list">
          {options.map(option => (
            <ChatOption
              key={option.value.input.text}
              option={option}
              onUserInput={(selectedOption) => {
                this.optionSelect(selectedOption);
              }}
              isSelected={option.isSelected}
            />
          ))}
        </div>
      );
    }
    if (this.props.type === 'list') {
      return (
        <div className="chat-option-list">
          <ChatUnorderedList
            options={options}
            onUserInput={(selectedOption) => {
              this.optionSelect(selectedOption);
            }}
            isSelected={this.state.options[0].isSelected}
          />
        </div>
      );
    }
    return null;
  }
}

ChatOptionList.propTypes = {
  type: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onUserInput: PropTypes.func.isRequired,
  isLastMessage: PropTypes.bool.isRequired,
};

export default ChatOptionList;
