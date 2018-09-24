import React from "react";
import logo from "../assets/logo@2x.png";
import "../App.css";
import CurtainsTable from "../comoponents/Table/CurtainsTable";
import {
  Dropdown,
  Input,
  Button,
  Form,
  Label,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image
} from "semantic-ui-react";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      suburbs: [],
      materials: [],
      colours: [],
      curtains: [],
      tableRowAccepted: false,
      isLoading: false,
      error: null,
      selectedSuburb: null,
      selectedMaterial: null,
      selectedColour: null,
      customer: null,
      payload: {}
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch("http://localhost:8181/suburbs")
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then(data => this.setState({ suburbs: data }))
      .catch(error => this.setState({ error, isLoading: false }));

    fetch("http://localhost:8181/materials")
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then(data => this.setState({ materials: data }))
      .catch(error => this.setState({ error, isLoading: false }));

    fetch("http://localhost:8181/colours")
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then(data => this.setState({ colours: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));

    fetch("http://localhost:8181/data")
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then(data =>
        this.setState({
          selectedSuburb: data.suburb,
          selectedMaterial: data.material,
          selectedColour: data.colour,
          curtains: data.curtains,
          customer: data.customer,
          isLoading: false
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  handleRowDel(curtain) {
    var index = this.state.curtains.indexOf(curtain);
    if (index > -1) {
      this.state.curtains.splice(index, 1);
    }

    this.setState(this.state.curtains);
  }

  handleAddEvent(evt) {
    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var curtain = {
      id: id,
      room: "",
      length: 0,
      width: 0,
      pleats: "",
      style: "",
      notes: ""
    };

    var curtains = this.state.curtains;
    curtains.push(curtain);

    this.setState({ curtains: curtains }, () => {
      this.preparePayload();
    });
  }

  handleCurtainTable(evt) {
    var item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value
    };
    var curtains = this.state.curtains.slice();
    var newCurtains = curtains.map(curtain => {
      for (var key in curtain) {
        if (key == item.name && curtain.id == item.id) {
          curtain[key] = item.value;
        }
      }
      return curtain;
    });
    this.setState({ curtains: newCurtains });
  }

  setSelectedSuburb(value) {
    this.setState({ selectedSuburb: value }, () => {
      this.preparePayload();
      console.log(this.state.selectedSuburb);
    });
  }

  setSelectedMaterial(value) {
    this.setState({ selectedMaterial: value }, () => {
      this.preparePayload();
      console.log(this.state.selectedMaterial);
    });
  }

  setSelectedColour(value) {
    this.setState({ selectedColour: value }, () => {
      this.preparePayload();
      console.log(this.state.selectedColour);
    });
  }

  setCustomerName(value) {
    this.setState({ customer: value }, () => {
      this.preparePayload();
      console.log(this.state.customer);
    });
  }

  preparePayload() {
    let payload = {};

    let curtains = this.state.curtains;
    let suburb = this.state.selectedSuburb;
    let material = this.state.selectedMaterial;
    let colour = this.state.selectedColour;
    let customer = this.state.customer;
    payload = {
      curtains,
      suburb,
      material,
      colour,
      customer
    };

    this.setState({ payload: payload }, () => {
      console.log(payload);
    });
  }

  handleSaveChanges = e => {
    e.preventDefault();
    const headers = new Headers();
    headers.append("Content-Type", "application/json;charset=UTF-8");
    headers.append("Accept", "application/json");

    const options = {
      method: "POST",
      mode: "cors",
      headers,
      body: JSON.stringify(this.state.payload)
    };

    const request = new Request("http://localhost:8181/data", options);
    fetch(request)
      .then(response => {
        if (response.ok) {
          alert("Saved Successfully");
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .catch(e => {
        console.log(e.message);
      });
  };

  clearState = () => {
    this.setState({
      curtains: [],
      selectedSuburb: "",
      selectedMaterial: "",
      selectedColour: "",
      customer: ""
    });
  };

  render() {
    const { suburbs, materials, colours, isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading ...</p>;
    }

    var suburbsDropDown = !isLoading
      ? suburbs.map(suburb => {
          return {
            key: suburb.id,
            value: suburb.name,
            text: suburb.name
          };
        })
      : null;

    var materialsDropDown = !isLoading
      ? materials.map(material => {
          return {
            key: material.id,
            value: material.name,
            text: material.name
          };
        })
      : null;

    var coloursDropDown = !isLoading
      ? colours.map(colour => {
          return {
            key: colour.id,
            value: colour.name,
            text: colour.name
          };
        })
      : null;

    return (
      <Container>
        <Grid>
          <Grid.Row columns={6}>
            <Grid.Column floated="left">
              <p>
                <span>
                  <img src={logo} className="App-logo" alt="logo" />
                </span>
              </p>
            </Grid.Column>
            <Grid.Column floated="right">
              <p>
                <span>
                  {this.state.customer}
                  <Label>
                    <Icon name="user" size="big" />
                  </Label>
                </span>
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Divider />

        <Header as="h2" textAlign="left">
          Product View
        </Header>
        <Grid>
          <Grid.Row>
            <Grid.Column width={16}>
              <Form onSubmit={this.addItem}>
                <div>
                  <Form.Group widths="equal">
                    <Form.Field>
                      <Input
                        placeholder="Customer"
                        onChange={(e, { value }) => {
                          this.setCustomerName(value);
                        }}
                        value={this.state.customer}
                      />
                    </Form.Field>
                    <Form.Field>
                      <Dropdown
                        placeholder="Suburb"
                        selection
                        options={suburbsDropDown}
                        onChange={(e, { value }) =>
                          this.setSelectedSuburb(value)
                        }
                        value={this.state.selectedSuburb}
                      />
                    </Form.Field>
                    <Form.Field>
                      <Dropdown
                        placeholder="Material"
                        selection
                        options={materialsDropDown}
                        onChange={(e, { value }) => {
                          this.setSelectedMaterial(value);
                        }}
                        value={this.state.selectedMaterial}
                      />
                    </Form.Field>
                    <Form.Field>
                      <Dropdown
                        placeholder="Colour"
                        selection
                        basic
                        options={coloursDropDown}
                        onChange={(e, { value }) =>
                          this.setSelectedColour(value)
                        }
                        value={this.state.selectedColour}
                      />
                    </Form.Field>
                  </Form.Group>
                </div>
                <Header as="h3" unerline bold textAlign="left">
                  Curtains:
                </Header>

                <CurtainsTable
                  onCurtainTableUpdate={this.handleCurtainTable.bind(this)}
                  onRowAdd={this.handleAddEvent.bind(this)}
                  onRowDel={this.handleRowDel.bind(this)}
                  curtains={this.state.curtains}
                />
                <br />
                <br />

                <Divider />

                <Button onClick={this.clearState}>Back</Button>

                <Button type="submit" onClick={this.handleSaveChanges}>
                  Save Changes
                </Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default HomePage;
