import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Collapse = styled.div.attrs({
  className: "collpase navbar-collapse"
})``;

const List = styled.div.attrs({
  className: "navbar-nav mr-auto"
})``;

const Item = styled.div.attrs({
  className: "collpase navbar-collapse"
})``;

const Links = () => {
  return (
    <React.Fragment>
      <Link to="/" className="navbar-brand">
        About
      </Link>
      <Link to={`/USGS`} className="navbar-brand">
        Earthquake Query
      </Link>
      <Link to={`/quakes`} className="navbar-brand">
        Saved Quakes
      </Link>
      <Collapse>
        <List>
          <Item>
            <Link to={`/quakes/create`} className="nav-link">
              Create Quake Data
            </Link>
          </Item>
        </List>
      </Collapse>
    </React.Fragment>
  );
};

export default Links;
