import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Row, Col } from 'react-bootstrap'


export default connect(
  (state) => {
    return {
      orders: state.orders.orders
    }
  }
)(class extends React.Component {


  render () {
    const locale = "en-us"
    const options = {year: 'numeric', month: 'long', day: 'numeric'}

    const orders = this.props.orders.map(order => {
      const date = new Date(order.created_at)

      return (
      <Link to={`/order/${order.id}`} key={order.id}>
        <Row className="order-list-item">
          <Col md={4}>
            <h4>{date.toLocaleString(locale, options)}</h4>
          </Col>
          <Col md={4}>
            <h4>Order No. {order.id}</h4>
          </Col>
          <Col md={4}>
            <h4>${order.totalPrice.toFixed(2)}</h4>
          </Col>
        </Row>
        </Link>
      )
    })

    return (
      <div className="order-padding">
        <h1>Order History</h1>

        <div className="order-list-padding">
        { this.props.orders.length ? orders
          : <h3>Looks like you don't have any orders!</h3>
        }
        </div>


      </div>
    );
}
})




