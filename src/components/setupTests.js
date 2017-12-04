const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-15');

Enzyme.configure({ adapter: new EnzymeAdapter() });
