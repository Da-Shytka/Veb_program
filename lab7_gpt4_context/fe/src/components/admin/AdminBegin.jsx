import { useState } from "react";
import useData from "../../hooks/useData";
import Preloader from "../Preloader";
import {
  useBeginContext,
  usePostBeginContext,
} from "../../contexts/admin/BeginContext";

const AdminbeginRightDataButton = ({ beginRightData }) => {
      const [titleData, setTitleData] = useState(beginRightData.button.title);
      const [hrefData, setHrefData] = useState(beginRightData.button.href);
  
      let beginContext = useBeginContext();
  
      const handleTitleData = (e) => {
        setTitleData(e.target.value);
        beginContext.beginRightData.button.title = e.target.value;
      };
    
      const handleHrefData = (e) => {
        setHrefData(e.target.value);
        beginContext.beginRightData.button.href = e.target.value;
      };
  
      return (
        <div className="admin_container__block">
          <div className="block__item">
            <label>Наименование кнопки:</label>
            <input type="text" value={titleData} onChange={handleTitleData} />
          </div>
          <div className="block__item">
            <label>Тип:</label>
            <input type="text" value={hrefData} onChange={handleHrefData} />
          </div>
        </div>
      );
    };

    const AdminbeginLeftData = ({ beginLeftData }) => { 
        // const [contoData, setContoData] = useState(contentAllData.content1);
        const [content1Data, setContent1Data] = useState(beginLeftData.content1);
        const [content2Data, setContent2Data] = useState(beginLeftData.content2);
        let beginContext = useBeginContext();
      
        const handleContent1Data = (e) => {
          setContent1Data(e.target.value);
          beginContext.beginLeftData.content1 = e.target.value;
        };
        const handleContent2Data = (e) => {
            setContent2Data(e.target.value);
            beginContext.beginLeftData.content2 = e.target.value;
          };
        return (
          <div className="admin_container__block">
            <h3>Контенты:</h3>
            <div className="block__item">
              <label>Заголовок1:</label>
              <input
                type="text"
                className="item__long_input"
                value={content1Data}
                onChange={handleContent1Data}
              />
            </div>
            <div className="block__item">
              <label>Заголовок2:</label>
              <input
                type="text"
                className="item__long_input"
                value={content2Data}
                onChange={handleContent2Data}
              />
            </div>
          </div>
        );
      };
      const AdminBegin = () => {
        const { isLoading, isError, error, data } = useData({
          endpoint: "begin",
          options: {
            method: "GET",
          },
        });
      
        const [isPostDataLoading, setIsPostDataLoading] = useState(false);
        const [isPostDataError, setIsPostDataError] = useState(false);
        const [postDataError, setPostDataError] = useState(null);
      
        const postData = usePostBeginContext();
      
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
            <h2>Начало.</h2>
            <AdminbeginLeftData beginLeftData={data.beginLeftData} />
            <h3>Кнопка:</h3>
            <AdminbeginRightDataButton beginRightData={data.beginRightData} />
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
      
      export default AdminBegin;
      
      