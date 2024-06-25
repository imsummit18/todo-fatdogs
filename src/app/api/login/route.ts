import { generateRandomString } from '@/lib/common.utilis';
import { setCookie } from 'cookies-next';

const users = [{ email: 'a@a.com', password: 'test1234' }];
export async function POST(req: Request) {
    const reqBody = await req.json();
    const { email, password } = reqBody;
    if (!email || !password) {
        return Response.json({
            message: 'Email and password are required'
        }, {
            status: 400
        });
    }
    if (email && password) {
        const user = users.find(u => u.email === email);
        if (!user) {
            return Response.json({ message: 'Invalid credentials' }, {
                status: 401
            });
        }
        setCookie('token', generateRandomString(32));
        return Response.json({ message: 'Login successful', token: generateRandomString(32) }, {
            status: 200
        });
    }
}