var Taglib = require(__dirname+"/../lib/taglib")
var util = require("util")

var p = new Taglib.Tag(process.ARGV[2]);
util.debug( util.inspect(p) )
