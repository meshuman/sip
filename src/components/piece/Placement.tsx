import { Icon } from '@/components/ui/Icon';
import type { Piece } from '@/data/types';

type Dir = 'N' | 'E' | 'S' | 'W';
const WORD: Record<Dir, string> = { N: 'north', E: 'east', S: 'south', W: 'west' };
const ARROW: Record<Dir, number[]> = { E: [92, 76, 120, 80, 92, 84], W: [68, 76, 40, 80, 68, 84], N: [76, 68, 80, 40, 84, 68], S: [76, 92, 80, 120, 84, 92] };

function Compass({ dir }: { dir: Dir }) {
  const a = ARROW[dir];
  const cls = (d: Dir) => `dir${d === dir ? ' dir--on' : ''}`;
  return (
    <svg viewBox="0 0 160 160" role="img" aria-label={`Customarily faces ${WORD[dir]}`}>
      <circle className="ring" cx="80" cy="80" r="62" />
      <circle className="ring" cx="80" cy="80" r="40" />
      <line className="tick" x1="80" y1="14" x2="80" y2="24" />
      <line className="tick" x1="80" y1="136" x2="80" y2="146" />
      <line className="tick" x1="14" y1="80" x2="24" y2="80" />
      <line className="tick" x1="136" y1="80" x2="146" y2="80" />
      <text className={cls('N')} x="80" y="10" textAnchor="middle">
        N
      </text>
      <text className={cls('S')} x="80" y="158" textAnchor="middle">
        S
      </text>
      <text className={cls('W')} x="6" y="84" textAnchor="middle">
        W
      </text>
      <text className={cls('E')} x="155" y="84" textAnchor="middle">
        E
      </text>
      <rect className="piece" x="72" y="72" width="16" height="16" />
      <path className="arrow" d={`M${a[0]} ${a[1]} L${a[2]} ${a[3]} L${a[4]} ${a[5]} Z`} />
    </svg>
  );
}

/** Design-system PlacementCompass: customary direction, height and room. */
export function Placement({ piece: p }: { piece: Piece }) {
  const pl = p.placement;
  const flat = !pl.compass;
  return (
    <div className="sp-compass">
      {flat ? (
        <div className="place-ic">
          <Icon name={p.care === 'paper' || p.care === 'cloth' ? 'wall' : 'lamp'} />
        </div>
      ) : (
        <Compass dir={pl.compass as Dir} />
      )}
      <div className="sp-compass__body">
        <p className="sp-label" style={{ margin: '0 0 4px' }}>
          Where to place it
        </p>
        <ul>
          <li>
            <span className="sp-label">{flat ? 'Where' : 'Facing'}</span>
            <span>{pl.facing}</span>
          </li>
          <li>
            <span className="sp-label">Height</span>
            <span>{pl.height}</span>
          </li>
          <li>
            <span className="sp-label">Room</span>
            <span>{pl.room}</span>
          </li>
        </ul>
        <small>These are customary. Follow your own tradition where it differs.</small>
      </div>
    </div>
  );
}
