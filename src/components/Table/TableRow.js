import React from "react";
import PropTypes from "prop-types";

import { Table, Label } from "semantic-ui-react";
import EditableCell from "./EditableCell";

class TableRow extends React.Component {
  onDelEvent() {
    this.props.onDelEvent(this.props.curtain);
  }
  render() {
    return (
      <Table.Row>
        <EditableCell
          onCurtainTableUpdate={this.props.onCurtainTableUpdate}
          cellData={{
            type: "room",
            value: this.props.curtain.room,
            id: this.props.curtain.id
          }}
        />
        <EditableCell
          onCurtainTableUpdate={this.props.onCurtainTableUpdate}
          cellData={{
            type: "length",
            value: this.props.curtain.length,
            id: this.props.curtain.id
          }}
        />

        <EditableCell
          onCurtainTableUpdate={this.props.onCurtainTableUpdate}
          cellData={{
            type: "width",
            value: this.props.curtain.width,
            id: this.props.curtain.id
          }}
        />

        <EditableCell
          onCurtainTableUpdate={this.props.onCurtainTableUpdate}
          cellData={{
            type: "pleats",
            value: this.props.curtain.pleats,
            id: this.props.curtain.id
          }}
        />

        <EditableCell
          onCurtainTableUpdate={this.props.onCurtainTableUpdate}
          cellData={{
            type: "style",
            value: this.props.curtain.style,
            id: this.props.curtain.id
          }}
        />

        <EditableCell
          onCurtainTableUpdate={this.props.onCurtainTableUpdate}
          cellData={{
            type: "notes",
            value: this.props.curtain.notes,
            id: this.props.curtain.id
          }}
        />

        <Table.Cell>
          <Label onClick={this.onDelEvent.bind(this)}>X</Label>
        </Table.Cell>
      </Table.Row>
    );
  }
}

TableRow.propTypes = {
  rowData: PropTypes.object,
  tableRowAccepted: PropTypes.bool,
  acceptTableRow: PropTypes.func,
  removeTableRow: PropTypes.func
};

export default TableRow;
