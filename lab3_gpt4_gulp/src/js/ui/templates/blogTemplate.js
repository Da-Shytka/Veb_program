      export const createLeftOneImgTemplate = ({ src, alt }) => {
        return `
          <img src="${src}" alt="${alt}" />
        `;
      };
      export const createLeftOneTextTemplate = ({ content1, content2, button: { href, title }, }) => {
        const template = `
            <p class="text_start_1">
                ${content1}
            </p>
            <p class="text_1">
                ${content2}
            </p>
            <a href="${href}" class="text_end_1">${title}</a>
        `;   
        return template;
       };
      export const createMiddleTwoImgTemplate = ({ src, alt }) => {
        return `
          <img src="${src}" alt="${alt}" />
        `;
      };
      export const createMiddleTwoTextTemplate = ({ content1, content2, button: { href, title }, }) => {
        const template = `
            <p class="text_start_2">
                ${content1}
            </p>
            <p class="text_2">
                ${content2}
            </p>
            <a href="${href}" class="text_end_2">${title}</a>
        `;   
        return template;
       };
      export const createMiddleThreeImgTemplate = ({ src, alt }) => {
        return `
          <img src="${src}" alt="${alt}" />
        `;
      };
      export const createMiddleThreeTextTemplate = ({ content1, content2, button: { href, title }, }) => {
        const template = `
            <p class="text_start_3">
                ${content1}
            </p>
            <p class="text_3">
                ${content2}
            </p>
            <a href="${href}" class="text_end_3">${title}</a>
        `;   
        return template;
       };
      export const createRightFourImgTemplate = ({ src, alt }) => {
        return `
          <img src="${src}" alt="${alt}" />
        `;
      };
      export const createRightFourTextTemplate = ({ content1, content2, button: { href, title }, }) => {
        const template = `
            <p class="text_start_4">
                ${content1}
            </p>
            <p class="text_4">
                ${content2}
            </p>
            <a href="${href}" class="text_end_4">${title}</a>
        `;   
        return template;
       };
      export const createRightFiveImgTemplate = ({ src, alt }) => {
        return `
          <img src="${src}" alt="${alt}" />
        `;
      };
      export const createRightFiveTextTemplate = ({ content1, content2, button: { href, title }, }) => {
        const template = `
            <p class="text_start_5">
                ${content1}
            </p>
            <p class="text_5">
                ${content2}
            </p>
            <a href="${href}" class="text_end_5">${title}</a>
        `;   
        return template;
       };      

      export const blogTemplate = ({
        oneImg,
        oneText,
        twoImg,
        twoText,
        threeImg,
        threeText,
        fourImg,
        fourText,
        fiveImg,
        fiveText,
      }) => {
        const oneImgTemplate = createLeftOneImgTemplate(oneImg);
        const oneTextTemplate = createLeftOneTextTemplate(oneText);
        const twoImgTemplate = createMiddleTwoImgTemplate(twoImg);
        const twoTextTemplate = createMiddleTwoTextTemplate(twoText);
        const threeImgTemplate = createMiddleTwoImgTemplate(threeImg);
        const threeTextTemplate = createMiddleThreeTextTemplate(threeText);
        const fourImgTemplate = createRightFourImgTemplate(fourImg);
        const fourTextTemplate = createRightFourTextTemplate(fourText);
        const fiveImgTemplate = createRightFiveImgTemplate(fiveImg);
        const fiveTextTemplate = createRightFiveTextTemplate(fiveText);
        
      
        const resultTemplate = `
            <div class="blog__left">
                <div class="box_1">
                    ${oneImgTemplate}
                    <div class="one_1">
                        ${oneTextTemplate}
                    </div>
                </div>
           </div>
           <div class="blog__middle">
                <div class="box_2">
                    ${twoImgTemplate}
                    <div class="one_2">
                        ${twoTextTemplate}
                    </div>
                </div>
                <div class="box_3">
                    ${threeImgTemplate}
                    <div class="one_3">
                        ${threeTextTemplate}
                    </div>
                </div>
            </div>
            <div class="blog__right">
                <div class="box_4">
                    ${fourImgTemplate}
                    <div class="one_4">
                        ${fourTextTemplate}
                    </div>
                </div>
                <div class="box_5">
                    ${fiveImgTemplate}
                    <div class="one_5">
                        ${fiveTextTemplate}
                    </div>
                </div>
            </div>
          `;
      
        return resultTemplate;
      };