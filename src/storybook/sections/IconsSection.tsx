import React, { useState, useMemo } from 'react';
import * as PhosphorIcons from '@phosphor-icons/react';
import { MagnifyingGlass, Copy, Check } from '@phosphor-icons/react';

// Curated list of 320+ useful icons
const iconNames: string[] = [
  'House','Buildings','Storefront','MapPin','Globe','Compass','NavigationArrow','Path','Car','Train','Airplane','Bicycle',
  'User','Users','UserCircle','UserPlus','UserMinus','UserGear','IdentificationCard','AddressBook',
  'EnvelopeSimple','Envelope','ChatCircle','ChatDots','ChatText','Phone','PhoneCall','VideoCamera',
  'Bell','BellRinging','BellSlash','Megaphone','SpeakerHigh','SpeakerLow','SpeakerSlash','Microphone',
  'Heart','HeartBreak','Star','StarHalf','ThumbsUp','ThumbsDown','Smiley','SmileyWink','SmileySad',
  'MagnifyingGlass','MagnifyingGlassPlus','MagnifyingGlassMinus','Binoculars','Eye','EyeSlash','EyeClosed',
  'Gear','GearSix','Wrench','Hammer','Screwdriver','Nut','Faders','Sliders','SlidersHorizontal',
  'Lock','LockOpen','Key','Shield','ShieldCheck','ShieldWarning','Fingerprint','Password',
  'File','FileText','FileDoc','FilePdf','FileImage','FileVideo','FileAudio','FileCode','FileZip','Files',
  'Folder','FolderOpen','FolderPlus','FolderMinus','FolderUser','FolderStar',
  'Image','Images','Camera','PaintBrush','Palette','PencilSimple','Pencil','PenNib','Eraser','HighlighterCircle',
  'Download','Upload','CloudArrowDown','CloudArrowUp','Cloud','CloudCheck','CloudSlash',
  'ArrowUp','ArrowDown','ArrowLeft','ArrowRight','ArrowsClockwise','ArrowsCounterClockwise',
  'CaretUp','CaretDown','CaretLeft','CaretRight','ArrowBendUpRight','ArrowBendDownLeft',
  'Plus','Minus','X','Check','CheckCircle','XCircle','WarningCircle','Warning','Info','Question',
  'Copy','CopySimple','ClipboardText','Clipboard','Scissors','Trash','TrashSimple',
  'Calendar','CalendarBlank','CalendarCheck','Clock','Timer','Hourglass','AlarmClock',
  'ChartLine','ChartBar','ChartPie','ChartDonut','TrendUp','TrendDown','Pulse','Activity',
  'CurrencyDollar','CurrencyEur','Wallet','CreditCard','Bank','Coins','Money','Receipt',
  'ShoppingCart','ShoppingBag','Basket','Tag','Barcode','QrCode',
  'Lightning','Flame','Snowflake','Sun','Moon','CloudSun','CloudMoon','CloudRain','Wind','Drop','Thermometer',
  'Desktop','DeviceMobile','Tablet','Laptop','Monitor','Keyboard','Mouse','Printer','Cpu','HardDrive',
  'Wifi','WifiHigh','WifiLow','WifiSlash','Bluetooth','Broadcast','Antenna','Rss','Link','LinkBreak',
  'Code','CodeBlock','Terminal','BracketsCurly','Hash','Database','HardDrives','GitBranch','GitCommit','GitFork',
  'Play','Pause','Stop','SkipForward','SkipBack','Rewind','FastForward','Repeat','Shuffle','Queue',
  'BookOpen','Book','BookBookmark','Notebook','GraduationCap','Student','Chalkboard',
  'Flag','FlagBanner','Trophy','Medal','Crown','Diamond','Gem',
  'Rocket','Target','Crosshair','Strategy','PuzzlePiece','Lightbulb','Brain',
  'HandPointing','Hand','HandWaving','HandGrabbing','Handshake','ThumbsUp',
  'List','ListBullets','ListNumbers','ListChecks','ListDashes','Rows','Columns','SquaresFour','GridFour',
  'DotsThree','DotsThreeVertical','DotsSix','DotsSixVertical',
  'Funnel','SortAscending','SortDescending','ArrowsDownUp','MagnifyingGlass',
  'Bookmark','BookmarkSimple','PushPin','PushPinSimple','Archive','Package',
  'Truck','MapTrifold','SignIn','SignOut','Door','Power',
  'CircleNotch','SpinnerGap','CircleDashed','Hourglass',
  'Percent','Calculator','MathOperations','Equals','PlusMinus',
  'TextAa','TextBolder','TextItalic','TextUnderline','TextStrikethrough','TextAlignLeft','TextAlignCenter','TextAlignRight',
  'Table','Rows','Columns','Layout','SidebarSimple','Sidebar','AppWindow',
  'Export','Share','ShareNetwork','Paperclip','PaperPlaneTilt',
  'Bug','TestTube','Flask','Atom','Dna','FirstAid','Pill','Stethoscope','Heartbeat',
  'Tree','Leaf','Plant','Flower','Mountains','Wave','Campfire',
  'GameController','Joystick','Disc','Headphones','FilmStrip','FilmSlate',
  'GlobeHemisphereWest','Translate','ChatTeardrop','Quotes','Newspaper','Article',
  'IdentificationBadge','Certificate','Stamp','SealCheck','CheckSquare',
  'Prohibit','MinusCircle','XSquare','Warning','ShieldSlash',
  'Lifebuoy','QuestionMark','Exam','ClipboardList',
  'Notepad','NotePencil','PencilLine','PencilCircle','Selection','SelectionAll',
  'CornersOut','CornersIn','ArrowsOut','ArrowsIn','Resize',
  'Swap','Repeat','ArrowClockwise','ArrowCounterClockwise',
  'Gauge','Speedometer',
];

