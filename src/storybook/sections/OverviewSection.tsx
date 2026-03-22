import React from 'react';
import { Cube, PaintBucket, Lightning, Devices, Package, ArrowRight } from '@phosphor-icons/react';

const features = [
  { icon: <PaintBucket size={22} />, title: 'Design Tokens', desc: 'Consistent colors, spacing, and typography across every component.' },
  { icon: <Lightning size={22} />, title: 'Zero Dependencies', desc: 'Pure Bootstrap 4 + CSS. No JavaScript frameworks required to render.' },
  { icon: <Devices size={22} />, title: 'Responsive', desc: 'Every component adapts gracefully from mobile to desktop.' },
  { icon: <Package size={22} />, title: '300+ Icons', desc: 'Comprehensive icon set with consistent stroke and sizing.' },
];

const OverviewSection: React.FC = () => (
  <div>
    <div style={{ marginBottom: '2.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
        <div style={{
          width: 40, height: 40, borderRadius: 10,
          background: 'hsl(var(--primary))', display: 'flex',
          alignItems: 'center', justifyContent: 'center'
        }}>
          <Cube size={22} color="white" weight="bold" />
        </div>
        <h1 className="sb-section-title" style={{ margin: 0 }}>Component Kit</h1>
      </div>
      <p className="sb-section-desc" style={{ maxWidth: '55ch' }}>
        A modern, production-ready component library built on Bootstrap 4 with custom design tokens.
        Every component is crafted to feel native and polished — never like a template.
      </p>
    </div>

    <div className="row" style={{ marginBottom: '2.5rem' }}>
      {features.map((f, i) => (
        <div key={i} className="col-md-6 mb-3">
          <div className="card" style={{ height: '100%' }}>
            <div className="card-body" style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <div style={{
                width: 36, height: 36, borderRadius: 8, flexShrink: 0,
                background: 'hsl(var(--primary) / 0.08)',
                color: 'hsl(var(--primary))',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                {f.icon}
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.9375rem', marginBottom: '0.25rem' }}>{f.title}</div>
                <div style={{ fontSize: '0.8125rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.5 }}>{f.desc}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="sb-preview-box">
      <h3 style={{ fontSize: '0.9375rem', fontWeight: 600, marginBottom: '1rem' }}>Quick Start</h3>
      <div className="sb-code-block">
        <div style={{ color: 'hsl(199 89% 60%)' }}>{'<!-- Include Bootstrap 4 CSS -->'}</div>
        <div>{'<link rel="stylesheet" href="bootstrap.min.css">'}</div>
        <div style={{ color: 'hsl(199 89% 60%)', marginTop: '0.5rem' }}>{'<!-- Include Component Kit overrides -->'}</div>
        <div>{'<link rel="stylesheet" href="component-kit.css">'}</div>
        <div style={{ color: 'hsl(199 89% 60%)', marginTop: '0.5rem' }}>{'<!-- Use components as normal Bootstrap -->'}</div>
        <div>{'<button class="btn btn-primary">'}</div>
        <div>{'  Get Started <svg>...</svg>'}</div>
        <div>{'</button>'}</div>
      </div>
    </div>

    <div style={{ marginTop: '2rem' }}>
      <h3 style={{ fontSize: '0.9375rem', fontWeight: 600, marginBottom: '1rem' }}>Component Categories</h3>
      <div className="row">
        {[
          { label: 'Foundation', count: '3 sections', desc: 'Colors, typography, icons' },
          { label: 'Forms', count: '12 components', desc: 'Inputs, selects, toggles, sliders' },
          { label: 'Display', count: '10 components', desc: 'Cards, tables, badges, stats' },
          { label: 'Feedback', count: '6 components', desc: 'Alerts, toasts, progress' },
          { label: 'Navigation', count: '5 components', desc: 'Tabs, breadcrumbs, pagination' },
          { label: 'Layout', count: '4 components', desc: 'Modals, accordion, dividers' },
        ].map((c, i) => (
          <div key={i} className="col-md-4 mb-3">
            <div className="card" style={{ cursor: 'default' }}>
              <div className="card-body" style={{ padding: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>{c.label}</div>
                    <div style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))' }}>{c.desc}</div>
                  </div>
                  <span className="badge badge-secondary">{c.count}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default OverviewSection;
