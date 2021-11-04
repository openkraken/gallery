if (!document.createEvent) {
  document.createEvent = () => {
    return new Event('');
  }
}

// https://github.com/vuejs/vue-next/blob/master/packages/runtime-dom/src/index.ts#L188
if (!window.ShadowRoot) {
  // Vue's mount process will judge instanceof ShadowRoot, but some versions do not add feature judgment. Add this logic to prevent errors.
  window.ShadowRoot = () => {};
}