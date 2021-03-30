const styles = {
  App: {
    textAlign: 'center'
  },
  AppLogo: {
    height: '40vmin',
    pointerEvents: 'none'
  },
  AppHeader: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '32px',
    color: 'white'
  },
  AppLink: {
    color: '#61dafb'
  }
};

function App() {
  return (
    <div style={styles.App} className="App">
      <div style={styles.AppHeader} className="App-header">
        <img src="https://img.alicdn.com/imgextra/i4/O1CN01aT5xVM1lbORGlfbfn_!!6000000004837-2-tps-492-437.png" style={styles.AppLogo} className="App-logo" alt="logo" />
        <p>
          Edit <span>src/App.js</span> and save to reload.
        </p>
        <a
          style={styles.AppLink}
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React: https://reactjs.org
        </a>
      </div>
    </div>
  );
}

export default App;
