import TrueFocus from "../components/ui/true-focus";
import SpotlightCard from "../components/ui/spotlight-card";

export default function Projects() {
  return (
    <>
      <div className="min-h-screen bg-black py-3">
        <TrueFocus
          sentence="Skills might you need"
          manualMode={false}
          blurAmount={5}
          borderColor="red"
          animationDuration={2}
          pauseBetweenAnimations={1}
        />
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          Hello
        </SpotlightCard>
      </div>
    </>
  );
}
