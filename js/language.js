  var langChecked = document.querySelector('#langClick')

  function changeLang() {
    if (langChecked.checked) {
      // navbar pt
      document.querySelector('.about-sec').textContent = "Sobre mim";
      document.querySelector('.skills-sec').textContent = "Habilidades";
      document.querySelector('.contact-sec').textContent = "Contacto";

      // hero pt
      document.querySelector('.header-desc').textContent = "Olá Mundo!!! Bem-vindo ao meu site. Sou o Danildo, Desenvolvedor Front-End e UI/UX Designer, situado em Cabo Verde";
      document.querySelector('.download-btn').textContent = "Baixar CV";
      document.querySelector('.github-btn').textContent = "Meu Github";

      // about me pt
      document.querySelector('.aboutTitle').textContent = "Quem sou eu?";
      document.querySelector('.p-1').textContent = "Meu nome é Danildo Silva, tenho 24 anos, atualmente sou Desenvolvedor Front-End, UI & UX Designer. Também me interesso por SEO e manipulação de imagens.";
      document.querySelector('.p-2').textContent = "Focado em entregar códigos e designs limpos, com boas práticas de design e estilização, utilizando linguagens e frameworks puros, sempre entregando uma experiência otimizada, com melhor performance.";
      document.querySelector('.aboutCardTitle').textContent = "Meu Nome"

      // skills pt 
      document.querySelector('.skills-label').textContent = "Habilidades"
      document.querySelector('.skills-title').textContent = "Tenho experiência em"
      document.querySelector('.titleOne').textContent = "Desenvolvimento Web"
      document.querySelector('.titleTwo').textContent = "UI e UX Design"
      document.querySelector('.titleThree').textContent = "Sites Responsivos"
      document.querySelector('.captionOne').textContent = "Planejamento, construção e manutenção de websites e aplicações web. Utilizando diversas tecnologias, como HTML, CSS, JavaScript e Frameworks."
      document.querySelector('.captionTwo').textContent = "Planejamento e design de interfaces para websites e aplicações web que proporcionem experiências significativas e agradáveis para o usuário."
      document.querySelector('.captionThree').textContent = "Criar páginas que se ajustam automaticamente ao tamanho da tela do visitante usando grids fluidos, gráficos e CSS media queries."

      // portfolio pt
      document.querySelector('.portfolio-title').textContent = "Meus Melhores Trabalhos"
      document.querySelector('.expLink').textContent = "Ver Mais"

      // contact pt
      document.querySelector('.contact-label').textContent = "Contacto"
      document.querySelector('.span-1').textContent = "Vamos"
      document.querySelector('.span-2').textContent = "TRABALHAR"
      document.querySelector('.span-3').textContent = "Juntos!"
      document.querySelector('.c-info-title').textContent = "Informações de Contacto"
      document.querySelector('.c-info-desc').textContent = "Por favor entre em contacto connosco através do formulário de contacto, email, telefone ou outro meio de contacto indicado."

      // contact form pt
      $('#name').attr('placeholder', 'Seu Nome');
      $('#phone').attr('placeholder', 'Telefone');
      $('#email').attr('placeholder', 'Endereço de Email');
      $('#message').attr('placeholder', 'Mensagem');
      button.value = "ENVIAR MENSAGEM";

      // footer pt
      document.querySelector('.footer-span').textContent = "Feito por"

    } else {
      // navbar en
      document.querySelector('.about-sec').textContent = "About me";
      document.querySelector('.skills-sec').textContent = "Skills";
      document.querySelector('.contact-sec').textContent = "Contact";

      // hero en
      document.querySelector('.header-desc').textContent = "Hello World!!! Welcome to my website. I'am Danildo, a Front-End Developer & UI/UX Designer, based on Cape Verde";
      document.querySelector('.download-btn').textContent = "Download CV";
      document.querySelector('.github-btn').textContent = "My Github";

      // about en
      document.querySelector('.aboutTitle').textContent = "Who am I?";
      document.querySelector('.p-1').textContent = "My name is Danildo Silva, I'm 24 years old, I am currently a Front-End Developer, UI & UX Designer. I am also interested in SEO and image manipulation.";
      document.querySelector('.p-2').textContent = "Focused on deliver clean codes anddesigns, with good practices in design and stylization, using both pure languages and frameworks, always delivering an optimized experience, with better performance.";
      document.querySelector('.aboutCardTitle').textContent = "My name"

      // skills en
      document.querySelector('.skills-label').textContent = "Skills"
      document.querySelector('.skills-title').textContent = "What I Am Great at"
      document.querySelector('.titleOne').textContent = "Web Development"
      document.querySelector('.titleTwo').textContent = "UI & UX Design"
      document.querySelector('.titleThree').textContent = "Responsive Websites"
      document.querySelector('.captionOne').textContent = "Planning, building and maintaining websites and web applications. Using various thechmologies, like HTML, CSS, JavaScript and Frameworks."
      document.querySelector('.captionTwo').textContent = "Planning and designing interfaces for websites and web applications that provide meaningful and enjoyable experiences for user."
      document.querySelector('.captionThree').textContent = "Making pages adapt and automatically adjust to the size and orientation of the visitor's screen device using fluid grids, graphics, and CSS media queries"

      // portfolio en
      document.querySelector('.portfolio-title').textContent = "My Creative Works"
      document.querySelector('.expLink').textContent = "Explore More"

      // contact en
      document.querySelector('.contact-label').textContent = "Contact"
      document.querySelector('.span-1').textContent = "Let's"
      document.querySelector('.span-2').textContent = "WORK"
      document.querySelector('.span-3').textContent = "Together!"
      document.querySelector('.c-info-title').textContent = "Contact Information"
      document.querySelector('.c-info-desc').textContent = "Please get in touch with me using the contact form, email, telephone or other ways of contact indicated."

      // contact form en
      $('#name').attr('placeholder', 'Your Name');
      $('#phone').attr('placeholder', 'Phone No.');
      $('#email').attr('placeholder', 'Email Address');
      $('#message').attr('placeholder', 'Message');
      button.value = "SEND MESSAGE";

      // footer en
      document.querySelector('.footer-span').textContent = "Designed by"
    }
  }