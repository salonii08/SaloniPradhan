export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const sendEmail = async (formData: ContactFormData): Promise<{ success: boolean; error?: string }> => {
  try {
    // Using a direct form submission approach that works with most form services
    const formData2 = new FormData();
    formData2.append('name', formData.name);
    formData2.append('email', formData.email);
    formData2.append('message', formData.message);
    formData2.append('_subject', `New message from ${formData.name} - Portfolio Contact`);
    formData2.append('_replyto', formData.email);
    
    // Try multiple endpoints for better reliability
    const endpoints = [
      'https://formspree.io/f/xdkogkpw', // Demo endpoint 1
      'https://formsubmit.co/salonipradhan2061@gmail.com', // FormSubmit (no signup required)
    ];

    for (const endpoint of endpoints) {
      try {
        console.log(`Trying endpoint: ${endpoint}`);
        
        const response = await fetch(endpoint, {
          method: 'POST',
          body: formData2,
          headers: {
            'Accept': 'application/json'
          }
        });

        console.log(`Response status: ${response.status}`);
        
        if (response.ok) {
          console.log('Email sent successfully via', endpoint);
          return { success: true };
        }
      } catch (endpointError) {
        console.log(`Endpoint ${endpoint} failed:`, endpointError);
        continue; // Try next endpoint
      }
    }

    // If all endpoints fail, try a simple mailto fallback
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:salonipradhan2061@gmail.com?subject=${subject}&body=${body}`;
    
    window.open(mailtoLink, '_blank');
    
    return { 
      success: true, 
      error: 'Opened email client - please send the email manually' 
    };

  } catch (error) {
    console.error('All email methods failed:', error);
    return { 
      success: false, 
      error: 'All email services failed. Please contact directly at salonipradhan2061@gmail.com' 
    };
  }
};