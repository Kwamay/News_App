import React from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Button = (props) => {
  const { id } = props;
  const navigate = useNavigate(); // Import the useNavigate hook

  const handleDetails = () => {
    // Convert id to a string and navigate to the specified route
    navigate(`/details/${String(id)}`);
  };

  return (
    <button
      id={id}
      data-testid="action-button"
      type="button"
      className="action-button"
      onClick={handleDetails}
    >
      <BsArrowRightCircle />
    </button>
  );
};

export default Button;
