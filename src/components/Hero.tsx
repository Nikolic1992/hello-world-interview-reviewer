import Button from "./Button";

export default function Hero() {
  return (
    <section
      className="bg-[var(--color-background)] text-[var(--color-text)] 
                 min-h-[calc(100vh-100px)] px-8 flex flex-col items-center 
                 justify-center text-center"
    >
      <h1 className="text-5xl font-extrabold max-w-3xl mb-4">
        Welcome to Hello World Interview Reviewer
      </h1>
      <p className="max-w-xl text-lg mb-8 text-[var(--color-secondary)]">
        Share your interview experiences and help others prepare for their job
        interviews.
      </p>

      <form className="w-full max-w-xl text-left space-y-4">
        <input
          type="text"
          placeholder="Company Name"
          className="w-full p-3 rounded border border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
        />

        <input
          type="text"
          placeholder="Review Title"
          className="w-full p-3 rounded border border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
        />

        <textarea
          placeholder="Write your experience..."
          rows={5}
          className="w-full p-3 rounded border border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
        />

        <select className="w-full p-3 rounded border border-[var(--color-primary)] text-[var(--color-text)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">
          <option value="">Select Category</option>
          <option value="frontend">Frontend Development</option>
          <option value="backend">Backend Development</option>
          <option value="testing">Testing</option>
          <option value="ui">UI</option>
          <option value="ux">UX</option>
          <option value="ai">AI</option>
          <option value="devops">DevOps</option>
        </select>

        <div className="text-center pt-4 justify-end flex">
          <Button className="px-10 py-3 text-lg " variant="primary">
            Submit Review
          </Button>
        </div>
      </form>
    </section>
  );
}
