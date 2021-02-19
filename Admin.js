import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from 'perfect-scrollbar';

// core components
import Footer from 'components/Footer/Footer.js';
import { withTranslation } from 'react-i18next';
import AppNavbar from 'components/Navbars/AppNavbar';
import Header from 'components/Header/Header';
import { Container } from 'reactstrap';

import routes from 'routes.js';

import './styles.scss';

var ps;

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: 'blue',
      sidebarOpened: document.documentElement.className.indexOf('nav-open') !== -1,
    };
  }
  componentDidMount() {
    if (navigator.platform.indexOf('Win') > -1) {
      document.documentElement.className += ' perfect-scrollbar-on';
      document.documentElement.classList.remove('perfect-scrollbar-off');
      ps = new PerfectScrollbar(this.refs.mainPanel, {
        suppressScrollX: true,
      });
      let tables = document.querySelectorAll('.table-responsive');
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf('Win') > -1) {
      ps.destroy();
      document.documentElement.className += ' perfect-scrollbar-off';
      document.documentElement.classList.remove('perfect-scrollbar-on');
    }
  }
  componentDidUpdate(e) {
    if (e.history.action === 'PUSH') {
      if (navigator.platform.indexOf('Win') > -1) {
        let tables = document.querySelectorAll('.table-responsive');
        for (let i = 0; i < tables.length; i++) {
          ps = new PerfectScrollbar(tables[i]);
        }
      }
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.mainPanel.scrollTop = 0;
    }
  }
  // this function opens and closes the sidebar on small devices
  toggleSidebar = () => {
    document.documentElement.classList.toggle('nav-open');
    this.setState({ sidebarOpened: !this.state.sidebarOpened });
  };
  getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === '/admin') {
        return (
          <Route path={prop.layout + prop.path} component={prop.component} to={prop.to} key={key} />
        );
      } else {
        return null;
      }
    });
  };
  handleBgClick = (color) => {
    this.setState({ backgroundColor: color });
  };
  getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (this.props.location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return 'Brand';
  };
  render() {
    const {
      user: { role_name },
    } = this.props.loginState;
    const filteredRoutes = routes.filter((route) => route.roles.includes(role_name));
    const [{ path, layout }] = filteredRoutes;

    const footerFilter = filteredRoutes.filter(
      (route) => route.hideFooter && this.props.location.pathname.indexOf(route.path) > -1
    );

    return (
      <>
        <div className="wrapper">
          <Header />
          <AppNavbar routes={filteredRoutes} />
          <Container fluid>
            <div className="main-panel" ref="mainPanel" data={this.state.backgroundColor}>
              <Switch>
                {this.getRoutes(filteredRoutes)}
                <Redirect from="*" to={`${layout}${path}`} />
              </Switch>

              {
                // we don't want the Footer to be rendered on map pag
                footerFilter.length > 0 ||
                this.props.location.pathname.indexOf('maps') !== -1 ? null : (
                  <Footer fluid />
                )
              }
            </div>
          </Container>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({ loginState: state.loginState });

export default withTranslation()(connect(mapStateToProps)(Admin));