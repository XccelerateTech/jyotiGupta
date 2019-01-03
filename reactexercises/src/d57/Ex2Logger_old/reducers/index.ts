// reducers/index.ts

import { combineReducers } from 'redux'
import { linkReducer, LinkState } from './link'

export interface RootState {
  links: LinkState,
}

export const rootReducer = combineReducers<RootState>({
  links: linkReducer
})