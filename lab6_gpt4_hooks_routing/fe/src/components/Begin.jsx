import useData from "../hooks/useData";
import Preloader from "./Preloader";
import beginData from "../mockData/beginData";

export const LeftContentTemplate = ({ beginLeftData }) => {
    const { content1, content2 } = beginLeftData;
    return (
    <>
        <p className="text_1">
            {content1}
        </p>
        <p className="text_2">
            {content2}
        </p>
    </>
    )
  };


  export const RightContentTemplate = ({ beginRightData }) => {
    const { button: { href, title }, } = beginRightData;
    return (
         <button href={href} className="button">{title}</button>
    )
  };


  const Begin = () => {
    const { beginLeftData, beginRightData } = beginData;

    const { isLoading, isError, error, data } = useData({
      endpoint: "begin",
      options: {
        method: "GET",
      },
    });
  
    if (isLoading) return <Preloader />;
    if (isError) return <div>{JSON.stringify(error)}</div>
  

    return (
      <>
        <div className="begin_colon">
            <div className="begin__left">
                <LeftContentTemplate beginLeftData={data?.beginLeftData ? data.beginLeftData : beginLeftData} />
            </div>
            <div className="begin__right">
                <RightContentTemplate beginRightData={data?.beginRightData ? data.beginRightData : beginRightData} />
            </div>
        </div>
      </>
    );
  };
  
  export default Begin;