import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const targetApiUrl = process.env.NEXT_PUBLIC_DESIGN_ORDER_API_URL || 'https://erp.shakthimathaya.site/api/public/design-order';
    const apiKey = process.env.NEXT_PUBLIC_DESIGN_ORDER_API_KEY || '7f8a92b3c4d5e6f10293847561a2b3c4d5e6f7a8b9c0d1e2';

    const response = await fetch(targetApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { success: false, error: `Upstream API returned status ${response.status}: ${errorText}` },
        { status: response.status }
      );
    }

    const data = await response.json().catch(() => ({ status: 'success' }));
    return NextResponse.json({ success: true, data });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown server error';
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
