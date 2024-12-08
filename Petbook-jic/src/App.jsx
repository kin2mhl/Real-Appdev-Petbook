import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Components/Nav.jsx';
import SuggestedPets from './Components/SuggestedPets.jsx';
import Home from './Functions/Home.jsx';
import Search from './Functions/Search.jsx';
import Create from './Functions/Create.jsx';
import Notif from './Functions/Notification.jsx';
import Profile from './Functions/Profile.jsx';
import './App.css';

function App() {
  const [pageIndicator, setPageIndicator] = useState(0); // Add the state for page indicator

  // Render page based on pageIndicator
  const renderPage = () => {
    switch (pageIndicator) {
      case 0:
        return <Home />;
      case 1:
        return <Search />;
      case 2:
        return <Notif />;
      case 3:
        return <Create />;
      case 4:
        return <Profile />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            {/* Pass pageIndicator and setPageIndicator as props */}
            <Nav pageIndicator={pageIndicator} setPageIndicator={setPageIndicator} />
          </Col>
          <Col xs={6}>
            {/* Render the component based on the current pageIndicator */}
            {renderPage()}
          </Col>
          <Col>
            <SuggestedPets />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
