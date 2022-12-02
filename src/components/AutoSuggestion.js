import React, { useState } from "react";
import AutoSuggest from "react-autosuggest";
import { useSelector, useDispatch } from "react-redux";
import { SearchProductActions } from "../store/actions/action";
import { Link, useNavigate } from "react-router-dom";

const AutoSuggestion = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  // const [selected, setSelected] = useState("");
  const searchdata = useSelector(
    (state) => state.searchReducers.searchproducts
  );

  const getSuggestionValue = (suggestion) => suggestion.Title;

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : searchdata.filter(
          (item) =>
            item.Title.toLowerCase().slice(0, inputLength) === inputValue
        );
  };
  const onChange = (event, { newValue }) => {
    setValue(newValue);
    SearchProductActions(dispatch, { searchValue: newValue });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate(`/product-listing-page/search/?searchValue=${value}`);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };
  const renderSuggestion = (suggestion) => (
    <Link
      to={`/product-listing-page/${suggestion.Title}?category=${suggestion.categoryData.slug}&searchValue=${value}`}
    >
      <div>{suggestion.Title}</div>
    </Link>
  );

  const onSuggestionsClearRequested = () => setSuggestions([]);

  //   const onSuggestionSelected = (event, { suggestion }) => {
  //       setSelected(suggestion.Title);
  //   };

  const inputProps = {
    placeholder: "Search for anything",
    value,
    onChange,
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <AutoSuggest
          suggestions={searchdata ? searchdata : []}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          //   onSuggestionSelected={onSuggestionSelected}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
      </form>
    </div>
  );
};

export default AutoSuggestion;
