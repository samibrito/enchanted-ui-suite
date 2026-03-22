import React from 'react';
import { ArrowUp, ArrowDown, Clock, CheckCircle, Package, Truck } from '@phosphor-icons/react';

const DataDisplaySection: React.FC = () => (
  <div>
    <h1 className="sb-section-title">Data Display</h1>
    <p className="sb-section-desc" style={{ marginBottom: '2rem' }}>
      Components for presenting data: stats, avatars, timelines, and empty states.
    </p>

    <div className="sb-component-section">
      <h3>Avatars</h3>
      <div className="sb-preview-box">
        <div className="sb-component-grid" style={{ alignItems: 'center', gap: '1rem' }}>
          <div className="sb-avatar sb-avatar-sm">SM</div>
          <div className="sb-avatar">MD</div>
          <div className="sb-avatar sb-avatar-lg" style={{ background: 'hsl(var(--success) / 0.1)', color: 'hsl(var(--success))' }}>LG</div>
          <div className="sb-avatar sb-avatar-xl" style={{ background: 'hsl(var(--accent) / 0.1)', color: 'hsl(var(--accent))' }}>XL</div>
        </div>
        <div style={{ marginTop: '1.25rem' }}>
          <div style={{ fontSize: '0.8125rem', fontWeight: 500, marginBottom: '0.5rem' }}>Avatar Stack</div>
          <div style={{ display: 'flex' }}>
            {['AB', 'CD', 'EF', 'GH', '+5'].map((a, i) => (
              <div key={i} className="sb-avatar sb-avatar-sm" style={{
                marginLeft: i > 0 ? -8 : 0,
                border: '2px solid hsl(var(--card))',
                background: i === 4 ? 'hsl(var(--muted))' : `hsl(${199 + i * 40} 60% ${40 + i * 5}%)`,
                color: i === 4 ? 'hsl(var(--muted-foreground))' : 'white',
                fontSize: '0.625rem',
                zIndex: 5 - i
              }}>
                {a}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="sb-component-section">
      <h3>Timeline</h3>
      <div className="sb-preview-box">
        <div className="sb-timeline">
          {[
            { time: '2 hours ago', title: 'Deployment completed', desc: 'Version 2.4.1 deployed to production.', icon: <CheckCircle size={14} /> },
            { time: '5 hours ago', title: 'Code review approved', desc: 'PR #847 — Refactor authentication module.', icon: <CheckCircle size={14} /> },
            { time: 'Yesterday', title: 'New feature branch created', desc: 'Started work on payment integration.', icon: <Package size={14} /> },
            { time: '3 days ago', title: 'Sprint planning complete', desc: '14 stories estimated, 89 story points total.', icon: <Clock size={14} /> },
          ].map((t, i) => (
            <div key={i} className="sb-timeline-item">
              <div className="sb-timeline-time">{t.time}</div>
              <div className="sb-timeline-title">{t.title}</div>
              <div className="sb-timeline-desc">{t.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="sb-component-section">
      <h3>Key-Value List</h3>
      <div className="sb-preview-box">
        <div className="row">
          <div className="col-md-6">
            {[
              { k: 'Full Name', v: 'Carolina Silva Mendes' },
              { k: 'Email', v: 'carolina@company.com' },
              { k: 'Role', v: 'Product Designer' },
              { k: 'Department', v: 'Design & UX' },
              { k: 'Location', v: 'Lisboa, Portugal' },
              { k: 'Joined', v: 'March 15, 2023' },
            ].map((r, i) => (
              <div key={i} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '0.625rem 0',
                borderBottom: i < 5 ? '1px solid hsl(var(--border))' : 'none'
              }}>
                <span style={{ fontSize: '0.8125rem', color: 'hsl(var(--muted-foreground))' }}>{r.k}</span>
                <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>{r.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="sb-component-section">
      <h3>Empty State</h3>
      <div className="sb-preview-box">
        <div className="sb-empty-state">
          <div className="sb-empty-icon"><Package size={24} /></div>
          <div className="sb-empty-title">No projects yet</div>
          <div className="sb-empty-desc">Create your first project to get started with the platform.</div>
          <button className="btn btn-primary btn-sm" style={{ marginTop: '1rem' }}>Create Project</button>
        </div>
      </div>
    </div>
  </div>
);

export default DataDisplaySection;
