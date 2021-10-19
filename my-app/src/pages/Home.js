import { useState } from "react";
import Listings from "./Listings";
import styled from "styled-components";

export default function Home({ listings }) {
  const [input, setInput] = useState();

  const listingsList = listings.map((listing) => (
    <Listings key={listing.id} listing={listing} />
  ));

  return (
    <Div>
      <div className="search-bar">
        <H2>H♡me is Where the Heart is</H2>
        <Input
          type="text"
          placeholder="Enter address, city, or state..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button>Search</Button>
      </div>
      <br />
      {listingsList}
    </Div>
  );
}

const Div = styled.div`
  text-align: center;
`;

const H2 = styled.h2`
  margin: 3rem 0 2rem 0;
  text-align: center;
  color: #6F1A07;
  font-family: 'Andada Pro', serif;
  font-variant: small-caps;
`;

const Input = styled.input`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  width: 70%;
  height: 2rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: #ECF0F1;
  font-size: 1rem;
  font-weight: bold;
  text-align: center:
  margin: center;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: #6F1A07;
    font-weight: 100;
    font-size: 1rem;
  }
  font-family: 'Andada Pro', serif;
`;

const Button = styled.button`
  background: #6F1A07;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 10%;
  height: 2rem;
  border: none;
  color: #F7F3E3;
  border-radius: 2rem;
  cursor: pointer;
  font-family: 'Andada Pro', serif;
`;