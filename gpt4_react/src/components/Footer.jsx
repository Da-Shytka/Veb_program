
import footerData from "../mockData/footerData";

export const FooterTemplate = ({ item }) => {
    const { 
        header, 
        button1: { href1, title1, },
        button2: { href2, title2, },
        button3: { href3, title3, },
        button4: { href4, title4, }, } = item;
    return (
        <div className="colon">
        <p className="name">
          {header}
        </p>
        <a href={href1} className="name_link">{title1}</a>
        <a href={href2} className="name_link">{title2}</a>
        <a href={href3} className="name_link">{title3}</a>
        <a href={href4} className="name_link">{title4}</a>
      </div>
    );
  };
  
  export const Footer = () => {
    return (
      <>
      <h2 className="footer_end">
        Хотите Шагнуть в Будущее Раньше Других?
      </h2>
      <div className="footer_button">
        <a href="#root" className="footer_button_text">
          Запросить ранний доступ
        </a>
      </div>
      <div className="colonki">
        {footerData.map((item, index) => (
        <FooterTemplate key={index} item={item} />
        ))}
      </div>
      </>
    )
  };

  export default Footer;