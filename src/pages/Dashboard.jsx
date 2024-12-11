import React from 'react';
import Weather from '../components/Weather';
import Calendar from '../components/Calendar';
import Quotes from '../components/Quotes';
import News from '../components/News';
import ToDo from '../components/Todo_two';

function Dashboard() {
  return (
    <div>
      <h1>Plan your Public Holidays</h1>
      <Weather />
      <Calendar />
      <Quotes />
      <News />
      <ToDo />
    </div>
  );
}

export default Dashboard;
