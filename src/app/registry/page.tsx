import type { Metadata } from 'next';
import { RegistryForm } from '@/components/forms/RegistryForm';
import { ChapterHeader } from '@/components/ui/ChapterHeader';
import { Crumbs } from '@/components/ui/Crumbs';

export const metadata: Metadata = { title: 'The registry', description: 'Every Sīpa piece has a registry number for life. Check a number and open its record.' };

const PLACES: [string, string][] = [
  ['PTN', 'Patan (Lalitpur)'],
  ['BKT', 'Bhaktapur'],
  ['KTM', 'Kathmandu'],
  ['JNK', 'Janakpur'],
  ['LMB', 'Lumbini'],
  ['PKR', 'Pokhara'],
];
const CRAFTS: [string, string][] = [
  ['MT', 'Metal: cast, gilded or hammered'],
  ['ST', 'Stone'],
  ['WD', 'Wood'],
  ['TK', 'Thangka'],
  ['MH', 'Mithila painting'],
  ['PP', 'Paper and other work'],
];

export default function RegistryPage() {
  return (
    <>
      <Crumbs items={[['Home', '/'], ['Registry']]} />
      <section className="sec-top wrap split">
        <div>
          <ChapterHeader
            as="h1"
            label="Registry"
            heading="Every piece has a number for life"
            accent="a number for life"
            lead="The registry number tells you where a piece was made, by which craft, in which year, and which piece it is. Enter it to open its record."
          />
        </div>
        <div>
          <RegistryForm />
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <p className="sp-label">How to read a number</p>
          <div className="anatomy">
            <div className="anatomy__num sp-reg">
              SĪPA · <b>PTN</b>-<b>MT</b>-<b>26</b>-<b>0142</b>
            </div>
            <div className="anatomy__parts">
              {[
                ['PTN', 'Place', 'Where it was made. PTN is Patan.'],
                ['MT', 'Craft', 'How it was made. MT is metal.'],
                ['26', 'Year', 'The year it was finished.'],
                ['0142', 'Serial', 'Which piece it is. Never used twice.'],
              ].map(([code, name, line]) => (
                <div key={code}>
                  <span className="sp-reg">{code}</span>
                  <b>{name}</b>
                  <span>{line}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap split">
          {(
            [
              ['Place codes', PLACES],
              ['Craft codes', CRAFTS],
            ] as const
          ).map(([title, rows]) => (
            <div key={title}>
              <h2 className="group-h">{title}</h2>
              <table className="tbl">
                <tbody>
                  {rows.map(([a, b]) => (
                    <tr key={a}>
                      <td className="sp-reg">{a}</td>
                      <td>{b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
