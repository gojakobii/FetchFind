import React from "react";
import { Form } from "react-bootstrap";

function BreedSort({ sort, setSort }) {
  const handleSetSort = () => {
    setSort((prevSort) => {
      if (prevSort === "asc") {
        return "desc";
      } else {
        return "asc";
      }
    });
  };

  return (
    <Form>
      <Form.Group className="sort-breed-filter">
        <Form.Label>Sort Dogs</Form.Label>
        <Form.Control as="select" value={sort} onChange={handleSetSort}>
          <option value="asc">Ascending Breed</option>
          <option value="desc">Descending Breed</option>
        </Form.Control>
      </Form.Group>
    </Form>
  );
}

export default BreedSort;
