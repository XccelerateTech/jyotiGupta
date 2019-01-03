
import * as React from "react";
import {Dispatch} from 'redux'
import { connect } from "react-redux";
import {LinkActions, addLink, clearLink} from '../actions/link'
import {LinkState} from '../reducers/link'
import { RootState } from "../reducers";

interface LinkListProps {
  links: {
    title: string,
    url: string
  }[],
  addLink: () => void,
  clearLink: () => void
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
    addLink: () => dispatch(addLink('Accelerate', 'http://www.acceleratedhk.com')),
    clearLink: () => dispatch(clearLink())
  }
}
const LinkList = connect(mapStateToProps, mapDispatchToProp)(PureLinkList)

export default LinkList;
