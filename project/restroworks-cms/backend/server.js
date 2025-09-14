

const express = require('express')
const cors = require('cors')
const payload = require('payload')
require('dotenv').config()

const app = express()

// CORS configuration
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}))

// Add body parsing middleware
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ extended: true, limit: '50mb' }))

const PORT = process.env.PORT || 3001

const start = async () => {
  try {
    console.log('🚀 Initializing Payload CMS...')
    
    // Wait for Payload to initialize before starting the server
    await payload.init({
      secret: process.env.PAYLOAD_SECRET,
      express: app,
      onInit: () => {
        payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
      },
    })

    console.log('Payload CMS initialized successfully')

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`)
      console.log(`Admin URL: http://localhost:${PORT}/admin`)
      console.log(`API URL: http://localhost:${PORT}/api`)
      console.log('Ready to accept connections!')
    })

  } catch (error) {
    console.error(' Error starting server:', error.message)
    console.error('Full error:', error)
    process.exit(1)
  }
}

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason)
  process.exit(1)
})

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error)
  process.exit(1)
})

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully...')
  process.exit(0)
})

process.on('SIGINT', () => {
  console.log('SIGINT received. Shutting down gracefully...')
  process.exit(0)
})

start()