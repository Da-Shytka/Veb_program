import useData from "../hooks/useData";
import Preloader from "./Preloader";
import blogTextData from "../mockData/blogTextData";

export const BlogTextTemplate = (blogTextLeftData) => {
    const { content } = blogTextLeftData;
    return (
    <>
        <h2 className="text_blog__left">
            {content}
        </h2>
    </>
    )
  };

  const BlogText = () => {
    const { blogTextLeftData } = blogTextData;

    const { isLoading, isError, error, data } = useData({
      endpoint: "text",
      options: {
        method: "GET",
      },
    });
  
    if (isLoading) return <Preloader />;
    if (isError) return <div>{JSON.stringify(error)}</div>;

    return (
      <>
       <div className="blog__left">
          <BlogTextTemplate blogTextLeftData={data?.blogTextLeftData ? data.blogTextLeftData : blogTextLeftData}/>
        </div>
        <div className="blog__right"></div>
      </>
    );
  };
  
  export default BlogText;