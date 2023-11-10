import React from 'react';
import BurnDownHeader from '../features/burndown/BurnDownHeader';
import BurnDownMain from '../features/burndown/BurnDownMain';
import { Chart, Doughnut, Line } from 'react-chartjs-2';
import { BiLineChartDown, BiSolidPieChart } from 'react-icons/bi';
import { TiArrowBackOutline } from 'react-icons/ti';
import styled from 'styled-components';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { useQuery } from 'react-query';
import { fetchBurnDownData } from '../apis/apiBurnDown';
import { useBurnDown } from '../store/BurnDownStore/store';
import axios from 'axios';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
);
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: auto;
  width: 100%;
`;
const ContainerBox = styled.div`
  /* overflow-x: scroll;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #d4d4d4;
  } */
  width: 400px;
  height: 50%;
  max-width: 50%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

// const data = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//   datasets: [
//     {
//       type: 'line',
//       label: 'Dataset 1',
//       borderColor: 'rgb(54, 162, 235)',
//       borderWidth: 2,
//       data: [1, 2, 3, 4, 5],
//     },
//     {
//       type: 'bar',
//       label: 'Dataset 2',
//       backgroundColor: 'rgb(255, 99, 132)',
//       data: [1, 2, 3, 4, 5, 6],
//       borderColor: 'red',
//       borderWidth: 2,
//     },
//     {
//       type: 'bar',
//       label: 'Dataset 3',
//       backgroundColor: 'rgb(75, 192, 192)',
//       data: [1, 2, 3, 4, 5, 6],
//     },
//   ],
// };

