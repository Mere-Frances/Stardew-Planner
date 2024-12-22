import React, { useState } from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import Cooking from "../components/Cooking";
import Todo from "../components/ToDo";
import Fishing from "../components/Fishing";
import Calendar from "../components/Calendar";
import Minerals from "../components/Minerals";

const formatJson = (item) => {
  if (typeof item !== "object" || item === null) {
    return <span>{item}</span>;
  }

  if (Array.isArray(item)) {
    return (
      <ul>
        {item.map((el, index) => (
          <li key={index}>{formatJson(el)}</li>
        ))}
      </ul>
    );
  }

  return (
    <div className="json-object">
      {Object.keys(item).map((key) => (
        <div key={key} className="json-item">
          <strong>{key}:</strong> {formatJson(item[key])}
        </div>
      ))}
    </div>
  );
};

const Home = () => {
  const [columns, setColumns] = useState([[], [], []]);
  const [magnifiedItem, setMagnifiedItem] = useState(null);

  const addComponent = (componentName) => {
    const updatedColumns = [...columns];
    const nextColumnIndex = updatedColumns.findIndex(
      (col) => col.length === Math.min(...updatedColumns.map((c) => c.length))
    );
    updatedColumns[nextColumnIndex].push(componentName);
    setColumns(updatedColumns);
  };

  const removeComponent = (componentName) => {
    const updatedColumns = [...columns];
    updatedColumns.forEach((col, index) => {
      updatedColumns[index] = col.filter((comp) => comp !== componentName);
    });
    setColumns(updatedColumns);
  };

  const handleMagnify = (item) => {
    setMagnifiedItem(item);
  };

  const renderComponent = (componentName) => {
    const ComponentMap = {
      Cooking: (
        <Container
          key="Cooking"
          title="Cooking"
          includeBanner={true}
          content={
            <Cooking
              onRemove={() => removeComponent("Cooking")}
              onMagnify={handleMagnify}
            />
          }
        />
      ),
      Fishing: (
        <Container
          key="Fishing"
          title="Fishing"
          includeBanner={true}
          content={
            <Fishing
              onRemove={() => removeComponent("Fishing")}
              onMagnify={handleMagnify}
            />
          }
        />
      ),
      Minerals: (
        <Container
          key="Minerals"
          title="Minerals"
          includeBanner={true}
          content={
            <Minerals
              onRemove={() => removeComponent("Minerals")}
              onMagnify={handleMagnify}
            />
          }
        />
      ),
    };

    return ComponentMap[componentName];
  };

  return (
    <>
      <Header title="Welcome To Your Planner" />
      <section className="dynamic-container">
        <div className="column">
          <Container
            title="Checklist"
            className="checklist"
            content={<Todo />}
            includeBanner={true}
          />
          {columns[0].map((componentName) => renderComponent(componentName))}
        </div>
        <div className="column">
          <Container
            title="Features"
            className="features"
            includeBanner={true}
            content={
              <>
                <div
                  className="button"
                  onClick={() => addComponent("Fishing")}>
                  <img
                    src="https://stardewvalleywiki.com/mediawiki/images/thumb/8/82/Bream.png/32px-Bream.png"
                    alt="Fish"/>
                  Search Fish
                </div>
                <div
                  className="button"
                  onClick={() => addComponent("Cooking")}>
                  <img
                    src="https://stardewvalleywiki.com/mediawiki/images/1/1d/Cooking_Icon.png"
                    alt="Cooking"/>
                  Search Recipes
                </div>
                <div
                  className="button"
                  onClick={() => addComponent("Minerals")}>
                  <img
                    src="https://stardewvalleywiki.com/mediawiki/images/thumb/e/e8/Ruby_Node.png/32px-Ruby_Node.png"
                    alt="Minerals"/>
                  Search Minerals
                </div>
                <div
                  className="button">
                  <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/0/05/Standard_Farm_Map_Icon.png/32px-Standard_Farm_Map_Icon.png"
                    alt="farm"
                  />
                  <a href="https://stardew.info/" target="_blank">Farm Layout</a>
                </div>
              </>
            }
          />
          {columns[1].map((componentName) => renderComponent(componentName))}
        </div>
        <div className="column">
          <Container
            title="Magnify"
            className="magnify"
            content={
              <>
                <h3>Select the magnifying glass beside an item</h3>
                <div className="magnifyer">
                  {magnifiedItem ? (
                    <div>
                      <h4>{magnifiedItem.name}</h4>
                      {formatJson(magnifiedItem)}
                    </div>
                  ) : (
                    <p>No item selected</p>
                  )}
                </div>
              </>
            }
            includeBanner={true}
          />
          {columns[2].map((componentName) => renderComponent(componentName))}
        </div>
      </section>

      <section className="calendar-container">
        <Container
          title="Calendar"
          className=""
          content={<Calendar />}
          includeBanner={true}
        />
      </section>
    </>
  );
};

export default Home;
