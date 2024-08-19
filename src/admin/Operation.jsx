
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { rtdb } from '../firebase.config';
import { ref, onValue } from "firebase/database";
import '../styles/operation.css';

const BinStatus = ({ binNumber, isActive, binStatus, loading, error }) => {
  return (
    <Col lg="4" className="mb-4">
      <div className="bin__box">
        <h5>Green Treasure Bin Status #{binNumber.toString().padStart(2, '0')}</h5>
        {!isActive ? (
          <span className="text-muted">Not Activated</span>
        ) : loading ? (
          <span>Loading...</span>
        ) : error ? (
          <span className="text-danger">Error: {error}</span>
        ) : (
          <span className={binStatus ? 'text-danger' : 'text-success'}>
            {binStatus ? 'Full' : 'Not Full'}
          </span>
        )}
      </div>
    </Col>
  );
};

const Operation = () => {
  const [bins, setBins] = useState([
    { number: 1, isActive: true, status: null, loading: true, error: null },
    { number: 2, isActive: false },
    { number: 3, isActive: false },
    { number: 4, isActive: false },
  ]);

  useEffect(() => {
    console.log('Initializing Firebase listener');
    const binRef = ref(rtdb, 'bins/GreenTreasureBin_01/isFull');

    const unsubscribe = onValue(binRef, (snapshot) => {
      console.log('Firebase snapshot received:', snapshot.val());
      if (snapshot.exists()) {
        const isFull = snapshot.val();
        console.log('isFull value:', isFull);
        setBins(prevBins => prevBins.map(bin => 
          bin.number === 1 ? { ...bin, status: isFull, loading: false, error: null } : bin
        ));
      } else {
        console.log('No data available');
        setBins(prevBins => prevBins.map(bin => 
          bin.number === 1 ? { ...bin, loading: false, error: 'No data available' } : bin
        ));
      }
    }, (error) => {
      console.error('Firebase error:', error);
      setBins(prevBins => prevBins.map(bin => 
        bin.number === 1 ? { ...bin, loading: false, error: error.message } : bin
      ));
    });

    return () => {
      console.log('Unsubscribing from Firebase listener');
      unsubscribe();
    };
  }, []);

  return (
    <Container>
      <Row>
        <Col lg="12">
          <h4 className="fw-normal mb-4">Operation Dashboard</h4>
        </Col>
        {bins.map(bin => (
          <BinStatus
            key={bin.number}
            binNumber={bin.number}
            isActive={bin.isActive}
            binStatus={bin.status}
            loading={bin.loading}
            error={bin.error}
          />
        ))}
      </Row>
    </Container>
  );
};

export default Operation;