import React, { Component } from "react";
// 这个插件最多兼容到ie9，不兼容ie8
// import { autobind } from "core-decorators";
export default class InputBar extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = e => {
    console.log(this);
    console.log(e.target.value);
  };

  render() {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(1);
      }, 1000);
    }).then(value => {
      console.log(value);
    });

    function* helloWorldGenerator() {
      yield "hello";
      yield "world";
      return "ending";
    }

    var hw = helloWorldGenerator();

    setTimeout(() => {
      let i = hw.next();
      let j = hw.next();
      let w = hw.next();
      console.log(i, j, w);
    }, 1000);

    return (
      <div>
        <input
          placeholder="JUST DO IT."
          type="text"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

window.test = "11111111";