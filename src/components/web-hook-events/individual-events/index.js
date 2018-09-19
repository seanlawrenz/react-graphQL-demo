import React from 'react';
import PropTypes from 'prop-types';

import EventSelection from './event-selection';

import './styles.css';

const IndividualEventOptions = (props) => {
  const { componentEventSelections } = props;

  return (
    <div className="row">
      <div className="col-md-12">
        {
          componentEventSelections.map((componentEventSelection) => {
            return (
              <span key={componentEventSelection.id}>
                <h4 key={componentEventSelection.id} className="checkbox-group">{componentEventSelection.label}</h4>
                {
                  componentEventSelection.eventSelections.map(eventSelection => <EventSelection key={eventSelection.id} eventSelection={eventSelection} />)
                }
              </span>
            );
          })
        }
      </div>
    </div>
  );
};

IndividualEventOptions.propTypes = {
  componentEventSelections: PropTypes.array,
};

export default IndividualEventOptions;
