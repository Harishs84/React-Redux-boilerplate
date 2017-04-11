/*
* Payment Calculator Page
*/

import React, { Component, PropTypes } from 'react';
import LinkList from './LinkList';
import AnchorLink from './../../common/AnchorLink';
import classnames from 'classnames';
import './paymentCalculator.css';

class PaymentCalculator extends Component {

  _handleClick = (e) => {
    const { fetchPaymentDetailsData } = this.props;
    const data = e.target.dataset.id;

    fetchPaymentDetailsData(data); 
  }

  renderData = (paymentDetails) => {
    const newData = paymentDetails[0];

    return (newData) && (
      <div className="btn-links">
        {newData && newData.Inputs.newTemp.Section.map((data, index) => {
          const { Inputs } = data;

            return(
              (data.DisplayLocation === "TopHeader" && 
                <div key={index} className="heading">
                <h1>{Inputs.MainHeader}</h1>
                <p className="bold">{Inputs.SubHeader}</p>
              </div>
              )
            )
        })}
      </div>
    )
  }

  renderMonthlyDataPlan = (paymentDetails, activeTab) => {
    const newData = paymentDetails[0];
    
    return (newData) && (
      <div className="wrapper">
        <h3>Select your monthly data plan</h3>
        <p className="bold">Unlimited Talk &amp; Text is included with every size.</p>

        {
          newData && newData.tab.items.map(tabData => (
           <AnchorLink
              {...tabData}
              activeTab = {(tabData.id === activeTab) ? 'currentItem' : '' }             
              onClick={this._handleClick} 
              key={tabData.id} 
            />
          ))
        }

        {
          <ul>
             {
                newData && newData.Inputs.newTemp.Section.map((data, index) => {
                const { Inputs } = data;
                  return(

                    (data.DisplayLocation === "LeftBottom" && 
                        
                        Inputs.PlanList.plan.map((listData, index) => {
                          return(
                            (listData.tab === activeTab &&
                              <LinkList data={listData} key={index} />
                            )
                          )
                      })                    
                    )
                )      
              })
            }
          </ul>
        }
      </div>
    )
  }

  render() {
    const { paymentDetails, activeTab } = this.props;

    return (
      <div>
        {this.renderData(paymentDetails)}
        {this.renderMonthlyDataPlan(paymentDetails, activeTab)}
      </div>
    )
    
  }
}

PaymentCalculator.propTypes = {
  paymentDetails: PropTypes.array
}

export default PaymentCalculator;
