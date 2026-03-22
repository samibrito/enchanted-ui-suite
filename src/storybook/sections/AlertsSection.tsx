import React from 'react';
import { Info, CheckCircle, Warning, XCircle, Bell } from '@phosphor-icons/react';

const AlertsSection: React.FC = () => (
  <div>
    <h1 className="sb-section-title">Alerts & Feedback</h1>
    <p className="sb-section-desc" style={{ marginBottom: '2rem' }}>
      Contextual feedback messages, progress indicators, and notification components.
    </p>

    <div className="sb-component-section">
      <h3>Alert Variants</h3>
      <div className="sb-preview-box" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <div className="alert alert-info"><Info size={18} weight="fill" /><div><strong>Information.</strong> A new update is available for your account.</div></div>
        <div className="alert alert-success"><CheckCircle size={18} weight="fill" /><div><strong>Success!</strong> Your changes have been saved successfully.</div></div>
        <div className="alert alert-warning"><Warning size={18} weight="fill" /><div><strong>Warning.</strong> Your trial expires in 3 days. Upgrade now.</div></div>
        <div className="alert alert-danger"><XCircle size={18} weight="fill" /><div><strong>Error.</strong> Failed to process payment. Please try again.</div></div>
      </div>
    </div>

    <div className="sb-component-section">
      <h3>Progress Bars</h3>
      <div className="sb-preview-box">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {[
            { label: 'Storage Used', value: 73, variant: '' },
            { label: 'Upload Progress', value: 45, variant: 'bg-success' },
            { label: 'CPU Usage', value: 89, variant: 'bg-danger' },
            { label: 'Memory', value: 52, variant: 'bg-warning' },
          ].map((p, i) => (
            <div key={i}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.375rem' }}>
                <span style={{ fontSize: '0.8125rem', fontWeight: 500 }}>{p.label}</span>
                <span style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))', fontVariantNumeric: 'tabular-nums' }}>{p.value}%</span>
              </div>
              <div className="progress">
                <div className={`progress-bar ${p.variant}`} style={{ width: `${p.value}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="sb-component-section">
      <h3>Toast Notifications</h3>
      <div className="sb-preview-box" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <div className="sb-toast">
          <CheckCircle size={20} weight="fill" color="hsl(152, 60%, 40%)" style={{ flexShrink: 0, marginTop: 1 }} />
          <div>
            <div style={{ fontWeight: 600, marginBottom: '0.125rem' }}>Saved successfully</div>
            <div style={{ color: 'hsl(var(--muted-foreground))' }}>Your project settings have been updated.</div>
          </div>
        </div>
        <div className="sb-toast">
          <XCircle size={20} weight="fill" color="hsl(0, 72%, 51%)" style={{ flexShrink: 0, marginTop: 1 }} />
          <div>
            <div style={{ fontWeight: 600, marginBottom: '0.125rem' }}>Connection failed</div>
            <div style={{ color: 'hsl(var(--muted-foreground))' }}>Unable to reach the server. Check your connection.</div>
          </div>
        </div>
      </div>
    </div>

    <div className="sb-component-section">
      <h3>Spinners</h3>
      <div className="sb-preview-box">
        <div className="sb-component-grid" style={{ alignItems: 'center' }}>
          <div className="spinner-border spinner-border-sm" role="status" />
          <div className="spinner-border" role="status" />
          <button className="btn btn-primary" disabled>
            <span className="spinner-border spinner-border-sm" role="status" /> Processing...
          </button>
        </div>
      </div>
    </div>

    <div className="sb-component-section">
      <h3>Skeleton Loading</h3>
      <div className="sb-preview-box">
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
          <div className="sb-skeleton" style={{ width: 40, height: 40, borderRadius: '50%', flexShrink: 0 }} />
          <div style={{ flex: 1 }}>
            <div className="sb-skeleton" style={{ width: '40%', height: 14, marginBottom: 8 }} />
            <div className="sb-skeleton" style={{ width: '80%', height: 12, marginBottom: 6 }} />
            <div className="sb-skeleton" style={{ width: '60%', height: 12 }} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AlertsSection;
