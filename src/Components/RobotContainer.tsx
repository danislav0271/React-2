import React, { FunctionComponent } from 'react'

const RobotContainer: FunctionComponent = () => {
  return (
    <div className='robot-container male'>
        <div className='head'>
            <div className='left-eye'></div>
            <div className='right-eye'></div>
            <div className='mouth'></div>
        </div>
        <div className='left-hand'></div>
        <div className='right-hand'></div>
        <div className='left-leg'></div>
        <div className='right-leg'></div>
        <div className='body'></div>
        <p className='robot-name'>Basic Robot</p>
    </div>
  )
}

export default RobotContainer