import { useState } from "react";
import useData from "../../hooks/useData";
import Preloader from "../Preloader";
import {
  useBlogContext,
  usePostBlogContext,
} from "../../contexts/admin/BlogContext";

const AdminblogData = ({ item, index }) => {
    const [isPrimaryData, setIsPrimaryData] = useState(item.isPrimary);
    const [imgSrcData, setImgSrcData] = useState(item.img.src);
    const [imgAltData, setImgAltData] = useState(item.img.alt);
    const [content1Data, setContent1Data] = useState(item.content1);
    const [content2Data, setContent2Data] = useState(item.content2);
    const [buttonHrefData, setButtonHrefData] = useState(item.button.href);
    const [buttonTitleData, setButtonTitleData] = useState(item.button.title);

    let blogDataContext = useBlogContext();
  
    const handleIsPrimaryData = (e) => {
        setIsPrimaryData(e.target.value);
        blogDataContext.blogData[index].isPrimary = e.target.value;
    };
    const handleImgSrcData = (e) => {
        setImgSrcData(e.target.value);
        blogDataContext.blogData[index].img.src = e.target.value;
    };
    const handleImgAltData = (e) => {
      setImgAltData(e.target.value);
      blogDataContext.blogData[index].img.alt = e.target.value;
  };
    const handleContent1Data = (e) => {
        setContent1Data(e.target.value);
        blogDataContext.blogData[index].content1 = e.target.value;
    };
    const handleContent2Data = (e) => {
        setContent2Data(e.target.value);
        blogDataContext.blogData[index].content2 = e.target.value;
    };
    const handleButtonHrefData = (e) => {
        setButtonHrefData(e.target.value);
        blogDataContext.blogData[index].button.href = e.target.value;
    };
    const handleButtonTitleData = (e) => {
      setButtonTitleData(e.target.value);
      blogDataContext.blogData[index].button.title = e.target.value;
  };
    
    return (
      <>
      <div className="block__blog_name">
        <div className="block__item">
          <label>Приоритетность:</label>
          <input type="text" value={isPrimaryData} onChange={handleIsPrimaryData} />
        </div>
      </div>
      <div className="block__blog_data">
        <div className="block__item">
          <label>Картинка:</label>
          <input type="text" value={imgSrcData} onChange={handleImgSrcData} />
        </div>
        <div className="block__item">
          <label>Картинка:</label>
          <input type="text" value={imgAltData} onChange={handleImgAltData} />
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
          <input type="text" value={buttonHrefData} onChange={handleButtonHrefData} />
        </div>
        <div className="block__item">
          <label>Кнопка:</label>
          <input type="text" value={buttonTitleData} onChange={handleButtonTitleData} />
        </div>
      </div>
      </>
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