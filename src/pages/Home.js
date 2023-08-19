import React, { useState } from 'react';

const boroughMapping = {
    'Brooklyn': 'B',
    'Queens': 'Q',
    'Manhattan': 'M',
    'Bronx': 'X',
    'Staten island': 'R'
};

function Home(props) {
  const [eapplyFilter, setEapplyFilter] = useState('');
  const [boroughFilter, setBoroughFilter] = useState('');

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

      return (!eapplyFilter || matchEapply) && (!boroughFilter || matchBorough);
    });

  const handleEapplyFilter = (e) => {
    setEapplyFilter(e.target.value);
  };

  const handleBoroughFilter = (e) => {
    setBoroughFilter(e.target.value);
  };

  const loaded = () => {
    const uniqueItems = new Set();

    filteredSpace.forEach(({ eapply, gisobjid, borough }) => {
      uniqueItems.add(gisobjid);
    });

    const uniqueItemsArray = Array.from(uniqueItems);

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
          <option value="">Drop Down</option>
          {boroughOptions}
        </select>
      </div>
      <div>{filteredSpace ? loaded() : loading()}</div>
    </section>
  );
}

export default Home;
