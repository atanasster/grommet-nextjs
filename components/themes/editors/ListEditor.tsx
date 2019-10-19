import React from 'react';
import { Select } from 'grommet';

export interface ListEditorProps {
  object: string | number,
  items: (string | boolean | number | JSX.Element | object)[];
  onChange?: ((...args: any[]) => any);
}
const ListEditor: React.FC<ListEditorProps> = ({ object, onChange, items }) => (
  <Select
    value={typeof object === 'number' ? object.toString() : object}
    options={items}
    onChange={({ target: { value } }) => onChange(value)}
  />

);


ListEditor.defaultProps = {
  object: '',
};


export default ListEditor;
