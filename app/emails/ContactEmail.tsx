// app/emails/ContactEmail.tsx

import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
  Hr,
} from '@react-email/components';
import * as React from 'react';

type ContactEmailProps = {
  firstName:string;
  lastName:string;
  email: string;
  message: string;
};

export const ContactEmail = ({ firstName ,lastName , email, message }: ContactEmailProps) => {
  return (
    <Html>
      <Head />
      <Body style={{ backgroundColor: '#f4f4f4', padding: '20px' }}>
        <Container style={{ backgroundColor: '#ffffff', padding: '30px', borderRadius: '8px', fontFamily: 'Arial' }}>
          <Heading as="h2">📩 New Contact Form Portfolio</Heading>
          <Text><strong>Name:</strong> {firstName + lastName}</Text>
          <Text><strong>Email:</strong> {email}</Text>
          <Hr />
          <Text><strong>Message:</strong></Text>
          <Text>{message}</Text>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactEmail;
