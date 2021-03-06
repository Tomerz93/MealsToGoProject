import styled from 'styled-components/native';

const defaultTextStyles = (theme) => `
font-family:${theme.fonts.body};
font-weight:${theme.fontWeights.regular};
color:${theme.colors.text.primary};
flex-wrap:wrap;
margin-top:0px;
margin-bottom:0px;
`;

const body = (theme) => `
font-size:${theme.fontSizes.body};
`;

const hint = (theme) => `
font-size:${theme.fontSizes.body};
`;
const caption = (theme) => `
font-size:${theme.fontSizes.caption};
font-weight:${theme.fontWeights.bold};
`;
const label = (theme) => `
font-size:${theme.fontSizes.heading};
font-size:${theme.fontSizes.body};
font-weight:${theme.fontWeights.medium};
`;
const error = (theme) => `
color:${theme.colors.text.error};
`;

const variants = {
  body,
  caption,
  error,
  label,
  hint,
  error,
};

export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: 'body',
};
