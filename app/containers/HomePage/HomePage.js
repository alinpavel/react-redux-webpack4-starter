import React from 'react';
// import { Link } from 'react-router-dom';
import './style.scss';

export default class CompanyOnboarding extends React.Component {
  constructor() {
    super();
    this.state = {
      test: true
    };
  }

  render() {
    const { test } = this.state;
    return (
      <div className="container-fluid"><br /><br /><br /><br />
        <div className="row">
          <section className="izi-content p-0 py-2 p-sm-5">
            {test}
            <input type="text" onChange={this.props.postWorker} placeholder="type something" />
            This is from redux: {this.props.value}
          </section>
          <br /><br /><br /><br /><br /><br /><br />
        </div>
      </div>
    );
  }
}
