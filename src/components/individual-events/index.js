import React from 'react';
import PropTypes from 'prop-types';

import find from 'lodash/find';

import EventSelection from './event-selection';

import './styles.css';

const IndividualEventOptions = (props) => {
  const { componentEventSelections, onWebhookChange } = props;

  const onCheckmarkChecked = (componentEventSelectionID, eventSelection) => {
    const updatedCES = find(componentEventSelections, ces => ces.id === componentEventSelectionID);
    updatedCES.eventSelections.map((es) => {
      if (es.id === eventSelection.id) {
        es.selected = !eventSelection.selected;
      }
    });
    const data = {
      componentEventSelections,
    };

    onWebhookChange(data);
  };

  return (
    <div>
      {
        componentEventSelections.map((componentEventSelection) => {
          return (
            <span key={componentEventSelection.id}>
              <h4 key={componentEventSelection.id} className="checkbox-group">{componentEventSelection.label}</h4>
              {
                componentEventSelection.eventSelections.map(eventSelection => <EventSelection key={eventSelection.id} id={componentEventSelection.id} eventSelection={eventSelection} onCheckmarkChecked={onCheckmarkChecked} />)
              }
            </span>
          );
        })
      }
    </div>
  );
};

IndividualEventOptions.propTypes = {
  componentEventSelections: PropTypes.array,
  onWebhookChange: PropTypes.func.isRequired,
};

export default IndividualEventOptions;
