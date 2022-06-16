export const BASIC = `
  import useResponsiveValue from "@cobalt/react-responsive-value-hook";

  const Component = ({ value }) => {
    const responsiveValue = useResponsiveValue(value);

    // Use the new responsive value as needed.
  };

  <Component value={[<small>, <medium>, <large>]}
`;

export const FIXED_VALUE = `
  import useResponsiveValue from "@cobalt/react-responsive-value-hook";

  const Component = ({ value }) => {
    const responsiveValue = useResponsiveValue(value);

    // Use the new responsive value as needed.
  };

  <Component value={<all>}
`;
