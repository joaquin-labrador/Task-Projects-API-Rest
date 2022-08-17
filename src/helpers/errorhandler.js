class HttpError {
  constructor(status, message) {
    this.status = status;
    this.message = message;
  }

  toJSON() {
    return {
      status: this.status,
      message: this.message,
    };
  }
}

export default HttpError;
