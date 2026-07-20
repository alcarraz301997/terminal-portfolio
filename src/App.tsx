import LanguageSwitcher from "./components/LanguageSwitcher";
import Terminal from "./components/Terminal";
import SEO from "./components/SEO";

export default function App() {
  return (
    <div>
      <SEO />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <LanguageSwitcher />
      <main id="main-content" tabIndex={-1}>
        <Terminal/>
      </main>
    </div>
  )
}
