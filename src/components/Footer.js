//styles
import '../stylesSheet/Footer.scss';

//FUNCTIONAL COMPONENT
const Footer = () => {
  return (
    <section className="footer">
      <a
        className="footer_link"
        href="https://github.com/Sagramielgo"
        target="_blank"
        rel="noreferrer"
      >
        <h5 className="copy">
          By #Git Funtastic &nbsp;
          <span>
            <i className="fas fa-paw "></i>
          </span>
          &nbsp;2021
        </h5>
      </a>
    </section>
  );
};
export default Footer;
