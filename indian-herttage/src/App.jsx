import React, { useState, useEffect } from 'react';

import charminar from './charminar.jpg';
import konark from './konark.jpg';
import qutub from './qutub.jpg';
import redfort from './redfort.jpg';
import tajmahal from './tajmahal.jpg';
import mysore from './mysore.jpg';
import gateway from './gateway.jpg';
import jantar from './jantar.jpg';
import victoria from './victoria.jpg';

// Dance images
import bharatanatyamImg from './assets/bharatanatyam.jpg';
import kathakImg from './assets/kathak.jpg';
import bhangraImg from './assets/bhangra.jpg';
import garbaImg from './assets/garba.jpg';

// Music images
import hindustaniImg from './assets/hindustani.jpg';
import carnaticImg from './assets/carnatic.jpg';
import folkMusicImg from './assets/folkmusic.jpg';
import bhajanImg from './assets/bhajan.jpg';

// Festival images
import diwaliImg from './assets/diwali.jpg';
import holiImg from './assets/holi.jpg';
import durgaPujaImg from './assets/durgapuja.jpg';
import onamImg from './assets/onam.jpg';

// Cultural data with video links
const culturalDances = [
  {
    name: 'Bharatanatyam',
    state: 'Tamil Nadu',
    style: 'Classical',
    highlight: 'Temple dance known for expressive hand gestures and strong footwork.',
    image: bharatanatyamImg,
    videoUrl: 'https://www.youtube.com/embed/4CKFAb1FNns'
  },
  {
    name: 'Kathak',
    state: 'Uttar Pradesh',
    style: 'Classical',
    highlight: 'Storytelling spins, intricate footwork and graceful expressions.',
    image: kathakImg,
    videoUrl: 'https://www.youtube.com/embed/B5Pyq8_ZuJM'
  },
  {
    name: 'Bhangra',
    state: 'Punjab',
    style: 'Folk',
    highlight: 'High‑energy harvest dance performed to loud dhol beats.',
    image: bhangraImg,
    videoUrl: 'https://www.youtube.com/embed/ycTlIyQ2MHg'
  },
  {
    name: 'Garba',
    state: 'Gujarat',
    style: 'Folk',
    highlight: 'Circle dance performed during Navratri around a lamp or idol.',
    image: garbaImg,
    videoUrl: 'https://www.youtube.com/embed/3X7x4Ye-tqo'
  }
];

const culturalMusic = [
  {
    name: 'Hindustani Classical',
    region: 'North India',
    feature: 'Improvisation on ragas with instruments like sitar, sarod and tabla.',
    image: hindustaniImg,
    videoUrl: 'https://www.youtube.com/embed/uEqYzdz3Zvg'
  },
  {
    name: 'Carnatic Classical',
    region: 'South India',
    feature: 'Composition‑based kritis with mridangam, veena and violin accompaniment.',
    image: carnaticImg,
    videoUrl: 'https://www.youtube.com/embed/Sjg5-2etoZ8'
  },
  {
    name: 'Folk Music',
    region: 'Various states',
    feature: 'Local songs celebrating harvests, weddings, seasons and village life.',
    image: folkMusicImg,
    videoUrl: 'https://www.youtube.com/embed/1gukvtH_a3I'
  },
  {
    name: 'Devotional Bhajans',
    region: 'Pan‑India',
    feature: 'Group singing in temples and homes accompanied by harmonium and dholak.',
    image: bhajanImg,
    videoUrl: 'https://www.youtube.com/embed/auSbCogLix4'
  }
];

const culturalFestivals = [
  {
    name: 'Diwali',
    month: 'Oct–Nov',
    theme: 'Festival of Lights celebrating the victory of good over evil.',
    image: diwaliImg,
    videoUrl: 'https://www.youtube.com/embed/74LTtXAlT2o'
  },
  {
    name: 'Holi',
    month: 'March',
    theme: 'Festival of colours marking the arrival of spring.',
    image: holiImg,
    videoUrl: 'https://www.youtube.com/embed/0408HM4MouY'
  },
  {
    name: 'Durga Puja',
    month: 'Sep–Oct',
    theme: 'Worship of Goddess Durga with decorated pandals and processions.',
    image: durgaPujaImg,
    videoUrl: 'https://www.youtube.com/embed/ew8G5gA_aFk'
  },
  {
    name: 'Onam',
    month: 'Aug–Sep',
    theme: 'Harvest festival of Kerala with boat races, feasts and floral rangoli.',
    image: onamImg,
    videoUrl: 'https://www.youtube.com/embed/oaSMBo7FYkM'
  }
];

