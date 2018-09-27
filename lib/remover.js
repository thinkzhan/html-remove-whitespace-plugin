const removeComment = require('./removeComment');

const remove = (htmlPluginData, opts) => {
    const {
      include = null, exclude = null, match =/[\s\t\n]+/g
    } = opts;

    if (!htmlPluginData.plugin) {
        return htmlPluginData;
    }

    const file = htmlPluginData.plugin.options.filename;

    // exclude > include
    if (exclude) {
      if (file.match(exclude)) {
        return htmlPluginData;
      }
    } else if (include && !file.match(include)) {
      return htmlPluginData;
    }

    htmlPluginData.html = removeComment(htmlPluginData.html).replace(match, ' ')
    return htmlPluginData
};

module.exports = remove;
