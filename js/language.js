  var langChecked = document.querySelector('#langClick')
  
  var aboutLink = document.querySelector('.about-sec')
  var skillsLink = document.querySelector('.skills-sec')
  var contactLink = document.querySelector('.contact-sec')

  var headerDescription = document.querySelector('.header-desc')
  var downloadBtn = document.querySelector('.download-btn')
  var githubBtn = document.querySelector('.github-btn')

  var aboutTitle = document.querySelector('.aboutTitle')
  var aboutP1 = document.querySelector('.p-1')
  var aboutP2 = document.querySelector('.p-2')
  var aboutCardTitle = document.querySelector('.aboutCardTitle')

  var skillsTitle = document.querySelector('.skills-title')
  var skillsLabel = document.querySelector('.skills-label')
  var skillsTitleOne = document.querySelector('.titleOne')
  var skillsTitleTwo = document.querySelector('.titleTwo')
  var skillsTitleThree = document.querySelector('.titleThree')
  var skillsCaptionOne = document.querySelector('.captionOne')
  var skillsCaptionTwo = document.querySelector('.captionTwo')
  var skillsCaptionThree = document.querySelector('.captionThree')

  var portfolioTitle = document.querySelector('.portfolio-title')
  var expLink = document.querySelector('.expLink')

  function changeLang() {
    if (langChecked.checked) {
      // navbar
      aboutLink.textContent = "Sobre mim";
      skillsLink.textContent = "Habilidades";
      contactLink.textContent = "Contacto";
      // hero
      headerDescription.textContent = "Olá Mundo!!! Bem-vindo ao meu site. Sou o Danildo, Desenvolvedor Front-End e UI/UX Designer, situado em Cabo Verde";
      downloadBtn.textContent = "Baixar CV";
      githubBtn.textContent = "Meu Github";
      // about me
      aboutTitle.textContent = "Quem sou eu?";
      aboutP1.textContent = "Meu nome é Danildo Silva, tenho 24 anos, atualmente sou Desenvolvedor Front-End, UI & UX Designer. Também me interesso por SEO e manipulação de imagens.";
      aboutP2.textContent = "Focado em entregar códigos e designs limpos, com boas práticas de design e estilização, utilizando linguagens e frameworks puros, sempre entregando uma experiência otimizada, com melhor performance.";
      aboutCardTitle.textContent = "Meu Nome"
      // skills 
      skillsLabel.textContent = "Habilidades"
      skillsTitle.textContent = "Tenho experiência em"
      skillsTitleOne.textContent = "Desenvolvimento Web"
      skillsTitleTwo.textContent = "UI e UX Design"
      skillsTitleThree.textContent = "Sites Responsivos"
      skillsCaptionOne.textContent = "Planejamento, construção e manutenção de websites e aplicações web. Utilizando diversas tecnologias, como HTML, CSS, JavaScript e Frameworks."
      skillsCaptionTwo.textContent = "Planejamento e design de interfaces para websites e aplicações web que proporcionem experiências significativas e agradáveis para o usuário."
      skillsCaptionThree.textContent = "Criar páginas que se ajustam automaticamente ao tamanho da tela do visitante usando grids fluidos, gráficos e CSS media queries."
      // portfolio
      portfolioTitle.textContent = "Meus Melhores Trabalhos"
      expLink.textContent = "Ver Mais"

    } else {
      // navbar english
      aboutLink.textContent = "About me";
      skillsLink.textContent = "Skills";
      contactLink.textContent = "Contact";
      // hero english
      headerDescription.textContent = "Hello World!!! Welcome to my website. I'am Danildo, a Front-End Developer & UI/UX Designer, based on Cape Verde";
      downloadBtn.textContent = "Download CV";
      githubBtn.textContent = "My Github";
      // about english
      aboutTitle.textContent = "Who am I?";
      aboutP1.textContent = "My name is Danildo Silva, I'm 24 years old, I am currently a Front-End Developer, UI & UX Designer. I am also interested in SEO and image manipulation.";
      aboutP2.textContent = "Focused on deliver clean codes anddesigns, with good practices in design and stylization, using both pure languages and frameworks, always delivering an optimized experience, with better performance.";
      aboutCardTitle.textContent = "My name"
      // skills 
      skillsLabel.textContent = "Skills"
      skillsTitle.textContent = "What I Am Great at"
      skillsTitleOne.textContent = "Web Development"
      skillsTitleTwo.textContent = "UI & UX Design"
      skillsTitleThree.textContent = "Responsive Websites"
      skillsCaptionOne.textContent = "Planning, building and maintaining websites and web applications. Using various thechmologies, like HTML, CSS, JavaScript and Frameworks."
      skillsCaptionTwo.textContent = "Planning and designing interfaces for websites and web applications that provide meaningful and enjoyable experiences for user."
      skillsCaptionThree.textContent = "Making pages adapt and automatically adjust to the size and orientation of the visitor's screen device using fluid grids, graphics, and CSS media queries"
      // portfolio
      portfolioTitle.textContent = "My Creative Works"
      expLink.textContent = "Explore More"
    }
  }