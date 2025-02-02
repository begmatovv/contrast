import { Button, ButtonProps, ConfigProvider } from 'antd';
import { MarginTypes, colors } from 'src/constants/theme';

type CombinedProps = ButtonProps & MarginTypes;

interface Props extends CombinedProps {
  bg?: string;
  width?: React.CSSProperties['width'];
  height?: number;
  borderColor?: React.CSSProperties['borderColor'];
  textColor?: React.CSSProperties['color'];
  borderRadius?: React.CSSProperties['borderRadius'];
  fontSize?: React.CSSProperties['fontSize'];
  defaultHoverBg?: React.CSSProperties['backgroundColor'];
  defaultHoverColor?: React.CSSProperties['color'];
  defaultHoverBorderColor?: React.CSSProperties['borderColor'];
}

export default function CustomButton({
  bg,
  width,
  height = 60,
  borderColor = colors.gray3,
  defaultHoverBg = '#00707B',
  defaultHoverColor,
  defaultHoverBorderColor,
  fontSize = 20,
  borderRadius = 16,
  textColor = colors.primary,
  m,
  mt,
  mb,
  ml,
  mr,
  style,
  ...rest
}: Props) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgBase: bg,
          colorBorder: borderColor,
          fontSize: fontSize as number,
          borderRadius: borderRadius as number,
        },
        components: {
          Button: {
            fontWeight: 600,
            controlHeight: height,
            paddingContentHorizontal: 37,
            colorText: textColor,
            defaultHoverBg: 'white',
            defaultHoverColor: '#00707B',
            defaultHoverBorderColor: '#00707B',
          },
        },
      }}
    >
      <Button
        {...rest}
        style={{
          width,
          margin: m,
          marginTop: mt,
          marginBottom: mb,
          marginLeft: ml,
          marginRight: mr,
          ...style,
        }}
      />
    </ConfigProvider>
  );
}
