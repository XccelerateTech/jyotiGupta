
import * as React from "react";
import {Dispatch} from 'redux'
import { connect } from "react-redux";
import {LinkActions, AddLinkAction, ClearLinkAction} from './App'
import * as Types from './App'


interface LinkListProps {
  links: {
    id: number,
    title: string,
    url: string
  }[],
  addLink: () => void,
  clearLink: () => void,
  removeLink: (key:number) => void
}

  interface RootState {
    links: {
      id: number,
      title: string,
      url: string
    }[]
  }
  
  const PureLinkList = (props: LinkListProps) => {
    return (
      <div>
        <button onClick={props.addLink}>New Link</button>
        <button onClick={props.clearLink}>Clear</button>
        {props.links.map(l => (
          <div key={l.id}>{l.title} - {l.url} 
          <button onClick={()=>props.removeLink(l.id)}>Remove</button>
          </div>
        ))}
      </div>
    );
  }

  const mapStateToProps = (state: RootState) => {
    return {
      links: state.links
    }
  }

  // Add the `mapDispatchToProp`
const mapDispatchToProp = (dispatch: Dispatch<LinkActions>) => {
  return {
    addLink: () => dispatch({
      type: Types.ADD_LINK,
      link: {
        id: Math.random(),
        title: 'xccelerate',
        url: 'https://www.xccelerate.co'
      }
    }),
    clearLink: () => dispatch({
      type: Types.CLEAR_LINK
    }),
    removeLink: (key:number) => dispatch({
      type: Types.REMOVE_LINK, 
      key: key
    })
  }
}
  
const LinkList = connect(mapStateToProps, mapDispatchToProp)(PureLinkList)

export default LinkList;
