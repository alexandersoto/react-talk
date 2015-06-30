(function() {
    "use strict";

    var _ = require("underscore");
    var React = require("react");

    var LEO_URLS = [
        "http://41.media.tumblr.com/a4c8ddc6142bc5de02969c4b786df51a/tumblr_nq9zrxxpiB1uuuwrlo1_400.jpg", 
        "http://40.media.tumblr.com/7b70f3bbfe96d6907223dae03cf7b998/tumblr_nq9zpgCU7D1uuuwrlo1_400.jpg", 
        "http://40.media.tumblr.com/c54d282d9d8d1579d6e626774d57090f/tumblr_nq9zoq8vbu1uuuwrlo1_400.jpg", 
        "http://41.media.tumblr.com/ccdee5b13b8545c084e5609ec61095d5/tumblr_nq9znzomgs1uuuwrlo1_400.jpg", 
        "http://40.media.tumblr.com/5502d3d351dde6a792c4aa1f17edf601/tumblr_nq9zn7oGz11uuuwrlo1_400.jpg", 
        "http://41.media.tumblr.com/205a0899e0db68e7a364b902ffb8d8bf/tumblr_nq9zmbSyNT1uuuwrlo1_400.jpg", 
        "http://36.media.tumblr.com/a28a786ffaae3c2020e5601417850266/tumblr_nq5yhpkn5j1uuuwrlo1_400.jpg", 
        "http://40.media.tumblr.com/d16a12d0ebe9a24917cfd83b9c1a8d27/tumblr_nnoo8pDqI61uuuwrlo1_400.png", 
        "http://41.media.tumblr.com/c3eaa36c76e89ee4b6a2280db09c6905/tumblr_nnoo83wKWf1uuuwrlo1_400.jpg", 
        "http://40.media.tumblr.com/346f19f980250bea119bb26db754c2f7/tumblr_nnm08nyLdo1uuuwrlo1_400.png", 
        "http://40.media.tumblr.com/8daee58a44433be7c307c188ba7ce158/tumblr_nnluuaWP6f1uuuwrlo1_400.jpg", 
        "http://40.media.tumblr.com/6bbaa0fd9352c3ee9a0d693a86abdb39/tumblr_nnlurxvwX41uuuwrlo1_400.jpg", 
        "http://40.media.tumblr.com/6803dab43afd923efca83aa39693f5cf/tumblr_nnluom3vuw1uuuwrlo1_400.jpg", 
        "http://41.media.tumblr.com/a8e6af29ee0957cf598756f77a229e7f/tumblr_nnlun5D64B1uuuwrlo1_400.jpg", 
        "http://41.media.tumblr.com/67e856811c0e6c90ba20d0a8533655dc/tumblr_nnlulrqZ191uuuwrlo1_400.jpg", 
        "http://41.media.tumblr.com/34a2c491660a89a5675f296c3e0ecddc/tumblr_nnluc99mOG1uuuwrlo1_400.jpg", 
        "http://41.media.tumblr.com/94fc5fd7d1979a05e8935cfa44750aa6/tumblr_nnlua2lpNe1uuuwrlo1_400.jpg", 
        "http://36.media.tumblr.com/2ff9604284349087baba26ac2c093e12/tumblr_nnlu8vetFW1uuuwrlo1_400.jpg", 
        "http://40.media.tumblr.com/66ef71db8424e5e383cb0a935360f8bf/tumblr_nnlu5kyeDv1uuuwrlo1_400.jpg", 
        "http://41.media.tumblr.com/2d657f299dfffabd60c44bea638df8d6/tumblr_nnlu3rclz61uuuwrlo1_400.jpg"
    ];

    // Returns a random integer between min (included) and max (excluded)
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    var LeoView = React.createClass({
        getInitialState: function() {
            return {
                images: []
            };
        },

        _addImage: function() {
            var images = this.state.images.slice();
            images.push(LEO_URLS[getRandomInt(0, LEO_URLS.length)]);

            // Setting State!
            this.setState({images: images});
        },

        _removeImage: function() {
            var images = this.state.images.slice();
            images.splice(getRandomInt(0, images.length), 1);

            // Setting State!
            this.setState({images: images});
        },

        render: function() {
            var leoImages = _.map(this.state.images, function(imageUrl, i) {
                return (
                    <div key={i} className="col-xs-3">
                        <div className="thumbnail">
                            <img src={imageUrl}/>
                        </div>
                    </div>
                );
            });
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-xs-10">
                            <h1> Leo x {this.state.images.length} </h1>
                        </div>
                        <div className="col-xs-2">
                            <button className="btn btn-success" onClick={this._addImage}> Moar Leo</button>
                            <button className="btn btn-danger" onClick={this._removeImage}> Less Leo :(</button>
                        </div>
                    </div>
                    <div className="row">
                        {leoImages}
                    </div>
                </div>
            );
        }
    });

    // Start the app
    function main() {
        React.render(<LeoView/>, document.getElementById("react-container"));
    }
    main();
})();
