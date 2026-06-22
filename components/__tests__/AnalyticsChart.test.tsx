import { render, screen } from '@testing-library/react';
import AnalyticsChart from '@/components/AnalyticsChart';

// Basic render test – ensures the title appears and a chart SVG is rendered
test('AnalyticsChart renders with title and SVG', () => {
  render(<AnalyticsChart title="Test Chart" />);
  // Title should be in the document
  expect(screen.getByText('Test Chart')).toBeInTheDocument();
  // Recharts renders an <svg> element; we look for it via role "img" (hidden) or tag name
  const svg = screen.getByRole('img', { hidden: true }) as SVGSVGElement;
  expect(svg).toBeInTheDocument();
});
