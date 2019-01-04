import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../redux/store';
import { fetchGroups } from '../redux/group/actions';
// import { SearchBox } from '../components/SearchBox';

interface GroupScreenProps {
  groups: ReactExamples.Group[];
  reloadGroup: () => void;
}

export class PureGroup extends React.Component<GroupScreenProps> {
  componentWillMount() {
    this.props.reloadGroup();
  }

  render() {
    return (
      <div>
        {/* <SearchBox onSearch={this.onFilter}></SearchBox> */}
        
        {this.props.groups.map(group => (
          <ul className="list-group" key={group.id}>
              <li className="list-group-item">{group.name}</li>
          </ul>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  groups: state.group.groups
});

// tslint:disable-next-line:no-any
const mapDispatchToProps = (dispatch: any ) => ({
  reloadGroup: () => dispatch(fetchGroups())
});

export const Group = connect(
  mapStateToProps,
  mapDispatchToProps
)(PureGroup);