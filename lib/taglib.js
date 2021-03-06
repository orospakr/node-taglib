var binding = require(__dirname + "/taglib_binding");
exports.Tag = binding.Tag;
exports.AudioProperties = binding.AudioProperties;
exports.getFileTags = function(filename) {
  return new binding.Tag(filename);
};

exports.getAudioProperties = function(filename) {
    return new binding.AudioProperties(filename);
}
