export const GET = async () => {
  return new Response(
    'Beep boop! 👋 This is a response from space.', 
    {
      status: 200
    }
  );
};