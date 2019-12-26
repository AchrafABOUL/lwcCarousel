import {
    LightningElement,
    track
} from 'lwc';

export default class MyCarouselLWC extends LightningElement {


    currentPos = 0;
    elements = [];
    constructor() {
        super();
        for (let i = 0; i < 29; i++) {
            this.elements.push({
                'txt': `Div number : ${i+1}`
            });
        }
    }
    previous() {
        if(this.currentPos < 0){
            var a = (this.currentPos) * 100;
            var b = (this.currentPos + 1) * 100;
            var firstDiv = this.template.querySelector(`[data-id="firstDiv"]`);
    
            firstDiv.animate([{
                    transform: `translateX(${a}%)`
                },
                {
                    transform: `translateX(${b}%)`
                }
            ], {
                duration: 500,
                fill: "forwards"
            });
            this.currentPos++;
        }
      

    }
    next() {
        if (this.currentPos > (- (Math.floor(this.elements.length / 4)))) {
            var a = (this.currentPos) * 100;
            var b = (this.currentPos - 1) * 100;
            var firstDiv = this.template.querySelector(`[data-id="firstDiv"]`);

            firstDiv.animate([{
                    transform: `translateX(${a}%)`
                },
                {
                    transform: `translateX(${b}%)`
                }
            ], {
                duration: 500,
                fill: "forwards"
            });
            this.currentPos--;
        }

    }


}