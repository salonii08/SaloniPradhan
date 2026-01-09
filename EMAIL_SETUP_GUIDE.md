# Email Setup Guide for Contact Form

## Option 1: EmailJS (Recommended - Free)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

### Step 3: Create Email Template
1. Go to "Email Templates" in dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Message from {{from_name}}

Hello,

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from your portfolio website
```

4. Save the template and note down your **Template ID**

### Step 4: Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key**

### Step 5: Update Your Code
1. Open `src/utils/emailService.ts`
2. Replace the placeholder values:
   - `YOUR_SERVICE_ID` → Your actual Service ID
   - `YOUR_TEMPLATE_ID` → Your actual Template ID  
   - `YOUR_PUBLIC_KEY` → Your actual Public Key

### Step 6: Test
1. Run your React app: `npm run dev`
2. Fill out the contact form
3. Check if you receive the email

---

## Option 2: Formspree (Alternative)

### Step 1: Create Formspree Account
1. Go to [https://formspree.io/](https://formspree.io/)
2. Sign up for free account

### Step 2: Create Form
1. Create a new form
2. Set your email as the recipient
3. Get your form endpoint URL

### Step 3: Update Code
Replace the EmailJS code in `src/utils/emailService.ts` with:

```typescript
export const sendEmail = async (formData: ContactFormData): Promise<{ success: boolean; error?: string }> => {
  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      return { success: true };
    } else {
      return { success: false, error: 'Failed to send email' };
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: 'Failed to send email' };
  }
};
```

Replace `YOUR_FORM_ID` with your actual Formspree form ID.

---

## Troubleshooting

### EmailJS Issues:
- Make sure all IDs and keys are correct
- Check EmailJS dashboard for any error logs
- Verify your email service is properly connected
- Check browser console for error messages

### Formspree Issues:
- Verify the form endpoint URL is correct
- Check Formspree dashboard for submissions
- Make sure you're not exceeding the free tier limits

### General Issues:
- Check browser network tab for failed requests
- Verify your internet connection
- Make sure the form fields match the expected format