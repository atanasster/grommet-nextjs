import React, { Component } from 'react';
import styled from 'styled-components';
import { Box, Button, Select, Text } from 'grommet';
import { NumberInput } from 'grommet-controls';
import { Previous, Next } from 'grommet-icons';

const defaultButton = ({
  disabled, Icon, onClick, label, ...other
}) => (
  <Button
    icon={<Icon />}
    onClick={disabled ? undefined : onClick}
    label={label}
    {...other}
  />
);

const StyledButton = styled(defaultButton)`
  width: 150px;
  padding: 10px 0;
`;

const StyledPageInput = styled(NumberInput)`
  max-width: 180px;
`;

const StyledSelect = styled(Select)`
  max-width: 150px;
`;

export default class ReactTablePagination extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { page: props.page };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ page: nextProps.page });
  }

  getSafePage = (page) => {
    const pg = Number.isNaN(page) ? this.props.page : page;
    return Math.min(Math.max(pg, 0), this.props.pages - 1);
  };

  changePage = (page) => {
    const pg = this.getSafePage(page);
    this.setState({ page: pg });
    if (this.props.page !== pg) {
      this.props.onPageChange(pg);
    }
  };

  applyPage = (e) => {
    if (e) {
      e.preventDefault();
    }
    const { page } = this.state;
    this.changePage(page === '' ? this.props.page : page);
  };
  renderPaging() {
    const {
      page, showPageJump, pageText, ofText, pages,
    } = this.props;
    let pageJump;
    if (showPageJump) {
      pageJump = (
        <StyledPageInput
          aria-label='Select page to jump to'
          onChange={(e) => {
            const val = e.target.value;
            const pg = val - 1;
            if (val === '') {
              return this.setState({ page: val });
            }
            this.setState({ page: this.getSafePage(pg) });
            return false;
          }}
          value={this.state.page === '' ? '' : this.state.page + 1}
          onBlur={this.applyPage}
          onKeyPress={(e) => {
            if (e.which === 13 || e.keyCode === 13) {
              this.applyPage();
            }
          }}
        />
      );
    } else {
      pageJump = <Text>{page + 1}</Text>;
    }
    return (
      <Box direction='row' align='center' gap='small'>
        <Text>{`${pageText} `}</Text>
        {pageJump}
        <span style={{ whiteSpace: 'nowrap' }}>{`${ofText} ${pages || 1}`}</span>
      </Box>
    );
  }

  renderPageSize() {
    const {
      showPageSizeOptions, onPageSizeChange, pageSizeOptions, pageSize,
    } = this.props;
    if (showPageSizeOptions) {
      return (
        <Box direction='row'>
          <StyledSelect
            aria-label='Select rows per page'
            onChange={e => onPageSizeChange(Number(e.option.split(' ')[0]))}
            value={`${pageSize} ${this.props.rowsText}`}
            options={pageSizeOptions.map(option => (`${option} ${this.props.rowsText}`))}
          />
        </Box>
      );
    }
    return null;
  }

  renderPrevious() {
    const { PreviousComponent = StyledButton, canPrevious, page } = this.props;
    return (
      <Box direction='row' >
        <PreviousComponent
          aria-label='Move to previous page'
          Icon={Previous}
          label={this.props.previousText}
          onClick={canPrevious ? () => this.changePage(page - 1) : null}
          disabled={!canPrevious}
        />
      </Box>
    );
  }

  renderNext() {
    const { page, canNext, NextComponent = StyledButton } = this.props;
    return (
      <Box direction='row' >
        <NextComponent
          aria-label='Move to next page'
          reverse={true}
          Icon={Next}
          label={this.props.nextText}
          onClick={canNext ? () => this.changePage(page + 1) : null}
          disabled={!canNext}
        />
      </Box>
    );
  }

  render() {
    const props = this.props.getPaginationProps(this.props);
    return (
      <Box
        {...{
       ...{
       direction: 'row', align: 'center', justify: 'between', fill: 'horizontal',
      },
      ...props,
      }}
      >
        {this.renderPrevious()}
        {this.renderPaging()}
        {this.renderPageSize()}
        {this.renderNext()}
      </Box>
    );
  }
}
