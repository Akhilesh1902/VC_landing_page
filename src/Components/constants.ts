import { PartnersImages, Room3dGifs, Store3dCard } from '../assets/images';
import resourePageImages from '../assets/images/resources';
import { Akhil, Archana, Rk } from '../assets/images/teamImages';

export const GifSectionData = [
  {
    title: 'Zoom',
    desc: 'Enable user i.e camera to Zoom in & out Showcase details in great precision due to KTX2 textures in glTF',
    image: Room3dGifs.ZoomGifGif,
  },
  {
    title: 'Pan',
    desc: 'Empower user i.e camera to move horizontally or vertically in scene.',
    image: Room3dGifs.PanGif,
  },
  {
    title: 'Rotate',
    desc: 'Empower user i.e. camera to rotate along x, y, z axis',
    image: Room3dGifs.RotateGif,
  },
  {
    title: 'Animation',
    desc: 'Leverage animation capabilities of glTF for opening cabinet doors, simulating heights of ergonomic tables etc',
    image: Room3dGifs.AnimationGif,
  },
  {
    title: 'Dimension',
    desc: 'Show dimensions of items in cms, inches, feet, meters etc. Help consumers in their buying decisions.',
    image: Room3dGifs.DimensionGif,
  },
  {
    title: 'Configure Material',
    desc: 'Enable users to change material of furniture items e.g. Leather, Fabric of various colors, textures',
    image: Room3dGifs.ConfogireMaterialGif,
  },
  {
    title: 'Tiles',
    desc: 'Showcase various tiles such as granite, marble, vitrified-tiles and wood',
    image: Room3dGifs.TilesGif,
  },
  {
    title: 'Zoom',
    desc: 'Enables User To zoom in and out',
    image: Room3dGifs.ZoomGifGif,
  },
  {
    title: 'Paints',
    desc: 'Showcase various paints, textures, stencils for walls etc. Interiors and Exteriors',
    image: Room3dGifs.PaintGif,
  },
  {
    title: 'Lighting Control - on / off',
    desc: 'Simulate turning light on or off Universally applicable',
    image: Room3dGifs.LightOnOffGif,
  },
  {
    title: 'Lighting Controls - Color',
    desc: 'Control color of lighting. Useful for indoor situation such as a dance floor or living room or outdoor with water-fountains etc.',
    image: Room3dGifs.LightColorGif,
  },
  {
    title: 'Lighting Control - Intensity',
    desc: 'Control intensity of lighting. Simulates dimmers in lights used in bedrooms our exterior lighting such as with plants and water bodies.',
    image: Room3dGifs.LightIntensityGif,
  },
  {
    title: 'Standalone and InScene',
    desc: 'Showcase items in stand-alone form or In Scene with related environment',
    image: Room3dGifs.StandAloneInSceneGif,
  },
  {
    title: 'Add, Delete Lamp',
    desc: 'Dynamically add or delete light fixture to a space. Interior or Exterior',
    image: Room3dGifs.LampAddDeleteGif,
  },
];

export const SolutionTechnologies = [
  {
    title: '3D Content',
    desc: [
      'glTF format (https://www.khronos.org/gltf/ )',
      '3D Commerce compliant (https://github.com/KhronosGroup/3DC-Asset-Creation.git )',
    ],
  },
  {
    title: 'Web FrontEnd',
    desc: [`HTML5, CSS3, JavaScript, Bootstrap, ReactJS`],
  },
  {
    title: 'Web Backend',
    desc: [`Nodejs used for offline ray-tracing etc. (under development)`],
  },
  {
    title: 'OS',
    desc: [`Windows, iOS, Android`],
  },
  {
    title: 'Web Browser',
    desc: [`Google Chrome, Microsoft Edge, Apple Safari, Brave, Mozilla`],
  },
  {
    title: 'Integration',
    desc: [
      `Will integrate with any web-site or eCommerce system (Adobe Commerce, OpenCart, Shopify etc)`,
    ],
  },
  {
    title: 'Analytics',
    desc: [`Integrated with Google Analytics`],
  },
];

