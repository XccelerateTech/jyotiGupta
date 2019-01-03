
import * as React from "react";
import { render } from "react-dom";
import { Dispatch } from "redux";
import { Provider, connect } from "react-redux";
import { RootState } from '../reducers';
import { LinkActions, addLink, clearLink, loadLink } from '../actions/link';

interface LinkListProps {
  links: {
    title: string,
    url: string
  }[],
  reloadLink: () => void,
  addLink: () => void,
  clearLink: () => void
}

const PureLinkList = (props: LinkListProps) => {
  return (
    <div>
      <button onClick={props.reloadLink}>Reload</button>
      <button onClick={props.addLink}>New Link</button>
      <button onClick={props.clearLink}>Clear</button>
      <ul>
      {props.links.map((l, i) => (
        <li key={i}>{l.title} - {l.url}</li>
      ))}
      </ul>
    </div>
  );
}

const mapStateToProp = (state: RootState) => {
  return {
    links: state.links
  }
}

// Add the `mapDispatchToProp`
const mapDispatchToProp = (dispatch: Dispatch<LinkActions>) => {
  return {
    addLink: () => dispatch(addLink('Accelerate', 'http://www.acceleratedhk.com')),
    clearLink: () => dispatch(clearLink()),
    reloadLink: () => dispatch(loadLink())
  }
}

// Link with connect()
const LinkList = connect(mapStateToProp, mapDispatchToProp)(PureLinkList)


export default LinkList;
