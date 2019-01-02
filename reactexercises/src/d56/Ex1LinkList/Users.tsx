import * as React from "react";
import { connect } from "react-redux";

interface UserProps {
    users: {
      name: string,
    }[]
}
interface RootState {
    links: {
      title: string,
      url: string
    }[],
    users: {
      name: string
    }[]
}
  
  const PureUserList = (props: UserProps) => {
    return (
      <div>
        {props.users.map(u => (
          <div>{u.name} </div>
        ))}
      </div>
    );
  }

  const mapStateToProps = (state: RootState) => {
    return {
      users: state.users
    }
  }
  
  const UserList = connect(mapStateToProps)(PureUserList)
  export default UserList;