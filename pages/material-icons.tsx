import React, { useState } from 'react';
import { Box, Grid, InfiniteScroll, Text, ResponsiveContext } from 'grommet';
import { ThemeContext } from 'styled-components';
import { DropInput } from 'grommet-controls';
import { Search } from 'grommet-icons';
import * as Icons from '@material-ui/icons/index';
import Page from '../components/app/Page';
import Title from '../components/app/Title';

const iconKeys = Object.keys(Icons).filter(iconName => (
  !iconName.endsWith('Outlined') && !iconName.endsWith('Rounded') && !iconName.endsWith('Sharp') && !iconName.endsWith('TwoTone')
));


const MaterialIconsPage = () => {
  const updateSearchIcons = (search) => {
    const searchRegularized = search.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&').toLowerCase();
    return iconKeys
      .filter(icon => (
        icon.toLowerCase().match(searchRegularized)
      ))
      .sort()
      .map(icon => ({
        name: icon,
        Icon: Icons[icon],
        label: search ? icon.replace(
          new RegExp(search, 'ig'),
          text => (text ? `<strong>${text}</strong>` : '')
        ) : icon,
      }));
  };
  const [icons, setIcons] = useState(updateSearchIcons(''));

  return (
    <Page title='MaterialIcons'>
      <Title label='material UI icons'>
        <Box direction='row' basis='medium'>
          <DropInput
            style={{
              WebkitAppearance: 'none',
            }}

            type='search'
            onChange={({ target: { value } }) => setIcons(updateSearchIcons(value))}
            widgets={[
              {
                icon: <Search />, onClick: () => {},
              },
            ]}
          />
        </Box>
      </Title>
      <Box>
        <ThemeContext.Consumer>
          {(theme) => {
            const iconColor = theme.dark
              ? theme.global.colors.text.dark : theme.global.colors.text.light;
            return (
              <ResponsiveContext.Consumer>
                {size => (
                  <Grid columns='small'>
                    {icons.length > 0 ? (
                      <InfiniteScroll items={icons}>
                        {({ label, Icon, name }) => (
                          <Box
                            basis={size === 'small' ? 'xsmall' : 'small'}
                            justify='start'
                            align='center'
                            pad={{
                              vertical: 'small',
                            }}
                            key={name}
                            style={{
                              minHeight: (size === 'small') ? '162px' : '144px',
                            }}
                          >
                            <Icon
                              style={{
                                width: 48, height: 48, fill: iconColor,
                              }}
                            />
                            <Text
                              textAlign='center'
                              margin='small'
                              style={{
                                wordBreak: 'break-all',
                              }}
                            >
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: label,
                                }}
                              />
                            </Text>
                          </Box>
                        )}
                      </InfiniteScroll>
                    ) : null}
                  </Grid>
                )}
              </ResponsiveContext.Consumer>
            );
          }}
        </ThemeContext.Consumer>
      </Box>
    </Page>
  );
};

export default MaterialIconsPage;
