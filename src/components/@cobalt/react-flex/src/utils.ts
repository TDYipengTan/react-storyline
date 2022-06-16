import { AlignmentProperties, Direction } from './FlexContainer';

const isSpacingProperty = (align: AlignmentProperties) =>
  !!(align && align.match('space'));

export const getDefaultAlignX = (direction: Direction, align: AlignmentProperties) => {
  if (direction === 'row' && align === 'stretch') {
    return 'center';
  }
  if (direction === 'column' && isSpacingProperty(align)) {
    return 'center';
  }
  return align;
};

export const getDefaultAlignY = (direction: Direction, align: AlignmentProperties) => {
  if (direction === 'column' && align === 'stretch') {
    return 'center';
  }
  if (direction === 'row' && isSpacingProperty(align)) {
    return 'center';
  }
  return align;
};
