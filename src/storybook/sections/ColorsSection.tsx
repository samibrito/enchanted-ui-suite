import React from 'react';

const colorGroups = [
  {
    title: 'Brand',
    colors: [
      { name: 'Primary', var: '--primary', swatch: 'hsl(199 89% 32%)', text: 'white' },
      { name: 'Accent', var: '--accent', swatch: 'hsl(12 76% 56%)', text: 'white' },
    ]
  },
  {
    title: 'Semantic',
    colors: [
      { name: 'Success', var: '--success', swatch: 'hsl(152 60% 40%)', text: 'white' },
      { name: 'Warning', var: '--warning', swatch: 'hsl(38 92% 50%)', text: 'white' },
      { name: 'Destructive', var: '--destructive', swatch: 'hsl(0 72% 51%)', text: 'white' },
      { name: 'Info', var: '--info', swatch: 'hsl(199 89% 48%)', text: 'white' },
    ]
  },
  {
    title: 'Neutrals',
    colors: [
      { name: 'Background', var: '--background', swatch: 'hsl(220 14% 98%)', text: 'black' },
      { name: 'Card', var: '--card', swatch: 'hsl(0 0% 100%)', text: 'black' },
      { name: 'Muted', var: '--muted', swatch: 'hsl(220 14% 96%)', text: 'black' },
      { name: 'Border', var: '--border', swatch: 'hsl(220 13% 90%)', text: 'black' },
      { name: 'Foreground', var: '--foreground', swatch: 'hsl(220 20% 14%)', text: 'white' },
      { name: 'Muted FG', var: '--muted-foreground', swatch: 'hsl(220 10% 46%)', text: 'white' },
    ]
  },
];

const ColorsSection: React.FC = () => (
  <div>
    <h1 className="sb-section-title">Colors & Tokens</h1>
    <p className="sb-section-desc" style={{ marginBottom: '2rem' }}>
      All colors are defined as HSL CSS custom properties. Components reference tokens, never raw values.
    </p>

    {colorGroups.map(g => (
      <div key={g.title} className="sb-component-section">
        <h3>{g.title}</h3>
        <div className="row">
          {g.colors.map(c => (
            <div key={c.name} className="col-md-4 col-lg-3 mb-3">
              <div className="card" style={{ overflow: 'hidden' }}>
                <div style={{
                  height: 72, background: c.swatch,
                  display: 'flex', alignItems: 'flex-end', padding: '0.5rem 0.75rem'
                }}>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 600, color: c.text, opacity: 0.9 }}>{c.name}</span>
                </div>
                <div style={{ padding: '0.5rem 0.75rem' }}>
                  <div style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: 'hsl(var(--muted-foreground))' }}>
                    var({c.var})
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}

    <div className="sb-component-section">
      <h3>Shadow System</h3>
      <div className="row">
        {['sm', 'md', 'lg', 'xl'].map(s => (
          <div key={s} className="col-md-3 mb-3">
            <div style={{
              background: 'hsl(var(--card))',
              borderRadius: '0.75rem',
              padding: '1.5rem',
              boxShadow: `var(--shadow-${s})`,
              textAlign: 'center'
            }}>
              <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>shadow-{s}</div>
              <div style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))', marginTop: '0.25rem' }}>
                --shadow-{s}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="sb-component-section">
      <h3>Radius</h3>
      <div className="sb-component-grid">
        {[{ label: 'sm', r: '0.25rem' }, { label: 'md', r: '0.375rem' }, { label: 'default', r: '0.5rem' }, { label: 'lg', r: '0.75rem' }, { label: 'xl', r: '1rem' }, { label: 'full', r: '9999px' }].map(r => (
          <div key={r.label} style={{ textAlign: 'center' }}>
            <div style={{
              width: 56, height: 56, background: 'hsl(var(--primary) / 0.1)',
              border: '2px solid hsl(var(--primary))', borderRadius: r.r,
              margin: '0 auto 0.375rem'
            }} />
            <div style={{ fontSize: '0.75rem', fontWeight: 500 }}>{r.label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ColorsSection;
