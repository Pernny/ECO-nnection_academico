import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Pagination } from 'react-bootstrap';
import { getAllUserData } from '../../api/apiClient';


interface Item {
  id: number;
  name: string;
  address?: string;
  product?: string;
  category?: string;
  quantity?: number;
  price?: number;
  [key: string]: string | number | undefined;
}

interface ReportScreenComponentProps {
  selectedReportType: string;
}

const ReportScreenComponent: React.FC<ReportScreenComponentProps> = () => {
  const [data, setData] = useState<Item[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllUserData();
        console.log(response)
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  let columns: string[] = ['id', 'name', 'address', 'product']; // Adjust based on your data structure

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <Container>
      <Row>
        <Col>
          <h1>Relatórios</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <table className="table">
            <thead>
              <tr>
                {columns.map((col) => (
                  <th key={col}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((item) => (
                <tr key={item.id}>
                  {columns.map((col) => (
                    <td key={col}>{item[col]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination>
            <Pagination.Prev
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            />
            {Array.from({ length: totalPages }).map((_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            />
          </Pagination>
        </Col>
      </Row>
    </Container>
  );
};

export default ReportScreenComponent;
