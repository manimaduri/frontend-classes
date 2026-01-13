import './App.css';
import Button from "./components/Button";
import Card from "./components/Card";
import ThemeSwitcher from './components/context/ThemeSwitcher';
import ToggleExample from './components/custom-hooks';
import Greeting from "./components/Greeting";
import Hello from "./components/Hello";
import Status from "./components/Status";
import LiveClock from './components/use-effect/LiveClock';
import UserAPI from './components/use-effect/UserAPI';
import UseRefBasics from './components/use-ref';
import Counter from './components/use-state/Counter';
import NamesList from './components/use-state/NamesList';
import Profile from './components/use-state/Profile';
import UserCard from "./components/UserCard";
import ThemeProvider from './context/ThemeProvider';

function App() {
  const loggedIn = true;
  const showClock = false;
  return (
    <ThemeProvider>
    <Card>
      {/* <ScrollSection/> */}
      <ToggleExample/>
      <UseRefBasics/>
      {loggedIn ? (
        <div>
          <h1> React + Typescript setup complete</h1>
          <ThemeSwitcher/>
          <Greeting name="Alice" country="USA" />

          {showClock && <LiveClock/>}
          <UserAPI/>
          <NamesList/>
          <Profile/>
          <Counter/>
          <Hello name={"78"}></Hello>
          <UserCard name="John Doe" age={30} />
          <Status status="error" />
          <Status status="loading" />
          <Status status="success" />

          <Card shadow={true}>
            <h2>This is inside Card component</h2>
            <p>This card has shadow.</p>
          </Card>
          <Card>
            <h2>This is another Card component</h2>
            <p>This card has no shadow.</p>
          </Card>
        </div>
      ) : (
        <div>
          <Button label="Login" />
          <Button label="Register" variant="secondary" />
          <Button label="Delete" variant="danger" />
        </div>
      )}
    </Card>
    </ThemeProvider>
    //  <Card>
    //  { loggedIn && (
    //     <div>
    //       <h1> React + Typescript setup complete</h1>
    //       <Hello name={"78"}></Hello>
    //       <UserCard name="John Doe" age={30} />
    //       <Greeting name="Alice" country="USA" />
    //       <Status status="error" />
    //       <Status status="loading" />
    //       <Status status="success" />

    //       <Card shadow={true}>
    //         <h2>This is inside Card component</h2>
    //         <p>This card has shadow.</p>
    //       </Card>
    //       <Card>
    //         <h2>This is another Card component</h2>
    //         <p>This card has no shadow.</p>
    //       </Card>
    //     </div>
    //   ) }
      
    //   {!loggedIn && (
    //     <div>
    //       <Button label="Login" />
    //       <Button label="Register" variant="secondary" />
    //       <Button label="Delete" variant="danger" />
    //     </div>
    //   )}
    // </Card>
  );
}

//todo : Build a reusable alert component, accept props success | error | info, message, {children}
//[Success] Logged in successfully
//[Error] Failed to login
//[Info] Your session will expire in 5 minutes
export default App;
