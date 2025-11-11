import { forwardRef } from 'react';

const SvgMock = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => (
  <svg ref={ref} data-testid="svg-mock" {...props} />
));

SvgMock.displayName = 'SvgMock';

export const ReactComponent = SvgMock;
export default SvgMock;