export default function BurnDown() {
  const donutData = {
    labels: ['입출금', '증권', '기타'],
    datasets: [
      {
        data: [40, 20, 35],
        backgroundColor: ['#ffeb9b', '#b5f2ff', '#c5f2ba'],
        borderColor: ['#ffeb9b', '#b5f2ff', '#c5f2ba'],
      },
    ],
  };

  const { burnDownObj, setBurnDownObj } = useBurnDown((state) => state);
  console.log('Store sprint_no:', burnDownObj.sprint_no);

  const { data: burnDownData, isLoading: burnDownLoading } = useQuery(
    ['getBurnDown', burnDownObj.sprint_no],
    async () => {
      const res = await axios.get(
        `http://www.peernow.site/api/kanban/burndown?sprint_no=${burnDownObj.sprint_no}`,
      );
      return res.data;
    },
    {
      onSuccess: (data) => {
        console.log('Success : ', data);
        setBurnDownObj(data?.datalist);
      },
    },
  );

  console.log('getBurnDown data: ', burnDownObj);
  const Options = {};

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row-reverse items-center">
        <p className="p-1 mt-2 font-bold hover:scale-105">뒤로가기</p>
        <TiArrowBackOutline className="cursor-pointer w-7 h-7 hover:scale-125"></TiArrowBackOutline>
      </div>

      <div className="flex flex-row items-center mt-2 mb-3 text-xl font-bold">
        <BiLineChartDown className="text-4xl text-slate-600"></BiLineChartDown>
        <p className="ml-3 ">스프린트 번다운 차트</p>
      </div>

      <div className="flex flex-row w-4/6 h-3/6 mb-7">
        <Line
          datasetIdKey="id"
          responsive={false}
          width={400}
          height={300}
          options={{ maintainAspectRatio: false }}
          data={{
            labels: [
              '2021-01-01',
              '2021-01-02',
              '2021-01-03',
              '2021-01-04',
              '2021-01-05',
              '2021-01-06',
              '2021-01-07',
            ],
            datasets: [
              {
                id: 1,
                fill: true,
                label: '총 스프린트 작업',
                data: [20, 19, 13, 0, 0, 0, 0],
                backgroundColor: 'rgba(153,255,51,0.6)',
                tension: 0.5,
              },
              {
                id: 2,
                label: '완료한 스프린트 작업',
                data: [5, 6, 7, 10, 4, 3, 1],
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgba(255, 99, 132, 0.6)',
                fill: true,
                tension: 0.5,
              },
            ],
          }}
        />
        <div className="flex flex-col items-center justify-center w-full mb-6">
          <p className="flex items-center justify-center mb-2 mr-3 font-bold w-96">
            <BiSolidPieChart className="mr-3 text-2xl" />
            스프린트 진행률
          </p>
          <Doughnut data={donutData} options={Options}></Doughnut>
        </div>
      </div>

      <div className="mt-1 mb-3 text-xl font-bold">
        <p>스프린트별 번다운 차트</p>
      </div>

      <div className="flex flex-row w-1/4 mb-3 text-lg font-bold h-2/6">
        <Line
          datasetIdKey="id"
          responsive={false}
          width={1}
          height={1}
          options={{ maintainAspectRatio: false }}
          data={{
            labels: [
              '2021-01-01',
              '2021-01-02',
              '2021-01-03',
              '2021-01-04',
              '2021-01-05',
              '2021-01-06',
              '2021-01-07',
            ],
            datasets: [
              {
                id: 1,
                label: '총 스프린트 작업',
                data: [12, 13, 15, 16, 19, 20, 21],
                backgroundColor: 'rgba(153,255,51,0.6)',
                fill: true,
                tension: 0.5,
              },
              {
                id: 2,
                label: '완료한 스프린트 작업',
                data: [5, 6, 7, 10, 4, 3, 1],
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgba(255, 99, 132, 0.6)',
                fill: true,
                tension: 0.5,
              },
            ],
          }}
        />
        <Line
          datasetIdKey="id"
          responsive={false}
          width={1}
          height={1}
          options={{ maintainAspectRatio: false }}
          data={{
            labels: [
              '2021-01-01',
              '2021-01-02',
              '2021-01-03',
              '2021-01-04',
              '2021-01-05',
              '2021-01-06',
              '2021-01-07',
            ],
            datasets: [
              {
                id: 1,
                label: '총 스프린트 작업',
                data: [12, 13, 15, 16, 19, 20, 21],
                backgroundColor: 'rgba(153,255,51,0.6)',
                fill: true,
                tension: 0.5,
              },
              {
                id: 2,
                label: '완료한 스프린트 작업',
                data: [5, 6, 7, 10, 4, 3, 1],
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgba(255, 99, 132, 0.6)',
                fill: true,
                tension: 0.5,
              },
            ],
          }}
        />

        <Line
          datasetIdKey="id"
          responsive={false}
          width={1}
          height={1}
          options={{ maintainAspectRatio: false }}
          data={{
            labels: [
              '2021-01-01',
              '2021-01-02',
              '2021-01-03',
              '2021-01-04',
              '2021-01-05',
              '2021-01-06',
              '2021-01-07',
            ],
            datasets: [
              {
                id: 1,
                label: '총 스프린트 작업',
                data: [12, 13, 15, 16, 19, 20, 21],
                backgroundColor: 'rgba(153,255,51,0.6)',
                fill: true,
                tension: 0.5,
              },
              {
                id: 2,
                label: '완료한 스프린트 작업',
                data: [5, 6, 7, 10, 4, 3, 1],
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgba(255, 99, 132, 0.6)',
                fill: true,
                tension: 0.5,
              },
            ],
          }}
        />
        <Line
          datasetIdKey="id"
          responsive={false}
          width={1}
          height={1}
          options={{ maintainAspectRatio: false }}
          data={{
            labels: [
              '2021-01-01',
              '2021-01-02',
              '2021-01-03',
              '2021-01-04',
              '2021-01-05',
              '2021-01-06',
              '2021-01-07',
            ],
            datasets: [
              {
                id: 1,
                label: '총 스프린트 작업',
                data: [12, 13, 15, 16, 19, 20, 21],
                backgroundColor: 'rgba(153,255,51,0.6)',
                fill: true,
                tension: 0.5,
              },
              {
                id: 2,
                label: '완료한 스프린트 작업',
                data: [5, 6, 7, 10, 4, 3, 1],
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgba(255, 99, 132, 0.6)',
                fill: true,
                tension: 0.5,
              },
            ],
          }}
        />
      </div>
    </div>
  );
}
