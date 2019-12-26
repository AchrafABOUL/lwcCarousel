import {
    LightningElement
} from 'lwc';

export default class CoverCarouselLWC extends LightningElement {

    clickedSideElement(event) {
        const currentClassList = event.target.classList.value;
        const centerElement = this.template.querySelector('.centerElement');
        const leftElement = this.template.querySelector('.leftElement');
        const rightElement = this.template.querySelector('.rightElement');
        if (currentClassList.includes('rightElement')) {
            rightElement.classList.add('centerElement');
            centerElement.classList.add('leftElement');
            leftElement.classList.add('rightElement');
        } else if (currentClassList.includes('leftElement')) {
            leftElement.classList.add('centerElement');
            centerElement.classList.add('rightElement');
            rightElement.classList.add('leftElement');
        }
        if (currentClassList.includes('rightElement') || currentClassList.includes('leftElement')) {
            rightElement.classList.remove('rightElement');
            centerElement.classList.remove('centerElement');
            leftElement.classList.remove('leftElement');
        }
    }
}