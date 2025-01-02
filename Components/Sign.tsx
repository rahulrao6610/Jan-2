import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sign: React.FC = () => {
  const navigate = useNavigate();

  const handleSignup = (event: React.FormEvent) => {
    event.preventDefault();
    // Perform your signup logic here, then navigate to the Login page
    navigate('/login');
  };

  return (
    <div>
      <div className="span3">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <label>Name</label>
          <input type="text" name="firstname" className="span3" />
          <label>Number</label>
          <input type="text" name="Number" className="span3" />
          <label>Email Address</label>
          <input type="email" name="email" className="span3" />
          <label>Username</label>
          <input type="text" name="username" className="span3" />
          <label>Password</label>
          <input type="password" name="password" className="span3" />
          <label>Re-Enter Password</label>
          <input type="password" name="Re-Enter password" className="span3" />
          <label>
            <input type="checkbox" name="terms" /> I agree with the <a href="#">Terms and Conditions</a>.
          </label>
          <input type="submit" value="Sign up" className="btn btn-primary pull-right" />
          <div className="clearfix"></div>
        </form>
      </div>
    </div>
  );
};

export default Sign;
