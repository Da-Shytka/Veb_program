import { useState } from "react";
import useData from "../../hooks/useData";
import Preloader from "../Preloader";
import {
    useExceedingContext,
    usePostExceedingContext,
} from "../../contexts/admin/ExceedingContext";

const AdminContentAllButton = ({ button }) => {
    const [titleData, setTitleData] = useState(button.title);
    const [hrefData, setHrefData] = useState(button.href);

    let exceedingContext = useExceedingContext();

    const handleTitleData = (e) => {
      setTitleData(e.target.value);
      exceedingContext.contentAllData.button.title = e.target.value;
    };
  
    const handleHrefData = (e) => {
      setHrefData(e.target.value);
      exceedingContext.contentAllData.button.href = e.target.value;
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

  const AdminContentAll = ({ contentAllData }) => {  
    // const [contoData, setContoData] = useState(contentAllData.content1);
    const [content1Data, setContent1Data] = useState(contentAllData.content1);
    const [content2Data, setContent2Data] = useState(contentAllData.content2);
    const [content3Data, setContent3Data] = useState(contentAllData.content3);
    let exceedingContext = useExceedingContext();
  
    const handleContent1Data = (e) => {
      setContent1Data(e.target.value);
      exceedingContext.contentAllData.content1 = e.target.value;
    };
    const handleContent2Data = (e) => {
        setContent2Data(e.target.value);
        exceedingContext.contentAllData.content2 = e.target.value;
      };
    const handleContent3Data = (e) => {
      setContent3Data(e.target.value);
      exceedingContext.contentAllData.content3 = e.target.value;
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
        <div className="block__item">
          <label>Заголовок3:</label>
          <input
            type="text"
            className="item__long_input"
            value={content3Data}
            onChange={handleContent3Data}
          />
        </div>
        <h3>Кнопка:</h3>
        <AdminContentAllButton button={contentAllData.button} />
        </div>
    );
  };

  const AdminGirlWithGlasses = ({ girlWithGlasses }) => {
    const [srcData, setSrcData] = useState(girlWithGlasses.src);
    const [altData, setAltData] = useState(girlWithGlasses.alt);
    let exceedingContext = useExceedingContext();
  
    const handleSrcData = (e) => {
      setSrcData(e.target.value);
      exceedingContext.girlWithGlasses.src = e.target.value;
    };
  
    const handleAltData = (e) => {
      setAltData(e.target.value);
      exceedingContext.girlWithGlasses.alt = e.target.value;
    };
  
    return (
      <div className="admin_container__block">
        <h3>Изображение:</h3>
        <div className="block__item">
          <label>Ссылка:</label>
          <input
            type="text"
            className="item__long_input"
            value={srcData}
            onChange={handleSrcData}
          />
        </div>
        <div className="block__item">
          <label>Описание:</label>
          <input
            type="text"
            className="item__long_input"
            value={altData}
            onChange={handleAltData}
          />
        </div>
      </div>
    );
  };

const AdminExceeding = () => {
  const { isLoading, isError, error, data } = useData({
    endpoint: "exceeding",
    options: {
      method: "GET",
    },
  });
  const [isPostDataLoading, setIsPostDataLoading] = useState(false);
  const [isPostDataError, setIsPostDataError] = useState(false);
  const [postDataError, setPostDataError] = useState(null);

  const postData = usePostExceedingContext();

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
    <div className="admin_container admin_Exceeding">
      <h2>Эксидинг-секция.</h2>
      
      <AdminContentAll contentAllData={data.contentAllData} />
      <AdminGirlWithGlasses girlWithGlasses={data.girlWithGlasses} />
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

export default AdminExceeding;