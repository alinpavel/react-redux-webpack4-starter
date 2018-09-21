import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import { postCompanyOnboarding } from './actions';
import { makeChangeValue } from './selectors';
import reducer from './reducer';
import CompanyOnboarding from './HomePage';

const mapDispatchToProps = (dispatch) => ({
  postWorker: (evt) => dispatch(postCompanyOnboarding(evt.target.value))
});

const mapStateToProps = createStructuredSelector({
  value: makeChangeValue(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });

export default compose(withReducer, withConnect)(CompanyOnboarding);
