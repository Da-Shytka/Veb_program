import { useState } from "react";
import useData from "../../hooks/useData";
import Preloader from "../Preloader";
import {
  useFooterContext,
  usePostFooterContext,
} from "../../contexts/admin/FooterContext";

const AdminfooterData = ({ item, index }) => {
    const [headerData, setHeaderData] = useState(item.header);
    const [button1HrefData, setButton1HrefData] = useState(item.button1.href1);
    const [button1TitleData, setButton1TitleData] = useState(item.button1.title1);
    const [button2HrefData, setButton2HrefData] = useState(item.button2.href2);
    const [button2TitleData, setButton2TitleData] = useState(item.button2.title2);
    const [button3HrefData, setButton3HrefData] = useState(item.button3.href3);
    const [button3TitleData, setButton3TitleData] = useState(item.button3.title3);
    const [button4HrefData, setButton4HrefData] = useState(item.button4.href4);
    const [button4TitleData, setButton4TitleData] = useState(item.button4.title4);
    

    let footerDataContext = useFooterContext();
  
    const handleHeaderData = (e) => {
        setHeaderData(e.target.value);
        footerDataContext.footerData[index].header = e.target.value;
    };
    const handleButton1HrefData = (e) => {
      setButton1HrefData(e.target.value);
      footerDataContext.footerData[index].button1.href1 = e.target.value;
    };
    const handleButton1TitleData = (e) => {
      setButton1TitleData(e.target.value);
      footerDataContext.footerData[index].button1.title1 = e.target.value;
    };
    const handleButton2HrefData = (e) => {
      setButton2HrefData(e.target.value);
      footerDataContext.footerData[index].button2.href2 = e.target.value;
    };
    const handleButton2TitleData = (e) => {
      setButton2TitleData(e.target.value);
      footerDataContext.footerData[index].button2.title2 = e.target.value;
    };
    const handleButton3HrefData = (e) => {
      setButton3HrefData(e.target.value);
      footerDataContext.footerData[index].button3.href3 = e.target.value;
    };
    const handleButton3TitleData = (e) => {
      setButton3TitleData(e.target.value);
      footerDataContext.footerData[index].button3.title3 = e.target.value;
    };
    const handleButton4HrefData = (e) => {
      setButton4HrefData(e.target.value);
      footerDataContext.footerData[index].button4.href4 = e.target.value;
    };
    const handleButton4TitleData = (e) => {
      setButton4TitleData(e.target.value);
      footerDataContext.footerData[index].button4.title4 = e.target.value;
    };
    
    return (
      <>
      <div className="block__silki_name">
        <div className="block__item">
          <label>Заголовок:</label>
          <input type="text" value={headerData} onChange={handleHeaderData} />
        </div>
      </div>
      <div className="block__silki_data">
          <div className="block__item">
            <label>Название 1:</label>
            <input type="text" value={button1TitleData} onChange={handleButton1TitleData} />
          </div>
          <div className="block__item">
            <label>Ссылка 1:</label>
            <input type="text" value={button1HrefData} onChange={handleButton1HrefData} />
          </div>
          <div className="block__item">
            <label>Название 2:</label>
            <input type="text" value={button2TitleData} onChange={handleButton2TitleData} />
          </div>
          <div className="block__item">
            <label>Ссылка 2:</label>
            <input type="text" value={button2HrefData} onChange={handleButton2HrefData} />
          </div>
          <div className="block__item">
            <label>Название 3:</label>
            <input type="text" value={button3TitleData} onChange={handleButton3TitleData} />
          </div>
          <div className="block__item">
            <label>Ссылка 3:</label>
            <input type="text" value={button3HrefData} onChange={handleButton3HrefData} />
          </div>
          <div className="block__item">
            <label>Название 4:</label>
            <input type="text" value={button4TitleData} onChange={handleButton4TitleData} />
          </div>
          <div className="block__item">
            <label>Ссылка 4:</label>
            <input type="text" value={button4HrefData} onChange={handleButton4HrefData} />
          </div>
        </div>
      </>
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