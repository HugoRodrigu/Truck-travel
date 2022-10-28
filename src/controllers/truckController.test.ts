import * as sinon from 'sinon';
import { Response, Request, NextFunction } from 'express';
import { Container } from 'typedi';
import config from '../../config';

import { Result } from '../core/logic/Result';

import IRoleService from '../services/IServices/IRoleService';
/* import TruckController from './'; */
import ITruckDTO from '../dto/ITruckDTO';
