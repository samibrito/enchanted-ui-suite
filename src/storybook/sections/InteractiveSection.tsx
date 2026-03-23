import React, { useState } from 'react';
import {
  CaretLeft, CaretRight, Check, CloudArrowUp, Info,
  CursorClick, Heart, Star, Image as ImageIcon, ShoppingCart,
  Sparkle, Palette, X
} from '@phosphor-icons/react';
import CodePreview from '../components/CodePreview';

const InteractiveSection: React.FC = () => {
  const [step, setStep] = useState(1);
  const steps = ['Account', 'Profile', 'Review', 'Complete'];
  const [slide, setSlide] = useState(0);
  const slides = [
    { bg: 'hsl(var(--primary) / 0.08)', icon: <Sparkle size={40} />, title: 'Modern Design', desc: 'Clean and professional components' },
    { bg: 'hsl(var(--success) / 0.08)', icon: <ShoppingCart size={40} />, title: 'E-Commerce Ready', desc: 'Product cards, carts, and checkouts' },
    { bg: 'hsl(var(--accent) / 0.08)', icon: <Heart size={40} />, title: 'User Friendly', desc: 'Intuitive interactions everywhere' },
    { bg: 'hsl(var(--info) / 0.08)', icon: <Star size={40} />, title: 'Premium Quality', desc: 'Pixel-perfect attention to detail' },
  ];
  const [hoveredTip, setHoveredTip] = useState<string | null>(null);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState<string[]>([]);
  const colors = ['#0e7490', '#059669', '#d97706', '#dc2626', '#7c3aed', '#db2777', '#0284c7', '#65a30d'];
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <div>
      <h1 className="sb-section-title">Interactive Components</h1>
      <p className="sb-section-desc" style={{ marginBottom: '2rem' }}>
        Step-by-step wizards, carousels, tooltips, popovers, file uploads, and color pickers.
      </p>

      {/* Stepper */}
      <div className="sb-component-section">
        <h3>Step by Step / Stepper</h3>
        <div className="sb-preview-box">
          <div className="sb-stepper" style={{ marginBottom: '2rem' }}>
            {steps.map((s, i) => (
              <div key={i} className={`sb-stepper-item ${i + 1 === step ? 'active' : ''} ${i + 1 < step ? 'completed' : ''}`}>
                <div className="sb-stepper-circle">
                  {i + 1 < step ? <Check size={16} weight="bold" /> : i + 1}
                </div>
                <div className="sb-stepper-label">{s}</div>
                {i < steps.length - 1 && <div className="sb-stepper-line" />}
              </div>
            ))}
          </div>
          <div className="card" style={{ marginBottom: '1.5rem' }}>
            <div className="card-body">
              {step === 1 && (
                <div className="sb-animate-fade-in-up">
                  <div style={{ fontWeight: 600, marginBottom: '0.75rem' }}>Create your account</div>
                  <div className="row">
                    <div className="col-md-6 mb-3"><label>Email</label><input className="form-control" placeholder="you@company.com" /></div>
                    <div className="col-md-6 mb-3"><label>Password</label><input className="form-control" type="password" placeholder="••••••••" /></div>
                  </div>
                </div>
              )}
              {step === 2 && (
                <div className="sb-animate-fade-in-up">
                  <div style={{ fontWeight: 600, marginBottom: '0.75rem' }}>Complete your profile</div>
                  <div className="row">
                    <div className="col-md-6 mb-3"><label>Full Name</label><input className="form-control" placeholder="Ana Silva" /></div>
                    <div className="col-md-6 mb-3"><label>Company</label><input className="form-control" placeholder="Acme Inc." /></div>
                  </div>
                </div>
              )}
              {step === 3 && (
                <div className="sb-animate-fade-in-up">
                  <div style={{ fontWeight: 600, marginBottom: '0.75rem' }}>Review your information</div>
                  <div style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.7 }}>
                    Please verify all details before proceeding.
                  </div>
                </div>
              )}
              {step === 4 && (
                <div className="sb-animate-bounce-in" style={{ textAlign: 'center', padding: '1rem 0' }}>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', margin: '0 auto 1rem', background: 'hsl(var(--success) / 0.1)', color: 'hsl(var(--success))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Check size={24} weight="bold" />
                  </div>
                  <div style={{ fontWeight: 600, fontSize: '1.0625rem' }}>All done!</div>
                  <div style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))' }}>Your account has been created successfully.</div>
                </div>
              )}
            </div>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
            {step > 1 && <button className="btn btn-outline-secondary" onClick={() => setStep(s => s - 1)}><CaretLeft size={16} /> Back</button>}
            {step < 4 && <button className="btn btn-primary" onClick={() => setStep(s => s + 1)}>{step === 3 ? 'Confirm' : 'Continue'} <CaretRight size={16} /></button>}
            {step === 4 && <button className="btn btn-primary" onClick={() => setStep(1)}>Start Over</button>}
          </div>
        </div>
        <CodePreview code={`<!-- Stepper -->
<div class="sb-stepper">
  <div class="sb-stepper-item completed">
    <div class="sb-stepper-circle"><svg><!-- check --></svg></div>
    <div class="sb-stepper-label">Account</div>
    <div class="sb-stepper-line"></div>
  </div>
  <div class="sb-stepper-item active">
    <div class="sb-stepper-circle">2</div>
    <div class="sb-stepper-label">Profile</div>
    <div class="sb-stepper-line"></div>
  </div>
  <div class="sb-stepper-item">
    <div class="sb-stepper-circle">3</div>
    <div class="sb-stepper-label">Review</div>
    <div class="sb-stepper-line"></div>
  </div>
  <div class="sb-stepper-item">
    <div class="sb-stepper-circle">4</div>
    <div class="sb-stepper-label">Complete</div>
  </div>
</div>

<!-- Navigation buttons -->
<button class="btn btn-outline-secondary">Back</button>
<button class="btn btn-primary">Continue</button>`} />
      </div>

      {/* Carousel */}
      <div className="sb-component-section">
        <h3>Carousel</h3>
        <div className="sb-preview-box" style={{ padding: 0, overflow: 'hidden', borderRadius: '0.75rem' }}>
          <div className="sb-carousel">
            <div className="sb-carousel-viewport">
              <div className="sb-carousel-track" style={{ transform: `translateX(-${slide * 100}%)` }}>
                {slides.map((s, i) => (
                  <div key={i} className="sb-carousel-slide" style={{
                    background: s.bg, padding: '3rem 2rem', display: 'flex',
                    flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                    minHeight: 220, textAlign: 'center', color: 'hsl(var(--foreground))'
                  }}>
                    <div style={{ marginBottom: '1rem', color: 'hsl(var(--primary))' }} className="sb-animate-float">{s.icon}</div>
                    <div style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: '0.375rem' }}>{s.title}</div>
                    <div style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))' }}>{s.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <button className="sb-carousel-btn prev" onClick={() => setSlide(s => Math.max(0, s - 1))} disabled={slide === 0}><CaretLeft size={16} weight="bold" /></button>
            <button className="sb-carousel-btn next" onClick={() => setSlide(s => Math.min(slides.length - 1, s + 1))} disabled={slide === slides.length - 1}><CaretRight size={16} weight="bold" /></button>
            <div className="sb-carousel-dots">
              {slides.map((_, i) => (
                <button key={i} className={`sb-carousel-dot ${i === slide ? 'active' : ''}`} onClick={() => setSlide(i)} />
              ))}
            </div>
          </div>
        </div>
        <CodePreview code={`<!-- Carousel -->
<div class="sb-carousel">
  <div class="sb-carousel-viewport">
    <div class="sb-carousel-track" style="transform: translateX(-0%)">
      <div class="sb-carousel-slide" style="min-height: 220px; text-align: center">
        <h3>Slide Title</h3>
        <p>Slide description</p>
      </div>
      <div class="sb-carousel-slide">...</div>
    </div>
  </div>
  <button class="sb-carousel-btn prev">‹</button>
  <button class="sb-carousel-btn next">›</button>
  <div class="sb-carousel-dots">
    <button class="sb-carousel-dot active"></button>
    <button class="sb-carousel-dot"></button>
  </div>
</div>`} />
      </div>

      {/* Tooltips */}
      <div className="sb-component-section">
        <h3>Tooltips</h3>
        <div className="sb-preview-box">
          <div className="sb-component-grid" style={{ gap: '1.5rem' }}>
            {[
              { label: 'Hover me', tip: 'Hello! I am a tooltip' },
              { label: 'Info icon', tip: 'Additional information here', isIcon: true },
              { label: 'Action', tip: 'Click to perform action' },
            ].map((t, i) => (
              <div key={i} className="sb-tooltip-wrapper"
                onMouseEnter={() => setHoveredTip(t.label)}
                onMouseLeave={() => setHoveredTip(null)}>
                {t.isIcon ? (
                  <button className="btn btn-ghost btn-icon btn-sm"><Info size={18} /></button>
                ) : (
                  <button className="btn btn-outline-secondary btn-sm">{t.label}</button>
                )}
                {hoveredTip === t.label && <div className="sb-tooltip-content">{t.tip}</div>}
              </div>
            ))}
          </div>
        </div>
        <CodePreview code={`<!-- Tooltip wrapper -->
<div class="sb-tooltip-wrapper">
  <button class="btn btn-outline-secondary btn-sm">Hover me</button>
  <div class="sb-tooltip-content">Hello! I am a tooltip</div>
</div>`} />
      </div>

      {/* Popover */}
      <div className="sb-component-section">
        <h3>Popover</h3>
        <div className="sb-preview-box">
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <button className="btn btn-primary btn-sm" onClick={() => setPopoverOpen(!popoverOpen)}>
              <CursorClick size={16} /> Click for Popover
            </button>
            {popoverOpen && (
              <div className="sb-popover" style={{ left: 0, transform: 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>Quick Settings</span>
                  <button className="btn btn-ghost btn-icon" style={{ padding: '0.125rem' }} onClick={() => setPopoverOpen(false)}><X size={14} /></button>
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'hsl(var(--muted-foreground))', marginBottom: '0.75rem' }}>Adjust your preferences below.</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <div className="custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input" id="pop-switch-1" defaultChecked />
                    <label className="custom-control-label" htmlFor="pop-switch-1">Notifications</label>
                  </div>
                  <div className="custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input" id="pop-switch-2" />
                    <label className="custom-control-label" htmlFor="pop-switch-2">Email digest</label>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <CodePreview code={`<!-- Popover -->
<div style="position: relative">
  <button class="btn btn-primary btn-sm">Click for Popover</button>
  <div class="sb-popover">
    <div style="font-weight: 600">Quick Settings</div>
    <p>Adjust your preferences below.</p>
    <div class="custom-control custom-switch">
      <input type="checkbox" class="custom-control-input" id="sw" checked />
      <label class="custom-control-label" for="sw">Notifications</label>
    </div>
  </div>
</div>`} />
      </div>

      {/* File Upload */}
      <div className="sb-component-section">
        <h3>File Upload / Drag & Drop</h3>
        <div className="sb-preview-box">
          <div
            className={`sb-dropzone ${dragActive ? 'active' : ''}`}
            onDragOver={e => { e.preventDefault(); setDragActive(true); }}
            onDragLeave={() => setDragActive(false)}
            onDrop={e => { e.preventDefault(); setDragActive(false); setFiles(prev => [...prev, ...Array.from(e.dataTransfer.files).map(f => f.name)]); }}
            onClick={() => setFiles(prev => [...prev, `document-${prev.length + 1}.pdf`])}
          >
            <div className="sb-dropzone-icon"><CloudArrowUp size={24} /></div>
            <div style={{ fontWeight: 600, fontSize: '0.9375rem', marginBottom: '0.25rem', color: 'hsl(var(--foreground))' }}>Drop files here or click to upload</div>
            <div style={{ fontSize: '0.8125rem', color: 'hsl(var(--muted-foreground))' }}>PNG, JPG, PDF up to 10MB</div>
          </div>
          {files.length > 0 && (
            <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {files.map((f, i) => (
                <div key={i} className="sb-animate-slide-left" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '0.5rem 0.75rem', border: '1px solid hsl(var(--border))',
                  borderRadius: '0.5rem', fontSize: '0.8125rem', animationDelay: `${i * 0.05}s`
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <ImageIcon size={16} style={{ color: 'hsl(var(--muted-foreground))' }} />{f}
                  </div>
                  <button className="btn btn-ghost btn-icon" style={{ padding: '0.125rem' }}
                    onClick={e => { e.stopPropagation(); setFiles(prev => prev.filter((_, j) => j !== i)); }}><X size={14} /></button>
                </div>
              ))}
            </div>
          )}
        </div>
        <CodePreview code={`<!-- Dropzone -->
<div class="sb-dropzone">
  <div class="sb-dropzone-icon">
    <svg><!-- upload icon --></svg>
  </div>
  <div style="font-weight: 600">Drop files here or click to upload</div>
  <div>PNG, JPG, PDF up to 10MB</div>
</div>

<!-- File item -->
<div style="display: flex; align-items: center; justify-content: space-between; padding: 0.5rem 0.75rem; border: 1px solid hsl(var(--border)); border-radius: 0.5rem">
  <div style="display: flex; align-items: center; gap: 0.5rem">
    <svg><!-- file icon --></svg>
    document.pdf
  </div>
  <button class="btn btn-ghost btn-icon">
    <svg><!-- x icon --></svg>
  </button>
</div>`} />
      </div>

      {/* Color Picker */}
      <div className="sb-component-section">
        <h3>Color Picker</h3>
        <div className="sb-preview-box">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {colors.map(c => (
                <div key={c} className={`sb-color-swatch ${selectedColor === c ? 'selected' : ''}`}
                  style={{ background: c }} onClick={() => setSelectedColor(c)} />
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: 48, height: 48, borderRadius: '0.5rem', background: selectedColor, border: '1px solid hsl(var(--border))' }} />
              <div>
                <div style={{ fontSize: '0.8125rem', fontWeight: 600 }}>Selected</div>
                <div style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))', fontFamily: 'monospace' }}>{selectedColor}</div>
              </div>
            </div>
          </div>
        </div>
        <CodePreview code={`<!-- Color swatches -->
<div style="display: flex; gap: 0.5rem">
  <div class="sb-color-swatch selected" style="background: #0e7490"></div>
  <div class="sb-color-swatch" style="background: #059669"></div>
  <div class="sb-color-swatch" style="background: #d97706"></div>
  <div class="sb-color-swatch" style="background: #dc2626"></div>
</div>

<!-- Selected color preview -->
<div style="display: flex; align-items: center; gap: 0.75rem">
  <div style="width: 48px; height: 48px; border-radius: 0.5rem; background: #0e7490"></div>
  <div>
    <div style="font-weight: 600">Selected</div>
    <div style="font-family: monospace">#0e7490</div>
  </div>
</div>`} />
      </div>
    </div>
  );
};

export default InteractiveSection;
