import PropTypes from 'prop-types';

function Header({ text, bgColor, color }) {
  const headerstyles = {
    background: bgColor,
    color: color,
  };

  return (
    <>
      <header style={headerstyles}>
        <div className="container">
          <h2>{text}</h2>
        </div>
      </header>
    </>
  );
}

Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0 0 0 / 0.4',
  color: '#ddd',
};

Header.prototype = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string,
};

export default Header;
