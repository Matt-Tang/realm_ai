import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('2021-04-04T00:00:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current Age of Group 38',
    value: <Age />,
  },
  {
    key: 'meetingStart',
    label: 'First Meeting',
    value: 'February 28, 2021',
  },
  {
    key: 'meetingEnd',
    label: 'Last Meeting',
    value: 'March 31, 2022',
  },
  {
    key: 'meetingTotal',
    label: 'Total Meetings',
    value: '35',
  },
  {
    key: 'hoursTotal',
    label: 'Total Hours Spent',
    value: '600',
  },
];

export default data;
