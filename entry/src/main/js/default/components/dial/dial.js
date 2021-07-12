import prompt from '@system.prompt';
import phoneNumInfos from '../../common/datas/phoneNumInfos.js'
import virtualPhones from '../../common/datas/virtualPhones.js'
export default {
    data: {
        title: "电话",
        phoneNumInfos,
        virtualPhones,
        dialButtonHide: true,
        animation: '',
    },
    changePhoneStatus() {
        var options = {
            duration: 250,
            easing: 'friction',
            delay: 0,
            fill: 'forwards',
            iterations: 1,
            direction: 'normal',
        };
        var frames = [
            {transform: {translateY: '0px'}, opacity: 1.0, offset: 0.0},
            {transform: {translateY: '500px'}, opacity: 1.0, offset: 1.0}
        ];
        this.animation = this.$element('numbers').animate(frames, options);
        if (this.dialButtonHide) {
            this.animation.play();

        } else{
            this.animation.reverse();

        }
        this.dialButtonHide = !this.dialButtonHide;
    },
}