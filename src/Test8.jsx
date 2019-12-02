import React from "react";

class Test8 extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
        fullName: "",
        address: "",
        phoneNumber: "",
    };
}

handleSubmit = (event) =>{
  event.preventDefault();
  console.log(this.state);
  fetch("/api/v1/users", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state),
  })
  .then(res => res.json)
  .catch(err =>{
      console.log("error:", err);
  });
};

// handleEnableDisable = (click) =>{

// }

handleChange = (e) =>{
  this.setState({
      [e.target.name]: e.target.value,
  });
};

  render() {
    return (
      <div>
        <Task />
        <div className="ds">
          <form className="ds-item style-2" >
            <h3 className="style-2">Tellimuse vorm</h3>
            <div className={"row"}>
              <label htmlFor="fullName">Nimi</label>
              <input name="fullName" value={this.state.fullName} type="text" onChange={this.handleChange} required/>
            </div>
            <div className={"row"}>
              <label htmlFor="address">Elukoht</label>
              <input name="address" value={this.state.address} type="text" onChange={this.handleChange} required/>
            </div>
            <div className={"row"}>
            <label htmlFor="phoneNumber">Kontaktnumber</label>
              <input name="phoneNumber" value={this.state.phoneNumber} type="text" onChange={this.handleChange} required/>
            </div>
            <button style={{width: "100%"}} onClick={this.handleSubmit}>
              Esitan
            </button><br/><br/>
            <button style={{width: "80%"}} onClick={this.handleEnableDisable}>
              Lukusta/muuda
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Test8;

const Task = () => (
  <div>
    <h3>
      Ülesanne 8:
    </h3>
    <ol>
      <li>Seda ülesannet saab lahendada ainult siis kui ülesanne 7 on tehtud</li>
      <li>Kopeerige ülesandes 7 tehtud vorm <code>test8.jsx</code> faili.</li>
      <li>Lisage nupp "enable/disable"</li>
      <li>Kui kasutaja vajutab "disable" nupu peale, siis peab vorm muutuma readonly.
        Ehk vormi väljadesse ei ole võimalik sisestada uusi väärtuseid ja
        vormi ei ole võimalik esitada.
      </li>
      <li>
        Kui kasutaja vajutab "enable" nupu peale, siis muutub vorm selliseks, et
        väljadesse on võimalik sisestada väärtuseid ning vormi on võimalik esitada.
      </li>

    </ol>
  </div>
);
