
if (!process.env.CONVERSATION_API_KEY) {
  console.log('Skipping integration tests because Conversation API Key is null');
  process.exit(0);
}
