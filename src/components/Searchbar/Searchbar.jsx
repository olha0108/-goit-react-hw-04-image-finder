import React from 'react';
import { SearchbarHeader } from './Searchbar.styled';
import { SearchForm } from './Searchbar.styled';
import { SearchFormbutton } from './Searchbar.styled';
import { SearchFormbuttonlabel } from './Searchbar.styled';
import { SearchForminput } from './Searchbar.styled';

export const Searchbar = ({ children, onSubmit }) => {
  return (
    <SearchbarHeader>
      <SearchForm onSubmit={onSubmit}>
        <SearchFormbutton type="submit">
          <SearchFormbuttonlabel>Search</SearchFormbuttonlabel>
        </SearchFormbutton>

        <SearchForminput
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarHeader>
  );
};
