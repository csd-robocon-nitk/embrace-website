import React, { useState } from 'react';
import './MapTabs.css'

function MapTabSystem() {
  const [activeTab, setActiveTab] = useState('dakshin-kannada');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="content">
      <div className="tab-labels">
        <div
          className={`tab-label ${activeTab === 'dakshin-kannada' ? 'active' : ''}`}
          onClick={() => handleTabClick('dakshin-kannada')}
        >
          Dakshin Kannada
        </div>
        <div
          className={`tab-label ${activeTab === 'udupi' ? 'active' : ''}`}
          onClick={() => handleTabClick('udupi')}
        >
          Udupi
        </div>
        <div
          className={`tab-label ${activeTab === 'kodagu' ? 'active' : ''}`}
          onClick={() => handleTabClick('kodagu')}
        >
          Kodagu
        </div>
        <div
          className={`tab-label ${activeTab === 'uttar-kannada' ? 'active' : ''}`}
          onClick={() => handleTabClick('uttar-kannada')}
        >
          Uttar Kannada
        </div>
      </div>
        <br />
      <div className="map-container">
        <div className={`map ${activeTab === 'dakshin-kannada' ? 'active' : ''}`}>
          <iframe
            title="Google Map Dakshin Kannada"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497959.96680992155!2d74.89381811628053!3d12.823088589944398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a4d2bfd16bf%3A0x2f8dd00b242bfb5c!2sDakshina%20Kannada%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1696849662854!5m2!1sen!2sin"
            width="350"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className={`map ${activeTab === 'udupi' ? 'active' : ''}`}>
          <iframe
            title="Google Map Udupi"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62116.72716485197!2d74.70589126132118!3d13.331888796393878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcbb69938f41cf%3A0xcccc99e431850143!2sUdupi%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1696850331593!5m2!1sen!2sin"
            width="350"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className={`map ${activeTab === 'kodagu' ? 'active' : ''}`}>
          <iframe
            title="Google Map Kodagu"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997630.3584183091!2d75.11794409159654!3d12.383361226527159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5aaa23e0be16b%3A0x50fd1f82359ea370!2sKodagu%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1696850378101!5m2!1sen!2sin"
            width="350"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className={`map ${activeTab === 'uttar-kannada' ? 'active' : ''}`}>
          <iframe
            title="Google Map Uttar Kannada"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d987845.547546735!2d73.9189582344548!3d14.725497135917804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbe60d0fcdf330b%3A0x4e56736987042174!2sUttara%20Kannada%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1696850461634!5m2!1sen!2sin"
            width="350"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default MapTabSystem;
