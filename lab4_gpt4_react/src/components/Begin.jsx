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


    return (
      <>
        <div className="begin_colon">
            <div className="begin__left">
                <LeftContentTemplate beginLeftData={beginLeftData} />;
            </div>
            <div className="begin__right">
                <RightContentTemplate beginRightData={beginRightData} />;
            </div>
        </div>
      </>
    );
  };
  
  export default Begin;