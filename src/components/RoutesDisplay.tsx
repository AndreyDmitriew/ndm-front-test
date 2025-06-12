import type {Route} from "../types";
import React from "react";

type SortKey = 'destination' | 'gateway' | 'interface';

interface RoutesDisplayProps {
  sortedRoutes: Route[];
  requestSort: (key: SortKey) => void;
  getSortArrow: (key: SortKey) => string | null;
}


export const RoutesDisplay: React.FC<RoutesDisplayProps> = ({requestSort, getSortArrow, sortedRoutes }) => {
  return(
    <div className="table-container">
      <h2>Действующие маршруты IPv4</h2>
      <table>
        <thead>
        <tr>
          <th onClick={() => requestSort('destination')}>
            Адрес назначения {getSortArrow('destination')}
          </th>
          <th onClick={() => requestSort('gateway')}>
            Шлюз {getSortArrow('gateway')}
          </th>
          <th onClick={() => requestSort('interface')}>
            Интерфейс {getSortArrow('interface')}
          </th>
        </tr>
        </thead>
        <tbody>
        {sortedRoutes.map((route: Route) => (
          <tr key={route.uuid}>
            <td>{`${route.address}/${route.mask}`}</td>
            <td>{route.gateway}</td>
            <td>{route.interface}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}
