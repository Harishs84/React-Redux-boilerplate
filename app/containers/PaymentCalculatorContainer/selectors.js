import { createSelector } from 'reselect';

const selectPaymentCalcConfigDomain = () => (state) => state.get('paymentCalculatorContainer');

const selectPaymentCalcConfig = () => createSelector(
  selectPaymentCalcConfigDomain(),
  (substate) => substate.toJS()
);

export default selectPaymentCalcConfig;
export {
  selectPaymentCalcConfigDomain,
};
