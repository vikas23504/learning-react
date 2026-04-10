import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  const handleclick = ()=>{
    navigate("/about")
  }
  return (
    <div>

      {/* HERO SECTION */}
      <section style={styles.hero}>
        <h1>Welcome to My Website 🚀</h1>
        <p>We build modern web experiences using React</p>
        <button style={styles.btn}>Get Started</button>
      </section>

      {/* FEATURES SECTION */}
      <section style={styles.section}>
        <h2>Our Features</h2>

        <div style={styles.cardContainer}>
          <div style={styles.card}>
            <h3>Fast ⚡</h3>
            <p>Lightning fast performance with modern tech</p>
          </div>

          <div style={styles.card}>
            <h3>Responsive 📱</h3>
            <p>Works perfectly on mobile, tablet & desktop</p>
          </div>

          <div style={styles.card}>
            <h3>Secure 🔒</h3>
            <p>Best practices for security and safety</p>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section style={styles.sectionLight}>
        <h2>About Us</h2>
        <p>
          We are passionate developers creating beautiful and functional web
          applications using React and modern tools.
        </p>
      </section>

      {/* CTA SECTION */}
      <section style={styles.cta}>
        <h2>Ready to start your journey?</h2>
        <button style={styles.btn} onClick={handleclick}>About page</button>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <p>© 2026 My Website | All Rights Reserved</p>
      </footer>

    </div>
  );
};

const styles = {
  hero: {
    height: "80vh",
    background: "linear-gradient(to right, #4facfe, #00f2fe)",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    marginTop: "20px",
    padding: "10px 20px",
    border: "none",
    background: "#000",
    color: "#fff",
    cursor: "pointer",
  },
  section: {
    padding: "60px 20px",
    textAlign: "center",
  },
  sectionLight: {
    padding: "60px 20px",
    background: "#f5f5f5",
    textAlign: "center",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "30px",
    flexWrap: "wrap",
  },
  card: {
    width: "250px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
  },
  cta: {
    padding: "60px 20px",
    background: "#222",
    color: "white",
    textAlign: "center",
  },
  footer: {
    padding: "20px",
    background: "#111",
    color: "#fff",
    textAlign: "center",
  },
};

export default Home;