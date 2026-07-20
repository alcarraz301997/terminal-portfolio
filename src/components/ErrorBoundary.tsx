import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("[ErrorBoundary]", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            backgroundColor: "var(--color-main)",
            color: "var(--color-text)",
            fontFamily: "var(--text-family)",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <p style={{ color: "rgb(255, 75, 10)", fontSize: "1.2rem", marginBottom: "0.5rem" }}>
            $ something went wrong
          </p>
          <p style={{ color: "var(--color-text-description)", marginBottom: "1.5rem" }}>
            {this.state.error?.message ?? "Unknown error"}
          </p>
          <button
            onClick={this.handleReset}
            style={{
              fontFamily: "var(--text-family)",
              fontSize: "0.9rem",
              color: "var(--color-select-yellow)",
              backgroundColor: "transparent",
              border: "1px solid var(--color-border)",
              padding: "0.5rem 1.5rem",
              cursor: "pointer",
            }}
          >
            $ try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
