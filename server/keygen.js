const crypto = require('crypto');

class KeyGenerator {

  static generate(){
    let key = this.guid();
    let keyWithHmac =
    {
        key: key,
        hmac: this.generateHmac(key)
    }
    return JSON.stringify(keyWithHmac).toString('base64');
  }

  static guid() {
    return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
      this.s4() + '-' + this.s4() + this.s4() + this.s4();
  }

  static s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  static generateHmac(key){
    let hmac = crypto.createHmac('sha256','secret');
    hmac.update(key);
    return hmac.digest('base64');
  }

}

module.exports = KeyGenerator;