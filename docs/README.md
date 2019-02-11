# about this site

This a an unofficial site dedicated to the grommet react library, as well as the home of the grommet-controls collection of components.
 The site is built with next.js and the full source code can be found here [github](https://github.com/atanasster/grommet-nextjs).
 Head on there as we would really appreciate to hear your feedback and get some github stars.

# [installation](/installation)

`$ npm install grommet grommet-icons grommet-controls`

# [get started](/get-started)

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

# [page templates](/page-templates)
<grid columns='medium' rows='medium' gap='small'>
  <template group='pages' name='home-dashboard' />
  <template group='cards' name='vertical-blog-post' />
  <template group='cards' name='horizontal-blog-post' /> 
</grid>

# [example sites](/sites)

<grid columns='medium' gap='small'>
  <card 
    image='//raw.githubusercontent.com/atanasster/grommet-nextjs/master/static/img/grommet-dashboard.jpg'
    title='grommet dashboard'
    authorName='Atanas Stoyanov'
    github='https://github.com/atanasster/grommet-dashboard'
    authorLink='https://github.com/atanasster'
    path='https://grommet-dashboard.herokuapp.com/?packages=material-ui%2Csemantic-ui-react%2Creact-bootstrap%2Cantd%2Coffice-ui-fabric-react%2Cgrommet'
    excerpt='React nextjs grommet 2 dashboard template with sample pages, charts, forms etc.'
  />  
  <card
    image='//raw.githubusercontent.com/atanasster/grommet-nextjs/master/static/img/grommet-site.jpg'
    title='grommet site'
    authorName='Grommet'
    github='https://github.com/grommet/grommet-site'
    authorLink='https://github.com/grommet'
    path='https://v2.grommet.io'
    excerpt='Site for Grommet v2.'
  />
  <card
    image='//raw.githubusercontent.com/atanasster/grommet-nextjs/master/static/img/hyperparameters.jpg'
    title='tensorflowjs hyperparameters'
    authorName='Martin Stoyanov'
    github='https://github.com/martin-stoyanov/hyperparameters-site'
    authorLink='https://github.com/martin-stoyanov'
    path='https://hyperjs.herokuapp.com'
    excerpt='Home of the hyperparameters.js library for tensorflow.js.'
  />  
</grid>
