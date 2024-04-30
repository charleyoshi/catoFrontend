# CatoApp Frontend

Welcome to the frontend repository of CatoApp, a dynamic MERN stack application designed to enable discussions on YouTube videos with disabled comments.

## Project Overview

CatoApp aims to address the common frustration of "comments are turned off" on YouTube videos by providing a platform where users can share their thoughts and opinions seamlessly. This repository specifically focuses on the frontend implementation of the application.

![featureImage](https://github.com/charleyoshi/catoFrontend/assets/92558610/8ff68fcc-5144-46e8-8735-bf9734ccb53f)

![featureImage 2](https://github.com/charleyoshi/catoFrontend/assets/92558610/217496d6-5de3-4f95-aa14-3ec96c447053)


## Features

- **Commenting System**: Users can comment on videos with their identity or anonymously. 
- **Voting System**: Signed-in users can upvote or downvote comments, ensuring accountability and preventing multiple votes.
- **Google Authentication**: Users can sign in with Google for seamless authentication.
- **Dynamic UI**: The frontend replicates the layout and aesthetics of YouTube for a familiar user experience.
- **Localization**: Provides locale-based recommendations for an enhanced user experience.

## Folder Structure and Libraries

The frontend files are structured within the `src` directory as follows:

- `assets`: For static images and non-code assets used across the application.
- `components`: Contains reusable React functional components.
- `context`: Houses custom context, such as AuthContext, for authentication needs.
- `hooks`: Includes custom hooks for various functionalities.
- `pages`: Contains page-specific components, such as the home page and 404 page.
- `reducers`: Stores Redux reducers for centralized state management.
- `utility`: Houses utility functions and helper modules.

### Libraries Used:

- **React**: The foundation of the frontend.
- **Redux**: Centralized state management for data and actions within the application.
- **Axios**: Robust HTTP client for making asynchronous requests to the backend.
- [**Emoji-Mart**](https://www.npmjs.com/package/emoji-mart): Library offering an emoji keyboard for enhanced user interaction.
- [**Date-fns**](https://date-fns.org/): Utilized to transform date formats for improved user experience.
- [**React-String-Replace**](https://www.npmjs.com/package/react-string-replace): Used to convert plain text into clickable timestamps.
- [**Linkify**](https://www.npmjs.com/package/react-linkify): Converts plain text into hyperlinks for improved usability.
- [**React-Player**](https://www.npmjs.com/package/react-player): Implemented instead of iframes to support starting videos at specific seconds.

## Getting Started

To set up the frontend locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Start the development server using `npm start`.

## Contributing

Contributions are welcome! If you encounter any bugs or have suggestions for enhancements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
