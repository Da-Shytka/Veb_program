import blogTextData from "../mockData/blogTextData";

export const BlogTextTemplate = ({ blogTextLeftData }) => {
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


    return (
      <>
       <div className="blog__left">
            <BlogTextTemplate blogTextLeftData={blogTextLeftData} />;
        </div>
        <div className="blog__right"></div>
      </>
    );
  };
  
  export default BlogText;