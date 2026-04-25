import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  componentName?: string;
}

interface State {
  hasError: boolean;
}

/**
 * Global Error Boundary
 * Prevents a single component crash (like Three.js) from taking down the whole app.
 */
export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(`Uncaught error in ${this.props.componentName || 'Component'}:`, error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-8 rounded-2xl bg-surface border border-white/5 text-center">
          <h2 className="text-xl font-display text-text-primary mb-4">Something went wrong</h2>
          <p className="text-text-secondary text-sm mb-6">
            The {this.props.componentName || 'component'} failed to load.
          </p>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="text-accent font-mono text-xs uppercase tracking-widest hover:underline"
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
