import React from "react";
import logo from "../assets/logo@2x.png";
import { Grid, Container } from "semantic-ui-react";
import Form from "../Form";

const Grid = () => (
  <Container>
    <Grid>
      <Grid.Row columns={6}>
        <Grid.Column floated="left">
          <p>
            <span>
              <Image
                src={logo}
                className="App-logo"
                alt="logo"
                size="massive"
              />
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
          <Form />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);

export default Grid;
