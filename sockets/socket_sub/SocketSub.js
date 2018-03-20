import openSocket from 'socket.io-client';

export default class SocketSub {
  constructor(server) {
    this.server = server;
    this.subscriptions = {};
  }

  get socket() {
    if (this.socketIO === undefined) {
      this.socketIO = openSocket(this.server);
    }
    return this.socketIO;
  }
  disConnectServer() {
    if (this.socketIO !== undefined) {
      this.socketIO.disconnect();
      this.socketIO = undefined;
    }
  }
  unpack = data => data;
  subKey = data => `${JSON.stringify(data)}`;

  emit = (name, key, data) => {
    this.subscriptions[name][key].forEach(callback => callback(data));
  };

  subscribe(emit, event, callback) {
    const key = this.subKey(emit.data);
    const sub = this.subscriptions[emit.name] || {};
    if (sub[key] === undefined) {
      sub[key] = [];
    }
    sub[key].push(callback);
    if (this.subscriptions[emit.name] === undefined) {
      this.subscriptions[emit.name] = sub;
      this.socket.on(event, (message) => {
        const data = this.unpack(message);
        if (data) {
          this.emit(emit.name, this.subKey(data), data);
        }
      });
    }
    this.socket.emit(emit.name, emit.payload);
  }

  unSubscribe(remove, emit, callback) {
    const key = this.subKey(emit.data);
    this.socket.emit(remove, emit.payload);
    if (this.subscriptions[emit.name] !== undefined &&
      this.subscriptions[emit.name][key] !== undefined) {
      const index = this.subscriptions[emit.name][key].indexOf(callback);
      if (index !== -1) {
        this.subscriptions[emit.name][key].splice(index, 1);
      }
      if (this.subscriptions[emit.name][key].length === 0) {
        delete this.subscriptions[emit.name][key];
      }
      if (Object.keys(this.subscriptions[emit.name]).length === 0) {
        delete this.subscriptions[emit.name];
      }
      if (Object.keys(this.subscriptions).length === 0) {
        this.disConnectServer();
      }
    }
  }
}
