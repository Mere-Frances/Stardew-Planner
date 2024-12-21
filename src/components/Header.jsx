import React from 'react'

const Header = ({title}) => {
  return (
    <>
        <div className='header'>
            <div className='header-title'>
                <h2 className='title-value'>{title}</h2>
            </div>
        </div>
    </>
  )
}

export default Header
