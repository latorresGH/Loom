import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';
import { contactSchema } from '@/lib/validations';
import { ContactEmail } from '@/emails/ContactNotification';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await req.json();
    const data = contactSchema.parse(body);

    await resend.emails.send({
      from: 'Loom Contact <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL!,
      subject: `Nuevo contacto: ${data.tipo} — ${data.nombre}`,
      react: ContactEmail({ ...data }),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: 'Datos inválidos', issues: err.issues }, { status: 400 });
    }
    return NextResponse.json({ error: 'Error al enviar' }, { status: 500 });
  }
}
