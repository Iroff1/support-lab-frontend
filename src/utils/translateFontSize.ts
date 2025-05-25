const fontWeight = {
  Bold: '700',
  SemiBold: '600',
  Medium: '500',
  Regular: '400',
  ExtraLight: '200',
};

const translateFontSize = (item: string) => {
  const [weight, size] = item.split('_', 2);

  if (!weight || !size)
    return {
      'font-weight': fontWeight.Regular,
      'font-size': 14 + 'px',
    };

  const upperWeight = weight.toUpperCase();
  return {
    'font-weight':
      upperWeight === 'B'
        ? fontWeight.Bold
        : upperWeight === 'SB'
        ? fontWeight.SemiBold
        : upperWeight === 'M'
        ? fontWeight.Medium
        : upperWeight === 'R'
        ? fontWeight.Regular
        : fontWeight.ExtraLight,
    'font-size': size + 'px',
  };
};

export default translateFontSize;
