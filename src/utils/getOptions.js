import _ from "lodash";

export const getOptions = (number, prefix = "Choice ") =>
  _.times(number, index => ({
    key: index,
    text: `${prefix}${index}`,
    value: index
  }));
