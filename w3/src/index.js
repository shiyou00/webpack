import headerImg from './head.jpg';
import './index.css';

let img = new Image();
img.src = headerImg;
const root = document.getElementById('root');
root.appendChild(img);