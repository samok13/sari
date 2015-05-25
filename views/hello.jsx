var React = require('react');


var Component = React.createClass({
    render: function () {

        return (
            <html>
                <head>
                    <title>hello</title>
                </head>
                <body>
                    <p>hello {this.props.user} </p>
                    <img src='https://s3-us-west-1.amazonaws.com/sari-images/saris/Northern-Indian-Sari-.jpg'></img>
                </body>
            </html>
        );
    }
});


module.exports = Component;