import { fromJS } from 'immutable';
import {
    PAYMENTCALC_DATA

} from './constants';
import paymentDetails from './../../data/paymentCalculator.json';

const initialState = fromJS({ 
    paymentDetails,
    "activeTab": "tab1"


})

export default function paymentCalculatorContainerReducer(state = initialState, action) {
    // console.log(action.payload);
   switch (action.type) {
        case PAYMENTCALC_DATA:
            return state.set("activeTab", action.payload)
        default:
            return state;
    }
}