export const Store3DCardData = [
  {
    title: 'Furniture',
    image: Store3dCard.Store3dFurniture,
    desc: 'Showcase sofas, tables, beds, cabinets with precise material (e.g. leather) and designs',
    details: [
      'Sofas, Tables, Beds, Cabinets, Chairs etc',
      'Materials such as Leather, Wood, Glass, Steel',
    ],
  },
  {
    title: 'Lightings',
    image: Store3dCard.Store3dLights,
    desc: 'Showcase light-fixtures for interiors and exteriors with live lighting, shadows etc',
    details: [
      'Lights & light fixtures',
      'Controls such as on/off, intensity, color',
      'Effects such as reflection, shadows, anti-aliasing, ambient occlusion, glow etc',
      'Indoor & Outdoor lighting',
    ],
  },
  {
    title: 'Paints',
    image: Store3dCard.Store3dPaint,
    desc: 'Showcase colors, textures, stencils in shiny, matte finishes under daylight, nightlights etc',
    details: ['Colors', 'Textures', 'Stencils'],
  },
  {
    title: 'Tiles',
    image: Store3dCard.Store3dTiles,
    desc: 'Showcase granite, marble, vitrified-tiles, wooden floors under daylight and nightlight',
    details: ['Marbles', 'Granite', 'Vetrified Tiles', 'Wood'],
  },
  {
    title: 'Sanitaryware',
    image: Store3dCard.Store3dSanitary,
    desc: 'Showcase basins, faucets, shower enclosures, mixers, bathtubs with lighting, tiles etc.',
    details: ['Marbles', 'Granite', 'Vetrified Tiles', 'Wood'],
  },
];

export const LandingPageYoutubeUrls = [
  {
    title: 'Basic',
    url: 'https://youtu.be/f0iavIsMG1g',
  },
  {
    title: 'Advanced',
    url: 'https://youtu.be/2WLuNmKMXo0',
  },
  {
    title: 'Lighting',
    url: 'https://youtu.be/Hq020eywBJ0',
  },
  {
    title: 'Collaboration',
    url: 'https://youtu.be/BWIDN3oT-Nc',
  },
  {
    title: 'Personalization',
    url: 'https://youtu.be/QGJ1ZZosgp4',
  },
];

export const PartnersData = [
  {
    title: 'Partners',
    image: PartnersImages.Divami_Logo,
    desc: 'Divami Design Labs is a well-established and recognized company that offers UI / UX solutions globally.',
  },
  {
    title: 'Incubator',
    image: PartnersImages.CBIT_Logo,
    desc: 'Chaitanya bharathi institute of technology, established in the Year 1979, esteemed as the Premier Engineering Institute in the States of Telangana and Andhra Pradesh.',
  },
];

export const whiteLabelingData = [
  {
    title: 'level 1',
    subTitle: 'Basic 3D',
    list: ['Zoom, Pan, Rotate', 'Viewpoints'],
    background: 'cyan',
  },
  {
    title: 'level 4',
    subTitle: 'Collaboration',
    list: [
      'Real time event sync among 2 or more users',
      'For e.g. seller and buyer experience cabinet door opening together',
      'Save state of scene and share with anyone on the internet via URL',
    ],
    background: 'fuchsia',
  },
  {
    title: 'level 2',
    subTitle: 'Advanced 3D',
    list: [
      'Material Varients (Colour, Texture, Materials)',
      'Animation (e.g. erogonomic table movements)',
      'DImensions',
      'Add / Delete Objects in the scene',
      'Move, Rotate Objects',
    ],
    background: 'blue',
  },
  {
    title: 'level 3',
    subTitle: 'Lighting',
    list: [
      'Controls for on / off, intensity,colour',
      'Visual effects such as shadows, reflection,ambient-occlussion etc',
      'Daylight and NightLight',
      'Exterior lighting including landscaping, plants, water bodies, fog etc',
    ],
    background: 'violet',
  },

  {
    title: 'level 5',
    subTitle: 'Personalization',
    list: [
      `User's space captured via photos and reconstructed to 3D model - Digital Twin`,
      'Shape, Size, Material accuracy',
      'User empowered to design their space via digital-twin of home-décor products from StoreFront3D',
      'Huge combinations of Furniture, Lighting, Paints, Tiles, Plants, Sanitaryware enabled.',
      'Order photo-realistic images of designed space via cloud based 3D render',
      'Offered for White labelling by VisCommerce to home-décor companies',
      'Revenue sharing on rendered images',
    ],
    background: 'rose',
  },
];

