import prisma from "@/lib/db";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";

const handler = NextAuth({
    adapter : PrismaAdapter(prisma),
    providers : [
        CredentialsProvider({
            name : "Credentials",

            credentials : {
                email : {},
                password : {}
            },

            async authorize(credentials, req) {
                const response = await prisma.user.findFirst({
                    where : {
                        email : credentials?.email,
                        password : credentials?.password 
                    }
                });

                if(response !== null){
                    console.log(response);
                }      
                return null;
            }
        })
    ],
    session : {
        strategy : "jwt"
    },
    secret : process.env.NEXTAUTH_SECRET
});

export { handler as GET, handler as POST };