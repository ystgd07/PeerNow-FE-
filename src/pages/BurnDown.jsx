import React from 'react';
import { Chart, Doughnut, Line, Bar } from 'react-chartjs-2';
import { BiLineChartDown, BiSolidPieChart } from 'react-icons/bi';
import { TiArrowBackOutline } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';
import { addDays, eachDayOfInterval, format } from 'date-fns';
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
import { useBurnDown } from '../store/BurnDownStore/store';
import axios from 'axios';
import {
  AllBacklogOfThisPjt,
  useBackLogPageRes,
  useProjectInBackLog,
} from '../store/BackLogStore/store';

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

// 스프린트 진행률
export default function BurnDown() {
  const navigate = useNavigate();
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
  const { pjtData } = useProjectInBackLog((state) => state);
  const { currentProjectNumber } = useBackLogPageRes((state) => state);
  const { backlogData } = AllBacklogOfThisPjt((state) => state);

  //
  console.log('Store sprint_no:', burnDownObj?.sprint_no);
  console.log('Store burnDownObj:', burnDownObj);
  console.log('Store backlogData:', backlogData);
  console.log('Store pjtData?.start_date:', pjtData);

  // 전체 스프린트의 날짜구하기
  const start_date = new Date(pjtData[currentProjectNumber]?.start_date);
  const end_date = new Date(pjtData[currentProjectNumber]?.end_date);
  const allDates = eachDayOfInterval({ start: start_date, end: end_date });
  const formattedAllDates = allDates.map((date) => format(date, 'yyyy-MM-dd'));
  console.log('formattedAllDates:', formattedAllDates);

  const Options = {};

  const today = new Date();

  return (
    <div className="flex flex-col w-full p-5">
      <div
        className="flex flex-row-reverse items-center text-gray-600 mr-3"
        onClick={() => navigate(-1)}
      >
        <p className="p-1 mt-2 font-bold hover:scale-105">뒤로가기</p>
        <TiArrowBackOutline className="cursor-pointer w-7 h-7 hover:scale-125"></TiArrowBackOutline>
      </div>

      {/*  1. 최근 일주일 치 번다운 차트 - 오늘 날짜 기준 */}
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
            labels: [...formattedAllDates],
            datasets: [
              //test1
              {
                id: 1,
                fill: true,
                label: '전체 1번 스프린트 백로그',
                data: [20, 16, 13],
                backgroundColor: 'rgba(153,255,51,0.6)',
                borderColor: '#ececec',
                tension: 0.5,
              },
              {
                id: 1,
                label: '남은 1번 스프린트 작업',
                data: [20, 5, 2],
                backgroundColor: 'rgba(153,255,51,0.6)',
                borderColor: 'rgba(153,255,51,0.6)',
                tension: 0.5,
              },
              //test2
              {
                id: 2,
                fill: true,
                label: '전체 3번 스프린트 백로그',
                data: [null, null, 8, 6, 4, 2, 0],
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: '#ececec',
                tension: 0.5,
              },
              {
                id: 2,
                label: '남은 3번 스프린트 작업',
                data: [null, null, 6, 4, 5, 2, 0],
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgba(255, 99, 132, 0.6)',
                fill: true,
                tension: 0.5,
              },
            ],
          }}
        />

        {/* 2. */}
        <div className="flex flex-col items-center justify-center w-full mb-6">
          <p className="flex items-center justify-center mb-2 mr-3 font-bold w-96">
            <BiSolidPieChart className="mr-3 text-2xl" />
            스프린트 진행률
          </p>
          <Doughnut data={donutData} options={Options}></Doughnut>
        </div>
      </div>

      {/* 날짜에 맞는 백로그 갯수 */}
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
