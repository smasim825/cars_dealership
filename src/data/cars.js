export const CAR_BODY_TYPES = [
  {
    id: 'sedan',
    name: 'Sedan',
    icon: '/assets/Group 482.png',
    count: 3,
    description: 'Executive 4-Door Comfort'
  },
  {
    id: 'suv',
    name: 'SUV / Minivan',
    icon: '/assets/Group 490.png',
    count: 1,
    description: 'Family & Luxury MPV'
  },
  {
    id: 'cabriolet',
    name: 'Cabriolet',
    icon: '/assets/Group 484.png',
    count: 0,
    description: 'Open-Top Thrill'
  },
  {
    id: 'coupe',
    name: 'Coupe',
    icon: '/assets/Group 489.png',
    count: 0,
    description: 'Aerodynamic Sport'
  },
  {
    id: 'micro',
    name: 'Kei Car',
    icon: '/assets/Group 498.png',
    count: 1,
    description: 'Compact Japanese City Car'
  },
];

export const CATEGORY_TABS = [
  { id: 'all', label: 'All Vehicles' },
  { id: 'in_stock', label: 'In Stock' },
  { id: 'sold', label: 'Sold' },
];

export const FEATURED_CAR = {
  id: 'rolls-royce-wraith-demo',
  name: 'Rolls Royce Wraith',
  brand: 'Rolls-Royce',
  subtitle: 'V12 Twin-Turbocharged Luxury Concept (Demo Exhibit)',
  price: 'DEMO EXHIBIT',
  numericPrice: 0,
  image: '/assets/beautiful-rolls-royce-car_999195-437-removebg-preview 1.png',
  bannerBg: '/assets/Rectangle 54.png',
  type: 'coupe',
  status: 'demo',
  isDemo: true,
  specs: {
    engine: '6.6L V12 Twin-Turbo',
    horsepower: '624 HP',
    acceleration: '0-60 in 4.4s',
    topSpeed: '155 mph',
    transmission: '8-Speed Automatic',
    drive: 'Rear-Wheel Drive'
  },
  description: 'The Rolls Royce Wraith represents the pinnacle of luxury grand touring, presented here as an exclusive showroom concept demo display.',
  features: [
    'Handcrafted Starlight Headliner',
    '6.6L Twin-Turbo V12 Engine',
    'Bespoke Audio & Phantom Leather',
    'Showroom Concept Demo Unit',
  ]
};

