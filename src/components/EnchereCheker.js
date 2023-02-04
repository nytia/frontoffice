import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EnchereChecker() {
  const [eventStatus, setEventStatus] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      axios.post('https://s5final-production.up.railway.app/cloturer')
        .then(response => {
          setEventStatus(response.data.status);
        })
        .catch(error => {
          console.error(error);
        });
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {/* { eventStatus === 'completed' ? 'Event completed' : 'Event in progress' } */}
    </div>
  );
}

export default EnchereChecker;
