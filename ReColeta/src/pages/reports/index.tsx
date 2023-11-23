import React, { useState, ChangeEvent, MouseEvent } from 'react';
// import './style/style.css';
import { Header } from '../../components/Header';
import ReportScreenComponent from '../../components/ReportScreenInterface';


// ...

export const ReportPage: React.FC = () => {
  const [selectedReportType, setSelectedReportType] = useState<string>('option1');
  const [reportOutput, setReportOutput] = useState<string>('');
  return (
    <>
      <Header />
      <ReportScreenComponent selectedReportType={selectedReportType} />
    </>
  );
}
