import * as React from 'react';
import FacebookLogin, { ReactFacebookLoginInfo } from 'react-facebook-login';
import { connect } from 'react-redux';
import { loginFacebook, loginUser } from '../redux/auth/actions';

interface LoginProps {
  loginFacebook: (accessToken: string) => Promise<void>;
  loginUser: (username: string, password: string) => Promise<void>;
}

interface LoginState {
  username: string;
  password: string;
}

class PureLogin extends React.Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }
  componentClicked() {
    return null;
  }

  updateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      username: e.currentTarget.value
    });
    console.log(this.state.username);
  }

  updatePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      password: e.currentTarget.value
    });
    console.log(this.state.password);
  }

  responseFacebook = (userInfo: ReactFacebookLoginInfo & { accessToken: string }) => {
    if (userInfo.accessToken) {
      this.props.loginFacebook(userInfo.accessToken);
    }
    return null;
  }

  // tslint:disable-next-line:no-any
  onSubmit = (e: any) => {
    e.preventDefault();
    this.props.loginUser(this.state.username, this.state.password);
  }

  selected = () => {
    return <div style={{width: '40px', display: 'inline-block', backgroundColor: 'yellow'}}>*</div>;
  }

  notSelected = () => {
    return <div style={{width: '40px', display: 'inline-block'}}>*</div>;
  }

  render() {
    return (
      <div>
        <ul>
        {this.selected()}
        {this.selected()}
        {this.selected()}
        {this.selected()}
        {this.notSelected()}
        </ul>
        <h3 className="text-center">
          Login Form
        </h3>
        <div className="container">
          <form>
            <div className="form-group">
              <label>Email</label>
              <input type="text" name="email" className="form-control" onChange={this.updateEmail}/>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" name="password" className="form-control" onChange={this.updatePassword}/>
            </div>
            <input type="submit" value="Submit" className="btn btn-primary" onClick={this.onSubmit}/>
          </form>
          <h4 className="text-center"> OR </h4>
          <div className="text-center">
            <FacebookLogin
              appId={process.env.REACT_APP_FACEBOOK_APP_ID || ''}
              autoLoad={false}
              fields="name,email,picture"
              onClick={this.componentClicked}
              callback={this.responseFacebook}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => ({});

// tslint:disable-next-line:no-any
const mapDispatchToProps = (dispatch: any) => ({
  loginFacebook: (accessToken: string) => dispatch(loginFacebook(accessToken)),
  loginUser: (username: string, password: string) => dispatch(loginUser(username, password)),
});

// make this not hard coded. 

export const Login = connect(mapStateToProps, mapDispatchToProps)(PureLogin);