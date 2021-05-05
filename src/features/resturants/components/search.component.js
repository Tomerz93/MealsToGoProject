import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { Searchbar } from 'react-native-paper';
import { LocationContext } from '../../../services/locations/location.context';

const SearchBarContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
export const Search = ({ isFavoritesToggled, onFavoritesToggled }) => {
  const { keyword, onSearch } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchBarContainer>
      <Searchbar
        icon={isFavoritesToggled ? 'heart' : 'heart-outline'}
        iconColor={isFavoritesToggled ? 'red' : 'gray'}
        onIconPress={onFavoritesToggled}
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => onSearch(searchKeyword)}
        onChangeText={(value) => setSearchKeyword(value)}
      />
    </SearchBarContainer>
  );
};
