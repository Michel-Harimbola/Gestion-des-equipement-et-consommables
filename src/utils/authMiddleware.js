const jwt = require('jsonwebtoken');
const prisma = require('../lib/prisma');

const JWT_SECRET = process.env.JWT_SECRET;