export const CARS_DATA = [
  {
    id: 'toyota-vellfire-zg',
    name: 'Toyota Vellfire 2.5L ZG Edition',
    brand: 'Toyota',
    price: '¥ASK',
    numericPrice: 0,
    subtitle: '2.5L Premium Executive Minivan',
    description: 'Toyota Vellfire 2.5L ZG Edition with Premium Leather Pilot seats, 3-eye LED headlights with sequential indicators, Power back door, Flip down roof monitor, Toyota Safety Sense, and more. Available for viewing and test drive!',
    type: 'suv',
    status: 'in_stock',
    year: 2019,
    image: '/assets/car2/white_front2.jpeg',
    images: [
      '/assets/car2/white_front_jpeg.jpeg',
      '/assets/car2/white_front2.jpeg',
      '/assets/car2/white_back.jpeg',
      '/assets/car2/white_head.jpeg',
      '/assets/car2/white_interior.jpeg',
      '/assets/car2/all.jpeg',
    ],
    rating: 4.9,
    isFavorite: true,
    specs: {
      engine: '2.5L Inline-4',
      mileage: '90,000 km',
      grade: 'ZG Edition',
      shaken: '2028年3月',
      transmission: 'CVT Automatic',
    },
    features: [
      'Premium Leather Pilot Seats',
      '3-Eye LED Headlights',
      'Power Back Door',
      'Toyota Safety Sense',
      'Back Camera',
      'Cruise Control',
    ]
  },
  {
    id: 'toyota-mark-x-250g',
    name: 'Toyota Mark X 250G',
    brand: 'Toyota',
    price: '  ¥SOLD',
    numericPrice: 0,
    subtitle: 'GRX130 Custom Modified Sedan',
    description: 'Toyota Mark X 250G (GRX130) — Fully body-kitted with coil-over suspension, 19-inch alloy wheels, aftermarket Vland custom daytime running headlights, custom rear headlights, new brake pads & tires installed. No accident, pet, or smoking history. Original headlights & backlights included free.',
    type: 'sedan',
    status: 'sold',
    image: '/assets/car1/white_car_front.jpeg',
    images: [
      '/assets/car1/white_car_front.jpeg',
      '/assets/car1/white_car_back.jpeg',
      '/assets/car1/white_car_interior.jpeg',
    ],
    rating: 4.8,
    isFavorite: false,
    specs: {
      engine: '2.5L V6',
      mileage: '89,000 km',
      shaken: '8/12',
      transmission: 'Automatic',
      model: 'GRX130',
    },
    features: [
      'Coil-Over Suspension',
      'Full Body Kit',
      '19-inch Alloy Wheels',
      'Vland Custom DRL Headlights',
      'Aftermarket Rear Lights',
      'Push Start, Navi, Back Cam',
      'New Brake Pads & Tires',
    ]
  },
  {
    id: 'suzuki-hustler-2014',
    name: '2014 Suzuki Hustler',
    brand: 'Suzuki',
    price: '  ¥SOLD',
    numericPrice: 0,
    subtitle: '660cc Kei Car — Urban City Cruiser',
    description: '2014 Suzuki Hustler with 116,000 KM, 2 years Shaken. Features include Navigation, Alloy Rims, Heated Seats, Push Start, Idling Stop fuel saver, Keyless Entry, Power Windows. No accident history, clean interior.',
    type: 'micro',
    status: 'sold',
    image: '/assets/car3/orange_car.jpeg',
    images: [
      '/assets/car3/orange_car_front.jpeg',
      '/assets/car3/orange_car.jpeg',
      '/assets/car3/orange_car_back.jepg.jpeg',
      '/assets/car3/orange_car_bonut.jpeg',
      '/assets/car3/orange_car_interior.jpeg',
      '/assets/car3/orange_car_staring.jpeg',
      '/assets/car3/orange_car_dashboard.jpeg',
      '/assets/car3/orange_car_fuctions.jpeg',
    ],
    rating: 4.7,
    isFavorite: false,
    year: 2014,
    specs: {
      engine: '660cc',
      mileage: '116,000 km',
      shaken: '2 Years',
      transmission: 'Automatic (AT)',
    },
    features: [
      'Navigation',
      'Alloy Rims',
      'Heated Seat Options',
      'Push Start',
      'Idling Stop (Fuel Saver)',
      'Keyless Entry',
      'Power Windows',
      'No Accident History',
    ]
  },
  {
    id: 'audi-a6-2014',
    name: 'Audi A6 2014',
    brand: 'Audi',
    price: '  ¥SOLD',
    numericPrice: 0,
    subtitle: 'Premium German Executive Sedan',
    description: 'Audi A6 2014 — Auction Grade 4, 97K mileage, 2 years Shaken. Push start, original Audi Navigation, Bluetooth, Back camera, ETC. Genuine Rays Homura rims with Michelin all-season tires installed. New brake pads (all 4). No accident, pet, or smoking history. Original Audi rims with tires included free.',
    type: 'sedan',
    status: 'sold',
    image: '/assets/car4/black_Car_front.jpeg',
    images: [
      '/assets/car4/black_Car_front.jpeg',
      '/assets/car4/black_Car.jpeg',
      '/assets/car4/black_car_f.jpeg',
      '/assets/car4/black_car_head.jpeg',
      '/assets/car4/black_car_interior.jpeg',
      '/assets/car4/black_car_Steering.jpeg',
    ],
    rating: 4.9,
    isFavorite: false,
    year: 2014,
    specs: {
      engine: '2.0L TFSI',
      mileage: '97,000 km',
      shaken: '2 Years',
      auctionGrade: 'Grade 4',
      transmission: 'Automatic',
    },
    features: [
      'Push Start',
      'Audi Original Navigation',
      'Bluetooth & Back Camera',
      'Rays Homura Rims',
      'Michelin All-Season Tires',
      'New Brake Pads (All 4)',
      'Original Audi Rims Included Free',
    ]
  },
  {
    id: 'subaru-levorg-2017',
    name: '2017 Subaru Levorg 1.6GT EyeSight',
    brand: 'Subaru',
    price: '  ¥SOLD',
    numericPrice: 0,
    subtitle: '1.6GT EyeSight AWD Sports Wagon',
    description: '2017 Subaru Levorg 1.6GT EyeSight — 71,000 KM, 2 Years Shaken, 1590cc engine, 4WD. Features: Navigation, Alloy Rims, Heated Seats, Push Start, Idling Stop, Keyless Entry, Power Windows. Nationwide delivery across Japan and worldwide export available.',
    type: 'sedan',
    status: 'sold',
    image: '/assets/car5/ash_car_front.jpeg',
    images: [
      '/assets/car5/ash_car_front.jpeg',
      '/assets/car5/ash_car_side_view.jpeg',
      '/assets/car5/ash_car_back_view.jpeg',
      '/assets/car5/ash_car_backside_view.jpeg',
      '/assets/car5/ash_car_steering.jpeg',
      '/assets/car5/ash_car_sideview_sterring.jepg.jpeg',
      '/assets/car5/ash_car_trunk.jpeg',
    ],
    rating: 4.8,
    isFavorite: false,
    year: 2017,
    specs: {
      engine: '1590cc (1.6L Turbo)',
      mileage: '71,000 km',
      shaken: '2 Years',
      transmission: 'Automatic (AT)',
      drive: '4WD',
      bodyType: 'Wagon',
    },
    features: [
      'EyeSight Safety System',
      'Navigation',
      'Alloy Rims',
      'Heated Seat Options',
      'Push Start',
      'Idling Stop (Fuel Saver)',
      'Keyless Entry',
      'Power Windows',
    ]
  },

];

export const SERVICES_DATA = [
  {
    id: 'all-brands',
    title: 'All Brands',
    description: "Access an exclusive curated collection of world-renowned automotive marques — Japanese, German, and more.",
    image: null,
    isCardText: true
  },
  {
    id: 'interior-seats',
    title: 'Quality Interiors',
    description: 'Every vehicle inspected for pristine interior condition. Clean, no smoking, no pet history guaranteed.',
    image: '/assets/Rectangle 148.png',
    isCardText: false
  },
  {
    id: 'interior-console',
    title: 'Worldwide Export',
    description: 'Worldwide export services available. We handle all customs, shipping, and documentation for international buyers.',
    image: '/assets/Rectangle 150.png',
    isCardText: false
  },
  {
    id: 'free-support',
    title: 'Free Support',
    description: "Enjoy complimentary concierge care, nationwide delivery across Japan, and dedicated customer support via WhatsApp.",
    image: null,
    isCardText: true
  }
];
