import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import ModalSubscribe from "../ModalSubscribe/ModalSubscribe";

import { addSubscriber } from "../../actions/subscribe";
import "./Subscribe.scss";

class Subscribe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      // isLoading: false,
      message: ""
    };
  }

  setEmail(ev) {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  }

  subscribe(ev) {
    ev.preventDefault(); // to ensure send e-mail and not reload the page while subscribe
    if (!this.state.email) {
      // to prevent from subscribe empty e-mail field
      return;
    }
    this.props.addSubscriber(this.state.email);
    this.setState({
      email: ""
    });
  }

  render() {
    const { email, isLoading } = this.state;

    return (
      <Fragment>
        <section className="subscribe">
          <div className="container-fluid">
            <div className="row subscribe__row-form">
              <div className="subscribe__row-form__block">
                <h5 className="subscribe__row-form__text">
                  STAY CONNECTED WITH OUR EMAIL UPDATES
                </h5>
              </div>
              <div className="subscribe__row-form__form">
                <form className="form-inline subscribe__row-form__form_subscribe-form">
                  <div className="form-group mb-2">
                    <input
                      name="email"
                      value={email}
                      onChange={ev => this.setEmail(ev)}
                      type="email"
                      className="form-control-plaintext subscribe__input-subscribe"
                      id="Email"
                      placeholder="Enter Your Email Adress"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    onClick={ev => this.subscribe(ev)}
                    className="btn btn-subscribe"
                  >
                    {this.props.isLoading && (
                      <span
                        className="spinner-border pr-sm-2 spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                    )}
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <ModalSubscribe />
      </Fragment>
    );
  }
}

const mapStateToProps = function (store) {
  return {
    subscriber: store.subscribe.subscriber,
    isLoading: store.subscribe.isLoading

  };
};

export default connect(
  mapStateToProps,
  {
    addSubscriber: addSubscriber
  }
)(Subscribe);
