const mongoose = require('mongoose');
const _ = require('underscore');
const awsLambda = require('aws-lambda')

mongoose.connect();

_.map([1,2,3], (i) => i * 2);

awsLambda();