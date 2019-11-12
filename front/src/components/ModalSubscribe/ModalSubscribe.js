import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import "./ModalSubscribe.scss";
import { closeModal } from "../../actions/subscribe";

class ModalSubscribe extends Component {
  render() {
    const {
      isModalOpen,
      subscriber,
      isMailSent,
      message,
      isError,
      errorDetails
    } = this.props.subscribe;
    const closeModal = this.props.closeModal;

    return (
      <Fragment>
        <div className="container">
          <div
            className={`modal fade ${
              isModalOpen ? "show modal-styleoptions" : ""
              }`}
            id="myModal"
          >
            <div className="modal-dialog modal-sm">
              <div className="modal-content">
                <div className="modal-header text-dark text-center font-size-2">
                  <h5
                    className={`modal-title ${isError ? "error-message" : ""}`}
                  >
                    {message}
                  </h5>
                </div>

                <div className="modal-body bg-light text-dark text-center">

                  <span>
                    {isMailSent ? "We sent you a letter to your e-mail account." : "Please, check your e-mail account."}
                  </span>

                  <span>{isError ? errorDetails : ""}</span>
                </div>

                <div className="modal-footer">
                  <button
                    onClick={closeModal}
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = function (store) {
  return {
    subscribe: store.subscribe,
  };
};

export default connect(
  mapStateToProps,
  { closeModal }
)(ModalSubscribe);
