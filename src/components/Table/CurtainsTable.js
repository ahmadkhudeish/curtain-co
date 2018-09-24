import React from "react";
import { Table, Button, Container } from "semantic-ui-react";
import TableRow from "./TableRow";

class CurtainsTable extends React.Component {
  render() {
    var onCurtainTableUpdate = this.props.onCurtainTableUpdate;
    var rowDel = this.props.onRowDel;
    var curtain = this.props.curtains.map(curtain => {
      return (
        <TableRow
          onCurtainTableUpdate={onCurtainTableUpdate}
          curtain={curtain}
          onDelEvent={rowDel.bind(this)}
          key={curtain.id}
        />
      );
    });
    return (
      <Container>
        <Table unstackable selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Room</Table.HeaderCell>
              <Table.HeaderCell>Length</Table.HeaderCell>
              <Table.HeaderCell>Width</Table.HeaderCell>
              <Table.HeaderCell>Pleats</Table.HeaderCell>
              <Table.HeaderCell>Style</Table.HeaderCell>
              <Table.HeaderCell>Notes</Table.HeaderCell>
              <Table.HeaderCell />
            </Table.Row>
          </Table.Header>

          <Table.Body>{curtain}</Table.Body>
        </Table>
        <Button floated="right" onClick={this.props.onRowAdd}>
          Add
        </Button>
      </Container>
    );
  }
}

export default CurtainsTable;
