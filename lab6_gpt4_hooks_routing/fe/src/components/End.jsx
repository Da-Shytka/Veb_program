import useData from "../hooks/useData";
import Preloader from "./Preloader";
import endData from "../mockData/endData";

export const EndTemplate = ({ blogEndData }) => {
    const { content } = blogEndData;
    return (
    <>
        <p className="text_end">
            {content}
        </p>
    </>
    )
  };

  const End = () => {
    const { blogEndData } = endData;

    const { isLoading, isError, error, data } = useData({
        endpoint: "end",
        options: {
          method: "GET",
        },
      });
    
      if (isLoading) return <Preloader />;
      if (isError) return <div>{JSON.stringify(error)}</div>

    return (
        <EndTemplate blogEndData={data?.blogEndData ? data.blogEndData : blogEndData} />
    );
  };
  
  export default End;