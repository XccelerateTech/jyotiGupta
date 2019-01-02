import { Action} from "redux";

export const ADD_LINK = 'ADD_LINK';
type ADD_LINK = typeof ADD_LINK;

// Define how AddLinkAction should look like
export interface AddLinkAction extends Action {
  type: ADD_LINK;
  link: {
    title: string,
    url: string
  };
}

// Define CLEAR_LINK const and its type
export const CLEAR_LINK = 'CLEAR_LINK';
type CLEAR_LINK = typeof CLEAR_LINK;

// Define ClearLinkAction. No additional information is needed
export interface ClearLinkAction extends Action {
  type: CLEAR_LINK;
}

// Collection of both for easier integration
export type LinkActions = AddLinkAction | ClearLinkAction;

export function addLink(title:string, url:string):AddLinkAction {
    return {
      type: ADD_LINK,
      link: {
        title: title,
        url: url
      }
    }
  }
  
  export function clearLink():ClearLinkAction {
    return {
      type: CLEAR_LINK
    }
  }