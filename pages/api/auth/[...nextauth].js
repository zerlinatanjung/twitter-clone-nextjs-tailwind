import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/github"
import TwitterProvider from 'next-auth/providers/twitter'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    TwitterProvider({
        clientId: process.env.TWITTER_CLIENT_ID, 
        clientSecret: process.env.TWITTER_CLIENT_SECRET,
        version: '2.0', // opt-in to Twitter 0Auth 2.0
    })
    // ...add more providers here
  ],
})

