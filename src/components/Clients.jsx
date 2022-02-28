import React from 'react';
import { useState } from 'react';
import PhotoEmily from '../assets/image-emily.jpg';
import PhotoThomas from '../assets/image-thomas.jpg';
import PhotoJennie from '../assets/image-jennie.jpg';
import Client from './Client';
import '../style/clients.css'

const Clients = () => {
    const [client, setClient] = useState([
        {photo: PhotoEmily,
        info: " We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
        name: "Emily R.",
        position: "Marketing Director",
        },
        {photo: PhotoThomas,
        info: "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
        name: "Thomas S.",
        position: "Chief Operating Officer",
        },
        {photo: PhotoJennie,
        info: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
        name: "Jennie F.",
        position: "Business Owner",
        }
    ]);

  return (
    <div className="comments">
        <div className="comments-title">
            Client testimonials
        </div>
        <div className="comments-clients">
            {client.map(client => <Client clientData={client}/>)}
        </div>
    </div>
  );
};

export default Clients;
