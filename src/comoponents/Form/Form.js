import React from "react";
import { Form, Dropdown, Header, Divider } from "semantic-ui-react";
import CurtainsTable from "../Table/CurtainsTable";

const Form = () => (
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
            onChange={(e, { value }) => this.setSelectedSuburb(value)}
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
            onChange={(e, { value }) => this.setSelectedColour(value)}
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
);

export default Grid;
