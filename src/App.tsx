import type React from "react";
import { theme } from "./theme";

const App: React.FC = () => {
  return (
    <div
      className="app"
      style={{
        fontFamily: theme.fonts.body,
        backgroundColor: theme.colors.base,
        color: theme.colors.text,
      }}
    >
      <header className="app-header surface">
        <div className="container">
          <div className="brand">StashIt</div>
          <nav className="nav">
            <a href="#" className="nav-link">
              Features
            </a>
            <a href="#" className="nav-link">
              Pricing
            </a>
            <a href="#" className="nav-link">
              Login
            </a>
            <button className="btn btn-primary">Get Started</button>
          </nav>
        </div>
      </header>

      <main className="surface">
        <section className="hero container">
          <div className="hero-content">
            <h1>Organize everything you stash on the web.</h1>
            <p>
              StashIt helps you capture links, notes, and inspiration in one
              clean, fast, and focused workspace.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary">Start for free</button>
              <button className="btn btn-secondary">View demo</button>
            </div>
          </div>
          <div className="hero-card">
            <div className="card-header">
              <span className="dot dot-primary" />
              <span className="dot dot-secondary" />
              <span className="dot dot-tertiary" />
            </div>
            <div className="card-body">
              <div className="card-row">
                <span className="pill pill-primary">Read later</span>
                <span className="pill pill-secondary">Resources</span>
              </div>
              <div className="card-main">
                <h2>Today&apos;s stash</h2>
                <ul>
                  <li>Design systems inspiration</li>
                  <li>API integration docs</li>
                  <li>Marketing ideas for launch</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
