import { Component, Method, Element, Prop, State } from '@stencil/core';

@Component({
    tag: 'my-modal',
    styleUrl: 'my-modal.scss'
})

export class MyModal {
    buttons = ['OK', 'Cancel'];
    @Element() modalEle: HTMLElement;

    @Prop() title: string;
    @Prop() content: string;

    @State() showOptions = false;

    @Method()
    open() {
        this.modalEle.style.display = 'block';
    }

    closeModalHandler(){
        this.showOptions = false;
        this.modalEle.style.display = 'none';
    }
    showOptionHandler() {
        this.showOptions = true;
    }


    render() {
        let options = null;
        if(this.showOptions){
            options = this.buttons.map(btn => (
                <button onClick={this.closeModalHandler.bind(this)}>{btn}</button>
            ));
        }
        return (
            <div>
                <h1>{this.title}</h1>                
                    <p>
                        {this.content}
                    </p>
                <button onClick={ this.showOptionHandler.bind(this) }> Show more options... </button>
                <hr/>
                {options}
            </div>
        )
    }
}