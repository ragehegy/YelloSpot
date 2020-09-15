import React, {Component} from "react";

export default class Section extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            titleClass: "",
            subtitle: "",
            className: "",
            dark: "",
        }
    }

    render() {
        return (
            <div className={"section " + this.props.className + (this.props.dark ? " section-dark" : "")}>
            <div className="section-content" id={this.props.id}>
                <div className={this.props.titleClass}>
                    <h1>{this.props.title}</h1>
                </div>
                <div>{this.props.subtitle}</div>
            </div>
            </div>
        );
    }
}

// export default function Section({ title, subtitle, dark, id }) {
//     return (
//       <div className={"section" + (dark ? " section-dark" : "")}>
//         <div className="section-content" id={id}>
//           <h1>{title}</h1>
//           <p>{subtitle}</p>
//         </div>
//       </div>
//     );
//   }