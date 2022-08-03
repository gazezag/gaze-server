const uploadTarget = {
  proformance: 'http://localhost:3001',
  errInfo: '',
  userBehavior: ''
};

const imgRequest = (url, data) => {
  if (!url || !data) return;

  const img = new Image();

  img.onload = () => {
    console.log('loaded...');
  };

  img.onerror = () => {
    console.log('error....');
  };

  img.src = `${url}${url.indexOf('?') < 0 ? '?' : '&'}${encodeURIComponent(JSON.stringify(data))}`;
};

const beaconRequest = (url, data) => {
  if (!url || !data) return;

  const headers = {
    type: 'application/x-www-form-urlencoded'
  };

  navigator.sendBeacon(url, new Blob([JSON.stringify(data)], headers));
};

const ajaxRequest = (url, data) => {
  if (!url || !data) return;

  const client = new XMLHttpRequest();
  client.open('POST', url, false);
  client.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
  client.send(JSON.stringify(data));
};

const upload = (url, data) => {
  const len = `${url}${url.indexOf('?') < 0 ? '?' : '&'}${encodeURIComponent(JSON.stringify(data))}`
    .length;

  // 2083 compatible with ie browser
  // chrome 8182
  // safari 80000
  // firefox 65536
  // opera 190000
  if (len < 2083) {
    imgRequest(url, data);
  } else if (isBeaconSupported()) {
    beaconRequest(url, data);
  } else {
    ajaxRequest(url, data);
  }
};

const getRequestData = data => {
  return {
    sendTime: performance.now(),
    data
  };
};

const createPerformanceUploader = (config = {}) => {
  return data => upload(uploadTarget.proformance, getRequestData(data));
};

const createErrInfoUploader = (config = {}) => {
  return data => upload(uploadTarget.errInfo, getRequestData(data));
};

const createBehaviorInfoUploader = (config = {}) => {
  return data => upload(uploadTarget.userBehavior, getRequestData(data));
};

module.exports.uploader = {
  createPerformanceUploader,
  createErrInfoUploader,
  createBehaviorInfoUploader
};
