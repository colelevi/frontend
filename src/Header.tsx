import logo from "./logo.svg";

function Header(props: any) {
  return (
    <header className="row">
      <div className="col-4">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="col">
        <h3>{props.slogan}</h3>
      </div>
    </header>
  );
}

export default Header;
