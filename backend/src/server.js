require("dotenv").config();

const app = require("./app");

const connectDB = require("../config/database");

const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

// Start Server
app.listen(PORT, () => {

    console.log(`Server Running On Port ${PORT}`);

});

// require("dotenv").config();

// const dns = require("dns");

// // Use public DNS for MongoDB Atlas SRV resolution
// dns.setServers([
//     "8.8.8.8",
//     "8.8.4.4",
// ]);

// const app = require("./app");
// const connectDB = require("../config/database");

// const PORT = process.env.PORT || 5000;

// const startServer = async () => {
//     try {
//         // Connect MongoDB first
//         await connectDB();

//         // Start Express only after DB connection
//         app.listen(PORT, () => {
//             console.log(`🚀 Server Running On Port ${PORT}`);
//         });

//     } catch (error) {
//         console.error("❌ Server failed to start");
//         console.error(error.message);

//         process.exit(1);
//     }
// };

// startServer();