import Link from "next/link";

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.text}>Consultar API</h1>
      <Link href="/api/v1/status">
        <span style={styles.button}>Ir para API</span>
      </Link>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "98vh",
    backgroundColor: "#2d2d2d", // Tom de grafite escuro
  },
  text: {
    color: "#ffffff", // Cor branca para o texto
    fontSize: "2rem",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#1e40af",
    color: "#ffffff",
    textDecoration: "none",
    borderRadius: "5px",
    transition: "background-color 0.3s",
  },
};
