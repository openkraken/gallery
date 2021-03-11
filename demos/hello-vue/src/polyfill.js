if (!document.createEvent) {
  document.createEvent = () => {
    return new Event('');
  }
}