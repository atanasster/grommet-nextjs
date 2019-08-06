import React from 'react';
import styled, { css } from 'styled-components';
import {
  LiveProvider,
  LiveEditor,
} from 'react-live';
import { Box, DropButton, Button } from 'grommet';

const StyledProvider = styled(LiveProvider)`
  dispplay: flex;
  flex: 0 0;
  width: 100%;
  align-items: center;
`;

const StyledEditor = styled(LiveEditor)`
  overflow: auto;
  min-height: 100px;
  min-width: 200px;
  max-height: 400px;
`;

interface CodeEditorProps {
  object: string,
  path: string,
  onChange(code: string) : void,
}
const CodeEditor: React.FC<CodeEditorProps> = ({ object, path, onChange }) => {
  const [code, setCode] = React.useState(object);
  React.useEffect(() => {
    setCode(object);
  }, [path]);
  const [open, setOpen] = React.useState();
  return (
    <DropButton
      open={open}
      label='code'
      dropAlign={{ top: 'bottom', right: 'right' }}
      dropContent={
        <Box pad='small' gap='medium' flex='grow'>
          <StyledProvider code={code} scope={{ styled, css }}>
            <Box>
              <StyledEditor onChange={e => setCode(e)} />
            </Box>
          </StyledProvider>
          <Box>
            <Button
              label='OK'
              onClick={() => {
                setOpen(false);
                setTimeout(() => setOpen(undefined), 1);
                try {
                  // eslint-disable-next-line no-eval
                  const obj = eval(`(${code})`);
                  onChange(obj);
                } catch (e) {
                  onChange(code);
                }
              }}
            />
          </Box>
        </Box>
        }
    />
  );
};

CodeEditor.defaultProps = {
  object: undefined,
};


export default CodeEditor;
