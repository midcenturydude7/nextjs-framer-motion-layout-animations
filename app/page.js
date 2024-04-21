import Card from "./components/Card";
import FauxContent from "./components/FauxContent";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-1 overflow-hidden">
      <div className="flex-1">
        <FauxContent />
      </div>
    </div>
  );
}
