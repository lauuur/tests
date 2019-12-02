import React from "react";
import {TiHeartFullOutline} from "react-icons/ti";
  
  class Test2 extends React.Component {

    constructor(props) {
      super(props);
      this.state = {count: 0};
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick = () => {
      this.setState(prevState => {
         return {count: prevState.count + 1};
      });
  };
    render(){
    return (
    <div>
      <div className={"description"}>
        Ülesanne 2:
        <p>
          Rakendus peab arvet pidama mitu korda on südame ikooni klikitud ning vastava numbri <code>likes:</code> järel kuvama.
        </p>
      </div>

      <div className="noselect" style={{display:"flex", alignItems: "center"}}>
        <div>
          Likes: {this.state.count}
        </div>
        <TiHeartFullOutline onClick={this.handleClick.bind(this)}/>
        <div>Click me</div>
      </div>
    </div>
  );
  }
}

export default Test2;
