
import { LitElement, html, css } from 'lit';


export class ImgGallery extends LitElement {

  static get tag() {
    return 'img-gallery';
  }

  constructor() {
    super();
    this.title = "img-gallery";
    this.image = ["https://dogtowndogtraining.com/wp-content/uploads/2012/06/300x300-061-e1340955308953.jpg", "https://www.allthebestpetcare.com/wp-content/uploads/2021/10/cbd-oil-cat-anxiety-300x300.jpg", "https://s28164.pcdn.co/files/Asian-Small-clawed-Otter-0072-2545-300x300.jpg", "https://winghamwildlifepark.co.uk/wp-content/uploads/2013/04/Panda-200-300x300.jpg", "https://im.rediff.com/300-300/news/2020/sep/15funny1.jpg"];
    this.imageNumber = 1; //current number shown
    this.totalImageNumber = 5; //maximum
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      #image {
        margin: 20px;
        padding: 20px;
        max-width:300px;
        max-height:300px;
        position: absolute;
        left: 12%;
        right: 12%;
        top: 15%;
      }

      .backdrop
      {
        margin: 8px;
        padding: 8px;
        width:500px;
        height:500px;
        background-color: lightblue;
        color: black;
        position: relative;
          }

        .topRow
          {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
          }

        .currentNum
        {
          margin: 8px;
          display: flex;
          justify-content: left;
        }

        .closeButton
        {
        margin: 8px;
        display: flex;
        justify-content: right
        }

        .description
        {
            align-self: center;
            display: flex;
            justify-content: center;
        }

        .slide-image {
          width: 100%;
          min-height: 200px;
          height: auto;
          max-height: 400px;
          padding: 10px;
          margin: 0 auto;
        }     

        .imageLoop
        {
            margin: 8px;
            display: flex;
            justify-content: space-between;  
            position: absolute;
           bottom: 0;
           width: 95%;
        }
      

    `;
  }


  rightClick()
 {
  if(this.imageNumber < this.totalImageNumber)
  this.imageNumber = this.imageNumber+1;
else
{
  this.imageNumber = 1;
}
  this.requestUpdate();
 }
 leftClick()
 {
  if(this.imageNumber > 1)
  this.imageNumber = this.imageNumber-1;
else
{
  this.imageNumber = this.totalImageNumber;
}
  this.requestUpdate();
 }


  render() {
    return html`
    <div class="backdrop">

    <div class="topRow">
    <p>
  <div class="slide-image-number"> 
    ${this.imageNumber}
    </div> of
    <div class="total-image-number">
    ${this.totalImageNumber}
    </div>
  </p>

    <button class="closeButton">
    x
  </button>

</div>



<div class="slide-image">
    <img id="image" src= ${this.image[this.imageNumber-1]} alt = "slide">
    </div>

    <div class="imageLoop">
        <button class="leftButton" @click="${this.leftClick}">
        ←
  </button>
        <button class = "rightButton" @click="${this.rightClick}">
        →
  </button>
    </div>
    </div>
    
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      image: {type: Array},
      imageNumber : {type: String},
      totalImageNumber: {type: String},
    };
  }
}

globalThis.customElements.define(ImgGallery.tag, ImgGallery);



//document.content.queryselector 