import { signUp } from '@/auth'

export default async function handler(req, res) {
  try {
    const { username, email, password } = req.body;
    await signUp({ username, email, password });  
    res.status(200).json({ success: true });  
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong during signup.' });
  }
}