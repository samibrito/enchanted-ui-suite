import React, { useState } from 'react';
import { Plus, ArrowRight, Download, Trash, Check, Heart, Share, Copy, PencilSimple } from '@phosphor-icons/react';

const ButtonsSection: React.FC = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <h1 className="sb-section-title">Buttons</h1>
      <p className="sb-section-desc" style={{ marginBottom: '2rem' }}>
        Versatile button components with multiple variants, sizes, and states.
      </p>

      <div className="sb-component-section">
        <h3>Variants</h3>
        <div className="sb-preview-box">
          <div className="sb-component-grid">
            <button className="btn btn-primary">Primary</button>
            <button className="btn btn-secondary">Secondary</button>
            <button className="btn btn-success">Success</button>
            <button className="btn btn-danger">Danger</button>
            <button className="btn btn-warning">Warning</button>
            <button className="btn btn-info">Info</button>
          </div>
        </div>
      </div>

      <div className="sb-component-section">
        <h3>Outline</h3>
        <div className="sb-preview-box">
          <div className="sb-component-grid">
            <button className="btn btn-outline-primary">Primary</button>
            <button className="btn btn-outline-secondary">Secondary</button>
            <button className="btn btn-ghost">Ghost</button>
            <button className="btn btn-link">Link</button>
          </div>
        </div>
      </div>

      <div className="sb-component-section">
        <h3>Sizes</h3>
        <div className="sb-preview-box">
          <div className="sb-component-grid" style={{ alignItems: 'center' }}>
            <button className="btn btn-primary btn-sm">Small</button>
            <button className="btn btn-primary">Default</button>
            <button className="btn btn-primary btn-lg">Large</button>
            <button className="btn btn-primary btn-xl">Extra Large</button>
          </div>
        </div>
      </div>

      <div className="sb-component-section">
        <h3>With Icons</h3>
        <div className="sb-preview-box">
          <div className="sb-component-grid">
            <button className="btn btn-primary"><Plus size={16} weight="bold" /> Create New</button>
            <button className="btn btn-secondary">Continue <ArrowRight size={16} /></button>
            <button className="btn btn-outline-primary"><Download size={16} /> Download</button>
            <button className="btn btn-danger"><Trash size={16} /> Delete</button>
            <button className="btn btn-success"><Check size={16} weight="bold" /> Approve</button>
          </div>
        </div>
      </div>

      <div className="sb-component-section">
        <h3>Icon Only</h3>
        <div className="sb-preview-box">
          <div className="sb-component-grid">
            <button className="btn btn-primary btn-icon"><Plus size={18} weight="bold" /></button>
            <button className="btn btn-outline-secondary btn-icon"><Heart size={18} /></button>
            <button className="btn btn-ghost btn-icon"><Share size={18} /></button>
            <button className="btn btn-ghost btn-icon btn-sm"><Copy size={16} /></button>
            <button className="btn btn-outline-secondary btn-icon btn-lg"><PencilSimple size={20} /></button>
          </div>
        </div>
      </div>

      <div className="sb-component-section">
        <h3>States</h3>
        <div className="sb-preview-box">
          <div className="sb-component-grid">
            <button className="btn btn-primary">Default</button>
            <button className="btn btn-primary" disabled>Disabled</button>
            <button
              className="btn btn-primary"
              onClick={() => { setLoading(true); setTimeout(() => setLoading(false), 2000); }}
              disabled={loading}
            >
              {loading && <span className="spinner-border spinner-border-sm" role="status" />}
              {loading ? 'Loading...' : 'Click to Load'}
            </button>
          </div>
        </div>
      </div>

      <div className="sb-component-section">
        <h3>Button Group</h3>
        <div className="sb-preview-box">
          <div className="btn-group" role="group">
            <button className="btn btn-outline-secondary">Left</button>
            <button className="btn btn-outline-secondary">Center</button>
            <button className="btn btn-outline-secondary">Right</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonsSection;
