import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, isValid }: IButtonProps) => {
  console.log(isValid)
  return <ButtonContainer onClick={onClick} disabled={!isValid}>{title}</ButtonContainer>;
};

export default Button;
