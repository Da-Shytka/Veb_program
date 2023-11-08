import useData from "../hooks/useData";
import Preloader from "./Preloader";
import blogData from "../mockData/blogData";
import onePng from "../assets/img/brands/one.png";
import twoSvg from "../assets/img/brands/two.svg";
import threePng from "../assets/img/brands/three.png";
import fourPng from "../assets/img/brands/four.png";
import fivePng from "../assets/img/brands/five.png";

export const ArticleTemplate = ({ item }) => {
    const {isPrimary, img:{ alt }, content1, content2, button: { href, title }, } = item;

    if (isPrimary) {
        return (
            <>
            <div className="blog__left">
                <div className="box_1">
                    <img src={
                        alt === "one"? onePng:
                        alt === "two"? twoSvg: 
                        alt === "three"? threePng: 
                        alt === "four"? fourPng: 
                        fivePng
                    } alt={alt} />
                    <div className="article__content ">
                        <p className="content__date">
                            {content1}
                        </p>
                        <p className="content__description">
                            {content2}
                        </p>
                        <a href={href} className="content__link">{title}</a>
                    </div>
                </div>
            </div>
            </>
        )
    }else{
        return (
            <>
            <div className="middle__article">
                <img src={
                    alt === "one"? onePng:
                    alt === "two"? twoSvg: 
                    alt === "three"? threePng: 
                    alt === "four"? fourPng: 
                    fivePng
                    } alt={alt} />;
                <div className="article__content ">
                    <p className="content__date">
                        {content1}
                    </p>
                    <p className="content__description">
                        {content2}
                    </p>
                    <a href={href} className="content__link">{title}</a>
                </div>
            </div>
            </>
        )
    }
  };

  export const Blog = () => {

    // Данные для основной статьи, фильтруем по isPrimary
    const mainArticleData =  blogData.filter((item) => item.isPrimary === true)[0];
    // Данные для второй статьи, фильтруем по !isPrimary
    const secondaryArticlesData =  blogData.filter((item) => item.isPrimary === false);
  // создаем результатирующий шаблон
    const { isLoading, isError, error, data } = useData({
        endpoint: "blog",
        options: {
        method: "GET",
        },
    });

  if (isLoading) return <Preloader />;
  if (isError) return <div>{JSON.stringify(error)}</div>;

  return (
        <>
            <ArticleTemplate item={mainArticleData}/>
            <div className="blog__middle">
            {(data ? data : secondaryArticlesData).map((item, index) => (
                <ArticleTemplate key={index} item={item} />
            ))}
            </div>
        </>
        )    
  };
  export default Blog;