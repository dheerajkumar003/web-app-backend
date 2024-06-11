class APIResponse {
  constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode;
    this.data = data;
    this.statusCode.message = message;
    this.success = success < 400;
  }
}
