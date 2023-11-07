import icon from '../assets/images/icon-list.svg';
import Form from './Form';

const TextContainer = () => {
  return (
    <div className="text-container">
      <h1 className="primary-header">Stay updated!</h1>
      <p className="mail-text">
        Join 60,000+ product managers receiving monthly updates on:
      </p>

      <ul className="list-container">
        <li className="list">
          <img src={icon} alt="icon" /> Product discovery and building what
          matters
        </li>
        <li className="list">
          <img src={icon} alt="icon" /> Measuring to ensure updates are a
          success
        </li>
        <li className="list">
          <img src={icon} alt="icon" /> And much More!
        </li>
      </ul>
      <Form />
    </div>
  );
};

export default TextContainer;
