import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { Searchbar } from 'react-native-paper';
import { LocationContext } from '../../../services/locations/location.context';

const SearchBarContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  width: 100%;
  top: 5%;
`;
export const Search = () => {
  const { keyword, onSearch } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchBarContainer>
      <Searchbar
        icon="map"
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => onSearch(searchKeyword)}
        onChangeText={(value) => setSearchKeyword(value)}
      />
    </SearchBarContainer>
  );
};
