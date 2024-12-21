import React from 'react'

const Container = ({title, content, className, includeBanner}) => {
  return (
    <>
      <div className={`content-container ${className || ''}`}>
        {includeBanner && (
            <div className='header-title'>
                <h3 className='title-value'>{title}</h3>
            </div>

        )}
        <div className='block-container'>
          <div className='block-body'>{content}</div>
        </div>
      </div>
    </>
  )
}

export default Container
