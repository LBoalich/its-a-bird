import { combineReducers} from "redux";
import quizReducer from '../features/quiz/quizSlice';
import resultsReducer from "../features/results/resultsSlice";
import descriptionsReducer from "../features/descriptions/descriptionsSlice";
import typesReducer from "../features/types/typesSlice";


const rootReducer = combineReducers({
    quiz: quizReducer,
    results: resultsReducer,
    descriptions: descriptionsReducer,
    types: typesReducer,
});

export default rootReducer;

