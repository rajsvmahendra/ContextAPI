// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       {/* <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p> */}
//       <Header />
//       <Profile />
//     </>
//   )
// }

// export default App

// import "./App.css";
// import Header from "./components/Header";
// import Profile from "./components/Profile";
// import SearchBar from "./components/SearchBar";
// import { Toaster } from "react-hot-toast";

// export default function App() {
//   return (
//     <>
//       <div style={{ padding: 40 }}>
//         <Toaster position="top-right" />
//         <h1>Axios +Toasr </h1>
//         <h3>User List...</h3>

//         {isLoading
//         }
//       </div>
//       <div className="app-container">
//         <Header />
//         <SearchBar />
//         <Profile />
//       </div>
//     </>
//   );
// }

import "./App.css";
import useUsers from "./hooks/useUsers";
import { Toaster } from "react-hot-toast";
import Shimmer from "./components/Shimmer";

function App() {
  const { users, loading } = useUsers();

  return (
    <>
      <Toaster position="top-right" />

      <div style={{ padding: 40 }}>
        <h1>Axios Instance Demo</h1>
        <h3>User List:</h3>

        {loading ? (
          <Shimmer />
        ) : (
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default App;