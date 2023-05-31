type ButtonProps = {
  text: string;
  buttonAction: () => void;
};

const Button = ({ text, buttonAction }: ButtonProps): JSX.Element => {
  const handleClick = () => {
    buttonAction();
  };

  return (
    <button type='button' onClick={handleClick} className='btn btn-primary'>
      {text}
    </button>
  );
};

export default Button;
