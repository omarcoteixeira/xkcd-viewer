import { combineReducers } from 'redux';

import ComicNumber from './ComicNumber';
import ComicData from './ComicData';

const reducers = combineReducers({ComicNumber, ComicData});

export default reducers;