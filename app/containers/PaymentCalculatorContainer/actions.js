/*
 *
 * BYODConfig actions
 *
 */

import {
	PAYMENTCALC_DATA
} from './constants';

export const fetchPaymentDetailsData = (data) => {
   return {
     type: PAYMENTCALC_DATA,
     payload: data
   };
}

