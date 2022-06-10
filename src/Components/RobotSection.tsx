import React, { FunctionComponent } from 'react';
import RobotContainer from './RobotContainer';
import Content from './Content';

const RobotSection: FunctionComponent = () => {
  return (
    <div className='factory-section slide' id='slide-1'>
        <h2>Basic Robot</h2>
        <div className='content-wrapper'>
            <RobotContainer />
            <Content />
        </div>
    </div>
  )
}

export default RobotSection