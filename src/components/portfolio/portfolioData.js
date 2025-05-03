import Image7 from "../../assets/img/portfolio/project-7.jpg";
import portfolioVideo from "../../assets/img/portfolio/video.mp4";

// import NeftyImage1 from "../../assets/img/portfolio/NeftyBallersMockUps/1-Welcome-Screen.jpg"
// import NeftyImage2 from "../../assets/img/portfolio/NeftyBallersMockUps/2-Gameplay-Screen.jpg"
// import NeftyImage3 from "../../assets/img/portfolio/NeftyBallersMockUps/3-Inventory-Screen.jpg"
// import NeftyImage4 from "../../assets/img/portfolio/NeftyBallersMockUps/4-NFT-Stats.jpg"

import WildImage0 from "../../assets/img/portfolio/WildFriends/Wild0.png"
import WildImage1 from "../../assets/img/portfolio/WildFriends/Wild1.png"
import WildImage2 from "../../assets/img/portfolio/WildFriends/Wild2.png"
import WildImage3 from "../../assets/img/portfolio/WildFriends/Wild3.png"

import FoodImage0 from "../../assets/img/portfolio/FoodCutting/Food0_updated.png"
import FoodImage1 from "../../assets/img/portfolio/FoodCutting/Food1_updated.jpeg"
import FoodImage2 from "../../assets/img/portfolio/FoodCutting/Food2_update.jpeg"
import FoodImage3 from "../../assets/img/portfolio/FoodCutting/Food3_updated.png"
import FoodImage4 from "../../assets/img/portfolio/FoodCutting/Food4_updated.png"
import FoodVideo1 from "../../assets/img/portfolio/FoodCutting/foodvideo1_update.mp4";

import HarvesterImage0 from "../../assets/img/portfolio/HarvesterRush/Harvester0.png"
import HarvesterImage1 from "../../assets/img/portfolio/HarvesterRush/Harvester1.png"
import HarvesterImage2 from "../../assets/img/portfolio/HarvesterRush/Harvester2.png"
import HarvesterImage3 from "../../assets/img/portfolio/HarvesterRush/Harvester3.png"
import HarvesterImage4 from "../../assets/img/portfolio/HarvesterRush/Harvester4.png"
import HarvesterImage5 from "../../assets/img/portfolio/HarvesterRush/Harvester5.png"
import zdefense from "../../assets/img/portfolio/zdefence.jpeg"
import zdefense2 from "../../assets/img/portfolio/zdefense-2.webp"
import zdefense3 from "../../assets/img/portfolio/zdefense-3.webp"
import zdefense4 from "../../assets/img/portfolio/zdefense-4.webp"

import polkacity from "../../assets/img/portfolio/polkacity.jpeg"
import Monster1 from "../../assets/img/portfolio/Monster/Monster1.png"
import Monster2 from "../../assets/img/portfolio/Monster/Monster2.png"
import Monster3 from "../../assets/img/portfolio/Monster/Monster3.jpeg"
import Monster4 from "../../assets/img/portfolio/Monster/Monster4.png"

import RiftersKalinvaleImage1 from "../../assets/img/portfolio/RiftersKalinvaleMockUps/1-Icon.png"


const tags = {
    logo: "logo",
    video: "video",
    graphic_design: "graphic design",
    mockup: "mockup",
    application: "application",
    unitytwo: "unity two"
}

