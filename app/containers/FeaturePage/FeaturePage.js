import React from 'react';
import { Helmet } from 'react-helmet';
import './style.scss';

export default class FeaturePage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="feature-page">
        <Helmet>
          <title>Feature Page</title>
          <meta
            name="description"
            content="Feature page of React.js Boilerplate application"
          />
        </Helmet>
        <h1>Features</h1>
        <p>Super uber page</p>
      </div>
    );
  }
}
