import React from 'react';
import Dimensions from 'react-dimensions';

class DimensionsProvider extends React.Component {
  render() {
    return (
      <div>
        {this.props.children({
          containerWidth: this.props.containerWidth,
        })}
      </div>
    );
  }
}

export default Dimensions()(DimensionsProvider);
