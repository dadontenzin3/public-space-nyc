import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


const boroughMapping = {
  'Brooklyn': 'B',
  'Queens': 'Q',
  'Manhattan': 'M',
  'Bronx': 'X',
  'Staten Island': 'R'
};

function Browse(props) {
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
    return <h1>No Results &#128577;</h1>;
  }

  return (
    <div className="mx-auto" style={{ maxWidth: '80%', fontSize: '25px'}}>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th className="col-md-8">Park Name</th>
            <th className="text-center" >Add to My Parks</th>
          </tr>
        </thead>
        <tbody>
          {uniqueItemsArray.map((gisobjid) => {
            const item = filteredSpace.find((entry) => entry.gisobjid === gisobjid);

            return (
              <tr key={gisobjid}>
                <td>
                  <a href={item.url}>{item.eapply}</a>
                </td>
                <td className="text-center" key={gisobjid}>
                  <Link to={`/${gisobjid}`}><button className="btn btn-primary btn-lg mx-3">View</button></Link>
                  <button className="btn btn-warning btn-lg mx-3">Save</button>
                  <button className="btn btn-dark btn-lg">Review</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
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
      <Container className="mb-5" style={{ fontSize: '25px' }}>
        <Row>
          <Col>
            <div className="mb-3">
              <label htmlFor="parkName" className="form-label">Name:</label>
              <input 
                type="text"
                className="form-control"
                id="parkName"
                value={eapplyFilter}
                onChange={handleEapplyFilter}
                placeholder="Enter Park Name"
              />
            </div>
          </Col>
          <Col>
            <div className="mb-3">
              <label htmlFor="boroughSelect" className="form-label">Borough:</label>
              <select
                className="form-select"
                id="boroughSelect"
                value={boroughFilter}
                onChange={handleBoroughFilter}
              >
                <option value="">Select Borough</option>
                {boroughOptions}
              </select>
            </div>
          </Col>
          <Col>
            <div className="mb-3">
              <label htmlFor="categorySelect" className="form-label">Category:</label>
              <select
                className="form-select"
                id="categorySelect"
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
          </Col>
        </Row>
      </Container>
      <div>{filteredSpace ? loaded() : loading()}</div>
    </section>
  );
}

export default Browse;