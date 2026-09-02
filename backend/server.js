import mongoose from 'mongoose';
import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import path from "path";
import connectDB from './config/db.js';
import subscriberRoutes from './routes/subscriberRoutes.js';
import authRoutes from './routes/authRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import blogRouter from './routes/blogRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import carrerRoutes from './routes/carrerRoutes.js';
import carrerFormRoutes from './routes/carrerFormRoutes.js';
import pricingRoutes from './routes/pricingRoutes.js';
import portfolioRoutes from './routes/portfolioRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';
import couponRouter from './routes/couponRoutes.js';
import dns from "dns";



dns.setServers(["1.1.1.1","8.8.8.8"]);
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;

app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

connectDB();



// Routes

app.use('/api/subscriber', subscriberRoutes);
app.use('/api/users', authRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/blog', blogRouter);
app.use('/api/contact', contactRoutes)
app.use('/api/carrer', carrerRoutes)
app.use('/api/carrer', carrerFormRoutes)
app.use('/api/price', pricingRoutes)
app.use('/api/portfolio', portfolioRoutes)
app.use('/api/payment', paymentRoutes)
app.use('/api/coupon', couponRouter)





app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});









































