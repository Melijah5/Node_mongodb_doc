// const express = require('express')
// commenjs

import express from 'express'
import dotenv from 'dotenv'
import products from './data/products.js'
import connectionString from './config/db.js'

const app = express()
dotenv.config()
connectionString()

app.get('/product', (req, res) => {
    res.json(products)
})

const PORT= process.env.PORT || 4300
app.listen(PORT, console.log('connected'))