const PortfolioData = [
{
    id: 1,
    type: "3D Hypercasual mobile game",
    image: FoodImage0,
    tag: [tags.application],
    delayAnimation: "0",
    modalDetails: [{
        project: "Food Cutting Chopping Game",
        associated_with: "Tintash",
        client: "Lion Studions",
        language: "C#",
        platform: "IOS, Android",
        tech_tools: "Unity 3D, C#, Physics",
        preview: "https://apps.apple.com/us/app/food-cutting-chopping-game/id1564468425",
        link: "https://apps.apple.com/us/app/food-cutting-chopping-game/id1564468425",
    },],
    figure_model: {
        
        // figure_type: 'local_video', title: 'something', images: [Image7], local_video_path: FoodVideo1,

        figure_type: 'images',
        title: 'something',
        images: [FoodImage1, FoodImage2, FoodImage3, FoodImage4],
    },
    project_description: "Food Cutting - Chopping game is a 3D hypercasual game with the concept of cutting, peeling, slicing, scaling, dicing food items. The game was ranked as #3 in USA Appstore and #1 in 38 other countries with several Tier1 countries in the month of September 2021.",
    primary_value: [
        "3D core game mechanics",
        "Complex features using Unity Physics Engine",
        "Animations and Visual Effects",
        "Complex UI features",
        "Improving the game design",
        "In-app purchase system",
        "Adding features for ASMR",
        "Monetization Integrations",
        "Analytics Integration"
    ],
    work_description: [
        "Planning project timeline and deliverables",
        "Involving in high level design discussion of game",
        "Constantly keeping myself aware of ongoing trends in casual/hypercasual gaming space",
        "Developing complex features and testing",
        "Technical front end development",
        "Constantly coordinating with designers and modelers to improve the look and feel of game and it's user experience."
    ]

},
{
    id: 2,
    type: "3D Causual mobile game",
    image: HarvesterImage0,
    tag: [tags.application],
    delayAnimation: "0",
    modalDetails: [{
        project: "Harvester Rush",
        associated_with: "Tintash",
        client: "Lion Studions",
        language: "C#",
        platform: "IOS, Android",
        tech_tools: "Unity 3D, C#, Physics",
        preview: "https://apps.apple.com/in/app/harvester-rush/id1593465879",
        link: "https://apps.apple.com/in/app/harvester-rush/id1593465879",
    },],
    figure_model: {
        
        // figure_type: 'local_video', title: 'something', images: [Image7], local_video_path: FoodVideo1,

        figure_type: 'images',
        title: 'something',
        images: [HarvesterImage1, HarvesterImage2, HarvesterImage3, HarvesterImage4, HarvesterImage5],
    },
    project_description: "Harvester Rush is a 3D casual game based on concept of harvesting crops and building the game loop/story around it. It's a feature rich game which involves the interest of users to keep harvesting and keep earning to unlock new features and incentives.",
    primary_value: [
        "3D core game mechanics",
        "Harvester Upgrade system features",
        "Complex features using Unity Physics Engine",
        "Animations and Visual Effects",
        "Complex UI features",
        "Improving the game design",
        "In-app purchase system",
        "Adding features for ASMR",
        "Monetization Integrations",
        "Analytics Integration"
    ],
    work_description: [
        "Planning project timeline and deliverables",
        "Involving in high level design discussion of game",
        "Constantly keeping myself aware of ongoing trends in casual/hypercasual gaming space",
        "Developing complex features and testing",
        "Technical front end development",
        "Constantly coordinating with designers and modelers to improve the look and feel of game and it's user experience."
    ]

},
{
    id: 3,
    type: "HyperCasual Game",
    image: zdefense,
    tag: [tags.application],
    delayAnimation: "0",
    modalDetails: [{
        project: "Z Defence",
        associated_with: "Tintash",
        client: "HomaGames",
        language: "C#",
        platform: "IOS, Android",
        tech_tools: "Unity 3D, C#, Physics",
        preview: "https://play.google.com/store/apps/details?id=com.yorfstudio.zdefense&hl=en&gl=US",
        link: "https://play.google.com/store/apps/details?id=com.yorfstudio.zdefense&hl=en&gl=US",
    },],
    figure_model: {
        figure_type: 'images',
        title: 'something',
        images: [zdefense, zdefense2, zdefense3, zdefense4],
    },
    project_description: "Zombie defense: War Z Survival is your new favorite zombie game!",
    primary_value: ['3D core game mechanics','Animations and Visual Effects','Complex UI features','Improving the game design','Monetization Integrations'],
    work_description: [
        "Working as the lead developer, making sure that the project delivery is on time and working with QA to ensure the features are bug-free",
        "Providing dev estimates for each feature",
        "Understanding the existing code architecture and build new features consistent with the current architecture",
        "Working with the artists and game designer in designing new features which can help improve player retention and LTVs.",
        "Designing new features and improving existing feature designs with real-time user feedback from analytics.",
        "Optimizing the game."
    ]
},
{
    id: 4,
    type: "NFT based PC Game",
    image: polkacity,
    tag: [tags.application],
    delayAnimation: "0",
    modalDetails: [{
        project: "PolkaCity",
        associated_with: "Tintash",
        client: "Polka city platform pc",
        language: "C#",
        platform: "IOS, Android",
        tech_tools: "Unity 3D, C#, Physics",
        preview: "",
        link: "",
    },],
    figure_model: {
        figure_type: 'images',
        title: 'something',
        images: [],
    },
    project_description: "NFT Multi Chain Social Platform and Video Game where users can purchase NFT’s and use them in game.",
    primary_value: ['Improving gam mechanics i.e player moevement, car controller using plugins.','Integrating new features for players engagement.','Improving game environments through fighting and post processing'],
    work_description: [
        "Implementing a drone within the game that users can fly across the city. Syncing the drones over the network for a smooth multiplayer experience using Photon PUN.",
        "Improving an existing car controller with a more realistic feel and better handling",
        "Finding and modifying plugins suitable according to the game requirement",
        "Identifying the issue in the player animations and improving the animations with collaboration of an artist",
        "Creating separate scenes for dierent buildings in the city and improving the lighting in the scenes",
        "Fetch real time data from API and create separate room types based on the data. Also updating the city according to the events"
    ]
}
];


// const dummyitem = {
//     id: 3,
//     type: "youtube project",
//     image: RiftersKalinvaleImage1,
//     tag: [tags.video],
//     delayAnimation: "100",
//     modalDetails: [{
//         project: "video",
//         client: "Videohive",
//         language: " Adobe After Effects",
//         preview: "www.videohive.net",
//         link: "https://www.videohive.net",
//     },],
//     figure_model: {
//         figure_type: 'local_video', title: 'something', images: [Image7], online_video: {
//             video_source: "https://www.youtube.com/embed/7e90gBu4pas", video_title: "YouTube video player"
//         }, local_video_path: portfolioVideo
//     }
// }
export default PortfolioData;
