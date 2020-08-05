import React, { Component } from 'react';
import { EntitySelectorList, PropTypes as EntitySelectorListPropTypes } from '@gpsi/entitySelectorList';
import {SECONDARY_TYPES} from '@gpsi/entitySelectorList/types';
import data from './data.json';
import Person from './Person'

const Foo = () => <div>FOO</div>

class PersonList extends Component<{}, StateTypes> {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
    };
  }

  handleSearchTermChange = (newVal: string): void => {
    this.setState({ searchTerm: newVal });
  };

  handleGetFilteredItems = (items) => {
    const { searchTerm } = this.state;
    const searchTermLowerCase = (searchTerm || '').toLowerCase();

    if (!searchTerm) {
      return items;
    }

    return items.filter((item) =>
      (item.firstName || '').toLowerCase().includes(searchTermLowerCase) || 
      (item.lastName || '').toLowerCase().includes(searchTermLowerCase)
    );
  };

  render() {
    const { searchTerm } = this.state;

    return (
      <EntitySelectorList
        data={data}
        primaryEntity="FOO"
        secondaryEntity={SECONDARY_TYPES.CATEGORY_ALL}
        itemComponent={Person}
        groupItemComponent={Foo}
        onLevelChange={null}
        itemHeightSingle={58}
        filterComponent={Foo}
        getFilteredItems={this.handleGetFilteredItems}
        searchTerm={searchTerm}
        onSearchTermChange={this.handleSearchTermChange}
        getTagContent={() => <div>tag</div>}
      />
    );
  }
}

type StateTypes = {
  searchTerm: EntitySelectorListPropTypes['searchTerm'];
}

export default PersonList;
