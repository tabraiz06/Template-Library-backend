const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const Template = require("./models/templateModel");
const Router = require("./routes/tamplateRoute");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/templatesDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedTemplates = async () => {
  const templates = [
    {
      title: "Template One",
      description: "A responsive business template.",
      previewUrl: "https://templatemo.com/live/templatemo_520_product_admin",
      downloadUrl: "https://templatemo.com/tm-520-product-admin",
      imageUrl:
        "https://via.placeholder.com/150/0000FF/808080?text=Template+One",
    },
    {
      title: "Template Two",
      description: "A clean and modern portfolio template.",
      previewUrl: "https://templatemo.com/live/templatemo_535_softy_pinko",
      downloadUrl: "https://templatemo.com/tm-535-softy-pinko",
      imageUrl:
        "https://via.placeholder.com/150/FF0000/FFFFFF?text=Template+Two",
    },
    {
      title: "Template Three",
      description: "A multi-purpose template for creative agencies.",
      previewUrl: "https://templatemo.com/live/templatemo_533_band_template",
      downloadUrl: "https://templatemo.com/tm-533-band-template",
      imageUrl:
        "https://via.placeholder.com/150/00FF00/000000?text=Template+Three",
    },
    {
      title: "Template Four",
      description: "A minimalist blog template.",
      previewUrl: "https://templatemo.com/live/templatemo_534_studio",
      downloadUrl: "https://templatemo.com/tm-534-studio",
      imageUrl:
        "https://via.placeholder.com/150/000000/FFFFFF?text=Template+Four",
    },
    {
      title: "Template Five",
      description: "A professional services template for legal firms.",
      previewUrl: "https://templatemo.com/live/templatemo_537_most_seo",
      downloadUrl: "https://templatemo.com/tm-537-most-seo",
      imageUrl:
        "https://via.placeholder.com/150/FFA500/FFFFFF?text=Template+Five",
    },
    {
      title: "Template Six",
      description: "A modern landing page template for startups.",
      previewUrl: "https://templatemo.com/live/templatemo_538_digital_trend",
      downloadUrl: "https://templatemo.com/tm-538-digital-trend",
      imageUrl:
        "https://via.placeholder.com/150/800080/FFFFFF?text=Template+Six",
    },
  ];

 
  await Template.deleteMany({});
  await Template.insertMany(templates);
  console.log("Database initialized with template data.");
};

// Seed the database on server start
seedTemplates();

app.use(Router);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
