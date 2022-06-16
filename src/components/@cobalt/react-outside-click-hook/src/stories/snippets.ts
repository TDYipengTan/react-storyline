export const BASIC = `
  import useOutsideClick from "@cobalt/react-outside-click-hook";

  const Component = ({ outsideClickHandler: Function }) => {
    const handlers = useOutsideClick(outsideClickHandler);

    return <InnerComponent {...handlers} /> //replace with your component
  }

  <Component />
`;
