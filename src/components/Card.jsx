import React from "react";
import styled from "styled-components";

function Card() {
  return (
    <CardContainer>
      <CardHeader>
        <img src="" alt="" />
      </CardHeader>
      <p>Rs.205</p>
      <CardNav>
        <ul>
          <li>choice of Bread</li>
          <li>choice of Preparation</li>
          <li>choice of Add On</li>
          <li>choice of Choice of Beverages</li>
          <li>choice of Sauce Any(3)</li>
          <li>Choice of vegetables</li>
        </ul>
      </CardNav>
    </CardContainer>
  );
}

export default Card;

const CardContainer = styled.div`
  position: relative;
  font-family: "Roboto", sans-serif;
  margin-left: 25rem;
  margin-top: 4rem;
  background-color: #ffffff;
  height: 20rem;
  width: 40rem;
  padding: 1rem;
  p {
    position: absolute;
    top: 24%;
    left: 15%;

    border-bottom: 2px dotted #bebfc5;
    width: 70%;
  }
`;

const CardHeader = styled.div`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  height: 5rem;
  justify-content: center;

  h1 {
    margin: 1rem;
    margin-right: 10rem;
    font-size: 1rem;
  }
  img {
    height: 1rem;
  }
`;

const CardNav = styled.div`
  display: flex;
  flex-direction: column;
  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    margin-top: 1rem;
  }
  li {
    font-size: 0.8rem;
    margin-left: 0.7rem;
  }
`;

<div className="container__navLine2">
  <h6>Choice of Sauce Any(3)</h6>
  <h6>Choice of Vegetables</h6>
</div>;
