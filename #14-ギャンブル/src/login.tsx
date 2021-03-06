import * as React from "react";
import { RouterProps } from "react-router";

import bedealer from "./img/bedealer.png";
import beplayer from "./img/beplayer.png";

export const Top: React.SFC<RouterProps> = props => {
  function bePlayer() {
    props.history.push("/player-gamelist");
  }

  function beDealer() {
    props.history.push("/deal-list");
  }

  return (
    <div>
      <button>
        <img src={beplayer} onClick={bePlayer} />
      </button>
      <button>
        <img src={bedealer} onClick={beDealer} />
      </button>
    </div>
  );
};