export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm">
        <p>
          © {new Date().getFullYear()} Spark Adriatic. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
