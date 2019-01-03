import {LinkActions, ADD_LINK, CLEAR_LINK, LOAD_LINK_FAILURE, LOAD_LINK_SUCCESS} from '../actions/link'

export type LinkState = {
    title: string,
    url: string
  }[]
  
export const linkReducer = (state: LinkState = [], action: LinkActions) : LinkState => {
    // Use switch to handle different actions
    switch (action.type) {
      case ADD_LINK:
        return state.concat([action.link]) // Use concat to add a new link
      case CLEAR_LINK:
        return [] // Reset the link
      case LOAD_LINK_SUCCESS:
        return action.links; // Override the links
      case LOAD_LINK_FAILURE:
        return []; // Override the links
      default:
        return state; // Do not change the state in case of any other actions
    }
};