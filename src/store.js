import { createStore } from 'redux';
import reducer from './js/reducers/index';
const store = createStore(reducer);

export default store;