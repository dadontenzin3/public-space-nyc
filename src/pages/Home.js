import React, { useState } from 'react';

const boroughMapping = {
  'Brooklyn': 'B',
  'Queens': 'Q',
  'Manhattan': 'M',
  'Bronx': 'X',
  'Staten Island': 'R'
};

function Home(props) {
  const [eapplyFilter, setEapplyFilter] = useState('');
  const [boroughFilter, setBoroughFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  const getBoroughCode = (userInput) => {
    const userInputLower = userInput.toLowerCase();
    return boroughMapping[userInputLower] || userInputLower;
  };

  const filteredSpace =
    props.space &&
    props.space.filter((item) => {
      const matchEapply =
        item.eapply &&
        typeof item.eapply === 'string' &&
        item.eapply.toLowerCase().includes(eapplyFilter.toLowerCase());
      const matchBorough =
        item.borough &&
        typeof item.borough === 'string' &&
        item.borough.toLowerCase().includes(getBoroughCode(boroughFilter).toLowerCase());
      const matchCategory =
        item.typecategory &&
        typeof item.typecategory === 'string' &&
        item.typecategory.toLowerCase() === categoryFilter.toLowerCase();

      return (!eapplyFilter || matchEapply) && (!boroughFilter || matchBorough) && (!categoryFilter || matchCategory);
    });
console.log(filteredSpace);
  const handleEapplyFilter = (e) => {
    setEapplyFilter(e.target.value);
  };

  const handleBoroughFilter = (e) => {
    setBoroughFilter(e.target.value);
  };

  const handleCategoryFilter = (e) => {
    setCategoryFilter(e.target.value);
  };

const loaded = () => {
    const uniqueItems = new Set();
  
    filteredSpace.forEach(({ gisobjid }) => {
      uniqueItems.add(gisobjid);
    });
  
    const uniqueItemsArray = Array.from(uniqueItems);
  
    if (uniqueItemsArray.length === 0) {
      return <h1>No Results &#128577;</h1>
    }
  
    return uniqueItemsArray.map((gisobjid) => {
      const item = filteredSpace.find((entry) => entry.gisobjid === gisobjid);
  
      return (
        <div className="space" key={gisobjid}>
          <h1>{item.eapply}</h1>
        </div>
      );
    });
  };
  
  const loading = () => {
    return <h1>Loading ...</h1>;
  };

  const boroughOptions = Object.keys(boroughMapping).map((boroughName) => (
    <option key={boroughName} value={boroughMapping[boroughName]}>
      {boroughName}
    </option>
  ));

  const categoryOptions = ["Buildings/Institutions", "Community Park", "Flagship Park", "Garden", "Historic House Park", "Jointly Operated Playground","Nature Area", "Neighborhood Park", "Parkway", "Playground", "Recreation Field/Courts", "Triangle/Plaza", "Waterfront Facility"];

  return (
    <section>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={eapplyFilter}
          onChange={handleEapplyFilter}
          placeholder="Enter Park Name"
        />
      </div>
      <div>
        <label>Borough:</label>
        <select
          value={boroughFilter}
          onChange={handleBoroughFilter}
        >
          <option value="">Select Borough</option>
          {boroughOptions}
        </select>
      </div>
      <div>
        <label>Category:</label>
        <select
          value={categoryFilter}
          onChange={handleCategoryFilter}
        >
          <option value="">Select Category</option>
          {categoryOptions.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div>{filteredSpace ? loaded() : loading()}</div>
    </section>
  );
}

export default Home;