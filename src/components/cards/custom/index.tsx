import React from 'react';
import { MarginTypes, shadows } from 'src/constants/theme';
import './custom.scss';

type CombinedProps = React.HTMLAttributes<HTMLDivElement> & MarginTypes;

interface Props extends CombinedProps {
  borderRadius?: 0 | 18 | 24;
  padding?: 0 | 24 | 30;
  paddingHorizontal?: number;
  paddingVertical?: number;
  bordered?: boolean;
  shadowed?: boolean;
}

export default function Custom({
  borderRadius = 18,
  padding = 24,
  paddingHorizontal,
  paddingVertical,
  bordered,
  shadowed = true,
  m,
  mt,
  mb,
  ml,
  mr,
  style,
  className,
  children,
  ...rest
}: Props) {
  const paddingTop = paddingVertical || padding;
  const paddingBottom = paddingVertical || padding;
  const paddingLeft = paddingHorizontal || padding;
  const paddingRight = paddingHorizontal || padding;

  return (
    <div
      style={{
        borderRadius,
        paddingTop,
        paddingBottom,
        paddingLeft,
        paddingRight,
        borderWidth: bordered ? 1 : 0,
        boxShadow: shadowed ? shadows.card : 'none',
        margin: m,
        marginTop: mt,
        marginBottom: mb,
        marginLeft: ml,
        marginRight: mr,
        ...style,
      }}
      className={`cards_custom ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
