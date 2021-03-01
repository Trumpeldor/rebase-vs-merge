import React from 'react';
import Utils from '../../utils/Utils';
import './index.css';

function Forecast({ forecast: { dt, temp, weather }, unitId }) {
  const image = weather['0'].main;
  return (
    <table className="forecast">
      <tbody>
        <tr>
          <td className={image} alt={image} title={image} />
        </tr>
        <tr>
          <td className="day">{Utils.getDayStr(dt)}</td>
        </tr>
        <tr>
          <td className="date">{Utils.getDateStr(dt)}</td>
        </tr>
        <tr>
          <td>
            <table>
              <tbody>
                <tr>
                  <td className="min-max">Minimum:</td>
                  <td className="min">{temp.min}°C</td>
                </tr>
                <tr>
                  <td className="min-max">Maximum:</td>
                  <td className="max">{temp.max}°C</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Forecast;
