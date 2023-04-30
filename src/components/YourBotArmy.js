import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ botArmy, setBotArmy }) {
  

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {}
          Your Bot Army
          {botArmy.map((bot) => (
            <BotCard
              key={bot.id}
              bot={bot}
              botArmy={botArmy}
              setBotArmy={setBotArmy}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;