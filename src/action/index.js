import {
  REMOVE_USED_COUNTRY,
  COUNT_SCORE,
  ADD_USED_COUNTRY,
  REMOVE_SCORE,
  ADD_CHOICE_SELECTED,
  REMOVE_CHOICE,
} from "./types";

export const countScore = () => {
  return {
    type: COUNT_SCORE,
    count: 1,
  };
};

export const removeScore = () => {
  return {
    type: REMOVE_SCORE,
  };
};

export const removeUsedCountry = () => {
  return {
    type: REMOVE_USED_COUNTRY,
  };
};

export const addUsedCountry = (used) => {
  return {
    type: ADD_USED_COUNTRY,
    used,
  };
};

export const addChoice = (number) => {
  return {
    type: ADD_CHOICE_SELECTED,
    number,
  };
};

export const removeChoice = () => {
  return {
    type: REMOVE_CHOICE,
  };
};
