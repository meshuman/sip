import fs from 'node:fs';
import path from 'node:path';
import { SITE_URL } from '@/lib/seo';

// A plain-language guide for AI answer engines (llms.txt). The source is content/system/llms.txt.
export const dynamic = 'force-static';

export function GET() {
  const file = path.join(process.cwd(), 'content/system/llms.txt');
  const body = fs.readFileSync(file, 'utf8').replaceAll('https://sipa.example', SITE_URL);
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=3600' } });
}
