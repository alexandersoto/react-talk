module.exports = (function() {
    "use strict";

    var React = require("react");

    var Header = React.createClass({

        // Optional
        propTypes: {
            count: React.PropTypes.number.isRequired
        },

        render: function() {
            var color = this.props.count > 5000 ? "red" : "black";
            return <h1 style={{color: color}}> Create {this.props.count} numbers! </h1>;
        }
    });

    return Header;
})();
