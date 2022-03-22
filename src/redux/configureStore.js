import {createStore,combineReducers,applyMiddleware} from "redux";
import {createForms} from "react-redux-form";
import {InitialFeedback} from "./forms";
import thunk from "redux-thunk";
import logger from "redux-logger";
import {PROMOTIONS} from "./promotions";
import {Comments} from "./comments";
import {PARTNERS} from "./partners";
import {Campsites} from "./campsites";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            campsites: Campsites,
            comments: Comments,
            partners: PARTNERS,
            promotions: PROMOTIONS,
            ...createForms({
                feedbackForm: InitialFeedback,
            }),
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
};