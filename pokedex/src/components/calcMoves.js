import React, { Component } from 'react'
import newComponent from './newComponent'

class AttackComponent extends Component{
    constructor(props){
        super(props);

        this.move = {
            moveName: 'Right'
        }
        this.calcMoveRight = this.calcMoveRight.bind(this)
    }
    
    calcMoveRight(){
        alert(`Hello ${this.move.moveName}`)
    }

    //     calcMoveRight = () => {
    //     var v1 = document.getElementById('healthbarLeft');
    //     v1.value -= (Math.random() * (7) + 7) << 0;
    //     this.setValueLeft(v1.value);
    
    //     if (v1.value > 0) {
    //       var element = document.getElementById("attackAnimationRight");
    //       element.classList.add("rightMoveOneAnimation");
    //       setTimeout(() => {
    //         element.classList.remove("rightMoveOneAnimation");
    //       }, 700)
    //     }
        

    // if (v1.value > 0) {
    //     var audio = document.getElementById("audioLeftMoveOne")
    //     audio.play();
    //   }
    // }

    render() {
        return(
            <div>
                <newComponent
                    calcHandler={this.calcMoveRight}
                />
            </div>
        )
    }
}

export default AttackComponent