/* eslint-disable react/prop-types */
import { useLocation, useNavigate } from 'react-router-dom';
import icon from '../assets/images/icon-list.svg';
import '../css/success.css';

const Success = () => {
  const location = useLocation();
  const email = location.state?.email;

  const navigate = useNavigate();

  const dismissHandler = () => {
    navigate('/');
  };

  return (
    <div className="container small">
      <img src={icon} className="icon-big" alt="icon" />

      <h1 className="primary-header">Thanks for subscribing!</h1>

      <p className="success-text">
        A confirmation email has been sent to <strong>{email}</strong>. Please
        open it and click the button inside to confirm your subscription.
      </p>

      <button className="btn" onClick={dismissHandler}>
        Dismiss message
      </button>
    </div>
  );
};

export default Success;
