import { useState } from "react";
import useData from "../../hooks/useData";
import Preloader from "../Preloader";
import {
  useBlogContext,
  usePostBlogContext,
} from "../../contexts/admin/BlogContext";

const AdminblogData = ({ item, index }) => {
    const [isPrimaryData, setIsPrimaryData] = useState(item.isPrimary);
    const [imgData, setImgData] = useState(item.img);
    const [content1Data, setContent1Data] = useState(item.content1);
    const [content2Data, setContent2Data] = useState(item.content2);
    const [buttonData, setButtonData] = useState(item.button);

    let blogDataContext = useBlogContext();
  
    const handleIsPrimaryData = (e) => {
        setIsPrimaryData(e.target.value);
        blogDataContext.blogData[index].isPrimary = e.target.value;
    };
    const handleImgData = (e) => {
        setImgData(e.target.value);
        blogDataContext.blogData[index].img = e.target.value;
    };
    const handleContent1Data = (e) => {
        setContent1Data(e.target.value);
        blogDataContext.blogData[index].content1 = e.target.value;
    };
    const handleContent2Data = (e) => {
        setContent2Data(e.target.value);
        blogDataContext.blogData[index].content2 = e.target.value;
    };
    const handleButtonData = (e) => {
        setButtonData(e.target.value);
        blogDataContext.blogData[index].button = e.target.value;
    };
    
    return (
      <div className="block__card">
        <div className="block__item">
          <label>Приоритетность:</label>
          <input type="text" value={isPrimaryData} onChange={handleIsPrimaryData} />
        </div>
        <div className="block__item">
          <label>Картинка:</label>
          <input type="text" value={imgData} onChange={handleImgData} />
        </div>
        <div className="block__item">
          <label>Контент 1:</label>
          <input type="text" value={content1Data} onChange={handleContent1Data} />
        </div>
        <div className="block__item">
          <label>Контент 2:</label>
          <input type="text" value={content2Data} onChange={handleContent2Data} />
        </div>
        <div className="block__item">
          <label>Кнопка:</label>
          <input type="text" value={buttonData} onChange={handleButtonData} />
        </div>
      </div>
    );
  };

  const AdminblogDataMas = ({blogData}) => {
    return (
      <div className="admin_container__block">
        <h3>Нижние данные:</h3>
        {blogData.map((item, index) => (
          <AdminblogData key={index} item={item} index={index} />
        ))}
      </div>
    );
  };

  const AdminBlog = () => {
    const { isLoading, isError, error, data } = useData({
      endpoint: "blog",
      options: {
        method: "GET",
      },
    });

    const [isPostDataLoading, setIsPostDataLoading] = useState(false);
    const [isPostDataError, setIsPostDataError] = useState(false);
    const [postDataError, setPostDataError] = useState(null);
  
    const postData = usePostBlogContext();
  
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
        <AdminblogDataMas blogData={data} />
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
  
  export default AdminBlog;