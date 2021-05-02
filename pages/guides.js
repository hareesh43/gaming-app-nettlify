import { useContext, useEffect } from "react";
import AuthContext from "../stores/authContext";
import styles from "../styles/Guids.module.css";

export default function Guides() {
  const { user, authReady } = useContext(AuthContext);

  useEffect(() => {
    if (authReady) {
      fetch("/.netlify/functions/guides",user &&  {
        headers: {
          Authorization: `Bearer ${user.token.access_token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  }, [user,authReady]);
  return (
    <div className={styles.guids}>
      <h1>All guids</h1>
    </div>
  );
}
