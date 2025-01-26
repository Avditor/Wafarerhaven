const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'wayfarerhaven_DEV',
      allowedFormats: ["png","jpg","jpeg"],
    },
});

module.exports = {
    cloudinary,
    storage,
};

.starability-coinFlip > input:checked + label::after {
    background-position: 0 -30px;
    opacity: 1;
    -webkit-animation-name: coinFlip;
            animation-name: coinFlip;
    -webkit-animation-duration: 1.2s;
            animation-duration: 1.2s;
    -webkit-animation-fill-mode: forwards;
            animation-fill-mode: forwards;
    -webkit-animation-timing-function: ease-in-out;
            animation-timing-function: ease-in-out;
  }