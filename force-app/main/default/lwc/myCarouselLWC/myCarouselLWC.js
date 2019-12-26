import {
    LightningElement
} from 'lwc';

export default class MyCarouselLWC extends LightningElement {


    currentPos = 0;
    elements = [];
    directionToNext = true;
    constructor() {
        super();
        for (let i = 0; i < 9; i++) {
            this.elements.push({
                'txt': `Div number : ${i+1}`
            });
        }
    }
    connectedCallback() {
        // eslint-disable-next-line @lwc/lwc/no-async-operation
        setInterval(() => {
            let c = 0;
            if (Math.floor(this.elements.length / 4) === (this.elements.length / 4)) {
                c = 1;
            }
            if (this.currentPos === 0) {
                this.directionToNext = true;
            } else if (this.currentPos === (-(Math.floor(this.elements.length / 4)) + c)) {
                this.directionToNext = false;
            }
            if (this.directionToNext) {
                this.next();
            } else {
                this.previous();
            }
        }, 4000);
    }
    previous() {
        this.directionToNext = false;
        if (this.currentPos < 0) {
            const a = (this.currentPos) * 100;
            const b = (this.currentPos + 1) * 100;
            let firstDiv = this.template.querySelector(`[data-id="firstDiv"]`);

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
        this.directionToNext = true;
        let c = 0;
        if (Math.floor(this.elements.length / 4) === (this.elements.length / 4)) {
            c = 1;
        }
        if (this.currentPos > (-(Math.floor(this.elements.length / 4)) + c)) {
            const a = (this.currentPos) * 100;
            const b = (this.currentPos - 1) * 100;
            let firstDiv = this.template.querySelector(`[data-id="firstDiv"]`);

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