import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { statisticService } from '../services/statistics';

const SureyFormResult = () => {
  const formId = +useParams().id;
  console.log(formId);
  const [data, setData] = useState([]);
  useEffect(() => {
    statisticService.getBarData(formId)
      .then(barData => {
        console.log(barData);
        setData(barData);
      });
  }, []);

  // test data
  // const data = [

  //   {
  //     questionOptionName: 'Page E',
  //     percentage: 100,
  //     selectedPerson: 100
  //   },
  //   {
  //     questionOptionName: 'Page F',
  //     percentage: 50,
  //     selectedPerson: 157
  //   },
  //   {
  //     questionOptionName: 'Page G',
  //     percentage: 100,
  //     selectedPerson: 183
  //   },
  //   {
  //     questionOptionName: 'Page G',
  //     percentage: 100,
  //     selectedPerson: 183
  //   },
  //   {
  //     questionOptionName: 'Page G',
  //     percentage: 100,
  //     selectedPerson: 183
  //   },
  //   {
  //     questionOptionName: 'Page G',
  //     percentage: 100,
  //     selectedPerson: 183
  //   },
  //   {
  //     questionOptionName: 'Page G',
  //     percentage: 100,
  //     selectedPerson: 183
  //   },
  //   {
  //     questionOptionName: 'Page G',
  //     percentage: 100,
  //     selectedPerson: 183
  //   },
  //   {
  //     questionOptionName: 'Page G',
  //     percentage: 100,
  //     selectedPerson: 183
  //   }

  // ];
  return (
    <div className='container h-screen mx-auto px-3' >
      <ResponsiveContainer width='70%' height='70%'>
        {/* width={1250} height={550} */}
        <BarChart className='mt-10' data={data}  >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="questionOptionName" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="percentage" fill="#ffaf65" />
          <Bar dataKey="selectedPerson" fill="#581b98" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SureyFormResult;