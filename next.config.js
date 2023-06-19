/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname:"lh3.googleusercontent.com",
                port:"",
                pathname:"/*/*"
            }
        ]
    }
}

module.exports = nextConfig
