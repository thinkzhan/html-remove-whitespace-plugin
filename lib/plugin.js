const remover = require('./remover');

const runner = (htmlPluginData, callback, opts) => {
  const res = remover(htmlPluginData, opts);

  callback(null, res);
}

class Plugin {
  constructor(opts = {}) {
    this.opts = opts;
  }

  apply(compiler) {
    if (compiler.hooks) {
      // setup hooks for webpack >= 4
      compiler.hooks.compilation.tap('HtmlRemoveWhitespacePluginHooks', compilation => {
        compilation.hooks.htmlWebpackPluginAfterHtmlProcessing.tapAsync('HtmlRemoveWhitespacePluginHooks', (htmlPluginData, callback) => {
            runner(htmlPluginData, callback, this.opts)
        });
      });
    } else {
      // setup hooks for webpack <= 3
      compiler.plugin('compilation', compilation => {
        compilation.plugin('html-webpack-plugin-after-html-processing', (htmlPluginData, callback) => {
            runner(htmlPluginData, callback, this.opts)
        });
      });
    }
  }
}

module.exports = Plugin;
