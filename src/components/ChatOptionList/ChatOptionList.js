import React from 'react';
import PropTypes from 'prop-types';
import ChatOption from '../ChatOption/ChatOption';
import CreditCardOption from '../CreditCardOption/CreditCardOption';

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
    if (this.props.type === 'creditCard') {
      return (
        <div>
          {this.state.options.map(option => (
            <CreditCardOption
              cardName={option.cardName}
              description={option.description}
              onUserInput={(value) => { this.onUserInput(value); }}
            />
          ))}
        </div>
      );
    }

    return (
      <div className="chat-option-list">
        {this.state.options.map(option => (
          <ChatOption
            key={option.value}
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
  type: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onUserInput: PropTypes.func.isRequired,
};

export default ChatOptionList;
