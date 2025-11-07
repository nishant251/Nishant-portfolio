import SquareJsIcon from "@/assets/icons/toolbox/square-js.svg";
import SquareTsIcon from "@/assets/icons/toolbox/square-ts.svg";
import HTML5Icon from "@/assets/icons/toolbox/html5.svg";
import CssIcon from "@/assets/icons/toolbox/css3.svg";
import ReactIcon from "@/assets/icons/toolbox/react.svg";
import GitIcon from "@/assets/icons/toolbox/git.svg";
import FirebaseIcon from "@/assets/icons/toolbox/firebase.svg";
import GithubIcon from "@/assets/icons/toolbox/github.svg";
import PostmanIcon from "@/assets/icons/toolbox/postman.svg";
import TailwindIcon from "@/assets/icons/toolbox/tailwind.svg";
import MongoDBIcon from "@/assets/icons/toolbox/mongo-db.svg";
import ViteIcon from "@/assets/icons/toolbox/vite.svg";
import VercelIcon from "@/assets/icons/toolbox/vercel.svg";
import NodeJsIcon from "@/assets/icons/toolbox/node-js.svg";
import CppIcon from "@/assets/icons/toolbox/icons8-c++.svg";
import PythonIcon from "@/assets/icons/toolbox/icons8-python.svg";
import GoIcon from "@/assets/icons/toolbox/golang-svgrepo-com.svg";
import PyTorchIcon from "@/assets/icons/toolbox/icons8-pytorch.svg";
import nextIcon from "@/assets/icons/toolbox/icons8-nextjs.svg";
import CVAnalyzerLandingPage from "@/assets/images/cv-analyzer-landing-page.png";
import notesPage from "@/assets/images/notes-page.png";
import SnapCode from "@/assets/images/snap-code.png";
import ChessGame from "@/assets/images/chess-game.png";

const CONFIG = {
    email: "nishantsrivastava864@gmail.com",
    toolboxItems: [
        {
            title: "HTML5",
            iconType: HTML5Icon,
        },
        {
            title: "CSS",
            iconType: CssIcon,
        },
        {
            title: "JavaScript",
            iconType: SquareJsIcon,
        },
        {
            title: "TypeScript",
            iconType: SquareTsIcon,
        },
        {
            title: "Node.js",
            iconType: NodeJsIcon,
        },
        {
            title: "C++",
            iconType: CppIcon,
        },
        {
            title: "Tailwind CSS",
            iconType: TailwindIcon,
        },
        {
            title: "Postman",
            iconType: PostmanIcon,
        },
        {
            title: "React",
            iconType: ReactIcon,
        },
        {
            title: "Vite",
            iconType: ViteIcon,
        },
        {
            title: "MongoDB",
            iconType: MongoDBIcon,
        },
        {
            title: "Firebase",
            iconType: FirebaseIcon,
        },
        {
            title: "Git",
            iconType: GitIcon,
        },
        {
            title: "Github",
            iconType: GithubIcon,
        },
        {
            title: "Vercel",
            iconType: VercelIcon,
        },
        {
            title: "Python",
            iconType: PythonIcon,
        },
        {
            title: "GoLand",
            iconType: GoIcon,
        },
        {
            title: "PyTorch",
            iconType: PyTorchIcon,
        },
        {
            title: "Next.js",
            iconType: nextIcon,
        },
    ],
    footerLinks: [
        {
            title: "Twitter",
            href: "https://x.com/NishantsSrivas1",
        },
        {
            title: "Github",
            href: "https://github.com/nishant251",
        },
        {
            title: "LinkedIn",
            href: "https://www.linkedin.com/in/nishant-srivastava-785a05297/",
        },
    ],
    portfolioProjects: [
        {
            company: "Snap-Split",
            year: "2025",
            title: "Dynamic Splitwise",
            results: [
                { title: "Wallet feature for each user and a group feature to manage shared expenses" },
                { title: "Full stack web app for splitting expenses" },
                { title: "Split expenses and deduct contributions from each user's wallet" },
            ],
            link: "https://github.com/nishant251/splitwise-next",
            image: SnapCode,
            linkText: "View Code",
        },
        {
            company: "MERN-CHESS",
            year: "2025",
            title: "Chess-Game",
            results: [
                { title: "Real-time multiplayer chess game" },
                { title: "Built with MERN stack and Socket.io" },
                { title: "Interactive board with move validation" },
            ],
            link: "https://github.com/nishant251/mern-chess-game",
            image: ChessGame,
            linkText: "View Live Site",
        },
    ],
};

export const email = CONFIG.email;
export const toolBoxItems = CONFIG.toolboxItems;
export const footerLinks = CONFIG.footerLinks;
export const portfolioProjects = CONFIG.portfolioProjects;
