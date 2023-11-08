import useData from "../hooks/useData";
import Preloader from "./Preloader";
import exceedingData from "../mockData/exceedingData";
import ExceedingPng from "../assets/img/brands/girl_with_glasses.png";


export const ExceedingTemplate = ({ girlWithGlasses }) => {
    const { alt } = girlWithGlasses;
    return <img src={ExceedingPng} alt={alt} />;
  };

export const ContentTemplate = ({ contentAllData }) => {
    const { content1, content2, content3, button: { href, title }, } = contentAllData;
    return (
    <>
        <p className="container__content_1">
            {content1}
        </p>
        <h2 className="right__header">
            {content2}
        </h2>
        <p className="container__content_2">
            {content3}
        </p>
        <a href={href} className="right__cta">{title}</a>
    </>
    )
  };

  const Exceeding = () => {
    const { girlWithGlasses, contentAllData } = exceedingData;

    const { isLoading, isError, error, data } = useData({
      endpoint: "exceeding",
      options: {
        method: "GET",
      },
    });

    if (isLoading) return <Preloader />;
    if (isError) return <div>{JSON.stringify(error)}</div>;

    return (
      <>
        <div className="exceeding_expectation__left">
            <ExceedingTemplate girlWithGlasses={data?.girlWithGlasses ? data.girlWithGlasses: girlWithGlasses} />;      
        </div>
        <div className="exceeding_expectation__right">
            <div className="right__container">
            <ContentTemplate contentAllData={data?.contentAllData ? data.contentAllData: contentAllData} />;      
            
            </div>
        </div>
      </>
    );
  };
  export default Exceeding;