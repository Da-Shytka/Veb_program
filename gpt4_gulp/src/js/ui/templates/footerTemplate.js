    export const createtextTemplate = ({ content, }) => {
    const template = `
        <h2 class="footer_end">
            ${content}
        </h2>
    `;   
    return template;
   };

   export const createButtonTemplate = ({button: { href, title },
  }) => {
    const template = `
        <div class="footer_button">
            <a href="${href}" class="footer_button_text">${title}</a>
        </div>
      `;
    return template;
  };

  export const createGptTemplate = ({
    header,
    button: { href, title },
  }) => {
    const template = `
        <h3 class="gpt_1">
            ${header}
        </h3>
        <a href="${href}" class="gpt_2">${title}</a>         
      `;
  
    return template;
  };

  export const createSilkiTemplate = ({
    header,
    button2: { href2, title2 },
    button3: { href3, title3 },
    button4: { href4, title4 },
    button5: { href5, title5 },
  }) => {
    const template = `
        <p class="silki_1">
            ${header}
        </p>
        <a href="${href2}" class="silki_2">${title2}</a>      
        <a href="${href3}" class="silki_3">${title3}</a>      
        <a href="${href4}" class="silki_4">${title4}</a>      
        <a href="${href5}" class="silki_5">${title5}</a>
      `;
  
    return template;
  };
  export const createKompanTemplate = ({
    header,
    button2: { href2, title2 },
    button3: { href3, title3 },
    button4: { href4, title4 },
  }) => {
    const template = `
        <p class="silki_1">
            ${header}
        </p>
        <a href="${href2}" class="kompan_2">${title2}</a>      
        <a href="${href3}" class="kompan_3">${title3}</a>      
        <a href="${href4}" class="kompan_4">${title4}</a>      
      `;
  
    return template;
  };
  export const createKontaktTemplate = ({
    header,
    button2: { href2, title2 },
    button3: { href3, title3 },
    button4: { href4, title4 },
  }) => {
    const template = `
        <p class="kontakt_1">
            ${header}
        </p>
        <a href="${href2}" class="kontakt_2">${title2}</a>      
        <a href="${href3}" class="kontakt_3">${title3}</a>      
        <a href="${href4}" class="kontakt_4">${title4}</a>      
      `;
  
    return template;
  };
export const footerTemplate = ({
        textData,
        buttonData,
        gptData,
        silkiData,
        kompanData,
        kontaktData,
      }) => {
        const textTemplate = createtextTemplate(textData);
        const buttonTemplate = createButtonTemplate(buttonData);
        const gptTemplate = createGptTemplate(gptData);
        const silkiTemplate = createSilkiTemplate(silkiData);
        const kompanTemplate = createKompanTemplate(kompanData);
        const kontaktTemplate = createKontaktTemplate(kontaktData);
              
        const resultTemplate = `
            ${textTemplate}  
            ${buttonTemplate}
            <div class="colonki">
                <div class="gpt">
                    ${gptTemplate}
                </div>
                <div class="silki">
                    ${silkiTemplate}
                </div>
                <div class="kompan">
                    ${kompanTemplate}
                </div>  
                <div class="kontakt">
                    ${kontaktTemplate}
                </div>
            </div>
          `;
      
        return resultTemplate;
      };