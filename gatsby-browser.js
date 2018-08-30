import { initializeFirebase } from './push-notification';

exports.onInitialClientRender = () => {
    initializeFirebase(); 
  }