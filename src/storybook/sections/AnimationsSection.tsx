import React, { useState } from 'react';
import { Play, ArrowClockwise, Lightning, CursorClick, Sparkle, Heart } from '@phosphor-icons/react';

const AnimationsSection: React.FC = () => {
  const [triggerKey, setTriggerKey] = useState(0);
  const replay = () => setTriggerKey(k => k + 1);

  return (
    <div>
      <h1 className="sb-section-title">Animations</h1>
      <p className="sb-section-desc" style={{ marginBottom: '2rem' }}>
        CSS animations and transitions to bring your UI to life. No JavaScript required.
      </p>

      {/* Entry animations */}
      <div className="sb-component-section">
        <h3>Entry Animations</h3>
        <div className="sb-preview-box">
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1.5rem' }}>
            <button className="btn btn-outline-secondary btn-sm" onClick={replay}>
              <ArrowClockwise size={14} /> Replay
            </button>
          </div>
          <div className="row" key={triggerKey}>
            {[
              { cls: 'sb-animate-fade-in-up', label: 'Fade In Up' },
              { cls: 'sb-animate-fade-in', label: 'Fade In' },
              { cls: 'sb-animate-scale-in', label: 'Scale In' },
              { cls: 'sb-animate-slide-left', label: 'Slide Left' },
              { cls: 'sb-animate-slide-right', label: 'Slide Right' },
              { cls: 'sb-animate-bounce-in', label: 'Bounce In' },
            ].map((a, i) => (
              <div key={i} className="col-md-4 mb-3">
                <div
                  className={`card ${a.cls}`}
                  style={{ animationDelay: `${i * 0.1}s`, textAlign: 'center' }}
                >
                  <div className="card-body" style={{ padding: '1.25rem' }}>
                    <Play size={20} style={{ color: 'hsl(var(--primary))', marginBottom: '0.5rem' }} />
                    <div style={{ fontWeight: 600, fontSize: '0.8125rem' }}>{a.label}</div>
                    <code style={{ fontSize: '0.6875rem', color: 'hsl(var(--muted-foreground))' }}>.{a.cls}</code>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Continuous animations */}
      <div className="sb-component-section">
        <h3>Continuous Animations</h3>
        <div className="sb-preview-box">
          <div className="row">
            {[
              { cls: 'sb-animate-pulse-glow', label: 'Pulse Glow', icon: <Heart size={22} /> },
              { cls: 'sb-animate-spin', label: 'Spin', icon: <ArrowClockwise size={22} /> },
              { cls: 'sb-animate-float', label: 'Float', icon: <Sparkle size={22} /> },
              { cls: 'sb-animate-wiggle', label: 'Wiggle', icon: <Lightning size={22} /> },
            ].map((a, i) => (
              <div key={i} className="col-md-3 mb-3" style={{ textAlign: 'center' }}>
                <div className={a.cls} style={{
                  width: 56, height: 56, borderRadius: '0.75rem', margin: '0 auto 0.75rem',
                  background: 'hsl(var(--primary) / 0.08)', color: 'hsl(var(--primary))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: '1px solid hsl(var(--border))'
                }}>
                  {a.icon}
                </div>
                <div style={{ fontWeight: 600, fontSize: '0.8125rem' }}>{a.label}</div>
                <code style={{ fontSize: '0.6875rem', color: 'hsl(var(--muted-foreground))' }}>.{a.cls}</code>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hover effects */}
      <div className="sb-component-section">
        <h3>Hover Effects</h3>
        <div className="sb-preview-box">
          <div className="row">
            {[
              { cls: 'sb-hover-lift', label: 'Hover Lift', desc: 'Lifts and adds shadow' },
              { cls: 'sb-hover-scale', label: 'Hover Scale', desc: 'Subtle zoom effect' },
              { cls: 'sb-hover-glow', label: 'Hover Glow', desc: 'Glowing shadow ring' },
            ].map((h, i) => (
              <div key={i} className="col-md-4 mb-3">
                <div className={`card ${h.cls}`} style={{ cursor: 'pointer', textAlign: 'center' }}>
                  <div className="card-body" style={{ padding: '1.5rem 1.25rem' }}>
                    <CursorClick size={22} style={{ color: 'hsl(var(--primary))', marginBottom: '0.5rem' }} />
                    <div style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.25rem' }}>{h.label}</div>
                    <div style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))' }}>{h.desc}</div>
                    <code style={{ fontSize: '0.6875rem', color: 'hsl(var(--muted-foreground))', marginTop: '0.5rem', display: 'block' }}>.{h.cls}</code>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Staggered list */}
      <div className="sb-component-section">
        <h3>Staggered List Animation</h3>
        <div className="sb-preview-box">
          <button className="btn btn-outline-secondary btn-sm" onClick={replay} style={{ marginBottom: '1rem' }}>
            <ArrowClockwise size={14} /> Replay
          </button>
          <div key={`stagger-${triggerKey}`} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {['Design System Tokens', 'Component Architecture', 'Responsive Breakpoints', 'Animation Library', 'Dark Mode Support'].map((item, i) => (
              <div key={i} className="sb-animate-fade-in-up" style={{
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                padding: '0.75rem 1rem', border: '1px solid hsl(var(--border))',
                borderRadius: '0.5rem', animationDelay: `${i * 0.08}s`,
                fontSize: '0.875rem', fontWeight: 500
              }}>
                <span className="badge badge-primary" style={{ minWidth: 24, justifyContent: 'center' }}>{i + 1}</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Loading skeletons animated */}
      <div className="sb-component-section">
        <h3>Skeleton Loading</h3>
        <div className="sb-preview-box">
          <div className="row">
            <div className="col-md-6 mb-3">
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <div className="sb-skeleton" style={{ width: 48, height: 48, borderRadius: '50%', flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <div className="sb-skeleton" style={{ height: 14, width: '60%', marginBottom: '0.5rem' }} />
                  <div className="sb-skeleton" style={{ height: 12, width: '90%', marginBottom: '0.375rem' }} />
                  <div className="sb-skeleton" style={{ height: 12, width: '40%' }} />
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="sb-skeleton" style={{ height: 120, borderRadius: '0.5rem', marginBottom: '0.75rem' }} />
              <div className="sb-skeleton" style={{ height: 14, width: '70%', marginBottom: '0.5rem' }} />
              <div className="sb-skeleton" style={{ height: 12, width: '50%' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Code reference */}
      <div className="sb-component-section">
        <h3>Usage</h3>
        <div className="sb-code-block">
          <div style={{ color: 'hsl(199 89% 60%)' }}>{'<!-- Entry animations -->'}</div>
          <div>{'<div class="sb-animate-fade-in-up">Content</div>'}</div>
          <div>{'<div class="sb-animate-bounce-in sb-delay-2">Delayed</div>'}</div>
          <div style={{ color: 'hsl(199 89% 60%)', marginTop: '0.75rem' }}>{'<!-- Hover effects -->'}</div>
          <div>{'<div class="card sb-hover-lift">Lifts on hover</div>'}</div>
          <div style={{ color: 'hsl(199 89% 60%)', marginTop: '0.75rem' }}>{'<!-- Continuous -->'}</div>
          <div>{'<div class="sb-animate-float">Floating element</div>'}</div>
          <div>{'<div class="sb-animate-spin">Loading spinner</div>'}</div>
        </div>
      </div>
    </div>
  );
};

export default AnimationsSection;
