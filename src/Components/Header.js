import React from 'react';
import {
  Media,
  Button, Form, FormGroup, Input,
} from 'reactstrap';
import './Header.css';

const Header = () => {
  return (
    <div>
      <Media>
        <Media middle  href="#" className="logoStyle">
          <img src="https://via.placeholder.com/100" alt="Logo" />
        </Media>
        <Media body>
          <Media heading className="appHeading">
            Anti Theft squad Berlin
          </Media>
          <div className="appSubHeading">Stolen bykes</div>
        </Media>
      </Media>
      <Form inline className="filterForm">
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Input value="" placeholder="Search incident descriptions" />
          </FormGroup>
          <Button>Find incidents</Button>
        </Form>
    </div>
  );
};

export default Header;
