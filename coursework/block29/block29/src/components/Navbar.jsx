import { Link } from "react-router-dom";
import styles from "../css/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <h1>Puppy Bowl!</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/add-player">Add New Player</Link>
      </div>
    </nav>
  );
}