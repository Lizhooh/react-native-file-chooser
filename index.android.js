'use strict'

const { NativeModules } = require('react-native');
const { FileChooserManager, FileChooser } = NativeModules;
const DEFAULT_OPTIONS = {
  title: 'File Chooser',
  chooseFileButtonTitle: 'Choose File...'
};

module.exports = {
  ...FileChooserManager,
  showFileChooser: function showFileChooser(options, callback) {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    return FileChooserManager.showFileChooser({ ...DEFAULT_OPTIONS, ...options }, callback)
  },
  FilePicker: FileChooser,
}
