import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  
  const [botData, setBotData] = useState([]);
  const [botArmy, setBotArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((res) => res.json())
      .then((data) => setBotData(data));
  }, []);

  return (
    <div>
      <YourBotArmy
        botArmy={botArmy}
        setBotArmy={setBotArmy}
        setBotData={setBotData}
      />
      <BotCollection
        bots={botData}
        setBotArmy={setBotArmy}
        botArmy={botArmy}
        setBotData={setBotData}
      />
    </div>
  );
}

export default BotsPage;