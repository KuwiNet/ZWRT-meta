import * as React from 'react';

// ZWRT custom logo (red flame + ZWRT). Replaces the original Yacd SVG mark.
const LOGO_SRC = `${import.meta.env.BASE_URL}logo.png`;

type Props = {
  width?: number;
  height?: number;
  animate?: boolean;
  c0?: string;
  c1?: string;
  stroke?: string;
  eye?: string;
  line?: string;
};

function SvgYacd({
  width = 320,
  height = 320,
  animate = false,
  c0 = '#316eb5',
  c1 = '#f19500',
  line = '#cccccc',
}: Props) {
  // The props above are kept for compatibility with existing call sites; the
  // ZWRT brand is rendered as a plain image.
  return <img src={LOGO_SRC} alt="ZWRT" width={width} height={height} />;
}

export default SvgYacd;
