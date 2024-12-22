import React, { useState } from 'react';
import fishData from '/public/Fish.json';

const PageOne = () => <img src='https://stardewvalleywiki.com/mediawiki/images/6/6d/Calendar_Spring.png' alt='spring calendar' />;
const PageTwo = () => <img src='https://stardewvalleywiki.com/mediawiki/images/e/e6/Calendar_Summer.png' alt='summer calendar' />;
const PageThree = () => <img src='https://stardewvalleywiki.com/mediawiki/images/c/cb/Calendar_Fall.png' alt='autumn calendar' />;
const PageFour = () => <img src='https://stardewvalleywiki.com/mediawiki/images/5/5e/Calendar_Winter.png' alt='winter calendar' />;

const Calendar = () => {
  const [currentPage, setCurrentPage] = useState('page1');

  // Map seasons to page IDs for filtering
  const seasonMap = {
    page1: 'Spring',
    page2: 'Summer',
    page3: 'Fall',
    page4: 'Winter',
  };

  // Filter fish based on the current page's season
  const currentSeason = seasonMap[currentPage];
  const filteredFish = fishData.filter((fish) =>
    fish.seasons.includes(currentSeason) || fish.seasons.includes('All')
  );

  const renderPage = () => {
    switch (currentPage) {
      case 'page1':
        return <PageOne />;
      case 'page2':
        return <PageTwo />;
      case 'page3':
        return <PageThree />;
      case 'page4':
        return <PageFour />;
      default:
        return <div>404 - Page not found</div>;
    }
  };

  return (
    <div className='calendar-content' style={{ display: 'flex' }}>
        <div className='calendar-filters'>
            <button className='button' onClick={() => setCurrentPage('page1')}>Spring</button>
            <button className='button' onClick={() => setCurrentPage('page2')}>Summer</button>
            <button className='button' onClick={() => setCurrentPage('page3')}>Fall</button>
            <button className='button' onClick={() => setCurrentPage('page4')}>Winter</button>
        </div>
        <div className='calendar'>
            {renderPage()}

            <div className='fish-list--container'>
                <h3>{currentSeason} Fish</h3>
                <div className='fish-items'>
                    {filteredFish.map((fish, index) => (
                    <p key={index}>
                        <strong>{fish.name}</strong>
                    </p>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
};

export default Calendar;
