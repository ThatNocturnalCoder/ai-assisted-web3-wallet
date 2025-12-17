import WalletInfo from "./WalletInfo";
import AIExplanation from "./AIExplanation";

export default function Dashboard() {
  return (
    <div style={{ padding: "30px" }}>
      <h2>Wallet Dashboard</h2>

      <WalletInfo />
      <AIExplanation />
    </div>
  );
}
