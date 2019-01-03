import { Action, Dispatch } from "redux";
import axios from 'axios';

export interface Link {
  title: string,
  url: string
}

export const ADD_LINK = 'ADD_LINK';
export type ADD_LINK = typeof ADD_LINK;

// Define how AddLinkAction should look like
export interface AddLinkAction extends Action {
  type: ADD_LINK;
  link: Link;
}

// Define CLEAR_LINK const and its type
export const CLEAR_LINK = 'CLEAR_LINK';
export type CLEAR_LINK = typeof CLEAR_LINK;

// Define ClearLinkAction. No additional information is needed
export interface ClearLinkAction extends Action {
  type: CLEAR_LINK;
}

export const LOAD_LINK_SUCCESS = 'LOAD_LINK_SUCCESS';
export type LOAD_LINK_SUCCESS = typeof LOAD_LINK_SUCCESS;

export interface LoadLinkSuccessAction extends Action {
  type: LOAD_LINK_SUCCESS;
  links: Link[];
}

export const LOAD_LINK_FAILURE = 'LOAD_LINK_FAILURE';
export type LOAD_LINK_FAILURE = typeof LOAD_LINK_FAILURE;

export interface LoadLinkFailureAction extends Action {
  type: LOAD_LINK_FAILURE,
}

// Collection of all actions for easier integration
export type LinkActions = AddLinkAction | ClearLinkAction | LoadLinkSuccessAction | LoadLinkFailureAction;

export function addLink(title:string, url:string):AddLinkAction {
  return {
    type: ADD_LINK,
    link: {
      title: title,
      url: url
    }
  }
}

export function clearLink(): ClearLinkAction {
  return {
    type: CLEAR_LINK
  }
}

export function loadLinkSuccess(links: Link[]): LoadLinkSuccessAction {
  return {
    type: LOAD_LINK_SUCCESS,
    links: links
  }
}

export function loadLinkFailure(): LoadLinkFailureAction {
  return {
    type: LOAD_LINK_FAILURE
  }
}

export function loadLink():any {
  return (dispatch: Dispatch<LoadLinkSuccessAction | LoadLinkFailureAction>) => {
    return axios('https://www.reddit.com/r/programming.json').then((res) => {
      let threads = res.data;
      let links = threads.data.children.map((t:any) => ({
        title: t.data.title,
        url: t.data.url
      }));
      console.log('Success', links);
      dispatch(loadLinkSuccess(links));
    }).catch((err) => {
      console.log('Failed', err);
      dispatch(loadLinkFailure());
    });
  };
}