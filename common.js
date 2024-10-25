// This file is used to as a base for sub sites to inherit common components.
// To use include this file and the common.css file


// Define a custom class that extends HTMLElement
class HeaderComponent extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = `
        <!-- HEADER -->
        <img alt="ppicture" class="ppicture" src="./images/me.jpeg"/>
        <p id="name">Alexiy Zhandarov</p>
        <p id="undername">Informatics BSc Student</p>

        <a id="header-button-bottom" href="#footer_wrap" class="header-button"><u>Bottom</u></a>
        <a id="header-button-home" href="index.html" class="header-button"><u>Home</u></a>
        <hr id=startmargin>
      `;
    }
  }
  
  // Register the custom element as a new HTML tag
  customElements.define('header-component', HeaderComponent);
  

  class FooterComponent extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <!-- FOOTER  -->
        <div id="footer_wrap" class="outer">
          <footer class="inner">
            <p>Published with <a href="http://pages.github.com">GitHub Pages</a></p>
          </footer>
        </div>
      `;
    }
  }
  
  customElements.define('footer-component', FooterComponent);