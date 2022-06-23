export default function handleRollupWarning (warning, warn) {
  const { code, importer } = warning;
  if (code === 'THIS_IS_UNDEFINED') return;
  if (code === 'CIRCULAR_DEPENDENCY' && importer.includes('fomantic-ui-react')) return;
  warn(warning);
}
