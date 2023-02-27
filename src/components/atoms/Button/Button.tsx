import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.node,
};

type Props = PropTypes.InferProps<typeof propTypes>;

const Button = ({ children }: Props) => {
    return <div>{children}</div>;
};

export default Button;
