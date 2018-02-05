/* makes a POST request to the message endpoint on the backend
 *
 * @param {String} text - the inputted text from the user
 * @param {Object} context - the current context object for the conversation
 * @return {Promise} - promise that resolves into the service output object
 */
const fetchMessage = (text, context) => {
  const payload = {
    input: { text },
    context,
  };

  return new Promise((resolve, reject) => {
    fetch('/api/message', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((data) => {
        data.json()
          .then((json) => {
            resolve(json);
          });
      })
      .catch((err) => {
        reject(new Error(err));
      });
  });
};

/* executes programmatic calls to the backend
 *
 * @param {Object} actionObj - an object containing details about the
 * programmatic call
 *
 * @return {Promise} - promise that resolves into an object which contains the
 * response to send to conversation
 */
const executeClientAction = (actionObj) => {
  let endpoint;
  let value;

  switch (actionObj.name) {
    case 'ValidateAcc':
      endpoint = '/bank/validate';
      value = actionObj.parameters.chosen_acc;
      break;
    case 'RetrieveZip':
      endpoint = 'bank/locate';
      value = actionObj.parameters.zip_value;
      break;
    default:
      return null;
  }

  // construct the endpoint based on which client action
  const parameterizedEndpoint = `${endpoint}?value=${value}`;

  return new Promise((resolve, reject) => {
    fetch(parameterizedEndpoint, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
      .then((data) => {
        data.json()
          .then((json) => {
            resolve(json);
          });
      })
      .catch((err) => {
        reject(new Error(err));
      });
  });
};

/* executes the appropriate workspace action
 *
 * @param {Object} actionObj - an object containing keys relating to any
 * workspace actions
 *
 * @return {Object} - an object containing the type of response, and the
 * content of the response to be added to the ChatList
 */
const executeWorkspaceAction = (actionObj) => {
  if (actionObj.cc_displaystatement) {
    return {
      type: 'balance',
      content: actionObj.cc_displaystatement,
    };
  } else if (actionObj.appointment_display) {
    return {
      type: 'appointment',
      content: actionObj.appointment_display,
    };
  } else if (actionObj.connect_agent) {
    return {
      type: 'agent',
      content: {},
    };
  } else if (actionObj.cc_selecteddisplay) {
    return {
      type: 'option',
      subType: 'image',
      content: [],
    };
  }
};

export { fetchMessage, executeClientAction, executeWorkspaceAction };
