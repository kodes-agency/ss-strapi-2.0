module.exports = {
    async webhookHandler(ctx) {
      try {
        const payload = ctx.request.body; // Access the incoming webhook payload
  
        // Process the received payload as needed (e.g., perform actions based on the data)
        console.log('Received webhook payload:', payload);
  
        // Implement your business logic here
  
        return ctx.send('Webhook received successfully');
      } catch (error) {
        console.error('Error processing webhook:', error);
        return ctx.badRequest('Failed to process the webhook');
      }
    }
  };
  