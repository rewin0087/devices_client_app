class DeviceApi {
  static getAllDevices() {
    return fetch('/api/v1/devices').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static createDevice(device) {
    const request = new Request('/api/v1/devices', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({device})
    });

    return this.getResponse(request);
  }

  static updateDevice(device) {
    const request = new Request(`/api/v1/devices/${device.id}`, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({device})
    });

    return this.getResponse(request);
  }

  static destroyDevice(device) {
    const request = new Request(`/api/v1/devices/${device.id}`, {
      method: 'DELETE'
    })

    return this.getResponse(request);
  }

  static getResponse(request) {
    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default DeviceApi;