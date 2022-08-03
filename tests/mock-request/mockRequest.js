const { uploader } = require('./request');

const { createPerformanceUploader, createBehaviorInfoUploader, createErrInfoUploader } = uploader;

const upload = data => {
  createPerformanceUploader()(data);
};

upload({
  sendtime: new Date().getTime(),
  data: {
    FP: 44.2,
    FCP: 44.2
  }
});
