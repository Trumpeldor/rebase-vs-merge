import React from 'react';
import { connect } from 'react-redux';
import { execute } from '../../net/Query';
import Actions from '../../store/actions/forecasts';
import Utils from '../../utils/Utils';
import './index.css';

function Form({ forecasts, clear }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    execute();
  };
  const empty = !Utils.isLongerArray(forecasts, 0);
  return (
    <form onSubmit={handleSubmit}>
      <button title='Clear' disabled={empty} type='button' onClick={clear}>Clear</button>
      <input title='Submit' disabled={!empty} type='submit' value='Submit' />
    </form>
  );
}

export default connect(
  state => ({
    forecasts: state.forecasts
  }),
  dispatch => ({
    clear: () => dispatch(Actions.clear())
  })
)(Form)
