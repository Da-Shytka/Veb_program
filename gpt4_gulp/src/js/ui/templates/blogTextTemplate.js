export const createBlogTextLeftTemplate = ({ content, }) => {
    const template = `
        <h2 class="text_blog__left">
            ${content}
        </h2>
    `;   
    return template;
   };

export const blogTextTemplate = ({
    blogTextLeftData,
  }) => {
    const blogTextTemplate = createBlogTextLeftTemplate(blogTextLeftData);
  
    const resultTemplate = `
        <div class="blog__left">
            ${blogTextTemplate}
        </div>
        <div class="blog__right"></div>
    `;
  
    return resultTemplate;
  };