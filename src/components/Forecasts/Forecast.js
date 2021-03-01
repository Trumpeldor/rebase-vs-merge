import React from 'react';
import Utils from '../../utils/Utils';
import './index.css';

function Forecast({ forecast: { dt, temp, weather }, unitId }) {
  const image = weather['0'].main;
  console.log(image)
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <div className={image} alt={image} title={image}></div>
            </td>
          </tr>
          <tr>
            <td>
              <label className="day">{Utils.getDayStr(dt)}</label>
            </td>
          </tr>
          <tr>
            <td>
              <label className="date">{Utils.getDateStr(dt)}</label>
            </td>
          </tr>
          <tr>
            <td>
              <label>Min temp: </label>
              <label className="min">{temp.min}</label>
              <label>°C</label>
            </td>
          </tr>
          <tr>
            <td>
              <label>Max temp: </label>
              <label className="max">{temp.max}</label>
              <label>°C</label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Forecast;
