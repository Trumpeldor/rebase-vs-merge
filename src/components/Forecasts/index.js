import React, { useState } from 'react';
import { connect } from 'react-redux';
import Utils from '../../utils/Utils';
import ItemsCarousel from 'react-items-carousel';
import './index.css';

function Forecasts({ forecasts }) {
	const [activeItemIndex, setActiveItemIndex] = useState(0);
  if (activeItemIndex > 0 && !Utils.isLongerArray(forecasts, 0)) {
    setActiveItemIndex(0);
  }
  return (
    <div className="forecasts">
      <ItemsCarousel
        numberOfCards={4}
        gutter={12}
        showSlither={true}
        firstAndLastGutter={true}
        freeScrolling={false}
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        activePosition={'center'}
        chevronWidth={24}
        rightChevron={'>'}
        leftChevron={'<'}
        outsideChevron={false}
      >
      {forecasts.map((forecast, i) => {
        return (
          <label key={i}>{forecast.dt}</label>
        );
      })}
      </ItemsCarousel>
    </div>
  );
}

export default connect(
  state => ({
    forecasts: state.forecasts
  })
)(Forecasts)
