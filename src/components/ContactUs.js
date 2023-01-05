import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Please feel free to contact me via linkedin, WhatsApp or Email. 
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Linked in :{resumeData.linkedinId}</h4>
                <h4>Email:likando89@gmail.com</h4>
                <h4>WhatsApp:06 0464 9531</h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}