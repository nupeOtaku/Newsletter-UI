import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Form = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    if (!email) {
      setError(true);
      return;
    }

    setEmail('');

    navigate('/success', { state: { email } });
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;

    setEmail(value);

    if (value.includes('@')) {
      setError(false);
    }
  };

  return (
    <>
      <form className="form" onSubmit={submitForm}>
        <div className="form-inputs">
          <label htmlFor="email" className="label-text">
            <span>Email address</span>

            {error && <span className="error-text">Valid email required</span>}
          </label>

          <input
            type="email"
            name="email"
            placeholder="email@company.com"
            onChange={handleEmailChange}
            value={email}
            className={error ? 'error' : ''}
          />
        </div>

        <button type="submit" className="btn">
          Subscribe to monthly newsletter
        </button>
      </form>
    </>
  );
};

export default Form;
