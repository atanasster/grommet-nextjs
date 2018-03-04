import Tags from './Tags';

export const TagsSelect = (props) => {
  const { tagProps, ...rest } = props || {};
  return ({ placeholder, value, onChange }) => (
    <Tags
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      tagProps={{ ...tagProps, onClick: (e) => { e.stopPropagation(); } }}
      {...rest}
    />);
};

export { default as GrommetTags } from './Tags';

export default Tags;
