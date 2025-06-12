import type {Route} from '../types';
import { v4 as uuidv4 } from 'uuid';

export const mockRoutes: Route[] = [
  {
    uuid: uuidv4(),
    address: '0.0.0.0',
    mask: '0',
    gateway: '193.0.174.1',
    interface: 'Подключение Ethernet',
  },
  {
    uuid: uuidv4(),
    address: '10.1.30.0',
    mask: '24',
    gateway: '0.0.0.0',
    interface: 'Гостевая сеть',
  },
  {
    uuid: uuidv4(),
    address: '192.168.1.0',
    mask: '24',
    gateway: '0.0.0.0',
    interface: 'Домашняя сеть',
  },
  {
    uuid: uuidv4(),
    address: '193.0.174.0',
    mask: '24',
    gateway: '0.0.0.0',
    interface: 'Подключение Ethernet',
  },
  {
    uuid: uuidv4(),
    address: '193.0.175.0',
    mask: '25',
    gateway: '193.0.174.10',
    interface: 'Подключение Ethernet',
  },
  {
    uuid: uuidv4(),
    address: '193.0.175.22',
    mask: '32',
    gateway: '193.0.174.1',
    interface: 'Подключение Ethernet',
  },
  {
    uuid: uuidv4(),
    address: '10.10.0.0',
    mask: '16',
    gateway: '10.10.0.1',
    interface: 'VPN-L2TP',
  },
  {
    uuid: uuidv4(),
    address: '192.168.88.0',
    mask: '24',
    gateway: '0.0.0.0',
    interface: 'Домашняя сеть',
  },
  {
    uuid: uuidv4(),
    address: '172.16.0.0',
    mask: '12',
    gateway: '193.0.174.1',
    interface: 'Подключение Ethernet',
  },
];
