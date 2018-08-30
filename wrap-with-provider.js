import { initializeFirebase } from './push-notification';

initializeFirebase(); 

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => <p id="rocks">{element}</p>