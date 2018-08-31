import React from "react";




class GameRow extends React.Component {

    summaryCheck() {
        let summary;
        if (this.props.game.summary) {
            summary = this.props.game.summary;
        } else {
            summary = "No Summary Available ):";
        }
        return summary;
    }

    imageCheck() {
        let image;
        if (this.props.game.cover === undefined) {
            image = "https://www.theyearinpictures.co.uk/images//image-placeholder.png";
        }
        else {
            image = this.props.game.cover.url
        }
        return image;
    }

    viewGame() {
        const boundObject = this;
        console.log(boundObject.props.game.title);
        const gameURL = this.props.game.url;
        window.location.href = gameURL;
    }




    render() {
        return (
            <div key={this.props.game.id} className="container-fluid gamerow">
                {this.props.game ? (
                    <div className="row justify-content-center">
                        <div className="col-sm-2">
                            <img className="vgImage" width="100px" alt={this.props.game.name} src={this.imageCheck()} />
                        </div>
                        <div className="col-sm-7">
                            <div className="row">
                                <div id="gameTitle2" className="col-sm-12">
                                    <span>
                                        <h3 className="gameTitle">{this.props.game.name}</h3>
                                        <input id="viewButton" type="button" value="view" onClick={this.viewGame.bind(this)} />
                                    </span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <p>{this.summaryCheck()}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                        <h3>No Results</h3>
                    )}

                <hr />
            </div>
        )
    }
}

export default GameRow;