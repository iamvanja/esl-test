import React from 'react';
import { EntitySelectorList } from '@gpsi/entitySelectorList';
import {SECONDARY_TYPES} from '@gpsi/entitySelectorList/types';
import data from './data.json';
import Person from './Person'


const PersonList = () => {
  return (
      <EntitySelectorList
        data={data}
        primaryEntity={'FOO'}
        secondaryEntity={SECONDARY_TYPES.CATEGORY_ALL}
        itemComponent={Person}
        // scrollToSelectedItem={scrollToSelectedItem}
        // onItemClick={onItemClick}
        // groupItemComponent={EntitySelectorItemGroup}
        // onLevelChange={onLevelChange}
        // searchKey={searchKey}
        // childrenKey={childrenKey}
        // lastLevelKey={lastLevelKey}
        // singleIdKey={getSingleIdKey(primaryEntity, secondaryEntity)}
        // itemHeightSingle={getItemHeight(primaryEntity)}
        // getItemData={getItemData}
        // filterComponent={isActive(FeatureKey.mapEssFiltering)
        //   ? getFilterComponent(primaryEntity, secondaryEntity)
        //   : null}
        // filterFunction={getFilterFunction(primaryEntity, secondaryEntity)}
        // filters={filters}
        // isFilterApplied={this.isFilterApplied}
        // getFilteredItems={this.handleGetFilteredItems}
        // onFilterChange={this.handleFilterChange}
        // searchTerm={searchTerm}
        // onSearchTermChange={this.handleSearchTermChange}
        // mapIdsToObjects={this.mapIdsToObjects}
        // getTagContent={getTagContent}
        />
  );
}

export default PersonList;
