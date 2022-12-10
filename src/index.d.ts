export * as DataTypes from './data-types';
export type {
  DataType,
  DataTypeClassOrInstance,
  DataTypeClass,
  DataTypeInstance,
} from './dialects/abstract/data-types.js';
export type {
  GeoJson,
  GeoJsonPoint,
  GeoJsonMultiPoint,
  GeoJsonLineString,
  GeoJsonMultiLineString,
  GeoJsonPolygon,
  GeoJsonMultiPolygon,
  GeoJsonGeometryCollection,
  PositionPosition,
} from './geo-json.js';
export { GeoJsonType } from './geo-json.js';
export * as Utils from './utils';
export { QueryTypes } from './query-types';
export { IndexHints } from './index-hints';
export { TableHints } from './table-hints';
export { Op } from './operators';
export * from './transaction';

export type { Connection } from './dialects/abstract/connection-manager';
export * from './associations/index';
export * from './errors';
export { BaseError as Error } from './errors';
export * from './model';
export * from './dialects/abstract/query-interface';
export * from './sequelize';
export { Sequelize as default } from './sequelize';
export { useInflection } from './utils';
export { isModelStatic, isSameInitialModel } from './utils/model-utils';
export type { validator } from './utils/validator-extras';
export { Deferrable } from './deferrable';

/**
 * Type helper for making certain fields of an object optional. This is helpful
 * for creating the `CreationAttributes` from your `Attributes` for a Model.
 */
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type PartlyRequired<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;
