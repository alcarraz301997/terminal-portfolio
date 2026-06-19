import LanguageSwitcher from "./components/LanguageSwitcher";
import Terminal from "./components/Terminal";
import SEO from "./components/SEO";

export default function App() {
  return (
    <div>
      <SEO />
      <LanguageSwitcher />
      <Terminal/>
    </div>
  )
}
