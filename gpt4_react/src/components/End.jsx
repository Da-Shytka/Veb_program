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

    return (
        <EndTemplate blogEndData={blogEndData} />
    );
  };
  
  export default End;