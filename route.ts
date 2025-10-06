import { NextRequest, NextResponse } from 'next/server'

const LINKS: Record<string,string> = {
  hellofresh: 'https://partner-ads.com/dk/klik.php?partnerid=YOURID&kampagneid=HFID',
  nordvpn: 'https://partner-ads.com/dk/klik.php?partnerid=YOURID&kampagneid=NORDID',
  proshop: 'https://partner-ads.com/dk/klik.php?partnerid=YOURID&kampagneid=PROID',
  boozt: 'https://partner-ads.com/dk/klik.php?partnerid=YOURID&kampagneid=BOOZTID',
  bodylab: 'https://partner-ads.com/dk/klik.php?partnerid=YOURID&kampagneid=BODYID',
  cbb: 'https://partner-ads.com/dk/klik.php?partnerid=YOURID&kampagneid=CBBID',
};

export async function GET(req: NextRequest, { params }: { params: { slug: string } }){
  const url = new URL(req.url);
  const subid = url.searchParams.get('subid') || '';
  const target = LINKS[params.slug];
  if(!target){
    return NextResponse.redirect(new URL('/', req.url), 302);
  }
  const final = subid ? `${target}&subid=${encodeURIComponent(subid)}` : target;
  return NextResponse.redirect(final, 302);
}
