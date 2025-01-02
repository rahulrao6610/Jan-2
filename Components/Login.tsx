import React from 'react';

const Login: React.FC = () => {
  return (
    <div>
      <h2><i className="fa fa-lock" aria-hidden="true"></i>Login</h2>
      <br /><br />
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text"><i className="fas fa-user-tie"></i></span>
        </div>
        <input type="text" className="form-control" placeholder="username or email" />
      </div>
      <br />
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text"><i className="fa fa-key icon"></i></span>
        </div>
        <input type="password" className="form-control" placeholder="password" />
      </div>
      <br />
      <div className="checkbox">
        <label><input type="checkbox" value="" /> Remember me</label>
      </div>
      <br />
      <button type="submit" className="btn btn-success"><span className="glyphicon glyphicon-off"></span> Login</button>
    </div>
  );
};

export default Login;
