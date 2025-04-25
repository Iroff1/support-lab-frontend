const fontWeight = {
  Bold: '700',
  SemiBold: '600',
  Regular: '400',
  ExtraLight: '200',
};

const tranlateFontSize = (item: string) => {
  const [weight, size] = item.split('_', 2);

  if (!weight || !size)
    return {
      'font-weight': fontWeight.Regular,
      'font-size': 14 + 'px',
    };

  return {
    'font-weight':
      weight === 'B'
        ? fontWeight.Bold
        : weight === 'SB'
        ? fontWeight.SemiBold
        : weight === 'R'
        ? fontWeight.Regular
        : fontWeight.ExtraLight,
    'font-size': size + 'px',
  };
};

export default tranlateFontSize;
