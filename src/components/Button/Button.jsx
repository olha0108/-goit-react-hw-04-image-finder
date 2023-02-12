import { Buttonload } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({ children, onClickLoadMore }) => {
  return <Buttonload onClick={onClickLoadMore}>Load more</Buttonload>;
};

Button.propTypes = {
  onClickLoadMore: PropTypes.func.isRequired,
};
