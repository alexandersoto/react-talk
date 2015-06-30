module.exports = (function() {
    "use strict";

    var _ = require("underscore");
    var React = require("react");

    var TableRow = require("./TableRow");

    var Table = React.createClass({

        // Optional
        propTypes: {
            values: React.PropTypes.array.isRequired
        },

        render: function() {
            var numbers = _.map(this.props.values, function(n, i) {
                return <TableRow key={i} value={n}/>;
            });

            return (
                <div className="col-xs-12">
                    <table className="table table-condensed table-striped">
                        <thead>
                            <tr>
                                <th>X</th>
                                <th>X<sup>2</sup></th>
                                <th>X/2</th>
                            </tr>
                        </thead>
                        <tbody>
                            {numbers}
                        </tbody>
                    </table>
                </div>
            );
        }
    });

    return Table;
})();
