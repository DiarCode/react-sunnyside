import React from 'react';
import '../style/client.css'

const Client = ({clientData}) => {
  return (
      <div className="client">
          <div className="client-photo">
              <img src={clientData.photo} alt="client"/>
          </div>
          <div className="client-info">{clientData.info}</div>
          <div className="client-name">{clientData.name}</div>
          <div className="client-pos">{clientData.position}</div>
      </div>
  );
};

export default Client;
