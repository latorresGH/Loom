import { Body, Container, Head, Heading, Hr, Html, Preview, Text } from '@react-email/components';

type ContactEmailProps = {
  nombre: string;
  email: string;
  tipo: string;
  mensaje: string;
};

export function ContactEmail({ nombre, email, tipo, mensaje }: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Nuevo contacto: {tipo} — {nombre}</Preview>
      <Body style={{ backgroundColor: '#f4f5f7', fontFamily: 'Helvetica, Arial, sans-serif' }}>
        <Container style={{ backgroundColor: '#ffffff', padding: '32px', borderRadius: '8px' }}>
          <Heading style={{ fontSize: '20px', margin: '0 0 16px' }}>Nuevo contacto — {tipo}</Heading>
          <Text style={{ margin: '0 0 8px' }}><strong>Nombre:</strong> {nombre}</Text>
          <Text style={{ margin: '0 0 8px' }}><strong>Email:</strong> {email}</Text>
          <Text style={{ margin: '0 0 16px' }}><strong>Tipo:</strong> {tipo}</Text>
          <Hr />
          <Text style={{ margin: '16px 0', whiteSpace: 'pre-wrap' }}>{mensaje}</Text>
          <Hr />
          <Text style={{ fontSize: '12px', color: '#6b6e73', margin: 0 }}>Loom — loom.com.ar</Text>
        </Container>
      </Body>
    </Html>
  );
}

export default ContactEmail;
