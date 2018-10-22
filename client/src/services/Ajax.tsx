/**
 * A substitute for jQuery's ajax method.
 * @param url the url to which to submit the request
 * @param settings options associated with the request { method, responseType, data, username, password }
 * @return Promise<any> Promise
 */
let ajax = (url, settings) => new Promise((resolve, reject) => {
  // add default method
  settings.method = (settings.method || 'GET').toUpperCase();
  let xhr = new XMLHttpRequest();
  xhr.open(settings.method, url, true, settings.username, settings.password);

  if (settings.responseType) {
    xhr.responseType = settings.responseType;
  }

  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

  xhr.addEventListener('load', e => xhr.status === 200 ? resolve(xhr.response) : reject(xhr.response));
  xhr.addEventListener('error', e => reject(xhr.response));

  if (settings.data) {
    xhr.send(JSON.stringify(settings.data));
  } else {
    xhr.send();
  }
});

export {ajax};
