import React from "react";

import Typed from "typed.js";

class TypedReactDemo extends React.Component {
  componentDidMount() {
    const { strings } = this.props;
    const options = {
      strings: strings,
      typeSpeed: 40,
      backSpeed: 30,
      loop: true,
      loopCount: Infinity,
      showCursor: false,
      onBegin: (self) => {},
    };
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <div className="wrap" onClick={() => this.typed.start()}>
        <div className="">
          <span
            style={{ whiteSpace: "pre" }}
            ref={(el) => {
              this.el = el;
            }}
          />
        </div>
      </div>
    );
  }
}

export default TypedReactDemo;
