import React, { useState } from 'react';
import { X, CaretDown, CaretUp } from '@phosphor-icons/react';
import CodePreview from '../components/CodePreview';

const LayoutSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  return (
    <div>
      <h1 className="sb-section-title">Layout & Misc</h1>
      <p className="sb-section-desc" style={{ marginBottom: '2rem' }}>
        Modals, accordions, dropdowns, dividers, and other structural components.
      </p>

      <div className="sb-component-section">
        <h3>Modal</h3>
        <div className="sb-preview-box">
          <button className="btn btn-primary" onClick={() => setModalOpen(true)}>Open Modal</button>
          {modalOpen && (
            <>
              <div style={{
                position: 'fixed', inset: 0, zIndex: 1000,
                background: 'hsl(220 20% 14% / 0.5)', backdropFilter: 'blur(4px)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }} onClick={() => setModalOpen(false)}>
                <div className="modal-content" style={{ width: '100%', maxWidth: 480, margin: '1rem' }}
                  onClick={e => e.stopPropagation()}>
                  <div className="modal-header">
                    <h5 className="modal-title">Confirm Action</h5>
                    <button className="btn btn-ghost btn-icon btn-sm" onClick={() => setModalOpen(false)}>
                      <X size={18} />
                    </button>
                  </div>
                  <div className="modal-body">
                    Are you sure you want to proceed? This action cannot be undone and all associated data will be permanently removed.
                  </div>
                  <div className="modal-footer" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button className="btn btn-ghost" onClick={() => setModalOpen(false)}>Cancel</button>
                    <button className="btn btn-danger" onClick={() => setModalOpen(false)}>Delete</button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <CodePreview code={`<!-- Modal Backdrop -->
<div class="modal-backdrop">
  <div class="modal-content" style="max-width: 480px">
    <div class="modal-header">
      <h5 class="modal-title">Confirm Action</h5>
      <button class="btn btn-ghost btn-icon btn-sm">
        <svg><!-- close icon --></svg>
      </button>
    </div>
    <div class="modal-body">
      Are you sure you want to proceed?
    </div>
    <div class="modal-footer">
      <button class="btn btn-ghost">Cancel</button>
      <button class="btn btn-danger">Delete</button>
    </div>
  </div>
</div>`} />
      </div>

      <div className="sb-component-section">
        <h3>Accordion</h3>
        <div className="sb-preview-box" style={{ padding: 0, overflow: 'hidden' }}>
          {[
            { q: 'What is included in the free plan?', a: 'The free plan includes up to 3 projects, 1GB storage, and basic analytics. Perfect for personal use and small experiments.' },
            { q: 'Can I upgrade or downgrade anytime?', a: 'Yes, you can change your plan at any time. Changes take effect at the start of your next billing cycle.' },
            { q: 'Is there a team plan available?', a: 'We offer team plans starting at 5 seats. Contact our sales team for custom pricing and enterprise features.' },
            { q: 'What payment methods do you accept?', a: 'We accept all major credit cards, PayPal, and bank transfers for annual plans. All payments are processed securely.' },
          ].map((item, i) => (
            <div key={i} style={{ borderBottom: i < 3 ? '1px solid hsl(var(--border))' : 'none' }}>
              <button
                onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                style={{
                  width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '1rem 1.25rem', background: 'none', border: 'none',
                  fontSize: '0.9375rem', fontWeight: 500, color: 'hsl(var(--foreground))',
                  cursor: 'pointer', textAlign: 'left',
                }}
              >
                {item.q}
                {openAccordion === i ? <CaretUp size={16} /> : <CaretDown size={16} />}
              </button>
              {openAccordion === i && (
                <div style={{
                  padding: '0 1.25rem 1rem',
                  fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.6
                }}>
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
        <CodePreview code={`<!-- Accordion item -->
<div style="border-bottom: 1px solid hsl(var(--border))">
  <button style="width: 100%; display: flex; justify-content: space-between; padding: 1rem 1.25rem; background: none; border: none; font-weight: 500; cursor: pointer">
    What is included in the free plan?
    <svg><!-- caret icon --></svg>
  </button>
  <div style="padding: 0 1.25rem 1rem; color: hsl(var(--muted-foreground))">
    The free plan includes up to 3 projects, 1GB storage, and basic analytics.
  </div>
</div>`} />
      </div>

      <div className="sb-component-section">
        <h3>Dropdown Menu</h3>
        <div className="sb-preview-box">
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <div className="dropdown">
              <button className="btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown">
                Actions
              </button>
              <div className="dropdown-menu" style={{ display: 'block', position: 'static' }}>
                <a className="dropdown-item" href="#">Edit</a>
                <a className="dropdown-item" href="#">Duplicate</a>
                <a className="dropdown-item" href="#">Archive</a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#" style={{ color: 'hsl(var(--destructive))' }}>Delete</a>
              </div>
            </div>
          </div>
        </div>
        <CodePreview code={`<div class="dropdown">
  <button class="btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown">
    Actions
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Edit</a>
    <a class="dropdown-item" href="#">Duplicate</a>
    <a class="dropdown-item" href="#">Archive</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item text-danger" href="#">Delete</a>
  </div>
</div>`} />
      </div>

      <div className="sb-component-section">
        <h3>Divider</h3>
        <div className="sb-preview-box">
          <p style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))' }}>Content above the divider.</p>
          <div className="sb-divider" />
          <p style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))' }}>Content below the divider.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '1.5rem 0' }}>
            <div style={{ flex: 1, height: 1, background: 'hsl(var(--border))' }} />
            <span style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 500 }}>or</span>
            <div style={{ flex: 1, height: 1, background: 'hsl(var(--border))' }} />
          </div>
          <p style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))' }}>Content with labeled divider.</p>
        </div>
        <CodePreview code={`<!-- Simple divider -->
<div class="sb-divider"></div>

<!-- Labeled divider -->
<div style="display: flex; align-items: center; gap: 1rem; margin: 1.5rem 0">
  <div style="flex: 1; height: 1px; background: hsl(var(--border))"></div>
  <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.06em">or</span>
  <div style="flex: 1; height: 1px; background: hsl(var(--border))"></div>
</div>`} />
      </div>

      <div className="sb-component-section">
        <h3>Keyboard Shortcuts</h3>
        <div className="sb-preview-box">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
            {[
              { keys: ['⌘', 'K'], label: 'Command palette' },
              { keys: ['⌘', 'S'], label: 'Save changes' },
              { keys: ['⌘', '⇧', 'P'], label: 'Open preferences' },
              { keys: ['Esc'], label: 'Close dialog' },
            ].map((s, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.875rem' }}>{s.label}</span>
                <div style={{ display: 'flex', gap: '0.25rem' }}>
                  {s.keys.map((k, j) => <kbd key={j}>{k}</kbd>)}
                </div>
              </div>
            ))}
          </div>
        </div>
        <CodePreview code={`<!-- Keyboard shortcut row -->
<div style="display: flex; justify-content: space-between">
  <span>Command palette</span>
  <div>
    <kbd>⌘</kbd> <kbd>K</kbd>
  </div>
</div>

<div style="display: flex; justify-content: space-between">
  <span>Save changes</span>
  <div>
    <kbd>⌘</kbd> <kbd>S</kbd>
  </div>
</div>`} />
      </div>
    </div>
  );
};

export default LayoutSection;