export const testimonialData = [
  {
    message: `Building visualization techniques driven by 3D is increasingly a vital element of creating the best possible experience for shoppers, as it provides an invaluable way to explore beautiful imagery with context and authenticity. As we continue to transform the way people shop for their homes, we believe that 3D will be ubiquitous in the coming years and that it is imperative to standardize 3D content so it can be exchanged effectively and experienced consistently.`,
    name: 'Shrenik Sadalgi',
    designation:
      'Chair of the 3D Commerce Working Group & Director of Next at Wayfair',
  },
  {
    message: `We're at an inflection point, where 3D visualization technologies initially developed for gaming and visual effects are beginning to transform the retail experience. At Adobe, we're committed to empowering designers with the tools and platforms to deliver the immersive content that consumers increasingly demand. This is an industry-wide transition, and we are delighted to be working with the 3D Commerce Group and Khronos Group to jointly define the standards required to make immersive content ubiquitous.`,
    name: 'Ross McKegney',
    designation: 'Director, Adobe Dimension',
  },
  {
    message: `3D enables a completely new way to shop for your home, and we have been focused on applying these technologies for some time with over one million products shoppable in AR. We are excited to work with the group to spearhead 3D content standardization across AR/VR and other immersive experiences.`,
    name: 'Sally Huang',
    designation: 'Head of Visual Technologies at Houzz',
  },
  {
    message: `IKEA has been working on large scale photoreal 3D for over 10 years and has been promoting open standards and collaboration all along. We are excited to contribute to this group to make the use of 3D easier and faster to meet the demands of our customers.`,
    name: 'Martin Enthed',
    designation: 'IKEA Communications AB',
  },
];

