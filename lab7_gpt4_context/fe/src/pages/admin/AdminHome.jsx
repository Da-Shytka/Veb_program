import AdminHeader from "../../components/admin/AdminHeader";
import AdminHero from "../../components/admin/AdminHero";
import AdminBrands from "../../components/admin/AdminBrands";
import AdminFutureHere from "../../components/admin/AdminFutureHere";
import AdminWhatIsChatGpt from "../../components/admin/AdminWhatIsChatGpt";
import AdminExceeding from "../../components/admin/AdminExceeding";
import AdminBegin from "../../components/admin/AdminBegin";
import AdminBlogText from "../../components/admin/AdminBlogText";
import AdminBlog from "../../components/admin/AdminBlog";

import AdminEnd from "../../components/admin/AdminEnd";

import HeroContextProvider from "../../contexts/admin/HeroContext";
import HeaderContextProvider from "../../contexts/admin/HeaderContext";
import FutureHereContextProvider from "../../contexts/admin/FutureHereContext";
import BrandsContextProvider from "../../contexts/admin/BrandsContext";
import WhatIsChatGptContextProvider from "../../contexts/admin/WhatIsChatGpt";
import ExceedingContextProvider from "../../contexts/admin/ExceedingContext";
import BeginContextProvider from "../../contexts/admin/BeginContext";
import BlogTextContextProvider from "../../contexts/admin/BlogTextContext";
import BlogContextProvider from "../../contexts/admin/BlogContext";

import EndContextProvider from "../../contexts/admin/EndContext";

const AdminHome = () => {
  return (
    <div>
      <HeaderContextProvider>
        <AdminHeader />
      </HeaderContextProvider>
      <HeroContextProvider>
        <AdminHero />
      </HeroContextProvider>
      <BrandsContextProvider>
        <AdminBrands />
      </BrandsContextProvider>
      <WhatIsChatGptContextProvider>
        <AdminWhatIsChatGpt />
      </WhatIsChatGptContextProvider>
      <FutureHereContextProvider>
        <AdminFutureHere />
      </FutureHereContextProvider>
      <ExceedingContextProvider>
        <AdminExceeding />
      </ExceedingContextProvider>
      <BeginContextProvider>
        <AdminBegin />
      </BeginContextProvider>
      <BlogTextContextProvider>
        <AdminBlogText />
      </BlogTextContextProvider>
      <BlogContextProvider>
        <AdminBlog />
      </BlogContextProvider>

      <EndContextProvider>
        <AdminEnd />
      </EndContextProvider>
    </div>
  );
};

export default AdminHome;
