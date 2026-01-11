"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div style={{ padding: "80px", textAlign: "center" }}>
      <p>Something went wrong</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
