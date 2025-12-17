export default function LandingPage({ onStart }) {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>AI-Assisted Web3 Wallet</h1>

      <p style={{ maxWidth: "600px", margin: "20px auto" }}>
        A smart Web3 wallet that helps you understand blockchain transactions
        in simple, human-readable language using AI.
      </p>

      <button
        onClick={onStart}
        style={{
          padding: "12px 25px",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        Use Wallet
      </button>
    </div>
  );
}
