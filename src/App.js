import React, { Component } from 'react';
import './App.css';
import controller from "./controller.png";
import banner2 from "./banner2.png"
import axios from "axios";
import GameRow from "./components/GameRow";


class App extends Component {

  

  constructor(props) {
    super(props);

    this.state = {}

    this.performSearch("fortnite");
  }

  performSearch(searchTerm) {
    let API_KEY =`${process.env.REACT_APP_API_KEY}`
    let apiKey = API_KEY.substring(0, API_KEY.length - 2);
    console.log(apiKey);

    console.log("Searched for data on video game");
    axios.get("https://api-endpoint.igdb.com/games/?search=" + searchTerm + "&fields=*", {
      headers: {
        "user-key": apiKey,
        Accept: "application/json"
      }
    })
      .then(response => {
        
          if(response) {
            let gamesRows = [];

            response.data.forEach((game) => {
              const gameRow = <GameRow key={game.id} game={game} />
              gamesRows.push(gameRow);
            });
    
            this.setState({ rows: gamesRows });
    
            console.log(gamesRows);
          } else {
            let gamesRows = [];

            let game = [
              {
                id: "0",
                name: "",
                summary: "No Results",
                cover: {
                  url: ""
                }
              }
            ]
            const gameRow = <GameRow key={game.id} game={game} />
            gamesRows.push(gameRow);

            this.setState({ rows: gamesRows });


            
          }
     



      })
      .catch(e => {
        console.log("error", e);
      });
  }


  searchHandler(event) {
    event.preventDefault();
    console.log(event.target.value);
    const boundObject = this;
    const searchTerm = event.target.value;
    boundObject.performSearch(searchTerm);
  }





  render() {
    return (
      <div className="App">
        <div id="navbar" className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <span>
                <img id="logo" alt="logo" src={controller} />
                <img id="banner" alt="banner" src={banner2} />
                <h1 id="navName">powered by: IGDB</h1>
              </span>
            </div>
          </div>
        </div>


        <div id="searchBarDiv" className="container-fluid">
          <div id="searchBarDiv2">
            <form>
              <input className="searchBar" placeholder="Enter Video Game Title Here..." onChange={this.searchHandler.bind(this)} />
            </form>
          </div>
        </div>

        {this.state.rows}

      </div>
    );
  }
}

export default App;
