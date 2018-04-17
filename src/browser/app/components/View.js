import React, { PureComponent } from 'react';
import Radium from 'radium';

class View extends PureComponent {
  constructor(props, context) {
    super(props);
  }
  render() {
    const { style, row, className, onClick, onMouseOver, onMouseDown, id } = this.props;
    const flexStyle = {
      display: 'flex',
      flexDirection: row ? 'row' : 'column',
    };
    return (
      <div
        id={id}
        className={className}
        onClick={onClick}
        onMouseOver={onMouseOver}
        onMouseDown={onMouseDown}
        style={Array.isArray(style) ? [flexStyle, ...style] : [flexStyle, style]}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Radium(View);
