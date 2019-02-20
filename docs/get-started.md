# basic usage

### if your project is set up for [tree shaking](/tree-shaking):
```
import { Grommet, Box } from 'grommet';
import { Card, Value } from 'grommet-controls';
```

### if your project is NOT set up for [tree shaking](/tree-shaking):
```
import { Grommet } from 'grommet/components/Grommet';
import { Box } from 'grommet/components/Box';
import { Card } from 'grommet-controls/components/Card';
import { Value } from 'grommet-controls/components/Value';
```

<example editorPosition='left'>

```
    const Demo = () => (
      <Grommet fill>
        <Box full>
          <Card height='small'>
            <Card.CardTitle>
              hello from grommet-controls
            </Card.CardTitle>
            <Card.CardContent align='center'>
              <Value label='Almost there' value='65%' color='red'/>
            </Card.CardContent>
          </Card>
        </Box>
      </Grommet>
    );

    render(<Demo />);
```
</example>

# [nextjs](/nextjs)

for nextjs projects, you will need to set up styled-components for server-side rendering and es6 modules for the grommet libraries

# [gatsby](/gatsby)
for gatsby projects, you will need to set up styled-components for server-side rendering
