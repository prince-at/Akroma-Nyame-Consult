const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/hotelReservations', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const uri = "mongodb+srv://princelokko1:db_u3V7lyfgq8vHY5ls@cluster0.gzjwiuc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Define schema
const reservationSchema = new mongoose.Schema({
  fullName: String,
  gender: String,
  nationality: String,
  email: String,
  contactNumber: String,
  alternateContactNumber: String,
  emergencyContact: String,
  currentAddress: String,
  passportNumber: String,
  destination: String,
  checkInDate: String,
  checkOutDate: String,
  roomType: String,
  otherRoom: String,
  bedPreference: String,
  smokingAllergies: String,
  specificHotel: String,
  otherSpecificHotel: String,
  documentUrl: String, // For file uploads, you need to handle file storage separately
  reason: String,
  status: { type: String, default: 'pending' },
  createdAt: { type: Date, default: Date.now },
});

const Reservation = mongoose.model('Reservation', reservationSchema);

// API endpoint to save reservation
app.post('/api/reservations', async (req, res) => {
  try {
    const reservation = new Reservation(req.body);
    await reservation.save();
    res.status(201).json({ message: 'Reservation saved and pending approval.' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save reservation.' });
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});