import Tags from './Tags';

export const TagsSelect = ({ placeholder, value, onChange }) => (
  <Tags
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    tagProps={{ onClick: (e) => { e.stopPropagation(); } }}
  />);


export { default as GrommetTags } from './Tags';

export default Tags;