export const resourcePageData = [
  {
    title: 'Amazon creates immersive shopping experiences using Substance 3D',
    details:
      'Imagine if you could shop for new furniture by bringing a dozen sofas into your house and comparing how they look in your living room. Sounds unrealistic?',
    image: resourePageImages.Amazon,
    url: '',
  },
  {
    title:
      'Amazon brings Metaverse to the e-commerce segment with augmented rooms',
    details:
      'Amazon brings augmented rooms (Amazon View) to transform the shopping experience. Shoppers can customize their room with Amazon products in VR.',
    image: resourePageImages.storeresource1,
    url: '',
  },
  {
    title:
      'Essential Guide to 3D Product Configuration: Use Cases, Tips and Checklist',
    details:
      'A product configurator is software that allows people to customize an item and see how it appears. The configurator shows all possible variations in a product.',
    image: resourePageImages.storeresource2,
    url: '',
  },
  {
    title: 'MarxentLabs 3D project charter',
    details:
      'Utilizing our many years of experience in running 3D projects, we’ve created this free 3D project charter template to make it easy for you to get started. Download today',
    image: resourePageImages.storeresource3,
    url: '',
  },
  {
    title: '10 Things to Know About the World of 3D Models',
    details:
      'Racing bikes, coffee machines, energy drinks, dining chairs, camping cookers, hockey sticks, diamond rings, and even Hot Wheels toy cars.',
    image: resourePageImages.storeresource5,
    url: '',
  },
  {
    title: `What can can't 3D & AR do for you?`,
    details: `Each new evolution in technology poses one key question: who will identify its value first and reap the greatest reward and who will scramble to catch up before it's too late?`,
    image: resourePageImages.storeresource6,
    url: '',
  },
  {
    title: 'Why Your eCommerce Store Needs a 3D Product Customizer',
    details:
      'Do you run an eCommerce store? Are you looking for a unique way to increase customer engagement and overall sales?',
    image: resourePageImages.storeresource7,
    url: '',
  },
  {
    title: 'How 3D Commerce Offers the Building Blocks of a Virtual Inventory',
    details:
      'Retail sales have grown by almost four percent annually since 2010. During that time, ecommerce penetration has increased more',
    image: resourePageImages.storeresource8,
    url: '',
  },
  {
    title: 'SAMPLE: RFP Table of Contentsfor a 3D Project',
    details: 'Content for 3D Project',
    image: resourePageImages.storeresource4,
    url: '',
  },
  {
    title: 'Democratizing Interior Design',
    details:
      'As Mark Hampton quotes, "Real comfort, visual and physical, is vital to every room." Giving that opportunity and space of individuality and design to everyone? That’s the vision at VisCommerce.',
    image: resourePageImages.mySpaceResource1,
    url: '',
  },
  {
    title: 'Personalized Product Recommendations',
    details:
      'We’re all familiar with product recommendations. Many of us see them every day on Amazon—a household name synonymous with the early adoption of AI and machine learning',
    image: resourePageImages.mySpaceResource2,
    url: '',
  },
];

export const teamDetailsData = [
  {
    name: 'Mr Ramakrishna J Tumuluri (aka RK)',
    img: Rk,
    title: 'Founder, CEO',
    role: 'Product management , development, sales, marketing etc.',
    education: 'MS Electrical Engineering, SIU - Carbondale, Il, USA',
    interests: 'History, Cricket, Table-Tennis, Yoga, Comedy',
    linkedIn: 'https://in.linkedin.com/in/ramakrishna-tumuluri',
  },
  {
    name: 'Mr. Mohit Patel',
    title: 'Content Developer',
    role: '2D Infographics , Video (esp. 3D based) , 3D (3DCommerce compliant)',
    education: 'Diploma In Computer Engineering',
    interests: 'Cooking, Research New Technologies',
    linkedIn: 'https://www.linkedin.com/in/mohit-patel-9b631b19a/',
  },
  {
    name: 'Ms. Archana Patukuri',
    img: Archana,
    title: 'Software Developer',
    role: 'Web-App design (Figma) and development (HTML, CSS, JavaScript, Bootstrap, Reactjs,Threejs). Responsive and Performant',
    education: 'B.Tech Computer Science and Engineering',
    interests: 'Traveling, Listening to Music, Dancing',
    linkedIn: 'https://www.linkedin.com/in/archana-patukuri-495055162/',
  },
  {
    name: 'Jay Patel',
    title: 'QA Specialist',
    role: 'Making sure that the product delivered is in top notch Quality',
    education: 'Bachelor of computer science (CA & IT)',
    interests: 'Web Development, Cricket, Exploring new Gadgets, Researching',
    linkedIn: 'https://www.linkedin.com/in/jay-patel-5121221b8',
  },
  {
    name: 'Jigish Patel',
    title: 'Graphic designer | UI Designer',
    role: 'Making the User Understand the works of Viscommerce in Simple Terms.',
    education: '',
    interests: '',
    linkedIn: '',
  },
  {
    name: 'Akhilesh',
    img: Akhil,
    title: 'Software Developer',
    role: 'Developing high quality Interactive WebApps using ThreeJS',
    education: 'Bachelor of Computer Application',
    interests: 'Gaming, Bike Rides and a cup of Coffee',
    linkedIn: 'https://www.linkedin.com/in/akhilesh-c-8aab6b1b8/',
  },
];
