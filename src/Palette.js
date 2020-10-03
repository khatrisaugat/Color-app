import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';

import './Palette.css';
import PaletteFooter from './PaletteFooter';

export default class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = { level: 600, format: "hex" };
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }
    changeLevel(level) {
        this.setState({ level });

        // console.log(level);
    }
    changeFormat(value) {
        this.setState({ format: value });
    }
    render() {
        const { colors, paletteName, emoji, id } = this.props.palette;
        const { level, format } = this.state;
        const colorBoxes = colors[level].map(color => (
            <ColorBox background={color[format]} name={color.name} key={color.id} id={color.id} paletteId={id} showLink />
        ));
        return (
            <div className="Palette">

                {/* <h1>Palette</h1> */}
                {/* Navbar */}
                <Navbar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat} showingAllColors />
                <div className="Palette-colors">
                    {/* bunch of color boxes */}
                    {colorBoxes}
                </div>
                {/* footer*/}
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        )
    }
}

