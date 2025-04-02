import { init } from '@emailjs/browser';

/**
 * Initialize EmailJS with your public key
 * Get your public key from your EmailJS account dashboard
 */
export const initEmailJS = () => {
  init("YOUR_PUBLIC_KEY");
};

/**
 * EmailJS Configuration Information
 * 
 * To use EmailJS, you need to:
 * 
 * 1. Sign up for an account at https://www.emailjs.com/
 * 2. Create a new Email Service (Gmail, Outlook, etc.)
 * 3. Create an email template with template variables like {{name}}, {{email}}, {{message}}
 * 4. Replace the placeholders in Contact.tsx with your actual service ID, template ID, and public key
 * 
 * The form field names should match your EmailJS template variables.
 */ 