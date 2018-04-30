console.log('opening function');

const AWS = require('aws-sdk');
const docClient = new AWS.dynamoDB.DocumentClient({region: 'ap-southeast-2'});

exports.handle = function (e, ctx, callback) {

  var params = {
    Item: {
      date: Date.now(),
      message: "test write"
    },
    TableName: 'letters'
  };

  docClient.put(params, function(err, data) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
}
