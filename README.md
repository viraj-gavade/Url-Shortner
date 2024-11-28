# URL Shortener

## 🌐 Live Demo

**[View Live Application](https://urlshortner-obpjplj9.b4a.run/)**

## 📝 Description

The URL Shortener is a backend service designed to shorten long URLs for easier sharing and tracking. Users can create short links that redirect to the original URLs, making it simple to manage and share web addresses.

## 🌟 Features

- Shorten long URLs with unique short codes
- Redirect to original URLs seamlessly
- Track the number of clicks on shortened links
- Secure user authentication for link management
- Analytics and click statistics

## 🛠 Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)

## 🚀 Getting Started

### Prerequisites
- Node.js
- MongoDB
- npm

### Installation

1. Clone the repository
```bash
git clone https://github.com/viraj-gavade/Url-Shortner.git
cd Url-Shortner
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables
Create a `.env` file with the following:
```
DATABASE_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=3000
```

4. Start the development server
```bash
npm start
```

Access the application at `http://localhost:PORT`

## 🌐 API Endpoints

### Authentication
- `POST /auth/register`: User registration
- `POST /auth/login`: User login
- `GET /auth/me`: Get current user profile

### URL Shortening
- `POST /shorten`: Create a new short URL
- `GET /:shortCode`: Redirect to original URL
- `GET /links`: Retrieve user's shortened links
- `DELETE /links/:id`: Delete a specific shortened link

## 📊 Link Analytics
- Track total clicks
- View click history
- Geographical click data

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to your fork
   ```bash
   git push origin feature/your-feature-name
   ```
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 📧 Contact

Viraj Gavade
- Email: vrajgavade17@gmail.com
- GitHub: [@viraj-gavade](https://github.com/viraj-gavade)
- Instagram: [@_viraj.js](https://www.instagram.com/_viraj.js/)
- Twitter: [@viraj_gavade](https://x.com/viraj_gavade)

## 🙏 Acknowledgments

Thanks to the open-source community for their resources and libraries that helped build this project.
