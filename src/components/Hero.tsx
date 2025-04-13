import { DESKTOP_HEADER_HEIGHT } from "../constants";
import Button from "./Button";

export default function Hero() {
  return (
    <section
      className="bg-[var(--color-background)] text-[var(--color-text)] py-16 px-8 justify-center items-center mx-auto"
      style={{
        height: `calc(100vh - ${DESKTOP_HEADER_HEIGHT})`,
      }}
    >
      <div className="max-w-5xl mx-auto text-center flex-auto items-center justify-center">
        <h1 className="text-6xl font-bold mb-4 ">
          Share your interview experience
        </h1>
        <p className="text-lg mb-6">
          Let's help eachother preparing for the upcoming interview!
        </p>
        <Button>ADD REVIEW</Button>
      </div>
    </section>
  );
}
