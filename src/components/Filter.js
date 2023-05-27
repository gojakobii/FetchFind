import React from "react";
import { Form } from "react-bootstrap";

function Filter ({allBreeds, selectedBreeds, setSelectedBreeds}) {
  const handleBreedSelect = (e) => {
    const breed = e.target.value;
    
    console.log(breed)
    setSelectedBreeds((prevSelectedBreeds) => {
      if (prevSelectedBreeds.includes(breed)) {
        return prevSelectedBreeds.filter((selectedBreed) => selectedBreed !== breed);
      }
      return [...prevSelectedBreeds, breed];
    });
  };

  return (
    <Form>
      <Form.Group className="breed-filter">
        <Form.Label>Select Dog Breed:</Form.Label>
        <Form.Control as="select" multiple value={selectedBreeds} readOnly>
          {
            allBreeds.map((breed) => (
              <option key={breed} value={breed} onClick={handleBreedSelect}>{breed}</option>
            )
          )}
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

export default Filter;
