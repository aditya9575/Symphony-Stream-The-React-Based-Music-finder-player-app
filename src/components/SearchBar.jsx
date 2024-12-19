import React from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const SearchBar = ({ keyWord, setKeyWord, handleSearch }) => {
  return (
    <div className="d-flex">
      <Form.Control
        value={keyWord}
        type="search"
        placeholder="Find your favorite songs"
        className="me-2 search-input"
        aria-label="Search"
        onChange={(e) => setKeyWord(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        required
      />
      <Button 
        variant={keyWord ? "outline-primary" : "outline-secondary"}
        onClick={handleSearch}
        disabled={!keyWord}
        className="search-button"
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;