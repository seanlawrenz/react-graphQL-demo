import React from 'react';
import PropTypes from 'prop-types';

import find from 'lodash/find';

import { Checkbox } from 'antd';

import './styles.css';

const IndividualEventOptions = (props) => {
  const { componentEventSelections } = props;

  const onChange = (event) => {
    const target = event.target.value;

    const componentEventSelection = find(componentEventSelections, component => component.id === target.componentEventSelectionId);
    const eventSelection = find(componentEventSelection.eventSelections, eventSelections => eventSelections.id === target.eventSelection.id);

    console.log(componentEventSelection, eventSelection);
  };

  return (
    <div className="row">
      <div className="col-md-12">
        {
          componentEventSelections.map((componentEventSelection) => {
            return (
              <span key={componentEventSelection.id}>
                <h4 key={componentEventSelection.id} className="checkbox-group">{componentEventSelection.label}</h4>
                {
                  componentEventSelection.eventSelections.map((eventSelection) => {
                    const value = { componentEventSelectionId: componentEventSelection.id, eventSelection };
                    return <Checkbox value={value} key={eventSelection.id} onChange={onChange} checked={eventSelection.selected}>{eventSelection.label}</Checkbox>;
                  })
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
