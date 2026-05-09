export default function Footer() {
  return (
    <footer
      className="py-6 px-6 text-center text-sm"
      style={{ borderTop: "1px solid var(--border)", color: "var(--text-secondary)" }}
    >
      <p>
        Designed & built by{" "}
        <span style={{ color: "var(--accent)" }}>Harshit Sharma</span> · {new Date().getFullYear()}
      </p>
    </footer>
  );
}

