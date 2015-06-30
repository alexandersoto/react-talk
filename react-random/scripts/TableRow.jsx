module.exports = (function() {
    "use strict";

    var React = require("react");

    var TableRow = React.createClass({

        // Optional
        propTypes: {
            value: React.PropTypes.number.isRequired
        },

        render: function() {
            var n = this.props.value;
            return (
                <tr>
                    <td>{n}</td>
                    <td>{n*n}</td>
                    <td>{n/2}</td>
                </tr>
            );
        }
    });

    return TableRow;
})();
