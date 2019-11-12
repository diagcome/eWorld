import React from "react";
import ScrollUpButton from "react-scroll-up-button";
import './SkrollUp.scss';

export default class Index extends React.Component {
  render() {
    return (
      <div className='skrollup'>
        <ScrollUpButton
          EasingType="easeInOutCubic"
          ShowAtPosition={150}
          AnimationDuration={1000}
        />
      </div>
    );
  }
}