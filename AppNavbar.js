/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Container } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import './styles.scss';

const AppNavbar = ({ routes }) => {
  const { t } = useTranslation();
  return (
    <div className="app-navbar">
      <Container fluid>
        <Nav>
          {routes
            .filter((route) => !route.hideInNavbar)
            .map((route) => (
              <NavLink
                key={`key-${route.path}`}
                className="nav-link"
                activeClassName="active"
                to={route.layout + (route.to || route.path)}
              >
                {t(route.name)}
              </NavLink>
            ))}
        </Nav>
      </Container>
    </div>
  );
};

export default AppNavbar;
