import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const navigateToSign = () => {
    navigate('/sign');
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <h2><i className="fa fa-lock" aria-hidden="true"></i>Login</h2>
        </div>
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
        <button type="button" className="btn btn-info" onClick={navigateToSign}><span className="glyphicon glyphicon-remove"></span> Signup </button>
        <br /><br />
        <center><div style={{ border: '1px solid black', height: '1px', width: '300px' }}></div></center>
        <br />
        <div className="footer">
        </div>
      </div>
    </div>
  );
};

export default Home;
