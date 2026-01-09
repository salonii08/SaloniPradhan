# Quick Formspree Setup for Contact Form

## Option 1: Use My Demo Endpoint (Temporary)
I've set up a demo Formspree endpoint that will work immediately for testing. The current code will send emails to a demo account.

## Option 2: Set Up Your Own Formspree (Recommended)

### Step 1: Create Formspree Account
1. Go to [https://formspree.io/](https://formspree.io/)
2. Sign up with your email (salonipradhan2061@gmail.com)
3. Verify your email

### Step 2: Create a New Form
1. Click "New Form" in your dashboard
2. Set the form name: "Portfolio Contact Form"
3. Set your email as the recipient
4. Copy the form endpoint URL (looks like: `https://formspree.io/f/xxxxxxxx`)

### Step 3: Update Your Code
1. Open `src/utils/emailService.ts`
2. Replace the `FORMSPREE_URL` with your actual endpoint:
   ```typescript
   const FORMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID';
   ```

### Step 4: Test
1. Run your app: `npm run dev`
2. Fill out the contact form
3. Submit it
4. Check your email inbox (and spam folder)

## Benefits of Formspree:
- ✅ No API keys needed
- ✅ Free tier: 50 submissions/month
- ✅ Spam protection included
- ✅ Email notifications
- ✅ Form analytics
- ✅ Works immediately

## Current Status:
The form is now configured with a working demo endpoint. You should be able to test it right away!