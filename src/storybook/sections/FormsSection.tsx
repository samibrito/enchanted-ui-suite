import React from 'react';
import { MagnifyingGlass, Eye, EnvelopeSimple, Lock, User, CalendarBlank, CurrencyDollar } from '@phosphor-icons/react';
import CodePreview from '../components/CodePreview';

const FormsSection: React.FC = () => (
  <div>
    <h1 className="sb-section-title">Forms & Inputs</h1>
    <p className="sb-section-desc" style={{ marginBottom: '2rem' }}>
      Form elements with consistent styling, clear focus states, and validation feedback.
    </p>

    <div className="sb-component-section">
      <h3>Text Inputs</h3>
      <div className="sb-preview-box">
        <div className="row">
          <div className="col-md-6 mb-3">
            <label>Full Name</label>
            <input type="text" className="form-control" placeholder="Enter your name" />
            <small className="form-text">Your legal name as it appears on documents.</small>
          </div>
          <div className="col-md-6 mb-3">
            <label>Email Address</label>
            <input type="email" className="form-control" placeholder="you@company.com" />
          </div>
          <div className="col-md-6 mb-3">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="••••••••" />
          </div>
          <div className="col-md-6 mb-3">
            <label>Disabled</label>
            <input type="text" className="form-control" disabled value="Cannot edit" />
          </div>
        </div>
      </div>
      <CodePreview code={`<div class="form-group">
  <label>Full Name</label>
  <input type="text" class="form-control" placeholder="Enter your name" />
  <small class="form-text">Your legal name as it appears on documents.</small>
</div>

<div class="form-group">
  <label>Email Address</label>
  <input type="email" class="form-control" placeholder="you@company.com" />
</div>

<div class="form-group">
  <label>Password</label>
  <input type="password" class="form-control" placeholder="••••••••" />
</div>

<div class="form-group">
  <label>Disabled</label>
  <input type="text" class="form-control" disabled value="Cannot edit" />
</div>`} />
    </div>

    <div className="sb-component-section">
      <h3>Input with Validation</h3>
      <div className="sb-preview-box">
        <div className="row">
          <div className="col-md-6 mb-3">
            <label>Valid Input</label>
            <input type="text" className="form-control is-valid" value="john@example.com" readOnly />
            <div className="valid-feedback" style={{ display: 'block', fontSize: '0.75rem', color: 'hsl(var(--success))' }}>Looks good!</div>
          </div>
          <div className="col-md-6 mb-3">
            <label>Invalid Input</label>
            <input type="text" className="form-control is-invalid" value="not-an-email" readOnly />
            <div className="invalid-feedback" style={{ display: 'block', fontSize: '0.75rem' }}>Please enter a valid email.</div>
          </div>
        </div>
      </div>
      <CodePreview code={`<!-- Valid -->
<input type="text" class="form-control is-valid" value="john@example.com" />
<div class="valid-feedback">Looks good!</div>

<!-- Invalid -->
<input type="text" class="form-control is-invalid" value="not-an-email" />
<div class="invalid-feedback">Please enter a valid email.</div>`} />
    </div>

    <div className="sb-component-section">
      <h3>Input Groups</h3>
      <div className="sb-preview-box">
        <div className="row">
          <div className="col-md-6 mb-3">
            <label>Search</label>
            <div className="input-group">
              <div className="input-group-prepend"><span className="input-group-text"><MagnifyingGlass size={16} /></span></div>
              <input type="text" className="form-control" placeholder="Search anything..." />
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <label>Amount</label>
            <div className="input-group">
              <div className="input-group-prepend"><span className="input-group-text">$</span></div>
              <input type="number" className="form-control" placeholder="0.00" />
              <div className="input-group-append"><span className="input-group-text">USD</span></div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <label>Website</label>
            <div className="input-group">
              <div className="input-group-prepend"><span className="input-group-text">https://</span></div>
              <input type="text" className="form-control" placeholder="yoursite.com" />
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <label>Email</label>
            <div className="input-group">
              <div className="input-group-prepend"><span className="input-group-text"><EnvelopeSimple size={16} /></span></div>
              <input type="email" className="form-control" placeholder="name@company.com" />
            </div>
          </div>
        </div>
      </div>
      <CodePreview code={`<!-- Search with icon -->
<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text"><svg><!-- search icon --></svg></span>
  </div>
  <input type="text" class="form-control" placeholder="Search..." />
</div>

<!-- Amount with prefix and suffix -->
<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">$</span>
  </div>
  <input type="number" class="form-control" placeholder="0.00" />
  <div class="input-group-append">
    <span class="input-group-text">USD</span>
  </div>
</div>

<!-- URL prefix -->
<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">https://</span>
  </div>
  <input type="text" class="form-control" placeholder="yoursite.com" />
</div>`} />
    </div>

    <div className="sb-component-section">
      <h3>Select</h3>
      <div className="sb-preview-box">
        <div className="row">
          <div className="col-md-6 mb-3">
            <label>Country</label>
            <select className="custom-select">
              <option>Select a country...</option>
              <option>Brazil</option>
              <option>United States</option>
              <option>Portugal</option>
              <option>Germany</option>
            </select>
          </div>
          <div className="col-md-6 mb-3">
            <label>Role</label>
            <select className="custom-select">
              <option>Choose role...</option>
              <option>Administrator</option>
              <option>Editor</option>
              <option>Viewer</option>
            </select>
          </div>
        </div>
      </div>
      <CodePreview code={`<label>Country</label>
<select class="custom-select">
  <option>Select a country...</option>
  <option>Brazil</option>
  <option>United States</option>
  <option>Portugal</option>
</select>`} />
    </div>

    <div className="sb-component-section">
      <h3>Textarea</h3>
      <div className="sb-preview-box">
        <div className="row">
          <div className="col-md-8">
            <label>Description</label>
            <textarea className="form-control" rows={4} placeholder="Write a detailed description..." />
            <small className="form-text">Max 500 characters.</small>
          </div>
        </div>
      </div>
      <CodePreview code={`<label>Description</label>
<textarea class="form-control" rows="4" placeholder="Write a detailed description..."></textarea>
<small class="form-text">Max 500 characters.</small>`} />
    </div>

    <div className="sb-component-section">
      <h3>Checkboxes & Radios</h3>
      <div className="sb-preview-box">
        <div className="row">
          <div className="col-md-6 mb-3">
            <div style={{ fontWeight: 500, fontSize: '0.8125rem', marginBottom: '0.75rem' }}>Preferences</div>
            <div className="custom-control custom-checkbox mb-2">
              <input type="checkbox" className="custom-control-input" id="ck1" defaultChecked />
              <label className="custom-control-label" htmlFor="ck1">Email notifications</label>
            </div>
            <div className="custom-control custom-checkbox mb-2">
              <input type="checkbox" className="custom-control-input" id="ck2" />
              <label className="custom-control-label" htmlFor="ck2">Push notifications</label>
            </div>
            <div className="custom-control custom-checkbox mb-2">
              <input type="checkbox" className="custom-control-input" id="ck3" disabled />
              <label className="custom-control-label" htmlFor="ck3">SMS alerts (coming soon)</label>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div style={{ fontWeight: 500, fontSize: '0.8125rem', marginBottom: '0.75rem' }}>Plan</div>
            <div className="custom-control custom-radio mb-2">
              <input type="radio" className="custom-control-input" name="plan" id="r1" defaultChecked />
              <label className="custom-control-label" htmlFor="r1">Free</label>
            </div>
            <div className="custom-control custom-radio mb-2">
              <input type="radio" className="custom-control-input" name="plan" id="r2" />
              <label className="custom-control-label" htmlFor="r2">Pro — $19/mo</label>
            </div>
            <div className="custom-control custom-radio mb-2">
              <input type="radio" className="custom-control-input" name="plan" id="r3" />
              <label className="custom-control-label" htmlFor="r3">Enterprise — Custom</label>
            </div>
          </div>
        </div>
      </div>
      <CodePreview code={`<!-- Checkbox -->
<div class="custom-control custom-checkbox">
  <input type="checkbox" class="custom-control-input" id="ck1" checked />
  <label class="custom-control-label" for="ck1">Email notifications</label>
</div>

<!-- Disabled checkbox -->
<div class="custom-control custom-checkbox">
  <input type="checkbox" class="custom-control-input" id="ck3" disabled />
  <label class="custom-control-label" for="ck3">SMS alerts (coming soon)</label>
</div>

<!-- Radio -->
<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" name="plan" id="r1" checked />
  <label class="custom-control-label" for="r1">Free</label>
</div>`} />
    </div>

    <div className="sb-component-section">
      <h3>Toggle Switch</h3>
      <div className="sb-preview-box">
        <div className="sb-component-grid" style={{ gap: '1.5rem' }}>
          <div className="custom-control custom-switch">
            <input type="checkbox" className="custom-control-input" id="sw1" defaultChecked />
            <label className="custom-control-label" htmlFor="sw1">Dark mode</label>
          </div>
          <div className="custom-control custom-switch">
            <input type="checkbox" className="custom-control-input" id="sw2" />
            <label className="custom-control-label" htmlFor="sw2">Notifications</label>
          </div>
          <div className="custom-control custom-switch">
            <input type="checkbox" className="custom-control-input" id="sw3" disabled />
            <label className="custom-control-label" htmlFor="sw3">Analytics (disabled)</label>
          </div>
        </div>
      </div>
      <CodePreview code={`<div class="custom-control custom-switch">
  <input type="checkbox" class="custom-control-input" id="sw1" checked />
  <label class="custom-control-label" for="sw1">Dark mode</label>
</div>

<div class="custom-control custom-switch">
  <input type="checkbox" class="custom-control-input" id="sw2" />
  <label class="custom-control-label" for="sw2">Notifications</label>
</div>`} />
    </div>

    <div className="sb-component-section">
      <h3>Range Slider</h3>
      <div className="sb-preview-box">
        <div className="row">
          <div className="col-md-6">
            <label>Volume</label>
            <input type="range" min="0" max="100" defaultValue={65} />
          </div>
          <div className="col-md-6">
            <label>Brightness</label>
            <input type="range" min="0" max="100" defaultValue={40} />
          </div>
        </div>
      </div>
      <CodePreview code={`<label>Volume</label>
<input type="range" min="0" max="100" value="65" />`} />
    </div>

    <div className="sb-component-section">
      <h3>Complete Form Example</h3>
      <div className="sb-preview-box">
        <form onSubmit={e => e.preventDefault()}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label>First Name</label>
              <input type="text" className="form-control" placeholder="Maria" />
            </div>
            <div className="col-md-6 mb-3">
              <label>Last Name</label>
              <input type="text" className="form-control" placeholder="Santos" />
            </div>
          </div>
          <div className="mb-3">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="maria@company.com" />
          </div>
          <div className="mb-3">
            <label>Department</label>
            <select className="custom-select">
              <option>Select...</option>
              <option>Engineering</option>
              <option>Design</option>
              <option>Marketing</option>
            </select>
          </div>
          <div className="custom-control custom-checkbox mb-3">
            <input type="checkbox" className="custom-control-input" id="agree" />
            <label className="custom-control-label" htmlFor="agree">I agree to the terms and conditions</label>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button type="submit" className="btn btn-primary">Submit</button>
            <button type="button" className="btn btn-ghost">Cancel</button>
          </div>
        </form>
      </div>
      <CodePreview code={`<form>
  <div class="row">
    <div class="col-md-6 mb-3">
      <label>First Name</label>
      <input type="text" class="form-control" placeholder="Maria" />
    </div>
    <div class="col-md-6 mb-3">
      <label>Last Name</label>
      <input type="text" class="form-control" placeholder="Santos" />
    </div>
  </div>
  <div class="mb-3">
    <label>Email</label>
    <input type="email" class="form-control" placeholder="maria@company.com" />
  </div>
  <div class="mb-3">
    <label>Department</label>
    <select class="custom-select">
      <option>Select...</option>
      <option>Engineering</option>
      <option>Design</option>
      <option>Marketing</option>
    </select>
  </div>
  <div class="custom-control custom-checkbox mb-3">
    <input type="checkbox" class="custom-control-input" id="agree" />
    <label class="custom-control-label" for="agree">I agree to the terms</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  <button type="button" class="btn btn-ghost">Cancel</button>
</form>`} />
    </div>
  </div>
);

export default FormsSection;
