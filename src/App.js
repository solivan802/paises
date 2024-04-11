import { useEffect, useState } from "react";
import "./App.css";
import ModalComponent from "./components/Modal/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "animate.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function App() {
  const [data, setData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [itemData, setItemData] = useState(null);

  useEffect(() => {
    try {
      axios.get("https://restcountries.com/v3.1/all").then((response) => {
        setData(response.data);
      });
    } catch (error) {}
  }, []);

  function openModal(dataElement) {
    setShowModal(true);
    setItemData(dataElement);
  }

  function closeModal() {
    setShowModal(false);
  }

  function renderNav() {
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

  function renderFlags() {
    return (
      data && (
        <div className="container ">
          <div className="row d-flex justify-content-center ">
            {data?.map((item, index) => {
              return (
                <div
                  className="col-md-3 p-3 m-5 d-flex justify-content-center align-items-center flagStyle "
                  onClick={() => openModal(item)}
                >
                  <Card
                    style={{ width: "18rem" }}
                    className="animate__animated animate__backInDown"
                  >
                    <Card.Img
                      variant="top"
                      src={item?.flags?.png}
                      className="mw-100"
                    />
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      )
    );
  }

  return (
    <div className="container">
      {renderNav()}
      <div className="row">
        <div className="col-12">{data && renderFlags()}</div>
      </div>
      {showModal && (
        <ModalComponent
          isOpen={showModal}
          onClose={() => closeModal()}
          infoData={itemData}
        />
      )}
    </div>
  );
}

export default App;
