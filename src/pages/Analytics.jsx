import React from "react";

const Analytics = () => {
  return (
    <div className="flex h-screen" style={{ backgroundColor: "#262651", color: "#FFFFFF" }}>
      {/* Sidebar Section */}
      <aside className="w-1/5 p-4" style={{ backgroundColor: "#5F51D7" }}>
        <div className="text-lg font-bold mb-6">BESTCASINO</div>
        <ul className="space-y-4">
          <li>Your Favorites</li>
          <li>In-House Games</li>
          <li>Dashboard Casino</li>
          <li>Casino</li>
          <li>Slots</li>
          <li>Live Casino</li>
          <li>Recent</li>
          <li>Tournaments</li>
          <li>Referral</li>
          <li>NFT</li>
        </ul>
        <div className="mt-10">Other Information</div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Level Section */}
        <section
          className="p-6 rounded-lg mb-6"
          style={{ backgroundColor: "#4CD1FE" }}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">1 Level</h2>
            <p>10,000 Games</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-4xl font-bold">02:10:21</div>
            <div className="flex space-x-4">
              {/* Level 1 Unlocked */}
              <div className="text-center">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Level 1 Profile"
                  className="w-12 h-12 rounded-full mx-auto border-4 border-yellow-400"
                />
                <p className="mt-2 text-sm">Level 1</p>
                <p style={{ color: "#FFB932" }}>500 Coins</p>
              </div>
              {/* Level 2 Unlocked */}
              <div className="text-center">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Level 2 Profile"
                  className="w-12 h-12 rounded-full mx-auto border-4 border-yellow-400"
                />
                <p className="mt-2 text-sm">Level 2</p>
                <p style={{ color: "#FFB932" }}>1000 Coins</p>
              </div>
            </div>
          </div>
        </section>

        {/* Leaderboard Section */}
        <section
          className="p-6 rounded-lg mb-6"
          style={{ backgroundColor: "#CD8EFF" }}
        >
          <h3 className="text-lg font-bold mb-4">Leadership</h3>
          <ul className="space-y-4">
            <li className="flex justify-between">
              <span className="font-bold">1</span>
              <span className="flex-1 ml-4">WildPapa442</span>
              <span>Adventurer - LV3</span>
            </li>
            <li className="flex justify-between">
              <span className="font-bold">2</span>
              <span className="flex-1 ml-4">Daradt</span>
              <span>Adventurer - LV3</span>
            </li>
            <li className="flex justify-between">
              <span className="font-bold">3</span>
              <span className="flex-1 ml-4">Livers</span>
              <span>Adventurer - LV3</span>
            </li>
            <li className="flex justify-between">
              <span className="font-bold">4</span>
              <span className="flex-1 ml-4">Dsdoapm</span>
              <span>Adventurer - LV3</span>
            </li>
            <li className="flex justify-between">
              <span className="font-bold">5</span>
              <span className="flex-1 ml-4">Comon4lk</span>
              <span>Adventurer - LV3</span>
            </li>
          </ul>
        </section>

        {/* Levels Section */}
        <section
          className="p-6 rounded-lg"
          style={{ backgroundColor: "#5F51D7" }}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">Levels</h3>
            <button
              className="px-4 py-2 rounded-lg"
              style={{ backgroundColor: "#4CD1FE" }}
            >
              Document
            </button>
          </div>
          <div className="space-y-6">
            {/* Level 1 */}
            <div className="flex items-center p-4 rounded-lg" style={{ backgroundColor: "#262651" }}>
              <div
                className="w-8 h-8 flex items-center justify-center rounded-full font-bold"
                style={{ backgroundColor: "#FFB932" }}
              >
                1
              </div>
              <div className="flex-1 ml-4">
                <p className="font-bold">Jhon Jhonson7</p>
              </div>
              <p style={{ color: "#FFB932" }}>$100,000</p>
            </div>
            {/* Repeat for Levels 2 and 3 */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Analytics;
