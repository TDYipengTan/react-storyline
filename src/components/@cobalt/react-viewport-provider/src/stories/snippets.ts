export const DEFAULT = `
  import ViewportProvider, { useViewport } from "@cobalt/react-viewport-provider";

  const Component = () => {
    const viewport = useViewport();

    return (
      <div>
        Current viewport size: {viewport}
      </div>
    );
  };

  // Wrap a component or the main app with the ViewportProvider component
  <ViewportProvider>
    <Component />
  </ViewportProvider>
`;
