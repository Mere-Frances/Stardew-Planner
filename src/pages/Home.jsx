import React, { useState } from 'react';
import Container from '../components/Container';
import Header from '../components/Header';
import Villagers from '../components/Villagers';
import Todo from '../components/ToDo';
import Fishing from '../components/Fishing';

const Home = () => {
  const [components, setComponents] = useState([]);
  const toggleComponent = (componentName) => {
      if (!components.includes(componentName)) {
          setComponents([...components, componentName]);
      }
  };
  const removeComponent = (componentName) => {
      setComponents(components.filter((comp) => comp !== componentName));
  };
  return (
    <>
      <Header title='Welcome To Your Planner' />
      <section>
        <Container
          title='Checklist'
          className='checklist'
          content={<Todo />}
          includeBanner={true}
        />
        <Container
          title='Features'
          className='features'
          includeBanner={true}
          content={
            <>
              <div className='button' onClick={() => toggleComponent('Fishing')}>Search Fish</div>
              <div className='button' onClick={() => toggleComponent('Villagers')}>Search Recipes</div>
              <div className='button' onClick={() => toggleComponent('Fishing')}>Search Villagers</div>
              <div className='button'>Open Calendar</div>
            </>
          }
        />

        <Container
          title='Villagers'
          className='villagers'
          content={<Villagers />}
          includeBanner={true}
        />

        {/* {components.includes('Villagers') && (
            <Container
                title='Villagers'
                content={<Villagers onRemove={() => removeComponent('Villagers')} />}
            />
        )} */}
        {components.includes('Fishing') && (
            <Container
                title='Fishing'
                content={<Fishing onRemove={() => removeComponent('Fishing')} />}
            />
        )}
      </section>
    </>
  );
};

export default Home;
