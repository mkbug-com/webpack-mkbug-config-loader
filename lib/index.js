const fs = require('fs');

function parseConf (src, Obj = {}) {
  let tmpStr = src.replace('\r\n', '\n');
  const lineArr = tmpStr.split('\n');

  let result = Obj;
  lineArr.forEach(function transFunc (line) {
    const keyValue = line.split('=');
    if (keyValue[1] && keyValue[1] !== '') {
      result[keyValue[0]] = keyValue[1];
    }
  })

  return result;
}

module.exports = function (source) {
  const env = process.env.NODE_ENV;

  const config = this.resourcePath.replace('.conf',`.${env}.conf`);
  let result = parseConf(source, {});

  if (fs.existsSync(config)) {
    this.addDependency(config);
    result = parseConf(fs.readFileSync(config, { encoding: 'utf8' }), result);
  }
  
  return 'module.exports = ' + JSON.stringify(result);
}
