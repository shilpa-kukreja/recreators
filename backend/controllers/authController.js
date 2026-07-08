import jwt from 'jsonwebtoken';
import axios from 'axios';




export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      // create a payload (never put password directly)
      const payload = { email };

      // sign token securely
      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });

      return res.status(200).json({ success: true, token });
    } else {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Admin Login Error:", error);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
