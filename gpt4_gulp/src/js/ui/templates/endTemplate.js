export const createEndTemplate = ({ content, }) => {
    const template = `
        <p class="text_end">
            ${content}
        </p>
    `;   
    return template;
   };

export const endTemplate = ({
    blogEndData,
  }) => {
    const endTemplate = createEndTemplate(blogEndData);
  
    const resultTemplate = `
         ${endTemplate}
    `;
  
    return resultTemplate;
  };