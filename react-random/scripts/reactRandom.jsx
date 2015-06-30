(function() {
    "use strict";

    var _ = require("underscore");
    var React = require("react");

    var Header = require("./Header");
    var Table = require("./Table");
 
    // Returns a random integer between min (included) and max (excluded)
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    // Get an array of n random numbers.
    function getRandomNumbers(n) {
        return _.range(n).map(function() {
            return getRandomInt(0, 1000);
        });
    }

    var ReactRandom = React.createClass({
        getInitialState: function() {
            var INIT_COUNT = 10;
            return {
                values: getRandomNumbers(INIT_COUNT),
                count: INIT_COUNT 
            };
        },

        _onCreateClick: function() {
            this.setState({values: getRandomNumbers(this.state.count)});
        },

        _onSortClick: function() {
            console.log("Starting sort");
            this.setState({values: this.state.values.sort(function(a, b) {
                return a - b;
            })});
            console.log("Ending sort");
        },

        _onShuffleClick: function() {
            this.setState({values: _.shuffle(this.state.values)});
        },

        _onCountChange: function(e) {
            var count = parseInt(e.target.value, 10);
            count = isNaN(count) ? 0 : count;
            this.setState({count: count});
        },

        render: function() {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-xs-6">
                            <Header count={this.state.count}/>
                        </div>
                        <div className="col-xs-6">
                            <div className="form-inline">
                                <div className="form-group">
                                    <label> Count: </label>
                                    <input className="form-control" value={this.state.count} onChange={this._onCountChange}/>
                                </div>

                                <div className="form-group">
                                    <button className="btn btn-default" onClick={this._onCreateClick}>Create</button>
                                    <button className="btn btn-default" onClick={this._onSortClick}>Sort</button>
                                    <button className="btn btn-default" onClick={this._onShuffleClick}>Shuffle</button>
                                </div>
                            </div>
                        </div>
                        <Table values={this.state.values}/>
                    </div>
                </div>
            );
        }
    });

    // Start the app
    function main() {
        React.render(<ReactRandom/>, document.getElementById("react-container"));
    }
    main();
})();
