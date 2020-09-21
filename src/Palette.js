import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';

import './Palette.css';

export default class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = { level: 600 };
        this.changeLevel = this.changeLevel.bind(this);
    }
    changeLevel(level) {
        this.setState({ level });

        // console.log(level);
    }
    render() {
        const { level } = this.state;
        const colorBoxes = this.props.palette.colors[level].map(color => (
            <ColorBox background={color.hex} name={color.name} />
        ));
        return (
            <div className="Palette">

                {/* <h1>Palette</h1> */}
                {/* Navbar */}
                <Navbar level={level} changeLevel={this.changeLevel} />
                <div className="Palette-colors">
                    {/* bunch of color boxes */}
                    {colorBoxes}
                </div>
                {/* footer will go here */}

            </div>
        )
    }
}

