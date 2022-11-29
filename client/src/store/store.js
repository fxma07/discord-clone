import { composeWithDevTools } from '@redux-devtools/extension';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducer/authReducer';
import alertReducer from './reducer/alertReducer';
import friendsReducer from './reducer/friendsReducer';
import chatReducer from './reducer/chatReducers';
import roomReducer from './reducer/roomReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    alert: alertReducer,
    friends: friendsReducer,
    chat: chatReducer,
    room: roomReducer,
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;