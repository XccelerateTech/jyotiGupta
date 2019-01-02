
import * as React from "react";
import {Dispatch} from 'redux'
import { connect } from "react-redux";
import {LinkActions, AddLinkAction, ClearLinkAction} from './App'
import * as Types from './App'


interface LinkListProps {
  links: {
    title: string,
    url: string
  }[],
  addLink: () => void,
  clearLink: () => void
}

  interface RootState {
    links: {
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
          <div>{l.title} - {l.url}</div>
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
        title: 'xccelerate',
        url: 'https://www.xccelerate.co'
      }
    }),
    clearLink: () => dispatch({
      type: Types.CLEAR_LINK
    })
  }
}
  
const LinkList = connect(mapStateToProps, mapDispatchToProp)(PureLinkList)

  export default LinkList;