// Remove duplicates
const uniqueIconNames = [...new Set(iconNames)];

const IconsSection: React.FC = () => {
  const [search, setSearch] = useState('');
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);
  const [weight, setWeight] = useState<'regular' | 'bold' | 'fill' | 'duotone' | 'thin' | 'light'>('regular');

  const filteredIcons = useMemo(() =>
    uniqueIconNames.filter(name => name.toLowerCase().includes(search.toLowerCase())),
    [search]
  );

  const copyIcon = (name: string) => {
    navigator.clipboard.writeText(`<${name} size={20} />`);
    setCopiedIcon(name);
    setTimeout(() => setCopiedIcon(null), 1500);
  };

  const renderIcon = (name: string) => {
    const IconComponent = (PhosphorIcons as any)[name];
    if (!IconComponent) return null;
    return <IconComponent size={22} weight={weight} />;
  };

  return (
    <div>
      <h1 className="sb-section-title">Icon Library</h1>
      <p className="sb-section-desc" style={{ marginBottom: '1.5rem' }}>
        {uniqueIconNames.length} icons from Phosphor Icons. Click any icon to copy its usage code.
      </p>

      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ position: 'relative', flex: '1 1 240px', maxWidth: 320 }}>
          <MagnifyingGlass size={16} style={{ position: 'absolute', left: 10, top: 10, color: 'hsl(var(--muted-foreground))' }} />
          <input
            type="text"
            className="form-control"
            placeholder="Search icons..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ paddingLeft: '2rem' }}
          />
        </div>
        <select
          className="custom-select"
          style={{ width: 'auto' }}
          value={weight}
          onChange={e => setWeight(e.target.value as any)}
        >
          <option value="regular">Regular</option>
          <option value="bold">Bold</option>
          <option value="fill">Fill</option>
          <option value="duotone">Duotone</option>
          <option value="thin">Thin</option>
          <option value="light">Light</option>
        </select>
        <span className="badge badge-secondary">{filteredIcons.length} icons</span>
      </div>

      <div className="sb-preview-box" style={{ padding: '1rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(88px, 1fr))',
          gap: '0.25rem',
        }}>
          {filteredIcons.map(name => {
            const icon = renderIcon(name);
            if (!icon) return null;
            const isCopied = copiedIcon === name;
            return (
              <button
                key={name}
                onClick={() => copyIcon(name)}
                title={name}
                style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  gap: '0.375rem', padding: '0.75rem 0.25rem',
                  border: '1px solid transparent', borderRadius: '0.5rem',
                  background: isCopied ? 'hsl(var(--success) / 0.08)' : 'transparent',
                  cursor: 'pointer',
                  transition: 'all 150ms',
                  color: isCopied ? 'hsl(var(--success))' : 'hsl(var(--foreground))',
                }}
                onMouseEnter={e => { if (!isCopied) { e.currentTarget.style.background = 'hsl(var(--muted))'; e.currentTarget.style.borderColor = 'hsl(var(--border))'; } }}
                onMouseLeave={e => { if (!isCopied) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'transparent'; } }}
              >
                {isCopied ? <Check size={22} weight="bold" /> : icon}
                <span style={{
                  fontSize: '0.5625rem', color: isCopied ? 'hsl(var(--success))' : 'hsl(var(--muted-foreground))',
                  maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                  textAlign: 'center', width: '100%'
                }}>
                  {isCopied ? 'Copied!' : name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="sb-component-section" style={{ marginTop: '2rem' }}>
        <h3>Sizes</h3>
        <div className="sb-preview-box">
          <div className="sb-component-grid" style={{ alignItems: 'end', gap: '1.5rem' }}>
            {[14, 16, 20, 24, 32, 40, 48].map(s => (
              <div key={s} style={{ textAlign: 'center' }}>
                <PhosphorIcons.Star size={s} />
                <div style={{ fontSize: '0.6875rem', color: 'hsl(var(--muted-foreground))', marginTop: '0.375rem' }}>{s}px</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="sb-component-section">
        <h3>Weights</h3>
        <div className="sb-preview-box">
          <div className="sb-component-grid" style={{ gap: '1.5rem' }}>
            {(['thin', 'light', 'regular', 'bold', 'fill', 'duotone'] as const).map(w => (
              <div key={w} style={{ textAlign: 'center' }}>
                <PhosphorIcons.Heart size={28} weight={w} />
                <div style={{ fontSize: '0.6875rem', color: 'hsl(var(--muted-foreground))', marginTop: '0.375rem' }}>{w}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="sb-component-section">
        <h3>Usage</h3>
        <div className="sb-code-block">
          <div style={{ color: 'hsl(199 89% 60%)' }}>{'// Import the icon'}</div>
          <div>{"import { Heart } from '@phosphor-icons/react';"}</div>
          <div style={{ marginTop: '0.75rem', color: 'hsl(199 89% 60%)' }}>{'// Use in your component'}</div>
          <div>{'<Heart size={20} weight="regular" />'}</div>
          <div>{'<Heart size={24} weight="fill" color="red" />'}</div>
        </div>
      </div>
    </div>
  );
};

export default IconsSection;
