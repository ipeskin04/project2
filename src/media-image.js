
import { LitElement, html, css } from 'lit';


export class mediaImage extends LitElement {

  static get tag() {
    return 'media-image';
  }

  constructor() {
    super();
  }

  static get styles() {
    return css`
      :host {
        display: block;
        background-color: lightcoral;
      }

      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }

      .image {
        margin: 20px;
        padding: 20px;
        width:350px;
        height:350px;
      }

    `;
  }

  render() {
    return html`
    <div class="container">
        <img src="https://dogtowndogtraining.com/wp-content/uploads/2012/06/300x300-061-e1340955308953.jpg" alt="First Image">
        <img src="https://www.allthebestpetcare.com/wp-content/uploads/2021/10/cbd-oil-cat-anxiety-300x300.jpg" alt="Second Image">
      </div>
    
    `;
  }

  static get properties() {
    return {
      
    };
  }
}

globalThis.customElements.define(mediaImage.tag, mediaImage);