function MonumentCard({
  image,
  title,
  location,
  description,
  built,
  architecture,
  badges,
  link,
  details,
  videoUrl,
  onVirtualTour
}) {
  const handleBadgeClick = (badgeText) => {
    if (badgeText === 'UNESCO') {
      onVirtualTour(
        details,
        image,
        title,
        location,
        description,
        built,
        architecture,
        link,
        videoUrl
      );
    }
  };

  return (
    <div
      style={{
        background: '#fff',
        borderRadius: '20px',
        boxShadow: '0 2px 18px rgba(60,60,60,0.11)',
        margin: '30px 18px',
        width: '360px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <img src={image} alt={title} style={{ width: '100%', height: '215px', objectFit: 'cover' }} />
      <div style={{ padding: '20px 26px 16px 26px' }}>
        <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#222', marginBottom: 9 }}>
          {title}
        </div>
        <div style={{ color: '#e09f3e', fontWeight: 600, marginBottom: 8 }}>
          <span role="img" aria-label="pin" style={{ marginRight: 6 }}>
            📍
          </span>
          {location}
        </div>
        <div style={{ fontSize: '1.07rem', color: '#333', marginBottom: 8 }}>{description}</div>
        {built && (
          <div style={{ marginBottom: 2 }}>
            <b>Built:</b> {built}
          </div>
        )}
        {architecture && (
          <div style={{ marginBottom: 12 }}>
            <b>Architecture:</b> {architecture}
          </div>
        )}
        <div style={{ display: 'flex', gap: '10px', marginBottom: 10 }}>
          {(badges || []).map((badge, idx) => (
            <span
              key={idx}
              style={{
                background: badge.bg || '#ffe066',
                color: badge.color || '#333',
                padding: '6px 16px',
                borderRadius: '7px',
                fontWeight: 600,
                fontSize: '0.98rem',
                boxShadow: '0 1px 6px rgba(200,200,200,0.12)',
                cursor: badge.text === 'UNESCO' ? 'pointer' : 'auto'
              }}
              onClick={() => handleBadgeClick(badge.text)}
            >
              {badge.text}
            </span>
          ))}
        </div>
        {link && (
          <div style={{ fontSize: '1rem', color: '#097', marginTop: 11, cursor: 'pointer' }}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#097', textDecoration: 'none' }}
            >
              Click to explore virtual tour &rarr;
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

// Monuments data (unchanged)
const homeMonuments = [
  {
    image: tajmahal,
    title: 'Taj Mahal',
    location: 'Agra, Uttar Pradesh',
    description: 'Jewel of Muslim art in India, universally admired.',
    built: '1632-1653',
    architecture: 'Indo-Islamic Architecture',
    badges: [{ text: 'UNESCO', bg: '#ffe066' }, { text: 'Tomb', bg: '#fff3cd' }],
    videoUrl: 'https://www.youtube.com/embed/DV_r9tw8uo8',
    details: {
      title: 'Taj Mahal',
      description:
        "An ivory-white marble mausoleum, considered the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage.",
      history:
        'Built by Mughal emperor Shah Jahan in memory of his wife Mumtaz Mahal between 1632-1653.',
      culture: 'Symbol of eternal love, UNESCO World Heritage Site since 1983'
    }
  },
  {
    image: redfort,
    title: 'Red Fort (Lal Qila)',
    location: 'Delhi, Delhi',
    description: 'Fortified palace, residence of Mughal Emperors.',
    built: '1639-1648',
    architecture: 'Mughal Architecture',
    badges: [{ text: 'UNESCO', bg: '#ffe066' }, { text: 'Fort', bg: '#fff3cd' }],
    videoUrl: 'https://www.youtube.com/embed/ms0FYivXyBQ',
    details: {
      title: 'Red Fort',
      description:
        'A historic fortified palace that served as the main residence of the Mughal Emperors for nearly 200 years.',
      history:
        'Built by Emperor Shah Jahan as the palace fort for his new capital Shahjahanabad.',
      culture: 'Site of Independence Day celebrations in India. Recognized by UNESCO since 2007.'
    }
  },
  {
    image: charminar,
    title: 'Charminar',
    location: 'Hyderabad, Telangana',
    description: 'Mosque and monument, built in 1591.',
    built: '1591',
    architecture: 'Indo-Islamic Architecture',
    badges: [{ text: 'Mosque', bg: '#cdefff' }],
    videoUrl: 'https://www.youtube.com/embed/y2uNZb1YW8I',
    details: {
      title: 'Charminar',
      description: 'A mosque and monument, a symbol of Hyderabad.',
      history:
        'Built in 1591 by Sultan Muhammad Quli Qutb Shah to commemorate the end of a deadly plague.',
      culture: 'Renowned for festivals and markets, iconic for Hyderabad.'
    }
  }
];

const allMonuments = [
  ...homeMonuments,
  {
    image: konark,
    title: 'Konark Sun Temple',
    location: 'Konark, Odisha',
    description: '13th-century temple, UNESCO site.',
    built: '1250',
    architecture: 'Kalinga Architecture',
    badges: [{ text: 'UNESCO', bg: '#ffe066' }, { text: 'Temple', bg: '#ffe7eb' }],
    videoUrl: 'https://www.youtube.com/embed/GFoHaE0r3rk',
    details: {
      title: 'Konark Sun Temple',
      description: 'A UNESCO World Heritage Site, a marvel of Oriya architecture.',
      history: 'Built by King Narasimhadeva I of the Eastern Ganga dynasty.',
      culture: 'Renowned for Chariot form and Sun Festival.'
    }
  },
  {
    image: qutub,
    title: 'Qutub Minar',
    location: 'Delhi',
    description: 'Tallest brick minaret in the world.',
    built: '1192-1220',
    architecture: 'Afghan Architecture',
    badges: [{ text: 'UNESCO', bg: '#ffe066' }, { text: 'Minaret', bg: '#eee5ff' }],
    videoUrl: 'https://www.youtube.com/embed/J7nmPBAE2X8',
    details: {
      title: 'Qutub Minar',
      description: 'A UNESCO World Heritage Monument, tallest brick minaret globally.',
      history: 'Construction started by Qutb-ud-din Aibak and completed by Iltutmish.',
      culture: 'Popular tourist spot showcasing Indo-Islamic architecture.'
    }
  },
  {
    image: mysore,
    title: 'Mysore Palace',
    location: 'Mysore, Karnataka',
    description: 'Known for architecture and festivals.',
    built: '1912',
    architecture: 'Indo-Saracenic Architecture',
    badges: [{ text: 'Palace', bg: '#faf3e3' }],
    videoUrl: 'https://www.youtube.com/embed/fYfvk25kJiM',
    details: {
      title: 'Mysore Palace',
      description: 'Historical royal residence, rich in Indo-Saracenic art.',
      history: 'Built for the Wodeyar dynasty, site of grand Dasara celebrations.',
      culture: 'Centerpiece of Mysore, admired for lights and heritage.'
    }
  },
  {
    image: gateway,
    title: 'Gateway of India',
    location: 'Mumbai, Maharashtra',
    description: 'Monument built in 1924 for King George V and Queen Mary.',
    built: '1924',
    architecture: 'Indo-Saracenic Architecture',
    badges: [{ text: 'Arch', bg: '#cdefff' }],
    videoUrl: 'https://www.youtube.com/embed/e9HiA6U1b-8',
    details: {
      title: 'Gateway of India',
      description: 'A ceremonial arch monument in Mumbai.',
      history: 'Built to commemorate the visit of King George V and Queen Mary.',
      culture: 'Iconic for Mumbai, center for public gatherings.'
    }
  },
  {
    image: jantar,
    title: 'Jantar Mantar',
    location: 'Jaipur, Rajasthan',
    description: 'Architectural astronomical instruments.',
    built: '1724–1738',
    architecture: 'Astronomical Instruments',
    badges: [{ text: 'UNESCO', bg: '#ffe066' }, { text: 'Observatory', bg: '#e0f3ff' }],
    videoUrl: 'https://www.youtube.com/embed/JDiAzkNoLeY',
    details: {
      title: 'Jantar Mantar',
      description: 'Largest stone observatory in the world, UNESCO landmark.',
      history: 'Built by Maharaja Jai Singh II, features large instruments.',
      culture: 'Used for festivals and scientific learning.'
    }
  },
  {
    image: victoria,
    title: 'Victoria Memorial',
    location: 'Kolkata, West Bengal',
    description: 'Dedicated to Queen Victoria.',
    built: '1906-1921',
    architecture: 'Indo-Saracenic Revival',
    badges: [{ text: 'Memorial', bg: '#fff3cd' }],
    videoUrl: 'https://www.youtube.com/embed/lOsK9tSFufw',
    details: {
      title: 'Victoria Memorial',
      description: 'Marble building, national museum commemorating Queen Victoria.',
      history: 'Constructed by Lord Curzon in memory of Queen Victoria.',
      culture: 'Site for exhibitions and gardens, famous for colonial architecture.'
    }
  }
];

function App() {
  const [view, setView] = useState('login');
  const [virtualDetails, setVirtualDetails] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupName, setSignupName] = useState('');

  // For culture video modal
  const [selectedCultureVideo, setSelectedCultureVideo] = useState(null);

  useEffect(() => {
    // later: read token from localStorage if you want persistent login
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        fontFamily: 'Serif',
        background: '#f7f7f8',
        boxSizing: 'border-box',
        overflow: 'hidden'
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 60px',
          background: '#fff',
          borderBottom: '1px solid #f6f6f6',
          marginBottom: '8px'
        }}
      >
        <span
          style={{
            fontWeight: 'bold',
            fontSize: '2rem',
            color: '#f19123',
            letterSpacing: '2px'
          }}
        >
          <span style={{ color: '#ffb700', fontWeight: 900 }}>IN</span> Incredible India
        </span>
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            gap: '38px',
            margin: 0,
            padding: 0,
            alignItems: 'center',
            fontSize: '1.22rem'
          }}
        >
          {loggedIn && (
            <>
              <li>
                <button
                  style={{
                    background: view === 'home' ? '#fff4e3' : 'transparent',
                    color: view === 'home' ? '#f19123' : '#222',
                    fontWeight: 'bold',
                    borderRadius: '8px',
                    border: 'none',
                    padding: '8px 20px',
                    cursor: 'pointer'
                  }}
                  onClick={() => {
                    setVirtualDetails(null);
                    setView('home');
                  }}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  style={{
                    background: view === 'about' ? '#fff4e3' : 'transparent',
                    color: view === 'about' ? '#f19123' : '#222',
                    border: 'none',
                    padding: '8px 22px',
                    cursor: 'pointer',
                    fontWeight: 500
                  }}
                  onClick={() => {
                    setVirtualDetails(null);
                    setView('about');
                  }}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  style={{
                    background: view === 'explore' ? '#fff4e3' : 'transparent',
                    color: view === 'explore' ? '#f19123' : '#222',
                    border: 'none',
                    padding: '8px 22px',
                    cursor: 'pointer',
                    fontWeight: 500
                  }}
                  onClick={() => {
                    setVirtualDetails(null);
                    setView('explore');
                  }}
                >
                  Explore
                </button>
              </li>
              <li>
                <button
                  style={{
                    background: view === 'culture' ? '#fff4e3' : 'transparent',
                    color: view === 'culture' ? '#f19123' : '#222',
                    border: 'none',
                    padding: '8px 22px',
                    cursor: 'pointer',
                    fontWeight: 500
                  }}
                  onClick={() => {
                    setVirtualDetails(null);
                    setView('culture');
                  }}
                >
                  Culture
                </button>
              </li>
              <li>
                <button
                  style={{
                    background: view === 'virtual' ? '#fff4e3' : 'transparent',
                    color: view === 'virtual' ? '#f19123' : '#222',
                    border: 'none',
                    padding: '8px 22px',
                    cursor: 'pointer',
                    fontWeight: 500
                  }}
                  onClick={() => setView('virtual')}
                >
                  Virtual Tours
                </button>
              </li>
              <li>
                <button
                  style={{
                    background: '#ffe6e6',
                    color: '#c0392b',
                    border: '1px solid #c0392b',
                    borderRadius: '20px',
                    padding: '6px 20px',
                    cursor: 'pointer',
                    fontWeight: 600
                  }}
                  onClick={() => {
                    setLoggedIn(false);
                    setVirtualDetails(null);
                    setView('login');
                    setLoginEmail('');
                    setLoginPassword('');
                    setLoginError('');
                  }}
                >
                  Logout
                </button>
              </li>
            </>
          )}

          {!loggedIn && (
            <li>
              <button
                style={{
                  background: view === 'login' ? '#fff4e3' : 'transparent',
                  color: view === 'login' ? '#f19123' : '#222',
                  border: '1px solid #f19123',
                  borderRadius: '20px',
                  padding: '6px 20px',
                  cursor: 'pointer',
                  fontWeight: 600
                }}
                onClick={() => {
                  setVirtualDetails(null);
                  setView('login');
                }}
              >
                Login
              </button>
            </li>
          )}
        </ul>
      </nav>

      {/* Home hero */}
      {loggedIn && view === 'home' && (
        <div
          style={{
            minHeight: 'calc(100vh - 72px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: 'white',
            background: 'linear-gradient(120deg, #e09f3e 0%, #38b000 100%)'
          }}
        >
          <div>
            <h1
              style={{
                fontSize: '5rem',
                fontWeight: '600',
                marginBottom: '30px',
                textShadow: '2px 2px 16px #b07624'
              }}
            >
              Incredible India Heritage
            </h1>
            <h2
              style={{
                fontWeight: 400,
                fontSize: '2rem',
                marginBottom: '36px',
                color: '#f9e29c'
              }}
            >
              Discover the Rich Cultural Legacy of India
            </h2>
            <p
              style={{
                fontSize: '1.38rem',
                maxWidth: '900px',
                margin: '0 auto 44px auto',
                color: '#fffde6'
              }}
            >
              Explore 5000+ years of Indian civilization through interactive virtual tours of iconic
              monuments, temples, forts, and architectural marvels.
            </p>
            <div style={{ display: 'flex', gap: '38px', justifyContent: 'center' }}>
              <button
                style={{
                  background: 'linear-gradient(90deg, #f19123, #38b000)',
                  color: 'white',
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '16px 44px',
                  cursor: 'pointer',
                  boxShadow: '0 3px 18px rgba(0,0,0,0.04)'
                }}
                onClick={() => setView('explore')}
              >
                Explore Now
              </button>
              <button
                style={{
                  background: 'transparent',
                  color: '#f19123',
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  border: '2px solid #f19123',
                  borderRadius: '10px',
                  padding: '16px 44px',
                  cursor: 'pointer'
                }}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Login */}
      {view === 'login' && (
        <div
          style={{
            minHeight: 'calc(100vh - 72px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#f4f5fb'
          }}
        >
          <div
            style={{
              background: '#ffffff',
              borderRadius: '18px',
              padding: '32px 30px 26px 30px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
              width: '360px',
              color: '#333',
              textAlign: 'left'
            }}
          >
            <h2
              style={{
                marginBottom: '8px',
                fontSize: '1.8rem',
                fontWeight: 700,
                color: '#e48622',
                textAlign: 'center'
              }}
            >
              Login
            </h2>
            <p
              style={{
                marginBottom: '20px',
                fontSize: '0.96rem',
                color: '#555',
                textAlign: 'center'
              }}
            >
              Sign in to access your saved monuments and virtual tours.
            </p>

            <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#555' }}>Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              style={{
                width: '100%',
                marginTop: '6px',
                marginBottom: '14px',
                padding: '10px 11px',
                borderRadius: '8px',
                border: '1px solid #ddd',
                fontSize: '0.95rem',
                boxSizing: 'border-box'
              }}
            />

            <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#555' }}>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              style={{
                width: '100%',
                marginTop: '6px',
                marginBottom: '18px',
                padding: '10px 11px',
                borderRadius: '8px',
                border: '1px solid #ddd',
                fontSize: '0.95rem',
                boxSizing: 'border-box'
              }}
            />

            <button
              style={{
                width: '100%',
                background: 'linear-gradient(90deg,#f19123,#38b000)',
                color: '#fff',
                border: 'none',
                borderRadius: '9px',
                padding: '11px 0',
                fontSize: '1.02rem',
                fontWeight: 700,
                cursor: 'pointer',
                marginBottom: '10px'
              }}
              onClick={async () => {
                try {
                  const res = await fetch('http://localhost:5000/api/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      email: loginEmail,
                      password: loginPassword
                    })
                  });
                  const data = await res.json();
                  if (!res.ok) {
                    setLoggedIn(false);
                    setLoginError(
                      data.message || 'Invalid email or password. Please try again.'
                    );
                    return;
                  }
                  setLoggedIn(true);
                  setView('home');
                  setLoginError('');
                } catch (err) {
                  setLoggedIn(false);
                  setLoginError('Network error, please try again.');
                }
              }}
            >
              Login
            </button>

            {loginError && (
              <div
                style={{
                  color: 'red',
                  fontSize: '0.9rem',
                  marginTop: '4px',
                  textAlign: 'center'
                }}
              >
                {loginError}
              </div>
            )}

            <div
              style={{
                fontSize: '0.9rem',
                color: '#777',
                textAlign: 'center',
                marginTop: '6px'
              }}
            >
              New here?{' '}
              <span
                style={{ color: '#e48622', cursor: 'pointer', fontWeight: 600 }}
                onClick={() => setView('signup')}
              >
                Create account
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Sign Up */}
      {view === 'signup' && (
        <div
          style={{
            minHeight: 'calc(100vh - 72px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#f4f5fb'
          }}
        >
          <div
            style={{
              background: '#ffffff',
              borderRadius: '18px',
              padding: '32px 30px 26px 30px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
              width: '380px',
              color: '#333',
              textAlign: 'left'
            }}
          >
            <h2
              style={{
                marginBottom: '8px',
                fontSize: '1.8rem',
                fontWeight: 700,
                color: '#38b000',
                textAlign: 'center'
              }}
            >
              Create account
            </h2>
            <p
              style={{
                marginBottom: '20px',
                fontSize: '0.96rem',
                color: '#555',
                textAlign: 'center'
              }}
            >
              Join to bookmark monuments, build custom tours, and more.
            </p>

            <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#555' }}>Name</label>
            <input
              type="text"
              placeholder="Your name"
              value={signupName}
              onChange={(e) => setSignupName(e.target.value)}
              style={{
                width: '100%',
                marginTop: '6px',
                marginBottom: '14px',
                padding: '10px 11px',
                borderRadius: '8px',
                border: '1px solid #ddd',
                fontSize: '0.95rem',
                boxSizing: 'border-box'
              }}
            />

            <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#555' }}>Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
              style={{
                width: '100%',
                marginTop: '6px',
                marginBottom: '14px',
                padding: '10px 11px',
                borderRadius: '8px',
                border: '1px solid #ddd',
                fontSize: '0.95rem',
                boxSizing: 'border-box'
              }}
            />

            <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#555' }}>Password</label>
            <input
              type="password"
              placeholder="Choose a password"
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
              style={{
                width: '100%',
                marginTop: '6px',
                marginBottom: '18px',
                padding: '10px 11px',
                borderRadius: '8px',
                border: '1px solid #ddd',
                fontSize: '0.95rem',
                boxSizing: 'border-box'
              }}
            />

            <button
              style={{
                width: '100%',
                background: 'linear-gradient(90deg,#38b000,#4cd137)',
                color: '#fff',
                border: 'none',
                borderRadius: '9px',
                padding: '11px 0',
                fontSize: '1.02rem',
                fontWeight: 700,
                cursor: 'pointer',
                marginBottom: '10px'
              }}
              onClick={async () => {
                if (!signupEmail || !signupPassword) {
                  alert('Please enter email and password to create an account.');
                  return;
                }
                try {
                  const res = await fetch('http://localhost:5000/api/auth/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      name: signupName,
                      email: signupEmail,
                      password: signupPassword
                    })
                  });
                  const data = await res.json();
                  if (!res.ok) {
                    alert(data.message || 'Signup failed');
                    return;
                  }
                  alert('Account created successfully! Now login.');
                  setView('login');
                } catch (err) {
                  alert('Network error, please try again.');
                }
              }}
            >
              Sign Up
            </button>

            <div
              style={{
                fontSize: '0.9rem',
                color: '#777',
                textAlign: 'center',
                marginTop: '6px'
              }}
            >
              Already have an account?{' '}
              <span
                style={{ color: '#e48622', cursor: 'pointer', fontWeight: 600 }}
                onClick={() => setView('login')}
              >
                Login
              </span>
            </div>
          </div>
        </div>
      )}

      {/* About */}
      {loggedIn && view === 'about' && (
        <>
          <h2
            style={{
              fontWeight: 700,
              fontSize: '2.6rem',
              textAlign: 'center',
              color: '#e09f3e',
              letterSpacing: '2px',
              margin: '35px 0 10px 0'
            }}
          >
            Featured Monuments
          </h2>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'flex-start',
              padding: '0 0 30px 0'
            }}
          >
            {homeMonuments.map((m, idx) => (
              <MonumentCard
                key={idx}
                {...m}
                onVirtualTour={(
                  details,
                  image,
                  title,
                  location,
                  description,
                  built,
                  architecture,
                  link,
                  videoUrl
                ) => {
                  setVirtualDetails({
                    details,
                    image,
                    title,
                    location,
                    description,
                    built,
                    architecture,
                    link,
                    videoUrl
                  });
                  setView('virtual');
                }}
              />
            ))}
          </div>
          <div style={{ textAlign: 'center', margin: '28px 0 40px 0' }}>
            <button
              style={{
                background: 'linear-gradient(90deg,#f19123,#38b000)',
                color: 'white',
                fontSize: '1.35rem',
                fontWeight: 'bold',
                border: 'none',
                borderRadius: '10px',
                padding: '18px 48px',
                cursor: 'pointer',
                boxShadow: '0 3px 20px rgba(0,0,0,0.10)',
                letterSpacing: '1px'
              }}
              onClick={() => setView('explore')}
            >
              Explore All Monuments
            </button>
          </div>
        </>
      )}

      {/* Explore */}
      {loggedIn && view === 'explore' && (
        <>
          <h2
            style={{
              fontWeight: 700,
              fontSize: '2.6rem',
              textAlign: 'center',
              color: '#e09f3e',
              letterSpacing: '2px',
              margin: '28px 0 10px 0'
            }}
          >
            All Indian Monuments
          </h2>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'flex-start',
              padding: '0 0 50px 0'
            }}
          >
            {allMonuments.map((m, idx) => (
              <MonumentCard
                key={idx}
                {...m}
                onVirtualTour={(
                  details,
                  image,
                  title,
                  location,
                  description,
                  built,
                  architecture,
                  link,
                  videoUrl
                ) => {
                  setVirtualDetails({
                    details,
                    image,
                    title,
                    location,
                    description,
                    built,
                    architecture,
                    link,
                    videoUrl
                  });
                  setView('virtual');
                }}
              />
            ))}
          </div>
        </>
      )}

      {/* Culture with card-style dances, music, festivals */}
      {loggedIn && view === 'culture' && (
        <div
          style={{
            maxWidth: '1200px',
            margin: '30px auto 40px auto',
            padding: '10px 20px'
          }}
        >
          <h2
            style={{
              fontWeight: 700,
              fontSize: '2.4rem',
              textAlign: 'center',
              color: '#e09f3e',
              letterSpacing: '2px',
              marginBottom: '10px'
            }}
          >
            Cultural Heritage of India
          </h2>
          <p
            style={{
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto 28px auto',
              fontSize: '1.05rem',
              color: '#555'
            }}
          >
            Explore India&apos;s living culture through classical and folk dances, diverse music
            traditions, and vibrant festivals.
          </p>

          {/* Dances as cards */}
          <h3
            style={{
              fontSize: '1.9rem',
              margin: '0 0 14px 0',
              color: '#d97706',
              fontWeight: 700
            }}
          >
            Cultural Dances
          </h3>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '24px',
              marginBottom: '40px'
            }}
          >
            {culturalDances.map((d, i) => (
              <div
                key={i}
                style={{
                  background: '#fff',
                  borderRadius: '20px',
                  boxShadow: '0 2px 18px rgba(60,60,60,0.11)',
                  width: '260px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: d.videoUrl ? 'pointer' : 'default'
                }}
                onClick={() => {
                  if (d.videoUrl) {
                    setSelectedCultureVideo({ title: d.name, videoUrl: d.videoUrl });
                  }
                }}
              >
                {d.image && (
                  <img
                    src={d.image}
                    alt={d.name}
                    style={{ width: '100%', height: '170px', objectFit: 'cover' }}
                  />
                )}
                <div style={{ padding: '16px 18px 14px 18px' }}>
                  <div
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: '#222',
                      marginBottom: 6
                    }}
                  >
                    {d.name}
                  </div>
                  <div style={{ color: '#e09f3e', fontWeight: 600, marginBottom: 6 }}>
                    {d.state} • {d.style}
                  </div>
                  <div style={{ fontSize: '0.98rem', color: '#333', marginBottom: 8 }}>
                    {d.highlight}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Music as cards */}
          <h3
            style={{
              fontSize: '1.9rem',
              margin: '0 0 14px 0',
              color: '#15803d',
              fontWeight: 700
            }}
          >
            Cultural Music
          </h3>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '24px',
              marginBottom: '40px'
            }}
          >
            {culturalMusic.map((m, i) => (
              <div
                key={i}
                style={{
                  background: '#fff',
                  borderRadius: '20px',
                  boxShadow: '0 2px 18px rgba(60,60,60,0.11)',
                  width: '260px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: m.videoUrl ? 'pointer' : 'default'
                }}
                onClick={() => {
                  if (m.videoUrl) {
                    setSelectedCultureVideo({ title: m.name, videoUrl: m.videoUrl });
                  }
                }}
              >
                {m.image && (
                  <img
                    src={m.image}
                    alt={m.name}
                    style={{ width: '100%', height: '170px', objectFit: 'cover' }}
                  />
                )}
                <div style={{ padding: '16px 18px 14px 18px' }}>
                  <div
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: '#222',
                      marginBottom: 6
                    }}
                  >
                    {m.name}
                  </div>
                  <div style={{ color: '#15803d', fontWeight: 600, marginBottom: 6 }}>
                    {m.region}
                  </div>
                  <div style={{ fontSize: '0.98rem', color: '#333', marginBottom: 8 }}>
                    {m.feature}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Festivals as cards */}
          <h3
            style={{
              fontSize: '1.9rem',
              margin: '0 0 14px 0',
              color: '#2563eb',
              fontWeight: 700
            }}
          >
            Traditional Festivals
          </h3>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '24px',
              marginBottom: '20px'
            }}
          >
            {culturalFestivals.map((f, i) => (
              <div
                key={i}
                style={{
                  background: '#fff',
                  borderRadius: '20px',
                  boxShadow: '0 2px 18px rgba(60,60,60,0.11)',
                  width: '260px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: f.videoUrl ? 'pointer' : 'default'
                }}
                onClick={() => {
                  if (f.videoUrl) {
                    setSelectedCultureVideo({ title: f.name, videoUrl: f.videoUrl });
                  }
                }}
              >
                {f.image && (
                  <img
                    src={f.image}
                    alt={f.name}
                    style={{ width: '100%', height: '170px', objectFit: 'cover' }}
                  />
                )}
                <div style={{ padding: '16px 18px 14px 18px' }}>
                  <div
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: '#222',
                      marginBottom: 6
                    }}
                  >
                    {f.name}
                  </div>
                  <div style={{ color: '#2563eb', fontWeight: 600, marginBottom: 6 }}>
                    {f.month}
                  </div>
                  <div style={{ fontSize: '0.98rem', color: '#333', marginBottom: 8 }}>
                    {f.theme}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Virtual Tours */}
      {loggedIn && view === 'virtual' && virtualDetails && (
        <div
          style={{
            maxWidth: '700px',
            margin: '40px auto',
            background: '#eef7ff',
            padding: '40px 38px',
            borderRadius: '20px',
            boxShadow: '0 2px 17px rgba(60,60,60,0.07)'
          }}
        >
          {virtualDetails.videoUrl && (
            <div style={{ marginBottom: '18px' }}>
              <iframe
                width="100%"
                height="360"
                src={virtualDetails.videoUrl}
                title={virtualDetails.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}

          <h2
            style={{
              color: '#196dff',
              fontWeight: 'bold',
              fontSize: '2.15rem'
            }}
          >
            {virtualDetails.title}
          </h2>
          <h3
            style={{
              color: '#e09f3e',
              fontWeight: 'bold',
              fontSize: '1.25rem',
              marginBottom: '5px'
            }}
          >
            {virtualDetails.location}
          </h3>
          <div style={{ margin: '17px 0', fontSize: '1.09rem' }}>
            <div>
              <b>Description:</b> {virtualDetails.details.description}
            </div>
            <div style={{ marginTop: '17px' }}>
              <b>Historical Significance:</b> <br />
              {virtualDetails.details.history}
            </div>
            <div style={{ marginTop: '17px' }}>
              <b>Cultural Importance:</b> <br />
              {virtualDetails.details.culture}
            </div>
            <div
              style={{
                display: 'flex',
                gap: '24px',
                marginTop: '12px',
                flexWrap: 'wrap'
              }}
            >
              <div>
                <b>Year Built:</b> {virtualDetails.built}
              </div>
              <div>
                <b>Style:</b> {virtualDetails.architecture}
              </div>
            </div>
          </div>
          <button
            style={{
              marginTop: '18px',
              background: '#222',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: '1.09rem',
              padding: '10px 34px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer'
            }}
            onClick={() => setView('explore')}
          >
            Back to Explore
          </button>
        </div>
      )}

      {loggedIn && view === 'virtual' && !virtualDetails && (
        <div
          style={{
            maxWidth: '700px',
            margin: '40px auto',
            background: '#eef7ff',
            padding: '40px 38px',
            borderRadius: '20px',
            boxShadow: '0 2px 17px rgba(60,60,60,0.07)'
          }}
        >
          <h2
            style={{
              color: '#196dff',
              fontWeight: 'bold',
              fontSize: '2.15rem',
              marginBottom: '17px'
            }}
          >
            Virtual Tours
          </h2>
          <p style={{ fontSize: '1.13rem', marginBottom: '9px', color: '#1b4c7f' }}>
            Upcoming interactive virtual tours of India’s historical marvels will be featured here
            soon.
          </p>
          <p style={{ fontSize: '1.05rem', color: '#2466a6' }}>
            Stay tuned for immersive digital experiences!
          </p>
        </div>
      )}

      {/* Culture video modal */}
      {selectedCultureVideo && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000
          }}
          onClick={() => setSelectedCultureVideo(null)}
        >
          <div
            style={{ width: '80%', maxWidth: '800px', background: '#000', borderRadius: '10px' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '8px 12px',
                color: '#fff',
                alignItems: 'center'
              }}
            >
              <span>{selectedCultureVideo.title}</span>
              <button
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#fff',
                  fontSize: '1.4rem',
                  cursor: 'pointer'
                }}
                onClick={() => setSelectedCultureVideo(null)}
              >
                ×
              </button>
            </div>
            <iframe
              width="100%"
              height="450"
              src={selectedCultureVideo.videoUrl}
              title={selectedCultureVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
