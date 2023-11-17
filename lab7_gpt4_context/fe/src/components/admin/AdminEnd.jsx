import { useState } from "react";
import useData from "../../hooks/useData";
import Preloader from "../Preloader";
import {
  useEndContext,
  usePostEndContext,
} from "../../contexts/admin/EndContext";
const AdminEndData = ({ content }) => {

    const [titleData, setTitleData] = useState(content);

    let endContext = useEndContext();

    const handleTitleData = (e) => {
      setTitleData(e.target.value);
      endContext.blogEndData.content = e.target.value;
    };

    return (
      <div className="admin_container__block">
        <div className="block__item">
          <label>Наименование заголовка:</label>
          <input type="text" className="item__long_input" value={titleData} onChange={handleTitleData} />
        </div>
      </div>
    );
  };

  const AdminEnd = () => {
    const { isLoading, isError, error, data } = useData({
      endpoint: "end",
      options: {
        method: "GET",
      },
    });
  
    const [isPostDataLoading, setIsPostDataLoading] = useState(false);
    const [isPostDataError, setIsPostDataError] = useState(false);
    const [postDataError, setPostDataError] = useState(null);
  
    const postData = usePostEndContext();
  
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
        <h2>Конец.</h2>
        <AdminEndData content={data.blogEndData.content} />
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
  
  export default AdminEnd;
  
  