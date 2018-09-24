import React from "react";

import { Table, Input } from "semantic-ui-react";

class EditableCell extends React.Component {
  render() {
    return (
      <Table.Cell>
        <Input
          type="text"
          name={this.props.cellData.type}
          id={this.props.cellData.id}
          value={this.props.cellData.value}
          onChange={this.props.onCurtainTableUpdate}
        />
      </Table.Cell>
    );
  }
}

export default EditableCell;
