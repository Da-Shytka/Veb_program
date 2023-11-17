export const createBeginLeftTemplate = ({ content1, content2 }) => {
    const template = `
        <p class="text_1">
            ${content1}
        </p>
        <p class="text_2">
            ${content2}
        </p>
    `;   
    return template;
   };
            
   export const createBeginRightTemplate = ({
    button: { href, title },
  }) => {
    const template = `
          <button href="${href}" class="button">${title}</button>
      `;
    return template;
  };

export const beginTemplate = ({
    beginLeftData,
    beginRightData,
  }) => {
    const beginLeftTemplate = createBeginLeftTemplate(beginLeftData);
    const beginRightTemplate = createBeginRightTemplate(beginRightData);
  
    const resultTemplate = `
        <div class="begin_colon">
            <div class="begin__left">
                ${beginLeftTemplate}
            </div>
            <div class="begin__right">
                ${beginRightTemplate}
            </div>
        </div>
      `;
  
    return resultTemplate;
  };