import Header from "../components/Header";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import WhatIsChatGpt from "../components/WhatIsChatGpt";
import FutureHere from "../components/FutureHere";
import Exceeding from "./../components/Exceeding";
import Begin from "./../components/Begin";
import BlogText from "./../components/BlogText";
import Blog from "./../components/Blog";
import Footer from "./../components/Footer";
import End from "./../components/End";   

const Home = () => {
  return (
    <div>
      <section className="section header" id="header"> 
        <Header />
      </section>
      <section className="section hero_section" id="hero">
        <Hero />
      </section>
      <section className="section brands_section" id="brands">
        <Brands />
      </section>
      <section className="section what_is_chatgpt_section" id="what-is">
        <WhatIsChatGpt />
      </section>
      <section className="section future_here" id="future">
        <FutureHere />
      </section>
      <section className="section exceeding_expectation" id="exceeding">
        <Exceeding />
      </section>
      <section className="section begin" id="begin">
        <Begin />
      </section>
      <section className="section blog_text" id="text">
        <BlogText />
      </section>
      <section className="section blog" id="blog">
        <Blog />
      </section>
      <section className="section footer" id="footer">
        <Footer />
      </section>
      <section className="section end" id="end">
        <End />
      </section>
    </div>
  );
};

export default Home;
