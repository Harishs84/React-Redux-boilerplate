/*
 * PaymentCalculator Page
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import selectPaymentCalcConfig from './selectors';
import PaymentCalculator  from 'components/PaymentCalculator';
import { fetchPaymentDetailsData } from './actions';


const mapStateToProps = selectPaymentCalcConfig();


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchPaymentDetailsData
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentCalculator);
