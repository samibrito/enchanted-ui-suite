import React from 'react';
import { X, Circle, Lightning, Star, CheckCircle } from '@phosphor-icons/react';
import CodePreview from '../components/CodePreview';

const BadgesSection: React.FC = () => (
  <div>
    <h1 className="sb-section-title">Badges & Tags</h1>
    <p className="sb-section-desc" style={{ marginBottom: '2rem' }}>
      Compact labels for status, categories, and metadata.
    </p>

    <div className="sb-component-section">
      <h3>Badge Variants</h3>
      <div className="sb-preview-box">
        <div className="sb-component-grid">
          <span className="badge badge-primary">Primary</span>
          <span className="badge badge-success">Success</span>
          <span className="badge badge-danger">Danger</span>
          <span className="badge badge-warning">Warning</span>
          <span className="badge badge-info">Info</span>
          <span className="badge badge-secondary">Secondary</span>
        </div>
      </div>
      <CodePreview code={`<span class="badge badge-primary">Primary</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-danger">Danger</span>
<span class="badge badge-warning">Warning</span>
<span class="badge badge-info">Info</span>
<span class="badge badge-secondary">Secondary</span>`} />
    </div>

    <div className="sb-component-section">
      <h3>With Icons</h3>
      <div className="sb-preview-box">
        <div className="sb-component-grid">
          <span className="badge badge-success"><CheckCircle size={12} weight="fill" /> Verified</span>
          <span className="badge badge-warning"><Lightning size={12} weight="fill" /> Trending</span>
          <span className="badge badge-primary"><Star size={12} weight="fill" /> Featured</span>
          <span className="badge badge-danger"><Circle size={8} weight="fill" /> Offline</span>
          <span className="badge badge-success"><Circle size={8} weight="fill" /> Online</span>
        </div>
      </div>
      <CodePreview code={`<span class="badge badge-success">
  <svg><!-- check icon --></svg> Verified
</span>
<span class="badge badge-warning">
  <svg><!-- lightning icon --></svg> Trending
</span>
<span class="badge badge-danger">
  <svg><!-- dot icon --></svg> Offline
</span>
<span class="badge badge-success">
  <svg><!-- dot icon --></svg> Online
</span>`} />
    </div>

    <div className="sb-component-section">
      <h3>Tags (Removable)</h3>
      <div className="sb-preview-box">
        <div className="sb-component-grid">
          {['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'].map(t => (
            <span key={t} className="sb-tag">
              {t}
              <span className="sb-tag-remove"><X size={12} /></span>
            </span>
          ))}
        </div>
      </div>
      <CodePreview code={`<span class="sb-tag">
  React
  <span class="sb-tag-remove">
    <svg><!-- x icon --></svg>
  </span>
</span>

<span class="sb-tag">
  TypeScript
  <span class="sb-tag-remove">
    <svg><!-- x icon --></svg>
  </span>
</span>`} />
    </div>

    <div className="sb-component-section">
      <h3>Status Indicators</h3>
      <div className="sb-preview-box">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {[
            { label: 'Deployment complete', status: 'Success', color: 'success' },
            { label: 'Build in progress', status: 'Running', color: 'warning' },
            { label: 'Pipeline failed', status: 'Failed', color: 'danger' },
            { label: 'Waiting for review', status: 'Pending', color: 'info' },
          ].map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 0' }}>
              <span style={{ fontSize: '0.875rem' }}>{s.label}</span>
              <span className={`badge badge-${s.color}`}>{s.status}</span>
            </div>
          ))}
        </div>
      </div>
      <CodePreview code={`<div style="display: flex; align-items: center; justify-content: space-between">
  <span>Deployment complete</span>
  <span class="badge badge-success">Success</span>
</div>

<div style="display: flex; align-items: center; justify-content: space-between">
  <span>Build in progress</span>
  <span class="badge badge-warning">Running</span>
</div>

<div style="display: flex; align-items: center; justify-content: space-between">
  <span>Pipeline failed</span>
  <span class="badge badge-danger">Failed</span>
</div>`} />
    </div>
  </div>
);

export default BadgesSection;
