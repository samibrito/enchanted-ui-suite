import React from 'react';
import CodePreview from '../components/CodePreview';

const TypographySection: React.FC = () => (
  <div>
    <h1 className="sb-section-title">Typography</h1>
    <p className="sb-section-desc" style={{ marginBottom: '2rem' }}>
      Type scale follows a modular ratio for hierarchy. System font stack ensures fast loading and native feel.
    </p>

    <div className="sb-component-section">
      <h3>Scale</h3>
      <div className="sb-preview-box">
        {[
          { tag: 'h1', size: '2rem', weight: 700, tracking: '-0.03em', label: 'Heading 1' },
          { tag: 'h2', size: '1.5rem', weight: 700, tracking: '-0.02em', label: 'Heading 2' },
          { tag: 'h3', size: '1.25rem', weight: 600, tracking: '-0.01em', label: 'Heading 3' },
          { tag: 'h4', size: '1.0625rem', weight: 600, tracking: '0', label: 'Heading 4' },
          { tag: 'body', size: '0.875rem', weight: 400, tracking: '0', label: 'Body text — The quick brown fox jumps over the lazy dog.' },
          { tag: 'small', size: '0.8125rem', weight: 400, tracking: '0', label: 'Small text — Supporting descriptions and metadata.' },
          { tag: 'caption', size: '0.75rem', weight: 500, tracking: '0.02em', label: 'Caption — Labels and auxiliary information.' },
          { tag: 'overline', size: '0.6875rem', weight: 600, tracking: '0.06em', label: 'OVERLINE — SECTION HEADERS' },
        ].map((t, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'baseline', gap: '1.5rem',
            padding: '0.75rem 0',
            borderBottom: i < 7 ? '1px solid hsl(var(--border))' : 'none'
          }}>
            <span style={{
              fontSize: '0.6875rem', fontFamily: 'monospace',
              color: 'hsl(var(--muted-foreground))', width: 60, flexShrink: 0
            }}>{t.tag}</span>
            <span style={{
              fontSize: t.size, fontWeight: t.weight, letterSpacing: t.tracking,
              lineHeight: 1.3, textTransform: t.tag === 'overline' ? 'uppercase' : undefined
            }}>{t.label}</span>
          </div>
        ))}
      </div>
      <CodePreview code={`<h1 style="font-size: 2rem; font-weight: 700; letter-spacing: -0.03em">Heading 1</h1>
<h2 style="font-size: 1.5rem; font-weight: 700; letter-spacing: -0.02em">Heading 2</h2>
<h3 style="font-size: 1.25rem; font-weight: 600">Heading 3</h3>
<h4 style="font-size: 1.0625rem; font-weight: 600">Heading 4</h4>
<p style="font-size: 0.875rem">Body text</p>
<small style="font-size: 0.8125rem">Small text</small>
<span style="font-size: 0.75rem; font-weight: 500">Caption</span>
<span style="font-size: 0.6875rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase">OVERLINE</span>`} />
    </div>

    <div className="sb-component-section">
      <h3>Font Weights</h3>
      <div className="sb-preview-box">
        <div className="sb-component-grid" style={{ gap: '2rem' }}>
          {[
            { w: 400, label: 'Regular' },
            { w: 500, label: 'Medium' },
            { w: 600, label: 'Semibold' },
            { w: 700, label: 'Bold' },
          ].map(f => (
            <div key={f.w}>
              <div style={{ fontSize: '1.5rem', fontWeight: f.w, marginBottom: '0.25rem' }}>Ag</div>
              <div style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))' }}>{f.label} ({f.w})</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="sb-component-section">
      <h3>Prose</h3>
      <div className="sb-preview-box" style={{ maxWidth: '55ch' }}>
        <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'hsl(var(--foreground))' }}>
          Good typography makes reading effortless. It creates hierarchy, guides the eye, and communicates
          the relative importance of content. This component kit uses a restrained type scale with clear
          distinctions between levels.
        </p>
        <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'hsl(var(--muted-foreground))', marginTop: '0.75rem' }}>
          Body text is set at 14px with generous line-height for comfortable reading. Muted text
          provides secondary information without competing for attention.
        </p>
      </div>
    </div>
  </div>
);

export default TypographySection;
