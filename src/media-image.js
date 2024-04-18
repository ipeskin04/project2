
import { LitElement, html, css } from 'lit';
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";


export class mediaImage extends DDD {

  static get tag() {
    return 'media-image';
  }

  constructor() {
    super();
    this.imgSrc = "";
  }

  handleClick(){
    console.log("Image Clicked");

    const evt = new CustomEvent("image-clicked", {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {
      opened: true,
      invokedBy: this.invokedBy,
      },
      });
    this.dispatchEvent(evt);
  }

  static get styles() {
    return [ 
      super.styles,
      css`
          :host {
              display: inline-flex;
              flex-wrap: wrap;
              --img-bord-color-primary: var(--ddd-theme-default-slateLight);
              --box-shadow: -1px 1px var(--ddd-theme-default-potentialMidnight),
              -2px 2px var(--ddd-theme-default-potentialMidnight),
              -3px 3px var(--ddd-theme-default-potentialMidnight),
              -4px 4px var(--ddd-theme-default-potentialMidnight),
              -5px 5px var(--ddd-theme-default-potentialMidnight),
              -6px 6px var(--ddd-theme-default-potentialMidnight);
          }

          .img-color-bord {
              background-color: var(--img-bord-color-primary);
              text-align: center;
              width: 25vw;
              padding: var(--ddd-spacing-4);
              /* border */
              border: var(--ddd-border-lg);
              border-color: var(--ddd-theme-default-potentialMidnight);
              border-radius: var(--ddd-radius-sm);
          }

          .image {
              border: var(--ddd-border-lg);
              border-color: var(--ddd-theme-default-potentialMidnight);
              border-radius: var(--ddd-radius-md);
          }

          .img-color-bord:hover,
          .img-color-bord:focus {
              box-shadow: var(--box-shadow);
              -webkit-transform: translate(var(--ddd-spacing-4));
              transform: translate(var(--ddd-spacing-4));
              transition: .3s ease;
          }
      `
  ];
}


  render() {
    return html`
        <div class="img-color-bord" @click="${this.handleClick}">
            <img class="image" src="${this.imgSrc}">
        </div>
        `;
  }

  static get properties() {
    return {
      ...super.properties,
            imgSrc: { type: String, reflect: true },
    };
  }
}

globalThis.customElements.define(mediaImage.tag, mediaImage);
