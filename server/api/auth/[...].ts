// file: ~/server/api/auth/[...].ts
import { NuxtAuthHandler } from '#auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NuxtAuthHandler({
    secret: process.env.AUTH_SECRET || 'my-auth-secret',
    pages: {
        // Change the default behavior to use `/login` as the path for the sign-in page
        signIn: '/login',
    },
    providers: [
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        CredentialsProvider.default({
            name: 'credentials',
            authorize(credentials: any) {
                // You need to provide your own logic here that takes the credentials
                // submitted and returns either a object representing a user or value
                // that is false/null if the credentials are invalid.
                // NOTE: THE BELOW LOGIC IS NOT SAFE OR PROPER FOR AUTHENTICATION!

                const user = {
                    email: 'test@email.com',
                    password: '12345678',
                }

                if (
                    credentials?.email === user.email &&
                    credentials?.password === user.password
                ) {
                    console.log(credentials);
                    return user
                } else {
                    console.error(
                        'Warning: Malicious login attempt registered, bad credentials provided'
                    )
                    return null

                }
            },
        }),
    ],
})