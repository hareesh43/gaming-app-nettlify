import { useContext, useEffect, useState } from "react";
import AuthContext from "../stores/authContext";
import styles from "../styles/Guides.module.css";

export default function Guides() {
  const { user, authReady } = useContext(AuthContext);
  const [guideList, setGuideList] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (authReady) {
      fetch(
        "/.netlify/functions/guides",
        user && {
          headers: {
            Authorization: `Bearer ${user.token.access_token}`,
          },
        }
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error("User must login to view");
          }
          return res.json();
        })
        .then((data) => {
          setGuideList(data);
          setError(null);
        })
        .catch((err) => {
          console.log(err);
          setError(err.message);
          setGuideList(null);
        });
    }
  }, [user, authReady]);
  return (
    <div className={styles.guides}>
      {!authReady && <div>Loading...</div>}

      {error && (
        <div className={styles.error}>
          <p>{error}</p>
        </div>
      )}
 
      {guideList &&
        guideList.map((guide) => (
          <div key={guide.title} className={styles.card}>
            <h3>{guide.title}</h3>
            <h4>Written by {guide.author}</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
              ratione aliquam totam in voluptatum praesentium molestias sunt
              suscipit? Voluptas repudiandae distinctio non odit debitis
              exercitationem cum facere aliquam voluptatum aperiam!
            </p>
          </div>
        ))}
    </div>
  );
}
