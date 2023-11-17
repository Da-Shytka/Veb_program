import { useState } from "react";
import useData from "../../hooks/useData";
import Preloader from "../Preloader";
import {
  useFooterContext,
  usePostFooterContext,
} from "../../contexts/admin/FooterContext";

const AdminfooterData = ({ item, index }) => {
    const [headerData, setHeaderData] = useState(item.header);
    const [button1Data, setButton1Data] = useState(item.button1);
    const [button2Data, setButton2Data] = useState(item.button2);
    const [button3Data, setButton3Data] = useState(item.button3);
    const [button4Data, setButton4Data] = useState(item.button4);

    let footerDataContext = useFooterContext();
  
    const handleHeaderData = (e) => {
        setHeaderData(e.target.value);
        footerDataContext.footerData[index].header = e.target.value;
    };
    const handleButton1Data = (e) => {
        setButton1Data(e.target.value);
        footerDataContext.footerData[index].button1 = e.target.value;
    };
    const handleButton2Data = (e) => {
        setButton2Data(e.target.value);
        footerDataContext.footerData[index].button2 = e.target.value;
    };
    const handleButton3Data = (e) => {
        setButton3Data(e.target.value);
        footerDataContext.footerData[index].button3 = e.target.value;
    };
    const handleButton4Data = (e) => {
        setButton4Data(e.target.value);
        footerDataContext.footerData[index].button4 = e.target.value;
    };
    
    return (
      <div className="block__card">
        <div className="block__item">
          <label>Название:</label>
          <input type="text" value={headerData} onChange={handleHeaderData} />
        </div>
        <div className="block__item">
          <label>Ссылка 1:</label>
          <input type="text" value={button1Data} onChange={handleButton1Data} />
        </div>
        <div className="block__item">
          <label>Ссылка 2:</label>
          <input type="text" value={button2Data} onChange={handleButton2Data} />
        </div>
        <div className="block__item">
          <label>Ссылка 3:</label>
          <input type="text" value={button3Data} onChange={handleButton3Data} />
        </div>
        <div className="block__item">
          <label>Ссылка 4:</label>
          <input type="text" value={button4Data} onChange={handleButton4Data} />
        </div>
      </div>
    );
  };

  const AdminFooterDataMas = ({footerData}) => {
    return (
      <div className="admin_container__block">
        <h3>Нижние данные:</h3>
        {footerData.map((item, index) => (
          <AdminfooterData key={index} item={item} index={index} />
        ))}
      </div>
    );
  };

  const AdminFooter = () => {
    const { isLoading, isError, error, data } = useData({
      endpoint: "footer",
      options: {
        method: "GET",
      },
    });

    const [isPostDataLoading, setIsPostDataLoading] = useState(false);
    const [isPostDataError, setIsPostDataError] = useState(false);
    const [postDataError, setPostDataError] = useState(null);
  
    const postData = usePostFooterContext();
  
    const handlePostData = async () => {
      try {
        setIsPostDataLoading(true);
        const { isPostDataError, postDataError } = await postData();
        setIsPostDataError(isPostDataError);
        setIsPostDataError(postDataError);
      } catch (error) {
        console.log(error);
        setIsPostDataError(isPostDataError);
        setPostDataError(postDataError);
      }
      setIsPostDataLoading(false);
    };
  
    if (isLoading) return <Preloader />;
    if (isError) return <div>{JSON.stringify(error)}</div>;
    if (!data) return <Preloader />;
  
    return (
      <div className="admin_container admin_Hero">
        <h2>Блог.</h2>
        <AdminFooterDataMas footerData={data} />
        <button className="btn primary-btn" onClick={handlePostData}>
          {isPostDataLoading && <Preloader />} Сохранить
        </button>
        {isError && <div className="error">{JSON.stringify(error)}</div>}
        {isPostDataError && (
          <div className="error">{JSON.stringify(postDataError)}</div>
        )}
      </div>
    );
  };
  
  export default AdminFooter;