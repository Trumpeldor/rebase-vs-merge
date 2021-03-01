import React, { useState } from 'react';
import { connect } from 'react-redux';
import { execute } from '../../net/Query';
import Actions from '../../store/actions/forecasts';
import Utils from '../../utils/Utils';
import locations from '../../net/locations.json';
import './index.css';

function Form({ forecasts, clear }) {
  const [locationId, setLocationId] = useState(0);
  const handleSelectChange = ({ target: { value } }) => {
    setLocationId(parseInt(value));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { lat, lon } = locations[locationId];
    execute({ lat, lon });
  };
  const empty = !Utils.isLongerArray(forecasts, 0);
  return (
    <form onSubmit={handleSubmit}>
      <select id='locationId' value={locationId} disabled={!empty} onChange={handleSelectChange}>
      {locations.map((locationOption, key) => {
        return <option key={key} value={key}>{locationOption.name}</option>;
      })}
      </select>
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
