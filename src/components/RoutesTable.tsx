import React, { useState, useMemo } from 'react';
import { mockRoutes } from '../data/mockRoutes';
import type {Route} from '../types';
import './RoutesTable.css';
import {RoutesDisplay} from "./RoutesDisplay.tsx";

type SortKey = 'destination' | 'gateway' | 'interface';
type SortDirection = 'ascending' | 'descending';

const ipToNumber = (ip: string) => {
  if (ip === '0.0.0.0') return 0;
  return ip
    .split('.')
    .reduce((acc, octet) => (acc << 8) + parseInt(octet, 10), 0);
};

export const RoutesTable: React.FC = () => {
  const [routes] = useState<Route[]>(mockRoutes);
  const [sortConfig, setSortConfig] = useState<{ key: SortKey; direction: SortDirection } | null>(null);

  const sortedRoutes = useMemo(() => {
    const sortableItems = [...routes];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        let aValue: string | number;
        let bValue: string | number;

        switch (sortConfig.key) {
          case 'gateway':
            aValue = ipToNumber(a.gateway);
            bValue = ipToNumber(b.gateway);
            break;
          case 'destination':
            aValue = ipToNumber(a.address);
            bValue = ipToNumber(b.address);
            break;
          case 'interface':
          default:
            aValue = a.interface;
            bValue = b.interface;
            break;
        }

        if (aValue < bValue) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [routes, sortConfig]);

  const requestSort = (key: SortKey) => {
    let direction: SortDirection = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getSortArrow = (key: SortKey) => {
    if (!sortConfig || sortConfig.key !== key) return null;
    return sortConfig.direction === 'ascending' ? '▲' : '▼';
  };

  return (
    <RoutesDisplay requestSort={requestSort} getSortArrow={getSortArrow} sortedRoutes={sortedRoutes}/>
  );
};
