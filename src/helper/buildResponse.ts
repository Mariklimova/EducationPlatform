function buildResponse(status, message, res): void {
  res.status(status);
  res.send(message);
}

export { buildResponse };
